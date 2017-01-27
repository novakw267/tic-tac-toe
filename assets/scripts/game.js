'use strict';

const board = ['', '', '',
               '', '', '',
               '', '', '',
             ];

const player1 = 'X';
const player2 = 'O';
let currentPlayer = 'X';
//let turn = currentPlayer.board;

const togglePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else if (currentPlayer === 'O'){
   currentPlayer = 'X';
 }
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};

const winRows = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[1], board[2])||
         threeInARow(currentPlayer, board[3], board[4], board[5])||
         threeInARow(currentPlayer, board[6], board[7], board[8])) {

         console.log('Great job ' + currentPlayer + ' you win!');
    }
};

const winColumn = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[3], board[6]),
         threeInARow(currentPlayer, board[1], board[4], board[7]),
         threeInARow(currentPlayer, board[2], board[5], board[8])) {
         console.log('Great job ' + currentPlayer + ' you win!');
    }
};

const winDiag = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[4], board[8]),
         threeInARow(currentPlayer, board[2], board[4], board[6])) {
           console.log('Great job ' + currentPlayer + ' you win!');
         }
};

const winnerIs = function (currentPlayer) {
  return winRows(currentPlayer) || winColumn(currentPlayer) || winDiag(currentPlayer);
};

const getWinner = function () {
  if (winnerIs(player1)) {
    return currentPlayer;
  } else if (winnerIs(player2)) {
    return currentPlayer;
  }
};

const yourMove = function (board, move) {
      if (board[move] !== '') {
        console.log('Please try again');
      } else if (board[move] === '') {
        board[move] = currentPlayer;
        togglePlayer();
      }
    };

yourMove(board, 5);
console.log(board);
yourMove(board, 2);
console.log(board);
yourMove(board, 3);
console.log(board);
yourMove(board, 1);
console.log(board);
yourMove(board, 4);
console.log(board);
console.log(getWinner(currentPlayer));
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
  yourMove,
};
