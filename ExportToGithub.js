// Maps each sheet (by spreadsheet ID + sheet name) to its repo path.
// Sheets not listed here will NOT be exported (replaces the "ignore" convention).
const EXPORT_CONFIG = [
  {
    ssId: "1lyvKJmXEMoKhy3_hJzL7J66H1F204qX7xTNWFDvvAQg", // damon and naomi discography
    sheets: [	  
      { name: "damon-and-naomi_001_more-sad-hits", path: "_data/discography/damon-and-naomi_001_more-sad-hits.csv" },
      { name: "damon-and-naomi_002_wondrous-world", path: "_data/discography/damon-and-naomi_002_wondrous-world.csv" },
      { name: "damon-and-naomi_003_playback-singers", path: "_data/discography/damon-and-naomi_003_playback-singers.csv" },
      { name: "damon-and-naomi_004_with-ghost", path: "_data/discography/damon-and-naomi_004_with-ghost.csv" },
      { name: "damon-and-naomi_005_the-earth-is-blue", path: "_data/discography/damon-and-naomi_005_the-earth-is-blue.csv" },
      { name: "damon-and-naomi_006_within-these-walls", path: "_data/discography/damon-and-naomi_006_within-these-walls.csv" },
      { name: "damon-and-naomi_007_false-beats-true-hearts", path: "_data/discography/damon-and-naomi_007_false-beats-true-hearts.csv" },
      { name: "damon-and-naomi_008_fortune", path: "_data/discography/damon-and-naomi_008_fortune.csv" },
      { name: "damon-and-naomi_009_a-sky-record", path: "_data/discography/damon-and-naomi_009_a-sky-record.csv" },
      { name: "damon-and-naomi_010_never-be-a-punching-bag", path: "_data/discography/damon-and-naomi_010_never-be-a-punching-bag.csv" },
      { name: "damon-and-naomi_101_singles", path: "_data/discography/damon-and-naomi_101_singles.csv" },
      { name: "damon-and-naomi_201_song-to-the-siren", path: "_data/discography/damon-and-naomi_201_song-to-the-siren.csv" },
      { name: "damon-and-naomi_202_monday-january-19th-2004", path: "_data/discography/damon-and-naomi_202_monday-january-19th-2004.csv" },
      { name: "damon-and-naomi_203_everything-quieter", path: "_data/discography/damon-and-naomi_203_everything-quieter.csv" },
      { name: "damon-and-naomi_204_whats-past-is-prologue", path: "_data/discography/damon-and-naomi_204_whats-past-is-prologue.csv" },
      { name: "damon-and-naomi_301_the-sub-pop-years", path: "_data/discography/damon-and-naomi_301_the-sub-pop-years.csv" },
      { name: "damon-and-naomi_302_spirit-of-love", path: "_data/discography/damon-and-naomi_302_spirit-of-love.csv" },
      { name: "damon-and-naomi_303_in-the-21st-century", path: "_data/discography/damon-and-naomi_303_in-the-21st-century.csv" },
      { name: "damon-and-naomi_401_misc", path: "_data/discography/damon-and-naomi_401_misc.csv" },
    ]
  },
  {
    ssId: "1uuqUCwBMfAUhDC3FeOEE0IdsavoRo-KZX9YWzGgeNQ4", // dean and britta discography
    sheets: [
      { name: "dean-and-britta_001_lavventura", path: "_data/discography/dean-and-britta_001_lavventura.csv" },
      { name: "dean-and-britta_002_back-numbers", path: "_data/discography/dean-and-britta_002_back-numbers.csv" },
      { name: "dean-and-britta_003_13-most-beautiful", path: "_data/discography/dean-and-britta_003_13-most-beautiful.csv" },
      { name: "dean-and-britta_004_mistress-america", path: "_data/discography/dean-and-britta_004_mistress-america.csv" },
      { name: "dean-and-britta_005_a-peace-of-us", path: "_data/discography/dean-and-britta_005_a-peace-of-us.csv" },
      { name: "dean-and-britta_101_singles", path: "_data/discography/dean-and-britta_101_singles.csv" },
      { name: "dean-and-britta_201_quarantine-tapes", path: "_data/discography/dean-and-britta_201_quarantine-tapes.csv" },
      { name: "dean-and-britta_401_misc", path: "_data/discography/dean-and-britta_401_misc.csv" },
    ]
  },
  {
    ssId: "1El-2FQZ-N3O13L5vTAkyIa_ljrw4lNv5L0Xj5-kMsu0", // dean wareham discography
    sheets: [
      { name: "dean-wareham_001_emancipated-hearts", path: "_data/discography/dean-wareham_001_emancipated-hearts.csv" },
      { name: "dean-wareham_002_dean-wareham", path: "_data/discography/dean-wareham_002_dean-wareham.csv" },
      { name: "dean-wareham_003_vs-cheval-sombre", path: "_data/discography/dean-wareham_003_vs-cheval-sombre.csv" },
      { name: "dean-wareham_004_i-have-nothing-to-say", path: "_data/discography/dean-wareham_004_i-have-nothing-to-say.csv" },
      { name: "dean-wareham_005_thats-the-price", path: "_data/discography/dean-wareham_005_thats-the-price.csv" },
      { name: "dean-wareham_101_singles", path: "_data/discography/dean-wareham_101_singles.csv" },
      { name: "dean-wareham_201_live-at-st-pancras-old-church", path: "_data/discography/dean-wareham_201_live-at-st-pancras-old-church.csv" },
      { name: "dean-wareham_301_luna-demos", path: "_data/discography/dean-wareham_301_luna-demos.csv" },
      { name: "dean-wareham_401_misc", path: "_data/discography/dean-wareham_401_misc.csv" },
    ]
  },
  {
    ssId: "1iymXa4Z1YeaOIDsrIUuK0zlA1pQzt3021JrTF7sQ_o4", // galaxie 500 discography
    sheets: [
      { name: "galaxie-500_001_today", path: "_data/discography/galaxie-500_001_today.csv" },
      { name: "galaxie-500_002_on-fire", path: "_data/discography/galaxie-500_002_on-fire.csv" },
      { name: "galaxie-500_003_this-is-our-music", path: "_data/discography/galaxie-500_003_this-is-our-music.csv" },
      { name: "galaxie-500_101_singles", path: "_data/discography/galaxie-500_101_singles.csv" },
      { name: "galaxie-500_201_copenhagen", path: "_data/discography/galaxie-500_201_copenhagen.csv" },
      { name: "galaxie-500_202_peel-sessions", path: "_data/discography/galaxie-500_202_peel-sessions.csv" },
      { name: "galaxie-500_203_cbgb-12-13-88", path: "_data/discography/galaxie-500_203_cbgb-12-13-88.csv" },
      { name: "galaxie-500_301_galaxie-500", path: "_data/discography/galaxie-500_301_galaxie-500.csv" },
      { name: "galaxie-500_302_uncollected", path: "_data/discography/galaxie-500_302_uncollected.csv" },
      { name: "galaxie-500_303_the-portable-galaxie-500", path: "_data/discography/galaxie-500_303_the-portable-galaxie-500.csv" },
      { name: "galaxie-500_304_selected", path: "_data/discography/galaxie-500_304_selected.csv" },
      { name: "galaxie-500_401_misc", path: "_data/discography/galaxie-500_401_misc.csv" },
    ]
  },
  {
    ssId: "1xYD_CboIiiNnMlo168u1E4pSJcTZ2MxH1cvuqVEZKVQ", // luna discography
    sheets: [
      { name: "luna_001_lunapark", path: "_data/discography/luna_001_lunapark.csv" },
      { name: "luna_002_bewitched", path: "_data/discography/luna_002_bewitched.csv" },
      { name: "luna_003_penthouse", path: "_data/discography/luna_003_penthouse.csv" },
      { name: "luna_004_pup-tent", path: "_data/discography/luna_004_pup-tent.csv" },
      { name: "luna_005_the-days-of-our-nights", path: "_data/discography/luna_005_the-days-of-our-nights.csv" },
      { name: "luna_006_romantica", path: "_data/discography/luna_006_romantica.csv" },
      { name: "luna_007_rendezvous", path: "_data/discography/luna_007_rendezvous.csv" },
      { name: "luna_008_a-sentimental-education", path: "_data/discography/luna_008_a-sentimental-education.csv" },
      { name: "luna_101_singles", path: "_data/discography/luna_101_singles.csv" },
      { name: "luna_201_luna-live", path: "_data/discography/luna_201_luna-live.csv" },
      { name: "luna_202_tell-me-do-you-miss-me", path: "_data/discography/luna_202_tell-me-do-you-miss-me.csv" },
      { name: "luna_203_live-penthouse", path: "_data/discography/luna_203_live-penthouse.csv" },
      { name: "luna_204_live-bewitched", path: "_data/discography/luna_204_live-bewitched.csv" },
      { name: "luna_205_live-rendezvous", path: "_data/discography/luna_205_live-rendezvous.csv" },
      { name: "luna_301_best-of-luna", path: "_data/discography/luna_301_best-of-luna.csv" },
      { name: "luna_302_lunafied", path: "_data/discography/luna_302_lunafied.csv" },
      { name: "luna_303_long-players-92-99", path: "_data/discography/luna_303_long-players-92-99.csv" },
      { name: "luna_401_misc", path: "_data/discography/luna_401_misc.csv" },
    ]
  },
  {
    ssId: "1rJnqmBGwVvtGMj3EFLosN-zDOLxwlYH03Wfr-vKdp44", // tracks
    sheets: [	  
      { name: "tracks", path: "_data/discography/tracks.csv" },
    ]
  },
  {
    ssId: "17oscnd8tcr5pDLNQgjSvGiULoN2RagY84YJ1RjVw8bI", // live shows
    sheets: [	  
  	  { name: "damon-and-naomi-shows", path: "_data/gigography/damon-and-naomi-shows.csv" },
  	  { name: "dean-and-britta-shows", path: "_data/gigography/dean-and-britta-shows.csv" },
  	  { name: "galaxie-500-shows", path: "_data/gigography/galaxie-500-shows.csv" },
  	  { name: "luna-shows", path: "_data/gigography/luna-shows.csv" },
  	  { name: "upcoming-shows", path: "_data/gigography/upcoming-shows.csv" },
      { name: "bookmarks", path: "_data/gigography/live-show-bookmarks.csv" },
    ]
  },
];

