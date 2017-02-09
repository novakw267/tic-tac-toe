'use strict';

const getFormFields = require(`../../../lib/get-form-fields.js`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const game = require('../game.js');

const storage = require('../games/events.js');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
    return $('#winMessage').text('Congradulations on signing up!');
};

const onSignIn = function (event) {
   event.preventDefault();

 let data = getFormFields(event.target);

 api.signIn(data)
  // can only have 1 .then
   .then((response) => {
     store.user = response.user;
     return store.user;
   })
   .then(ui.signInSuccess)
   .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  console.log(data);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
    return $('#winMessage').text('Changing your password? You smartie pants.');
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.failure);
    return $('#winMessage').text('So long, come back again. =)');
};

// $('#play-again').on('click', () => {
//   game.resetGameBoard();
// });

$('#games-played').on('click', () =>{
  storage.onGetGames();
});

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#play-again').on('click', game.resetGameBoard);
};

module.exports = {
  addHandlers,
};
