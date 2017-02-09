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

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (id, gameIndex, player, getWinner) {
  return $.ajax({
    url: `${config.apiOrigin}/games/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      "game": {
        "cell": {
          "index": gameIndex,
          "value": player,
        },
        "over": getWinner,
      },
    },
  });
};

module.exports = {
  index,
  show,
  create,
  update,
};
