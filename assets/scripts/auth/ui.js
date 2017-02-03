'use strict';

const success = (data) => {
  if (data) {
    console.log(data);
  }
};

// data object is
// {
//   user: {
//        email: "users email",
//        id: 232
//      }
// }
const signInSuccess = (data) => {
  // unhide forms we want
  $("#change-password").removeClass("hidden");
  $("#sign-out").removeClass("hidden");
  // hide forms we want
  $("#sign-up").addClass("hidden");
  $("#sign-in").addClass("hidden");
  $('#winMessage').text(data.user.email + ' has signed in, play some Tic Tac Toe!');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
