'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.games) {
    $('#winMessage').text('You have played ' + data.games.length + ' games!');
    // console.log(data.games);
  } else {
  }
};

const onIndexSuccess = function (data) {
  if (data.game) {
  } else {
  }
};

const onGetSuccess = function(data) {
  if (data.games) {
    $('#search-result').text(data.game.cells);
  }
};

const onError = function () {
};

const onPostSuccess = function () {
};

const onPatchSuccess = function () {
};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
  onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
