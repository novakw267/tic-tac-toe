'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.games) {
    console.log(data.games);
  } else {
    console.table(data.games);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Games was successfully deleted.');
};

const onPatchSuccess = function () {
  console.log('Games was successfully Patched.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
};
