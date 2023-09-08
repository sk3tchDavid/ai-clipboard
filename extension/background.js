chrome.runtime.onInstalled.addListener(() => {
    // Set up a listener to monitor clipboard changes
    chrome.clipboard.onClipboardDataChanged.addListener(() => {
      // logic here to process the clipboard data
      // access: chrome.clipboard.getData()
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
    });
  });