# Hangman Game :dizzy:

## Overview
This is a web-based implementation of the classic Hangman game, built using HTML, CSS, and JavaScript. Players guess letters to reveal a hidden word from categories such as programming, movies, people, and countries. The game features a visual hangman drawing that updates with each incorrect guess, and players can restart the game by pressing the "Enter" key after winning or losing.

## Features
- **Dynamic Word Selection**: Words are randomly chosen from four categories: programming, movies, people, and countries.
- **Visual Feedback**: A hangman drawing incrementally appears with each wrong guess, up to 8 incorrect attempts.
- **Interactive UI**: Letters are displayed as clickable buttons, and the word to guess is shown with placeholders for each letter.
- **Sound Effects**: Plays success and failure sounds for correct and incorrect guesses.
- **Responsive Design**: Styled with CSS for a clean and user-friendly interface.
- **Replay Functionality**: Press the "Enter" key or click the "Play Again" prompt to restart the game.

## Files
- **index26.html**: The main HTML file containing the game structure, including the game board, letter buttons, and word display.
- **hangman.css**: CSS file for styling the game, including the hangman drawing, letter buttons, and pop-up messages.
- **hangman.js**: JavaScript file handling game logic, word selection, letter guessing, and win/loss conditions.

## How to Play
1. Open `index26.html` in a web browser.
2. A random word from one of the categories (programming, movies, people, or countries) is selected.
3. Click on the letter buttons to guess letters in the word.
4. Correct guesses reveal the letter in the word; incorrect guesses add a part to the hangman drawing.
5. Win by guessing the word before making 8 incorrect guesses.
6. Lose if the hangman drawing is completed (8 wrong guesses).
7. Press "Enter" or click the "Play Again" prompt to start a new game.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hangman-game.git
