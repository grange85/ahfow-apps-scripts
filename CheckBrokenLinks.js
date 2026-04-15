// Column indices (0-based) — adjust to match your sheet layout
const COL = {
  slug: 0,
  url: 1,
  title: 2,
  notes: 3,
  archived: 4,
  date_added: 5,
  excerpt: 6,
  status: 7,
  review: 8,
  checked: 9
};

// Domains that block automated requests - skip and flag for manual review
const SKIP_DOMAINS = [
  'spotify.com',
  'instagram.com', 
  'facebook.com',
  'twitter.com',
  'x.com',
];

// Domains handled by dedicated checkers rather than generic fetch
const YOUTUBE_DOMAINS = ['youtube.com', 'youtu.be'];

function checkBrokenLinks() {
  const ss = SpreadsheetApp.openById(LINKS_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(LINKS_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const header = data[0];
  const rows = data.slice(1);

  let checked = 0, broken = 0, ok = 0, skipped = 0;

  rows.forEach((row, i) => {
    const url = row[COL.url];
    const archived = row[COL.archived];

    if (!url || !isValidUrl(url) || String(archived).toLowerCase() === 'true') return;

    const rowNum = i + 2;
    let status;
    let statusreview;

    if (isYouTubeUrl(url)) {
      status = checkYouTubeUrl(url);
    } else if (isSkippedDomain(url)) {
      status = "SKIPPED|manual check";
      skipped++;
    } else {
      status = fetchUrl(url);
    }
    statusreview = status.split("|");
    if (status.startsWith("OK")) ok++;
    else if (status.startsWith("BROKEN") || status.startsWith("ERROR")) broken++;

    if (DRY_RUN) {
      Logger.log(`DRY RUN: ${url} → ${status}`);
    } else {
	  sheet.getRange(rowNum, COL.status + 1).setValue(statusreview[0] ?? "");
      sheet.getRange(rowNum, COL.review + 1).setValue(statusreview[1] ?? "") 
	  sheet.getRange(rowNum, COL.checked + 1).setValue(new Date());
	}
	checked++;

    // Pause between requests to avoid rate limiting
    Utilities.sleep(500);
  });

  Logger.log(`Link check complete: ${checked} checked, ${ok} OK, ${broken} broken, ${skipped} skipped.`);
}


/**
 * Generic URL fetch checker.
 */
function fetchUrl(url) {
  try {
    const response = UrlFetchApp.fetch(url, {
      method: "GET",
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: false,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",      }
    });
    const code = response.getResponseCode();
    if (code === 429) return "OK|rate limited - manual check advised";
    if (code === 403) return "OK|403 - blocked by server, manual check advised";
    if (code === 404) return "BROKEN|404 - page not found";
    return code >= 200 && code < 400 ? `OK|${code}` : `BROKEN|${code}`;
  } catch (e) {
    return `ERROR|${e.message.substring(0, 50)}`;
  }
}


/**
 * Checks a YouTube URL via the Data API.
 * Requires YOUTUBE_API_KEY in Script Properties.
 * Get a key at: console.cloud.google.com → APIs → YouTube Data API v3
 */
function checkYouTubeUrl(url) {
  try {
    const response = UrlFetchApp.fetch(url, {
      method: "GET",
      muteHttpExceptions: true,
      followRedirects: true,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",      }
    });
    const code = response.getResponseCode();
    if (code === 429) return "OK|rate limited - manual check advised";
    if (code === 403) return "OK|403 - blocked by server, manual check advised";
    if (code === 404) return "BROKEN|404 - video not found";
    if (code >= 200 && code < 400) return `OK|${code}`;
    return `BROKEN|${code}`;
  } catch (e) {
    return `ERROR|${e.message.substring(0, 50)}`;
  }
}


/**
 * Extracts YouTube video ID from various URL formats.
 */
function extractYouTubeId(url) {
  const patterns = [
    /(?:v=)([^&\s]+)/,          // youtube.com/watch?v=ID
    /(?:youtu\.be\/)([^?\s]+)/, // youtu.be/ID
    /(?:embed\/)([^?\s]+)/,     // youtube.com/embed/ID
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}


/**
 * Returns true if the URL is a YouTube link.
 */
function isYouTubeUrl(url) {
  const str = String(url).trim();
  return str.includes("youtube.com/") || str.includes("youtu.be/");
}


/**
 * Returns true if the domain should be skipped.
 */
function isSkippedDomain(url) {
  const str = String(url).trim();
  return SKIP_DOMAINS.some(d => str.includes(d));
}


/**
 * Returns true if the URL is valid and checkable.
 */
function isValidUrl(url) {
  const str = String(url).trim();
  return str.startsWith("http://") || str.startsWith("https://");
}


function stripQueryParams(urlString) {
  const STRIP = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content',
                 'utm_id','fbclid','gclid','mc_eid','ref'];
  try {
    // Strip params using regex rather than URL API
    let url = String(urlString).trim();
    STRIP.forEach(param => {
      url = url.replace(new RegExp(`[?&]${param}=[^&]*`, 'g'), '');
    });
    // Clean up any dangling ? or &
    url = url.replace(/[?&]$/, '').replace(/\?&/, '?');
    return url;
  } catch (e) {
    return urlString;
  }
}
