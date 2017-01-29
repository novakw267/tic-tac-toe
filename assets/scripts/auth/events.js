'use strict';

const getFormFields = require(`../../../lib/get-form-fields.js`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const game = require('../game.js');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(ui.success)
    .then(() => {
      console.log(store);
    })
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.success)
    .catch(ui.failure)
    ;
};

$('#play-again').on('click', () =>{
  game.resetGameBoard();
});

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('signOut').on('submit', onSignOut);
  $('#sign-in').on('submit', onSignIn);
  $('#play-again').on('click', game.resetGameBoard);
};

module.exports = {
  addHandlers,
};