// Set true to also export to Drive as a backup
const ALSO_EXPORT_TO_DRIVE = false;

// ============================================================


function publishAll() {
  const filesToCommit = [];
  const errors = [];

  for (const { ssId, sheets } of EXPORT_CONFIG) {
    if (!sheets.length) continue;

    let ss;
    try {
      ss = SpreadsheetApp.openById(ssId);
    } catch (e) {
      errors.push(`Could not open spreadsheet ${ssId}: ${e.message}`);
      continue;
    }

    for (const { name, path } of sheets) {
      const sheet = ss.getSheetByName(name);
      if (!sheet) {
        errors.push(`Sheet "${name}" not found in spreadsheet ${ssId}`);
        continue;
      }
      try {
        const content = sheetToCSV(sheet);
        filesToCommit.push({ path, content });
        Logger.log(`Prepared: ${name} → ${path}`);
      } catch (e) {
        errors.push(`Failed to prepare "${name}": ${e.message}`);
      }
    }
  }

  if (filesToCommit.length > 0) {
    commitAllToGitHub(filesToCommit);
  }

  if (errors.length) {
    Logger.log(`\nErrors (${errors.length}):\n` + errors.join("\n"));
  }
}


/**
 * Commits all changed files to GitHub in a single commit using the Git Trees API.
 * Only files whose content has actually changed are included.
 */
