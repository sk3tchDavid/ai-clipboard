document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
  
    // Load the switch state from storage and set it initially
    chrome.storage.sync.get(['isMonitoring'], (result) => {
      toggleSwitch.checked = result.isMonitoring || false;
    });
  
    // Toggle switch state when clicked
    toggleSwitch.addEventListener('change', function () {
      const isMonitoring = toggleSwitch.checked;
  
      // Save the switch state to storage
      chrome.storage.sync.set({ 'isMonitoring': isMonitoring }, function () {
        // Notify the background script about the switch state change
        chrome.runtime.sendMessage({ 'isMonitoring': isMonitoring });
      });
    });
  });
  