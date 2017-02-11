'use strict';

// setAPIOrigin is the following object
// { signUp, signIn, changePassword, signOut };
const setAPIOrigin = require('../../lib/set-api-origin');

// config is biulding the following object in the config.js
// {
//   apiOrigins: {
//     production: 'https://aqueous-atoll-85096.herokuapp.com',
//     development: 'http://tic-tac-toe.wdibos.com',
//   },
// };
const config = require('./config.js');


$(() => {
  setAPIOrigin(location, config);

});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

const authEvents = require('./auth/events.js');
const game = require('./game.js');


//$('col-xs-4 box').on('click', (event) => {
//  let currentSquare = event.currentTarget.id;
//  let moveSuccess = game.togglePlayer(currentSquare);
//  $(event.currentTarget).text(moveSuccess);
//});

// use require without a reference to ensure a file is bundled

$(() => {
  authEvents.addHandlers();
  game.handler();
  // games.addHandlers();
  // $('.new-game').on('click', games.resetGameBoard);
});
