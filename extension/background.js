let isMonitoring = false; // Initialize monitoring state

function startMonitoring() {
  // Set up a listener to monitor clipboard changes
  chrome.clipboard.onClipboardDataChanged.addListener(() => {
    if (isMonitoring) {
      // You can add your logic here to process the clipboard data
      // For example, you can access the clipboard data using chrome.clipboard.getData()
      // and perform actions based on the content.
      chrome.clipboard.getData({}, (clipboardData) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          return;
        }

        // Process the clipboard data here
        console.log('Clipboard data:', clipboardData);

        // Perform actions based on clipboard content
        // For example, you can send data to a server or modify it in some way.
      });
    }
  });
}

chrome.runtime.onInstalled.addListener(() => {
  // Set up a listener for changes to the switch state
  chrome.storage.sync.get(['isMonitoring'], (result) => {
    isMonitoring = result.isMonitoring || false;
    if (isMonitoring) {
      startMonitoring();
    }
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.isMonitoring) {
    isMonitoring = changes.isMonitoring.newValue || false;
    if (isMonitoring) {
      startMonitoring();
    }
  }
});
