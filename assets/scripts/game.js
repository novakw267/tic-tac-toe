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

// const togglePlayer = function (index) {
//    if (board[index] === '') {
//     board[index] = currentPlayer;
//     getWinner();
//     if (currentPlayer === 'X') {
//     currentPlayer = 'O';
//     console.log(currentPlayer);
//   }   else {
//     currentPlayer = 'X';
//     console.log(currentPlayer);
//   }}
// // }  else {
// //   console.log('Please try again.');
// // }
// };

// const togglePlayer = function() {
//   if (currentPlayer === 'X') {
//     currentPlayer = 'O';
//   } else if (currentPlayer === 'O') {
//     currentPlayer = 'X';
//   }
// };

const yourMove = function (move) {
  if (board[move] !== '') {
    console.log('Please try agian.');
    return;
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
    board[move] = currentPlayer;
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';
    board[move] = currentPlayer;
  }
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
  // togglePlayer();
  yourMove(parseInt(event.target.id));
  printBoard();
  boardFull();
  getWinner();
};

const handler = function () {
$('#0').on('click', game);
$('#1').on('click', game);
$('#2').on('click', game);
$('#3').on('click', game);
$('#4').on('click', game);
$('#5').on('click', game);
$('#6').on('click', game);
$('#7').on('click', game);
$('#8').on('click', game);
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
  // togglePlayer,
  game,
  handler,
  currentPlayer,
};
