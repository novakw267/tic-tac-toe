'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onCreateGame = function() {
  event.preventDefault();

  // let data = getFormFields(event.target);
  api.create()
    .then((response) => {
      store.game = response.game;
    });
};

// The idea of this function is the show games played by the user.
const onGetGames = function () {
  event.preventDefault();
  // let data = getFormFields(event.target);

      api.index(store.game.id)
      .then(ui.onSuccess)
      .catch(ui.onError);
};

// const onUpdateGames = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   api.update(data)




// const onDeleteGames = function(event){
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//   api.destroy(data.games.id)
//     .then(ui.onDeleteSuccess)
//     .catch(ui.onError);
// };
//
// const onUpdateGames = function(event){
//   // event.preventDefault();
//
//   // let data = getFormFields(event.target);
//
//   api.update(store.game.id, event.target.id, engine.currentPlayer, engine.getWinner)
//     .then(ui.onPatchSuccess)
//     .catch(ui.onError);
// };



const addHandlers = () => {
  $('#search-submit').on('submit', onGetGames);
//   $('#search-submit').on('submit', onUpdateGames);
//
};

module.exports = {
  onCreateGame,
  onGetGames,
  addHandlers,
  // onDeleteGames,
  // onUpdateGames,
};
