'use strict';
const api = require('./games/api');
const ui = require('./games/ui');
const events = require('./games/events.js');

// Declaring the starting board

let board = ['', '', '',
  '', '', '',
  '', '', '',
];
// Declaring an empty board for the reset function

let newBoard = ['', '', '',
  '', '', '',
  '', '', '',
];

// Declaring what a full board isn't so later I can determine a full board.

let fullBoard = false;

// This searches the board to see if the spot you clicked on is full or not.
// If it determines it is not then you're allowed to place your symbol.
// If the spot is found to be full, this will display a message
// saying to try again.

const spotTaken = function(element) {
  return element !== '';
};

const boardFull = function() {
  if (board.every(spotTaken)) {
    fullBoard = true;
  }
};

// declaring my starting variable for the player1 and 2 piece
// startin currenPlayer with O

const player1 = 'X';
const player2 = 'O';
let currentPlayer = 'O';

// threeInARow is declaring what the win function will be looking for
// It wants to find that there are three cells in a row occupied
// by the same player's symbol

const threeInARow = function(currentPlayer, cellOne, cellTwo, cellThree) {
  return (cellOne === currentPlayer) && (cellTwo === currentPlayer) && (cellThree === currentPlayer);
};

// this is the win function for the rows of the board
// It is looking to see if the player symbol occupies 3 spaces
// in any of the arrays that match a rows

const winRows = function(currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[1], board[2]) ||
    threeInARow(currentPlayer, board[3], board[4], board[5]) ||
    threeInARow(currentPlayer, board[6], board[7], board[8])) {
    return $('#winMessage').text(currentPlayer + ' you won! Feel free to start over, by hitting Play Again.');
  }

};

// this is the win function for the rows of the board
// It is looking to see if the player symbol occupies 3 spaces
// in any of the arrays that match a column
const winColumn = function(currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[3], board[6]) ||
    threeInARow(currentPlayer, board[1], board[4], board[7]) ||
    threeInARow(currentPlayer, board[2], board[5], board[8])) {
    return $('#winMessage').text(currentPlayer + ' you won! Feel free to start over, by hitting Play Again.');
  }

};

// this is the win function for the rows of the board
// It is looking to see if the player symbol occupies 3 spaces
// in any of the arrays that match a diagnol

const winDiag = function(currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[4], board[8]) ||
    threeInARow(currentPlayer, board[2], board[4], board[6])) {
    return $('#winMessage').text(currentPlayer + ' you won!');
  }

};

// This function is checking for if the criteria of the previous three
// functions have been met. If they have not been met and it finds the board
// to be full, it will deplay the tieGame function to display the game is over
// and there was no winner.

const winnerIs = function(currentPlayer) {
  return winRows(currentPlayer) || winColumn(currentPlayer) || winDiag(currentPlayer);
};

let tieGame = function() {
  return board.every(spotTaken);
};

// This function will call the previous functions to determine a winner
// It will then display a seperate message depending on which player won
// if the game was a tie it will display that the game was a tie.

const getWinner = function() {
  if (tieGame(fullBoard)) {
    return $('#winMessage').text('The game is Tie. Feel free to start over, by hitting Play Again.');
  } else if (winnerIs(player1)) {} else if (winnerIs(player2)) {}

};

// function name: yourMove
// parameters: move represents a number of 0-8
// purpose: accepts a position on the board which is a number 0-8

const yourMove = function(move) {
  // and checks if there is a value in that position

  if (board[move] !== '') {

    // if there is it logs please try again/

  return $('#winMessage').text('Please try again!');
    // if current player is O change it to X

  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';

    // if current is X change to O

  } else if (currentPlayer === 'X') {
    currentPlayer = 'O';
  }
  board[move] = currentPlayer;
  return $('#winMessage').text('');
};

//This selects the data that is stored from update games
const patch = function() {
  let data = {
    game: {
      cell: {
        index: event.target.id, // this represents the square that was clicked on.
        value: currentPlayer,
      },
      over: true,
    },
  };
  api.update(data) //this is getting passed the object, and the update function,
    //is recieving the object through this.
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
  // and adds the current players piece to the board array
};

// This will go through the current ideration of
// the board index, and see if the spot clicked on is full
// if that is the case, the game will display try again
// If the board piece is empty then it will print the symbol for
// whichever players turn it currently is.
const printBoard = function() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'X') {
      $('#' + i).text('X');
    } else if (board[i] === 'O') {
      $('#' + i).text('O');
    }
  }
};

// This is the function for resetting the game board without refreshing the page
// It looks to see if the board has anything in its index. If it does it will
// clear the board. However if there is nothing on the board, it will do nothing
const resetGameBoard = function() {
  $('#game-board').removeClass('hidden');
  $('#games-played').removeClass('hidden');
  currentPlayer = 'O'; // resets the currentPlayer for each new game
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('#' + i).text(''); // + combines the two strings
    $('.message').text(''); //clears the message on that part of the board
  }
  return events.onCreateGame();
};

// This is the function the sets the order of operations for the whole game.
// It calls the functions in the order they need to be presented, in order
// for the game to work.
const game = function(event) {

  // if currentPlayer has not won the game then run all the game functions
  if (!winnerIs(currentPlayer)) {
    yourMove(parseInt(event.target.id)); // my toggle player function
    printBoard(); // what puts the symbols on the board
    boardFull(); // detects to see if the board is full
    winnerIs(); // checks for a winner
    getWinner(); // displays the winner!
    patch();

    // if the already won then print the message to tell the game is already won
  } else {
    $('#winMessage').text('Game is already over');
  }
};

// click handler for clicking on the board.
//and the games-played button
const handler = function(data) {
  $('.box').on('click', game);
  $('#winMessage').text('Please try again!');
  $('#games-played').on('click', () => {
    events.onGetGames(data);
  });
};


module.exports = {
  board,
  boardFull,
  fullBoard,
  newBoard,
  getWinner,
  winnerIs,
  tieGame,
  game,
  handler,
  currentPlayer,
  resetGameBoard,
};
