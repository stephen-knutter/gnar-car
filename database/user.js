var knex = require('./config');
var bcrypt = require('bcrypt');

var query = {
  getAllUsers: function() {
    return knex('users');
  }
};

module.exports = query;
