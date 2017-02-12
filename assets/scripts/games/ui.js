'use strict';

const onSuccess = function(data) {
  //  debugger;
  $('#winMessage').text('You have played ' + data.games.length + ' games!');
};

const onIndexSuccess = function() {
};

// const onGetSuccess = function(data) {
//   if (data.games) {
//     // $('#search-result').text(data.game.cells);
//   }
// };

const onError = function() {};

const onPostSuccess = function() {};

const onPatchSuccess = function() {};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
  onPatchSuccess,
  // onGetSuccess,
  onIndexSuccess,
};
