'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');
// attach getFormFields globally

const getFormFields = require('../../.././lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onCreateGame = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.create(data)
    .then((response) => {
      store.game = response.game;
    })
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const onGetGames = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.games.id.length === 0){
      api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(data.games.id)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }

};

// const onUpdateGames = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   api.patch(data.gameIndex player, gameOver)




// const onDeleteGames = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   api.destroy(data.games.id)
//     .then(ui.onDeleteSuccess)
//     .catch(ui.onError);
// };
//
// const onPatchGames = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   api.patch(data.games.id, data)
//     .then(ui.onPatchSuccess)
//     .catch(ui.onError);
// };

const addHandlers = () => {
  $('#search-submit').on('submit', onGetGames);
};

module.exports = {
  onCreateGame,
  onGetGames,
  addHandlers,
  // onDeleteGames,
  // onPatchGames,
};
