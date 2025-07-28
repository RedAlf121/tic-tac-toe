# Tic Tac Toe React
## Description
This project is an implementation of the classic Tic Tac Toe game using React. It allows local play between two players and soon against an AI using the Minimax algorithm, as explained in the [CS50 Introduction to AI lecture](https://www.youtube.com/watch?v=5NgNicANyqM).

## Component Structure
* MainMenu.jsx

Main menu component.
Allows you to select the game mode: vs Player or vs AI.
Manages the global game mode state and displays the board when an option is selected.
* Board.jsx

Renders the Tic Tac Toe board.
Manages the state of the squares, player turn, and game state (win, draw).
Includes buttons to restart the game and return to the main menu.
Receives the game mode as a prop to adapt the logic (player vs player or player vs AI).
* Square.jsx

Represents each individual square on the board.
Displays the current value (X, O, or empty) and handles user clicks.
* GameState.jsx

Displays the current game state: whose turn it is, if there is a winner or a draw.
* gameChecker.js

Logic to check the game state (win, draw).
* gameMode.js
Defines the available game modes. It's an enum.

## New Feature: Play Against AI
The option to play against an AI is currently being implemented.
The AI uses the Minimax algorithm, explained in the [CS50 Introduction to AI lecture](https://www.youtube.com/watch?v=5NgNicANyqM), to make optimal decisions and offer a challenge to the player.

## How to Run
Install dependencies:
```
npm install
```
Start the project:
```
npm run dev
```
## Credits
Inspired by [CS50 Introduction to AI](https://www.youtube.com/watch?v=5NgNicANyqM).
Developed with React.