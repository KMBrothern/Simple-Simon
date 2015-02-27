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




// Start Simon Game
function playGame(event){
	getNewSquare();
	// console.log(event.target.id);

	// set this function to fire the game to start
}
	// Randomly generate a new square for game
	// function executes is being called by playGame()
function getNewSquare() {
   var random = Math.floor( Math.random() * 4);
   console.log(random + " This is simon's selection");
   gameSelection.push(random);
   animateSquare(gameSelection);

    // return allSimonSquares[random];
    // fade color in & out once square is generated
    // perhaps some set interval or timeout?
}


// function executes is being called by the getNewSquare()

function animateSquare(gameSelection) {
	var i = 0;
	var interval = setInterval(function() {
		var currentSquare = allSimonSquares[gameSelection[i]];
		currentSquare.style.opacity = "1";
		i++;

		setTimeout(function(){
			currentSquare.style.opacity = "0.5";
		}, 400);

		if (i >= gameSelection.length){
			clearInterval(interval);
		}
	}, 900);
}

	


function userSelection() {
	var usersChoice = event.target.attributes["data-value"].value;
	console.log(usersChoice + " This is the user's choice");
	playerSelection.push(usersChoice);
	 
	var i = 0;
	var interval = setInterval(function() {
		// var a = playerSelection[i];
		var userSquare = document.getElementsByClassName('allSquares')[playerSelection[i]];
		console.log(userSquare);
		userSquare.style.opacity = "1";
		i++;

		setTimeout(function(){
			userSquare.style.opacity = "0.5";
		}, 400);

		if (i >= playerSelection.length){
			clearInterval(interval);
		}
		// checkScore();
	}, 700);

	// playerSelection = [];
	checkScore();
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

// 	}, 1500);
// }


//Currently logs what square the user selected
// function does not execute

 function checkScore() {
	// iterate(cycle) through array
	 for (var i = 0; i < playerSelection.length; i++) {

		if(gameSelection[i] != playerSelection[i]){
			console.log('No match! End game.');
			return;
		
			}
		}
		if (playerSelection.length == gameSelection.length) {
			console.log('Keep the game going')
			playerSelection=[];
			playGame();
			

		};
}










