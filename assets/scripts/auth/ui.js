'use strict';

const success = (data) => {
  if (data) {
    console.log(data);
  }
};

// data object is
// data = {
//        email: "users email",
//        id: 232
//      }
// };

const signUpSuccess = function () {
  $("#sign-up").addClass("hidden");
  $("#sign-up")[0].reset();
};

const signInSuccess = (data) => {
  // unhide forms we want
  $("#change-password").removeClass("hidden");
  $("#sign-out").removeClass("hidden");
  $("#game-board").removeClass("hidden");
  $("#play-again").removeClass("hidden");
  $("#games-played").removeClass("hidden");
  // hide forms we want
  $("#Signup-message").addClass("hidden");
  $("#sign-up").addClass("hidden");
  $("#sign-in").addClass("hidden");
  $('#winMessage').text(data.email + ' has signed in, play some Tic Tac Toe!');
  $('#sign-in')[0].reset();
};

const signOutSuccess = () => {
  $("#change-password").addClass("hidden");
  $("#sign-out").addClass("hidden");
  $("#game-board").addClass("hidden");
  $("#play-again").addClass("hidden");
  $("#games-played").addClass("hidden");
  $("#sign-up").removeClass("hidden");
  $("#sign-in").removeClass("hidden");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
};
