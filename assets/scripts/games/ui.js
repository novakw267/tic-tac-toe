'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.games) {
    $('#winMessage').text('You have played ' + data.games.length + ' games!');
    console.log(data.games);
  } else {
    console.table(data.games);
  }
};

const onIndexSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.game);
  }
};

const onGetSuccess = function(data) {
  if (data.games) {
    console.log(data.game);
    $('#search-result').text(data.game.cells);
  }
};

const onError = function (response) {
  console.error(response);
};

// const onDeleteSuccess = function () {
//   console.log('Games was successfully deleted.');
// };

const onPostSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function () {
  console.log('Games was successfully Patched.');
};

module.exports = {
  onSuccess,
  onError,
  // onDeleteSuccess,
  onPostSuccess,
  onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