function commitAllToGitHub(files) {
  // files: array of { path, content } objects

  const token = PropertiesService.getScriptProperties().getProperty(GITHUB_TOKEN_PROPERTY);
  if (!token) throw new Error("GITHUB_TOKEN not set in Script Properties");

  const apiBase = `https://api.github.com/repos/${REPO}`;
  const headers = {
    Authorization: `token ${token}`,
    "Content-Type": "application/json",
    "User-Agent": "Apps-Script-Exporter"
  };

  function ghFetch(endpoint, method, payload) {
    const options = { method, headers, muteHttpExceptions: true };
    if (payload) options.payload = JSON.stringify(payload);
    const response = UrlFetchApp.fetch(apiBase + endpoint, options);
    const code = response.getResponseCode();
    const body = JSON.parse(response.getContentText());
    if (code < 200 || code > 299) {
      throw new Error(`GitHub ${method} ${endpoint} failed (${code}): ${body.message}`);
    }
    return body;
  }

  // 1. Get the current HEAD commit SHA and tree SHA
  const refData = ghFetch(`/git/ref/heads/${BRANCH}`, "GET");
  const headCommitSha = refData.object.sha;

  const commitData = ghFetch(`/git/commits/${headCommitSha}`, "GET");
  const baseTreeSha = commitData.tree.sha;

  // 2. Fetch current content of all files in one go (to detect changes)
  //    Uses the recursive tree to get all blob SHAs without individual GETs
  const treeData = ghFetch(`/git/trees/${baseTreeSha}?recursive=1`, "GET");
  const existingFiles = {};
  for (const item of treeData.tree) {
    if (item.type === "blob") existingFiles[item.path] = item.sha;
  }

  // 3. For each file, compute its expected blob SHA and compare
  //    GitHub blob SHA = sha1("blob " + byteLength + "\0" + content)
  function computeBlobSha(content) {
    const bytes = Utilities.newBlob(content).getBytes();
    const header = `blob ${bytes.length}\0`;
    const headerBytes = Utilities.newBlob(header).getBytes();
    const combined = headerBytes.concat(bytes);
    return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_1, combined)
      .map(b => ('0' + (b & 0xFF).toString(16)).slice(-2))
      .join('');
  }

  // 4. Filter to only changed/new files
  const changedFiles = files.filter(({ path, content }) => {
    const newSha = computeBlobSha(content);
    const oldSha = existingFiles[path];
    if (newSha === oldSha) {
      Logger.log(`  Unchanged: ${path}`);
      return false;
    }
    Logger.log(`  Changed:   ${path}`);
    return true;
  });

  if (changedFiles.length === 0) {
    Logger.log("Nothing changed — no commit made.");
    return;
  }

  // 5. Create new tree with only the changed files
  const treeNodes = changedFiles.map(({ path, content }) => ({
    path,
    mode: "100644",
    type: "blob",
    content  // GitHub creates the blob from raw content
  }));

  const newTree = ghFetch(`/git/trees`, "POST", {
    base_tree: baseTreeSha,
    tree: treeNodes
  });

  // 6. Create the commit
  const changedNames = changedFiles.map(f => f.path.split("/").pop()).join(", ");
  if (DRY_RUN) {

  } else {
    const newCommit = ghFetch(`/git/commits`, "POST", {
      message: `Update ${changedFiles.length} file(s): ${changedNames}`,
      tree: newTree.sha,
      parents: [headCommitSha]
    });
  }

  // 7. Update the branch ref
  if (DRY_RUN) {
    Logger.log(`DRY RUN: Update ${changedFiles.length} file(s): ${changedNames}`);
    Logger.log(`DRY RUN: Committed ${changedFiles.length} changed file(s) in one commit: ${newCommit.sha}`);
  } else {
    ghFetch(`/git/refs/heads/${BRANCH}`, "PATCH", {
      sha: newCommit.sha
    });
    Logger.log(`\nCommitted ${changedFiles.length} changed file(s) in one commit: ${newCommit.sha}`);
  }

}


