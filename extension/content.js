const myButton = document.getElementById('myButton');
const statusIndicator = document.getElementById('statusPic');
const cb = 'Test';

myButton.addEventListener('click', function () {
  // Toggle between green and red on each click
  if (statusIndicator.src.includes('red.png')) {

    //navigator.clipboard.readText();

    //alert(cb)
//
    navigator.clipboard.writeText("END OUTPUT TEST");

//green
    statusIndicator.src = 'img/green.png';
    console.log('Button clicked (green)');
  } else {

//red
    statusIndicator.src = 'img/red.png';
    console.log('Button clicked (red)');
  }
});
