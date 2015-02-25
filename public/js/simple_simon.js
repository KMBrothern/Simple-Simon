// Just Checking to see if I linked my js file correctly
console.log('simple simon js file is linked');
// Variables for my HTML elements
var pink = document.getElementById('square1')
var aqua = document.getElementById('square2')
var purple = document.getElementById('square3')
var lime = document.getElementById('square4')
var start = document.getElementById('start')
// array for html elements
var allSimonSquares = [pink, aqua, purple, lime];
var gameSelection = [];
var playerSelection = [];
var currentRound = 0;
// Event Listener to start the game
start.addEventListener('click', playGame, false)
// // Event Listeners for user selections
pink.addEventListener('click', userSelection, false)
aqua.addEventListener('click', userSelection, false)
purple.addEventListener('click', userSelection, false)
lime.addEventListener('click', userSelection, false)

var randomSquare = getNewSquare();



// Start Simon Game
function playGame(event){
	console.log(event.target.id);

	// set this function to fire the game to start
}
	// Randomly generate a new square for game
	// function executes
function getNewSquare() {
    var random = Math.floor( Math.random() * 4);
    console.log(random + " This is simon's selection")
    gameSelection.push(random);
    // console.log(gameSelection + " This is the array for simon");
   
     return allSimonSquares[random];
    // fade color in & out once square is generated
    // perhaps some set interval or timeout?
	}


// function executes
function animateSquare() {

	var randomSquare = getNewSquare();
	randomSquare.style.opacity = "1";

	var fadeOutTimerId = setTimeout(function(){
	randomSquare.style.opacity = "0.5";
	}, 900);




}



// error function does not execute
// function listenForUserChoice() {
// 	var userTimeoutId = setTimeout(function () {
// 		// listen for user choice
// 	var selection = userSelection(event);
// 	console.log(selection);
// 	playerSelection.push(selection);
// 		// push user's choice onto playerSelection []
// 		// clearTimeout if user chose under 2 secs

// 	}, 2000);
// }


//Currently logs what square the user selected
// function does not execute
function userSelection(event) {
	var usersChoice = event.target.id;
	console.log(usersChoice);
	playerSelection.push(usersChoice);
	 // return (usersChoice);
}



// function checkScore() {
	// iterate(cycle) through array
// for (var i = 0; i < allSimonSquares.length; i++) {
//  	allSimonSquares[i]


//  	if(gameSelection == playerSelection){
// 		fire- animateSquare();
// 		 and add that new square onto array gameSelection[] w/ .push
// 		 gameSelection.push(whatever the new square is);

// 	}
// } else {
// 	// end game and show score
// }
// 	console.log(i);

 
 // };










// Continue randomly selecting colored squares adding the new 
// random selection--.push onto an array??
// Each time a new color is added to the sequence let user "click"
// the sequence in the order it was played
// If user gets sequence correct, {then add another color to selection}
// else{end game and display # of rounds correct = score}
// Keep track of how many rounds the user has gotten correct until game ends