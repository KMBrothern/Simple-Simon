// Just Checking to see if I linked my js file correctly
console.log('simple simon js file is linked');
// Variables for my HTML elements
var pink = document.getElementById('square1')
var aqua = document.getElementById('square2')
var purple = document.getElementById('square3')
var lime = document.getElementById('square4')
// array for html elements
var allSimonSquares = [pink, aqua, purple, lime];

// Event Listeners for user selections
pink.addEventListener('click', userSelection, false)
aqua.addEventListener('click', userSelection, false)
purple.addEventListener('click', userSelection, false)
lime.addEventListener('click', userSelection, false)
//Currently logging what square the user selected
function userSelection(event) {
	console.log(event.target.id)
}

// Randomly generate a new square for game
function getNewSquare() {
    var simonSelection = Math.floor( Math.random() * (1 +3) ) +0;
    allSimonSquares[simonSelection].style.opacity = "0.5";
    console.log(simonSelection);
    // fade color in & out once square is generated
          // perhaps some set interval or timeout?
        }
// alert("go simon");
getNewSquare();


// // gets all my game squares and returns as array
// var allSimonSquares = document.getElementsByClassName('allSquares');
// // iterate(cycle) through array
// for (var i = 0; i < allSimonSquares.length; i++) {
// 	allSimonSquares[i]
// // 	if(userSelection == simonSelection){
// 		// getNewSquare();
// 		// simonSelection.push(allSimonSquares);
// 		// add a new square onto array w/ .push

// 	}
// } else {
// 	// end game and show score
// }
// 	console.log(i);
// };










// After square selected need to fade color in/ out
// Continue randomly selecting colored squares adding the new 
// random selection--.push onto an array??
// Each time a new color is added to the sequence let user "click"
// the sequence in the order it was played
// If user gets sequence correct, {then add another color to selection}
// else{end game and display # of rounds correct = score}
// Keep track of how many rounds the user has gotten correct until game ends