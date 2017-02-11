'use strict';

const config = require('../config.js');
const store = require('../store');

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const show = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
      // game: {
      //   cell: {
      //     index: gameIndex,
      //     value: player,
      //   },
      //   over: getWinner,
      // },
  });
};

module.exports = {
  index,
  show,
  create,
  update,
};
