'use strict';

let board = ['', '', '',
               '', '', '',
               '', '', '',
             ];

let newBoard = ['', '', '',
               '', '', '',
               '', '', '',
                ];

let fullBoard = false;

const spotTaken = function (element) {
    return element !== '';
};

const boardFull = function () {
  if (board.every(spotTaken)) {
    fullBoard = true;
  }
};

const player1 = 'X';
const player2 = 'O';

let currentPlayer = 'X';

const togglePlayer = function (board, move) {
  if (board[move] === '') {
    board[move] = currentPlayer;
    getWinner();
  }  else if (currentPlayer === 'X') {
    currentPlayer = 'O';
    console.log(currentPlayer);
  }  else if (board[move] !== '') {
    console.log('Please try again');
  }   else {
    currentPlayer = 'X';
    console.log(currentPlayer);
  }
};
};

const reset = function () {
  fullBoard = false;
  board = newBoard;
};

const threeInARow = function (currentPlayer, cellOne, cellTwo, cellThree) {
  return (cellOne === currentPlayer) && (cellTwo === currentPlayer) && (cellThree === currentPlayer);
};

const winRows = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[1], board[2]) ||
      threeInARow(currentPlayer, board[3], board[4], board[5]) ||
      threeInARow(currentPlayer, board[6], board[7], board[8])) {

         console.log('Great job ' + currentPlayer + ' you win!');
    }

};

const winColumn = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[3], board[6]) ||
      threeInARow(currentPlayer, board[1], board[4], board[7]) ||
      threeInARow(currentPlayer, board[2], board[5], board[8])) {
         console.log('Great job ' + currentPlayer + ' you win!');
    }

};

const winDiag = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[4], board[8]) ||
      threeInARow(currentPlayer, board[2], board[4], board[6])) {
         console.log('Great job ' + currentPlayer + ' you win!');
         }

};

const winnerIs = function (currentPlayer) {
  return winRows(currentPlayer) || winColumn(currentPlayer) || winDiag(currentPlayer);
};

let tieGame = function () {
       return board.every(spotTaken);
};

const getWinner = function () {
  if (tieGame(fullBoard)) {
    console.log('Game is a tie, try again.');
  }
    else if (winnerIs(player1)) {
    return currentPlayer;
  }
    else if (winnerIs(player2)) {
    return currentPlayer;
  }

  reset();
};

const printBoard = function () {
  for (let i = 0; i < board.length; i++) {
  if (board[i] === 'X') {
      $('#' + i).text('X');
  } else if (board[i] === 'O'){
      $('#' + i).text('O');
    }
}
};

const game = function (event) {
  togglePlayer();
  printBoard();
  boardFull();
  getWinner();
};

const handler = function () {
$('.box').on('click', game);
};

module.exports = {
  board,
  boardFull,
  fullBoard,
  threeInARow,
  newBoard,
  winRows,
  winColumn,
  winDiag,
  getWinner,
  winnerIs,
  tieGame,
  togglePlayer,
  game,
  handler,
  currentPlayer,
};
