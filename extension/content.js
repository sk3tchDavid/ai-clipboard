const myButton = document.getElementById('myButton');
const statusIndicator = document.getElementById('statusPic');
const cpInput = document.getElementById('textInput');

myButton.addEventListener('click', function () {
  // Toggle between green and red
  if (statusIndicator.src.includes('red.png')) {
    if (cpInput.value) {
      // Copy the text from the input field to the clipboard
      navigator.clipboard.writeText(cpInput.value)
        .then(() => {
          // Display the copied text - alert
          const cp = cpInput.value;
          alert(cp);

          //green
          statusIndicator.src = 'img/green.png';
          console.log('Button clicked (green)');
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
        });
    } else {
      // If the input field is empty
      console.error('Input field is empty');
    }
  } else {
    //red
    statusIndicator.src = 'img/red.png';
    console.log('Button clicked (red)');
  }
});
