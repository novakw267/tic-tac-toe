'use strict';

const board = [0, 1, 2,
               3, 4, 5,
               6, 7, 8,
             ];

const winConditions = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
[0, 4, 8], [2, 4, 6] //diagnol
];

const player1 = {
  symbol: 'X'
};

const player2 = {
  symbol: 'O'
};

const togglePlayer = function () {
   if (this.player === 'X') {
     this.player = 'O';
   }
   else {
     this.player = 'X';
   }
 };

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
    return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};

const winRow = function (player) {
  return threeInARow(player, board[0]), (board[1]), (board[2]) ||
         threeInARow(player, board[3]), (board[4]), (board[5]) ||
         threeInARow(player, board[6]), (board[7]), (board[8]);
};

const winColum = function (player) {
  return  threeInARow(player, board[0]), (board[3]), (board[6]) ||
          threeInARow(player, board[1]), (board[4]), (board[7]) ||
          threeInARow(player, board[2]), (board[5]), (board[8]);
};

const winDiag = function (player) {
  return   threeInARow(player, board[0]), (board[4]), (board[8]) ||
           threeInARow(player, board[2]), (board[4]), (board[6]);
};

const winnerIs = function (player) {
  return winRow(player.symbol) || winColum(player.symbol) || winDiag(player.symbol);
};

const getWinner = function () {
  if (winnerIs (player1)) {
    return ('Winner is X');
  }
  else if (winnerIs(player2)) {
    return ('Winner is O');
  }
  else { return -1;}
};



const printBoard = function(board) {
  for (let i = 0; i < board.length; i+=3) {
    console.log(board[i] + " " + board[i+1] + " " + board[i+ 2]);
  }
};

const turn = function (player, move, board) {
  board[move]=player.symbol;
  if (getWinner(board) !== -1) {
    console.log(getWinner());
  }
};

// const newGame = [];
//


//
// const toggleTurn = function () {
//   if (this.player === '1'){
//     return this.player === '2';
//   }
//   else if (this.player === '2') {
//     return this.player === '1';
//   }
//
//   return this.player;
// }
//
//
//
//
// const reset = function () {
//   if (board === []) {
//     return 'empty';
//   } else {
//     return newGame;
//   }
// };

printBoard(board);
turn(player1, 4, board);
printBoard(board);
turn(player2, 7, board);
printBoard(board);
turn(player1, 5, board);
printBoard(board);
turn(player2, 8, board);
printBoard(board);
turn(player1, 3, board);
printBoard(board);
module.exports = {
  printBoard,
  winnerIs,
  togglePlayer,
  winConditions,
 getWinner,
};