/**
 * Converts a sheet's data to a CSV string.
 * Handles values with commas, quotes, and newlines correctly.
 */

function sheetToCSV(sheet) {
  const data = sheet.getDataRange().getDisplayValues().filter(row => row.some(cell => cell !== ""));
  if (data.length === 0) return "";

  // Log headers to help debug
  const headers = data[0];
  
  // Trim whitespace before checking prefix
  const includedCols = headers
    .map((h, i) => ({ h: h.trim(), i }))
    .filter(({ h }) => !h.startsWith("_"))
    .map(({ i }) => i);

  const filtered = data.map(row => includedCols.map(i => row[i]));

  return filtered
    .map(row =>
      row.map(cell => {
        if (cell.includes('"') || cell.includes(',') || cell.includes('\n')) {
          cell = '"' + cell.replace(/"/g, '""') + '"';
        }
        return cell;
      }).join(",")
    ).join("\n");
}

/**
 * Optional Drive backup export.
 */
function exportToDrive(fileName, csvContent) {
  const folder = getOrCreateFolder("CSV Exports");
  folder.createFile(fileName + ".csv", csvContent, MimeType.CSV);
}


/**
 * Gets an existing Drive folder by name, or creates it if it doesn't exist.
 */
function getOrCreateFolder(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(folderName);
}


function computeBlobSha(content) {
  const bytes = Utilities.newBlob(content).getBytes();
  const header = `blob ${bytes.length}\0`;
  const headerBytes = Utilities.newBlob(header).getBytes();
  const combined = headerBytes.concat(bytes);
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_1, combined)
    .map(b => ('0' + (b & 0xFF).toString(16)).slice(-2))
    .join('');
}

