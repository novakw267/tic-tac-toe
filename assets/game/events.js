'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
// attach getFormFields globally

const getFormFields = require('../../.././lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.book.id.length === 0){
      api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(data.book.id)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }

};

const onDeleteBook = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.destroy(data.book.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchBook = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.patch(data.book.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

module.exports = {
  onGetBooks,
  onDeleteBook,
  onPatchBook,
};
