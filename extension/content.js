const myButton = document.getElementById('myButton');
const statusIndicator = document.getElementById('statusPic');
const cpInput = document.getElementById('textInput');

myButton.addEventListener('click', async function () {
  // Toggle between green and red
  if (statusIndicator.src.includes('red.png')) {
    try {
      if (cpInput.value) {
        // userinput 
        const userMessage = cpInput.value + ' only answer';

        // Send to gpt
        const response = await getGpt3Response(userMessage);

        // alert answer
        alert('GPT-3 Response: ' + response);

        // green
        statusIndicator.src = 'img/green.png';
        console.log('Button clicked (green)');
      } else {
        // if its empty
        console.error('Input field is empty');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    //red
    statusIndicator.src = 'img/red.png';
    console.log('Button clicked (red)');
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
