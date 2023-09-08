const myButton = document.getElementById('myButton');
const statusIndicator = document.getElementById('statusPic');

myButton.addEventListener('click', function () {
  // Toggle between green and red on each click
  if (statusIndicator.src.includes('red.png')) {
    statusIndicator.src = 'img/green.png';
    console.log('Button clicked (green)');
  } else {
    statusIndicator.src = 'img/red.png';
    console.log('Button clicked (red)');
  }
});
