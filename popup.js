let notepadText = "";

document.addEventListener("DOMContentLoaded", function() {
  const notepad = document.getElementById("notepad");
  chrome.storage.local.get("notepadText", function(result) {
    notepadText = result.notepadText || "";
    notepad.value = notepadText;
  });
  notepad.addEventListener("input", function() {
    notepadText = notepad.value;
    chrome.storage.local.set({ notepadText });
  });
});
