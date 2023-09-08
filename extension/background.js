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
  
  //
//  Digitalisierung bezieht sich auf die Umwandlung analoger Informationen in digitale Formate.

//  Datensicherheit schützt Daten vor unbefugtem Zugriff, während Datenschutz die Privatsphäre personenbezogener Daten gewährleistet.

//  Personenbezogene Daten sind Informationen, die auf identifizierbare Personen verweisen, wie Name oder Adresse.

//  Schutz personenbezogener Daten erfordert starke Passwörter, 2FA, Verschlüsselung und Wissen über Datenschutzgesetze.
  //