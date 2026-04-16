function syncFromRaindrop() {
  const token = PropertiesService.getScriptProperties().getProperty(RAINDROP_TOKEN_PROPERTY);
  const ss = SpreadsheetApp.openById(LINKS_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(LINKS_SHEET_NAME);

  // Get existing URLs to avoid duplicates (column C, skip header)
  const existingData = sheet.getDataRange().getValues();
  const existingUrls = new Set(existingData.slice(1).map(row => row[1])); // col C = url

  // Fetch all bookmarks from Raindrop collection (paginated)
  let page = 0;
  let newCount = 0;
  const newRows = [];

  while (true) {
    const response = UrlFetchApp.fetch(
      `https://api.raindrop.io/rest/v1/raindrops/0?search=%23ahfow-live&perpage=50&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        muteHttpExceptions: true
      }
    );

    const data = JSON.parse(response.getContentText());
    Logger.log(`No. of bookmarks: ${data.items.length}`);
    if (!data.items || data.items.length === 0) break;

    for (const item of data.items) {
      const url = item.link;
      if (existingUrls.has(url)) continue; // already in sheet
      // Strip utm_* and other unwanted params
      const cleanUrl = stripQueryParams(url);
      const prefixes = ['luna-', 'galaxie-500-', 'dean-wareham-', 'damon-and-naomi-', 'dean-and-britta-'];
      const regex = new RegExp(`^(${prefixes.join('|')})\\d{4}-\\d{2}-\\d{2}.*`);
      // Slug comes from first tag (convention: tag the bookmark with the show slug)
      const slug = item.tags.find(tag => regex.test(tag));
      const title = item.title || "";
      const notes = item.note || "";
      const excerpt = item.excerpt || "";
      const dateAdded = Utilities.formatDate(new Date(item.created), Session.getScriptTimeZone(), "yyyy-MM-dd");

      // Append: timestamp left empty (no form submission), slug, url, title, notes, archived, date_added
      if (DRY_RUN) {
        Logger.log(`DRY RUN: ${title} added`);
      } else {
        newRows.push([slug, cleanUrl, title, notes, "false", dateAdded, excerpt, "OK"]);
      }
      existingUrls.add(url); // prevent dupes within this batch
      newCount++;
    }

    if (!data.items || data.items.length < 50) break;
    page++;
  }

  if (newRows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, newRows.length, newRows[0].length)
      .setValues(newRows);
    Logger.log(`Synced ${newCount} new bookmark(s) from Raindrop.`);
  } else {
    Logger.log("No new bookmarks to sync.");
  }
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