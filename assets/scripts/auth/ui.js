'use strict';
const storage = require('../games/events.js');


const success = (data) => {
  if (data) {
    console.log(data + " onSuccess get request");
  }
};

// data object is
// data = {
//        email: "users email",
//        id: 232
//      }
// };

// const signUpSuccess = function () {
//   $("#sign-up").addClass("hidden");
//   $("#sign-up")[0].reset();
// };

const signInSuccess = (data) => {
  console.log(data);
  console.log(" in auth signInSuccess");
  // unhide forms we want
  $("#change-password").removeClass("hidden");
  $("#sign-out").removeClass("hidden");
  $("#play-again").removeClass("hidden");
  console.log("i sohuld tun once");
  $('#games-played').on('click', (event) =>{
    event.preventDefault();
    console.log("do i run twice?");
    storage.onGetGames(data);
  });

  // hide forms we want
  $("#Signup-message").addClass("hidden");
  $("#sign-up").addClass("hidden");
  $("#sign-in").addClass("hidden");
  $('#winMessage').text(data.email + ' has signed in, play some Tic Tac Toe! Hit New Game to begin.');
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
  // signUpSuccess,
  signInSuccess,
  signOutSuccess,
};
