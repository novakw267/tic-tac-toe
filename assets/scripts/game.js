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

const togglePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';
  }
};

const reset = function () {
  fullBoard = false;
  board = newBoard;
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
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

const yourMove = function (board, move) {
      if (board[move] !== '') {
        console.log('Please try again');
      } else if (board[move] === '') {
        board[move] = currentPlayer;
        togglePlayer();
      }
    };

yourMove(board, 0);
console.log(board);
yourMove(board, 1);
console.log(board);
yourMove(board, 2);
console.log(board);
yourMove(board, 5);
console.log(board);
yourMove(board, 3);
console.log(board);
yourMove(board, 6);
console.log(board);
yourMove(board, 4);
console.log(board);
yourMove(board, 8);
console.log(board);
yourMove(board, 7);
console.log(board);
console.log(getWinner(currentPlayer));
module.exports = {
  board,
  boardFull,
  fullBoard,
  player1,
  player2,
  threeInARow,
  newBoard,
  winRows,
  winColumn,
  winDiag,
  getWinner,
  winnerIs,
  tieGame,
  currentPlayer,
  togglePlayer,
  yourMove,
};
