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

const players = [
   '1',
   '2',
 ];

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
    return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};
}

const winRows = function (player) {
  return threeInARow
}





const printBoard = function(board) {
  for (let i = 0; i < board.length; i+=3) {
    console.log(board[i] + " " + board[i+1] + " " + board[i+ 2]);
  }
};

const turn = function (player, move) {
  if (player === 1) {
    board[move] = 'X';
  } else {
    board[move] = 'O';
  }
};

// const newGame = [];
//

//
// const turn = {
//   player: '1, 2',
//   token: 'x, o',
// };
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
turn(1, 4);
printBoard(board);
turn(2, 7);
printBoard(board);
turn(1, 5);
printBoard(board);
turn(2, 8);
printBoard(board);
turn(1, 3);
printBoard(board);
checkWin('x');

module.exports = {
  printBoard,
  checkWin,
};
