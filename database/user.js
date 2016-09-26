var knex = require('./config');
var bcrypt = require('bcrypt');

var query = {
  getAllUsers: function() {
    return knex('users');
  },
  getUserByUsername: function(username) {
    return knex('users').where('username', username);
  }
};

module.exports = query;
