'use strict';

const board = ['', '', '',
               '', '', '',
               '', '', '',
             ];

const player1 = 'X';
const player2 = 'O';
const currentPlayer = 'X';
let turn = currentPlayer.board;

const togglePlayer = function () {
  if (this.currentPlayer === 'X') {
    return this.player2;
  } else {
    return this.currentPlayer;
  }
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};

const winRows = function (player) {
  return threeInARow(player, board[0], board[1], board[2]),
         threeInARow(player, board[3], board[4], board[5]),
         threeInARow(player, board[6], board[7], board[8]);
};

const winColumn = function (player) {
  return threeInARow(player, board[0], board[3], board[6]),
         threeInARow(player, board[1], board[4], board[7]),
         threeInARow(player, board[2], board[5], board[8]);
};

const winDiag = function (player) {
  return threeInARow(player, board[0], board[4], board[8]),
         threeInARow(player, board[2], board[4], board[6]);
};

const winnerIs = function (player) {
  return winRows(player) || winColumn(player) || winDiag(player);
};

const getWinner = function () {
  if (winnerIs(player1)) {
    return 'X';
  } else if (winnerIs(player2)) {
    return 'O';
  } else {
    return ('Game is a draw.');
  }
};

let spotTaken = false;

const yourMove = function () {
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== '') {
        spotTaken = true;
      } else if (board[i] === '') {
         spotTaken = false;
      } else if (spotTaken === true){
        console.log('Please try again');
      } else {
        turn++;
      }
    }

};

module.exports = {
  board,
  player1,
  player2,
  threeInARow,
  winRows,
  winColumn,
  winDiag,
  getWinner,
  winnerIs,
  currentPlayer,
  togglePlayer,
  turn,
  spotTaken,
  yourMove,
};
