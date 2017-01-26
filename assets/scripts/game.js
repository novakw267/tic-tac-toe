'use strict';
const board = ['', '', '',
               '', '', '',
               '', '', '',
             ];

const player1 = 'X';
const player2 = 'O';
const currentPlayer = '';

const togglePlayer = function () {
  if (this.currentPlayer === 'X') {
    return this.player2;
  } else {
    return this.player1;
  }
};

const threeInARow= function (player, cellOne, cellTwo, cellThree) {
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
    return "x";
  } else if (winnerIs(player2)) {
    return 'O';
  } else {
    return ('Game is a draw.');
  }
};

module.export = {
  getWinner,
  currentPlayer,
  togglePlayer,
};
