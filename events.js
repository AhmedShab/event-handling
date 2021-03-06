// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start);

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one();

  // Your turn! Create a new function called `two`, then call it from here.
  two();

  three();

  four();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue);

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION two HERE
function two() {
  // getting the element
  var two = document.getElementById('two');
  // adding event to the element
  two.addEventListener('mouseenter', makeGreen);
  // adding second event to the element
  two.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION three HERE
function three() {
  // getting the element
  var three = document.getElementById('three');
  // adding event to the element
  three.addEventListener('mouseenter', makeOrange);
  // adding second event to the element
  three.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION four HERE
function four() {
  // getting the element
  var four = document.getElementById('four');
  // adding event to the element
  four.addEventListener('click', makeSkyBlue);
  // adding second event to the element
  four.addEventListener('mouseleave', makeWhite);
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue';
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green';
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange';
}

function makeSkyBlue  (evt) {
  evt.target.style.backgroundColor = '#87CEEB';
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white';
}
