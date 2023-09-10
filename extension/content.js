const statusIndicator = document.getElementById('statusPic');
const cpInput = document.getElementById('textInput');

// Set the status to green
statusIndicator.src = 'img/green.png';

// Listen for the "keydown" event on the input field
cpInput.addEventListener('keydown', function (event) {
  // Check Enter
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default behavior

    // Change the status indicator to red
    statusIndicator.src = 'img/red.png';
    console.log('Action triggered (red)');

    // Toggle between green and red
    setTimeout(() => {
      // Toggle between green and red
      if (statusIndicator.src.includes('red.png')) {
        try {
          if (cpInput.value) {
            // Create the user input
            const userMessage = cpInput.value + ' only answer';

            // Send the user input to the GPT-3 API
            getGpt3Response(userMessage)
              .then((response) => {
                alert('GPT-3 Response: ' + response);

                // Change the status indicator back to green
                statusIndicator.src = 'img/green.png';
                console.log('Action triggered (green)');
              })
              .catch((error) => {
                console.error('Error:', error);

                // Change the status indicator back to green
                statusIndicator.src = 'img/green.png';
                console.log('Action triggered (green)');
              });
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


async function getGpt3Response(message) {
  const url = 'https://open-ai21.p.rapidapi.com/conversationgpt';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'API_KEY',//API KEY (ADD)
      'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error('Error:', error);
    return 'An error occurred while fetching data from the API';
  }
}
