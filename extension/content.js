const statusIndicator = document.getElementById('statusPic');
const cpInput = document.getElementById('textInput');

document.getElementById('textInput').focus();

// Set the status to green
statusIndicator.src = 'img/green.png';

// Listen for the "keydown" event on the input field
cpInput.addEventListener('keydown', async function (event) {
  // Check Enter
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default behavior

    // Change the status indicator to red
    statusIndicator.src = 'img/red.png';
    console.log('Action triggered (red)');

    // Toggle between green and red
    setTimeout(async () => {
      // Toggle between green and red
      if (statusIndicator.src.includes('red.png')) {
        try {
          if (cpInput.value) {
            // Check if the input is just "o"
            if (cpInput.value === 'o') {
              // If the input is "o", copy a specific text to the clipboard
              const textToCopy = 'izquierda-links encima-oben derecha-rechts debajo-unter lado-neben delante-vor detras-hinter en-innen entre-zwischen';

              try {
                await navigator.clipboard.writeText(textToCopy);
                console.log('Copied to clipboard:', textToCopy);
              } catch (error) {
                console.error('Error copying to clipboard:', error);
              }
            }
            // Check if the input is just "p"
            else if (cpInput.value === 'p') {
              // If the input is "p", copy another specific text to the clipboard
              const textToCopy = 'mich-me dich-te ihn-lo --- uns-nos euch-os sie-los/las';

              try {
                await navigator.clipboard.writeText(textToCopy);
                console.log('Copied to clipboard:', textToCopy);
              } catch (error) {
                console.error('Error copying to clipboard:', error);
              }
            } else {
              // Create the user input
              const userMessage = cpInput.value;

              // Send the user input to the Chat GPT API
              const response = await getChatGptResponse(userMessage, 1000);

              // Get the response text from the API
              const responseText = response.choices[0].text;

              // Copy the response text to the clipboard
              try {
                await navigator.clipboard.writeText(responseText);
                console.log('Copied to clipboard:', responseText);
              } catch (error) {
                console.error('Error copying to clipboard:', error);
              }
            }

            // Change the status indicator back to green
            statusIndicator.src = 'img/green.png';
            console.log('Action triggered (green)');
          } else {
            // If the input field is empty
            console.error('Input field is empty');

            // Change the status indicator back to green
            statusIndicator.src = 'img/green.png';
            console.log('Action triggered (green)');
          }
        } catch (error) {
          console.error('Error:', error);

          // Change the status indicator back to green
          statusIndicator.src = 'img/green.png';
          console.log('Action triggered (green)');
        }
      } else {
        // Change the status indicator back to green
        statusIndicator.src = 'img/green.png';
        console.log('Action triggered (green)');
      }

      // Clear the input field
      cpInput.value = '';
    }, 1000); // delay
  }
});

async function getChatGptResponse(message, maxTokens) {
  const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'; // GPT-3.5 Turbo endpoint
  const apiKey = 'API';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    prompt: message,
    max_tokens: maxTokens, // Set the max tokens to 1000
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    return 'An error occurred while fetching data from the API';
  }
}
