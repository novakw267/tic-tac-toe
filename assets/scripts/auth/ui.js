'use strict';
const storage = require('../games/events.js');

const success = (data) => {
  if (data) {
    $('#winMessage').text('Congradulations on signing up!');
  }
};

const signInSuccess = (data) => {
  // unhide forms we want
  $('#change-password').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#play-again').removeClass('hidden');
  $('#winMessage').text(data.email + ' has signed in, hit New Game to start playing!');
  $('#games-played').on('click', () => {
    storage.onGetGames(data);
  });


  // hide forms we want
  $('#Signup-message').addClass('hidden');
  $('#sign-up').addClass('hidden');
  $('#sign-in').addClass('hidden');
  $('#sign-in')[0].reset();
  $('#sign-up')[0].reset();
};

const signOutSuccess = () => {
  $('#change-password').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#game-board').addClass('hidden');
  $('#play-again').addClass('hidden');
  $('#games-played').addClass('hidden');
  $('#sign-up').removeClass('hidden');
  $('#sign-in').removeClass('hidden');
};

const failure = () => {
  return $('#winMessage').text('Try again, something went wrong.');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
