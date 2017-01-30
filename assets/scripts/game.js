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
    console.log();
  }
};

const player1 = 'X';
const player2 = 'O';

let currentPlayer = 'O';

const yourMove = function (move) {
  if (board[move] !== '') {
    console.log('Please try agian.');
    return;
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';
  } else if (currentPlayer === 'X') {
    currentPlayer = 'O';
  }
  board[move] = currentPlayer;
  console.log(board);
};

// const reset = function () {
//   fullBoard = false;
//   board = newBoard;
// };

const threeInARow = function (currentPlayer, cellOne, cellTwo, cellThree) {
  return (cellOne === currentPlayer) && (cellTwo === currentPlayer) && (cellThree === currentPlayer);
};

const winRows = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[1], board[2]) ||
      threeInARow(currentPlayer, board[3], board[4], board[5]) ||
      threeInARow(currentPlayer, board[6], board[7], board[8])) {

         console.log('Great job ' + currentPlayer + ' you win!');
         return $('#winMessage').text(currentPlayer + ' you won!');
    }

};

const winColumn = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[3], board[6]) ||
      threeInARow(currentPlayer, board[1], board[4], board[7]) ||
      threeInARow(currentPlayer, board[2], board[5], board[8])) {
         console.log('Great job ' + currentPlayer + ' you win!');
         return $('#winMessage').text(currentPlayer + ' you won!');
    }

};

const winDiag = function (currentPlayer) {
  if (threeInARow(currentPlayer, board[0], board[4], board[8]) ||
      threeInARow(currentPlayer, board[2], board[4], board[6])) {
         console.log('Great job ' + currentPlayer + ' you win!');
         return $('#winMessage').text(currentPlayer + ' you won!');
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
    return $('#winMessage').text('Game is Tie');
  }
    else if (winnerIs(player1)) {
  }
    else if (winnerIs(player2)) {
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

const resetGameBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('#' + i).text(''); // + combines the two strings
    $('.message').text('');
  }
};

const game = function (event) {
  yourMove(parseInt(event.target.id));
  printBoard();
  boardFull();
  winnerIs();
  getWinner();
};

// const gamesPlayed = function () {
//
// };

const handler = function () {
$('.box').on('click', game);
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
