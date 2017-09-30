"use strict";

// This will be a five question guessing game.
// The questions will be a mix of Yes/No answers. User input must accept either y/n or Yes/No responses. toUpperCase() or toLowerCase()
// will be used to validate user input and accommodate user enter all-caps answers as well.
// Include usefull and well written console.log() messages
// correctly display to the brower console for each question of the guessing game.

// set the initial values for the variables used later.
var playerScore = 0;

//  Ask the player their name
var playerName = prompt ('What is your name, player?');
consol.log ('Player entered their name as ' + playerName + '.');

// Ask player their first question.
var firstQuestion = prompt ('Did I drive to school today ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
console.log ('Player entered answer ' + firstQuestion + '.');

// Evaluate player answer.

if (firstQuestion = 'No' || 'N'); {
  alert ('Great Guess! ' + playerName + ' Riding the bus saves me from having to find parking in Seattle.');
  var playerScore = playerscore++ ;
}  else {
    alert ('Sorry, wrong answer, ' + playerName + '.' );
    }
alert ('Your score is ' + playerScore + ' ' + playerName +' Riding the bus saves me from having to find parking in Seattle.' );
    // Ask player their second question

var secondQuestion = prompt ('Do I like to play baseball ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
console.log ('Player entered secondQuestion answer as ' + secondQuestion + '.');
  if (firstQuestion = 'No' || 'N'); {
    alert ('Great Guess! ' + playerName + 'I haven\'t played baseball since Highschool.');
    var playerScore = playerScore++ ;
    } else {
    alert ('Sorry, wrong answer, ' + playerName + ' I haven\'t played baseball since Highshcool.');
    }

    var thirdQuestion = prompt 'Do I like to play the guitar, ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
    console.log ('Player entered answer ' + secondQuestion + '.');
      if (firstQuestion = 'No' || 'N') {
        alert ('Great Guess! ' + playerName + 'I unfortunately do not \(currently anyway\) know how to play any musical instrament.');
        var playerScore++
        } else {
        alert ('Sorry, wrong answer, ' + playerName + ' I unfortunately do not \(currently anyway\) know how to play any musical instrament.');
        }

  var fourthQuestion = prompt ('Do I like to SCUBA dive, ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
        console.log ('Player entered answer ' + secondQuestion + '.');
          if (fourthQuestion = 'Yes' || 'Y') {
            alert ('Great Guess! ' + playerName + 'I haven\'t been diving in a long time but hope to do so again soon.');
            var playerScore++
            } else {
            alert ('Sorry, wrong answer, ' + playerName + ' I actually love to go SCUBA diving, it has taken me all over the world.')
            }

var fifthQuestion = prompt ('Do I like to read mystery novels ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
    console.log ('Player entered answer ' +fifthQuestion + '.');
      if (fithQuestion = 'No' || 'N') {
          alert ('Great Guess! ' + playerName + ' I have read a few mystery novels, but I would much rather read Sci-fi.' );
          var playerScore++
          } else {
          alert ('Sorry, wrong answer, ' + playerName + ' I have read a few mystery novels, but I would much rather read Sci-fi.')
                }
