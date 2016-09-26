var knex = require('./config');
var bcrypt = require('bcrypt');

// User Queries

var query = {
  getAllUsers: function() {
    return knex('users');
  },

  findUser: function(username) {
    return knex('users').where('username', username);
  },

  hashPassword: function(password){
    return bcrypt.hashSync(password,10);
  },

  findUserInformation: function(username){
    return knex('user').select('id','username','fullName').where('username',username).first();
  },

  findHashedPassword: function(username){
    return knex('user').select('user.password').where('user.username',username).first();
  },

  authenticateUser: function(username, password){
    return findUser(username)
    .then(function(userData){
      if(!userData){
        return false;
      }
      return findHashedPassword(username)
      .then(function(hashedPassword){
        hashedPassword = hashedPassword.password;
        return bcrypt.compareSync(password, hashedPassword);
      });
    });
  },

  addUser: function(username,email, password){
    if(!username || !email || !password){
      return false;
    }
    return findUser(username)
    .then(function(data){
      if(data){
        return false;
      }
      return knex('user').insert({username: username, password: hashPassword(password), city: 'Denver', State: 'CO', zip: '80216', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg',admin:false});
    })
    .catch(function(err){
      return err;
    });
  }
};

module.exports = query;
