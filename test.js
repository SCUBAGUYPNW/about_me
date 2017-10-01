"use strict";

// Adding a sixth question to my guessing game.
// The user will need to guess a number.

var continueLoop = true
while (userGuess != 42 && continueLoop);
var userGuess = prompt ('Hello, can you guess my number? Please enter a number between 1 and 200');
if (userGuess === 42){
console.log ('Player entered ' + userGuess + '.' );
  alert ('Congragulations, you guessed my number!');
} else if (userGuess < 42){
  alert ('You\'re guess was incorrect. Please guess a higher number');
  userGuess = prompt ('Please guess again, enter a number between ' +userGuess + ' and 200.' );
} else if (userGuess > 42){
  alert ('You\'re guess was incorrect. Please guess a lower number');
userGuess = prompt ('Please guess again, enter a number between 1 and ' +userGuess + '.' );
}
