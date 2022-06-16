// sets a variable = to the number of .drum classes
var numberOfDrums = document.querySelectorAll('.drum')

// for loop is used to iterate through all .drum classes
for (var i = 0; i < numberOfDrums.length; i++) {

  // adds an EventListener to a drum every time [i] is incremented
  numberOfDrums[i].addEventListener('click', function() {

    // identifies button being clicked, its innerHTML, and sets it to var buttonInnerHTML
    var buttonInnerHTML = this.innerHTML;

    keyClicks(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
// detects keyboard pressed
document.addEventListener('keydown', function(event) {

  keyClicks(event.key);
  buttonAnimation(event.key);

});


function keyClicks(key) {

  // switch statements relating to key's pressed and sounds associated with them
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }

  // h1 elements identifies drum
  switch (key) {
    case 'w':
      document.querySelector('#title').textContent = 'Tom 1';
      break;
    case 'a':
      document.querySelector('#title').textContent = 'Tom 2';
      break;
    case 's':
      document.querySelector('#title').textContent = 'Tom 3';
      break;
    case 'd':
      document.querySelector('#title').textContent = 'Tom 4';
      break;
    case 'j':
      document.querySelector('#title').textContent = 'Snare';
      break;
    case 'k':
      document.querySelector('#title').textContent = 'Crash';
      break;
    case 'l':
      document.querySelector('#title').textContent = 'Kick Bass';
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

//add / removes class to button being pressed
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector('.' + currentKey);

  // a '.' is not needed inside () because classList is already specified
  activeButton.classList.add('pressed');

  // removes 'pressed class after 1 sec'
   setTimeout(function () {
     activeButton.classList.remove('pressed');
   }, 100);

}
