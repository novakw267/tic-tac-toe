'use strict';

const success = (data) => {
  if (data) {
    $('#winMessage').text('Congradulations on signing up!');
    $('#sign-up')[0].reset();
  }
};

const signInSuccess = (data) => {
  // unhide forms we want
  $('#change-password').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#play-again').removeClass('hidden');
  $('#winMessage').text(data.email + ' has signed in, hit New Game to start playing!');


  // hide forms we want
  $('#Signup-message').addClass('hidden');
  $('#sign-up').addClass('hidden');
  $('#sign-in').addClass('hidden');
  $('#sign-in')[0].reset();
  $('#sign-up')[0].reset();
};

//displays a message and clears on a successful change password
const changePwSuccess = () => {
  $('#winMessage').text('Changing your password? You smartie pants.');
  $('#change-password')[0].reset();
};

//change back to how it looked before you signed in.
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
  $('#change-password')[0].reset();
  return $('#winMessage').text('Try again, something went wrong.');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePwSuccess
};
