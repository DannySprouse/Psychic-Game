# Psychic-Game

PSYCHIC GAME

Tools: HTML5, CSS3, Bootstrap4, Google Fonts, JavaScript

Purpose:  PC gaming; a web application guessing game

Responsiveness:  Game has some (limited) responsiveness as it is designed to be played using a keyboard on a desktop or laptop computer

Summary: This is a very simple JavaScript game where the computer will generate a random letter from the alphabet and the user tries to guess that letter by using the keyboard to select their letter choice. The user has 10 tries to guess the letter. If the user cannot achieve that within 10 guesses, a LOSS is scored and the computer generates a new letter for the user to try guessing again. If the user does achieve the correct guess within the allotted 10 guesses, a WIN is scored and the computer again generates a new random letter so the user can play again.

Problem: The task was to create an app to run in browser that features dynamically updating HTML code, JavaScript and computer random generation. I needed code for the computer to generate a random letter, then receive user input to see if the input matches the generated letter, and score a win or a loss based on a set number (10) of tries before losing.

Solution: Using JavaScript, create an array and have computer cycle through the array for a randomly selected letter, and perform matches against that letter and the user input. A variety of alerts were added to help user navigate the game.

My Technical Approach: I first built out a basic HTML mockup with some simple CSS styling. I then coded out the JavaScript in the game.js file. I wanted to provide the user with an alert with very brief instructions on how to play the game, so created an info button that when clicked would provide these instructions. I defined an array with the alphabet and set various variables for wins, losses, guesses and of course the computer generated number using Math.floor(Math.random(), and cycled through the array randomly to select a letter. To avoid a situation where a user might have on CAPS lock, used .toLowerCase for the user selection to match the letters of the array. I used a for loop to loop through the guesses and determine if the guess was correct and to calculate how many guesses the user had used up. Then, if/else if was used to determine if the user and computer selections matched resulting in a win, and then else if there were more guesses and a wrong guess, user could go again, but else if there were no more guesses and a wrong guess, a loss was recorded. The guesses, wins, losses and letters guessed were all written to the HTML. Alerts guided the player with information about guessed letters, wins and losses. I then made a few additional CSS adjustments, ensured the game was mobile responsive, and deployed.

Licenses, Credits & Attributions: Purchased Fortune Teller image license from DandDDigitalDelights, May 2018.

Link to Deployed Game: https://dannysprouse.github.io/Psychic-Game/

Copyright ©2018 Danny S. Sprouse All Rights Reserved
