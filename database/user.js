var knex = require('./config');
var bcrypt = require('bcrypt');

var query = {
  getAllUsers: function(){
    return knex('users').orderBy('created_at', 'DESC');
  }
};

module.exports = query;
