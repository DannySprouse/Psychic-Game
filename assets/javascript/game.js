    // An alert to give an overview of the game/how to play

document.getElementById('info').onclick = function() {
    alert("The computer has selected a random letter. Use your keyboard to select the letter you believe has been selected.  You get up to 10 guesses.  If you guess the letter within your 10 tries, you score 1 Win; if you do not guess after 10 tries, you get 1 Loss. Once a Win or Loss has been scored, the computer will generate a new random letter and you get another 10 tries! Good Luck!!");
}
   
   // Define the array from which the computer will generate the random letter picks

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Define additional game variables

    var wins = 0; // Will be an integer, score increases based on wins
    var losses = 0; // Will be an integer, score increases based on losses
    var guessesRemaining = 10; // Set remaining guesses to 9, for a maximum of 10 guesses
    var guessesSoFar = []; // Create an array of guessed letters per user input
    var userSelection = ""; // Empty string, holding user inputs

    // Define how the computer will randomly select a letter from the alphabet array

    var computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];

    // Console to make sure a random letter is being generated

        console.log(computerSelection);

    // Set the function to activate game with onkeyup 

document.onkeyup = function(event) { 

    // Need to convert values into characters and ensure that if the CAPS LOCK is on, the input will be converted to lower case to match the array

    var userSelection = String.fromCharCode(event.keyCode).toLowerCase();

    // Alert the user if they have already selected that letter/duplication

    var isDuplicate = false;
        for (var i = 0; i < guessesSoFar.length; i++) 
        {
            if (userSelection == guessesSoFar[i])
            {
                isDuplicate = true;
                    alert("You just wasted one guess.  You have used that letter already!");
            }
        }

    // Add user input to guesses so far

    guessesSoFar.push(userSelection);

    // As user continues to make guesses, when incorrect decrease remaining available guesses

    if (userSelection !== computerSelection)
    {
        guessesRemaining--;
    }

    // If user guesses correctly, increase wins and alert they are psychic, and reset game for next random letter

    if (userSelection == computerSelection) 
    {
        wins++;
        alert("You must be psychic!  Click OK and play again.");
        guessesRemaining = 10; // Reset guesses to 10 to play again
        guessesSoFar.length = 0;
    
    // After a win, computer selects a new random letter, and new generation is console logged

        computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerSelection);
    }
    // If user guesses incorrectly, increase losses and alert to try again, and reset game

    else if (guessesRemaining == 0) 
    {
        losses++;
        alert("Maybe you\'re not psychic!  Click OK and try again!");
        guessesRemaining = 10; // Reset guesses to 10 to play again
        guessesSoFar.length = 0;
    
    // After a loss, computer selects a new random letter, and new generation is console logged

        computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerSelection);
    }

    // Write results to the page and update HTML as user plays

    var html = 
        "<p>Wins: " +  wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
        "<p>Your Guesses So Far: " + guessesSoFar + "</p>";

    // Return the element that matches the CSS selector ID #game and then change the text of that element using innerHTML

    document.querySelector('#game').innerHTML = html;

} // This closes the onkeyup function