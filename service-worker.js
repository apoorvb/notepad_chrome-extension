chrome.storage.local.get("notepadText", function(result) {
  notepadText = result.notepadText || "";
});

chrome.action.onClicked.addListener(function(tab) {
  chrome.storage.local.get("notepadText", function(result) {
    notepadText = result.notepadText || "";
    chrome.action.setPopup({ popup: "popup.html" });
  });
});
