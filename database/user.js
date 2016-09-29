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
  findCarByUser: function(userID) {
    return knex('car')
      .innerJoin('car_user', 'car_user.car_id', 'car.id')
      .innerJoin('users', 'users.id', 'car_user.user_id')
      .where('users.id', userID);
  },
  hashPassword: function(password) {
    return bcrypt.hashSync(password, 10);
  },
  findUserInformation: function(username) {
    return knex('users')
      .select('id', 'username', 'fullName')
      .where('username', username).first();
  },
  findHashedPassword: function(username) {
    return knex('users')
      .select('user.password')
      .where('user.username', username).first();
  },
  authenticateUser: function(password, passwordDigest) {
    return bcrypt.compareSync(password, passwordDigest, function(err, isMatch) {
      if (err) return false;

      return isMatch;
    });
  },
  addUser: function(username, email, password) {
    return knex('users')
     .insert({
       username: username,
       password: this.hashPassword(password),
       phone: 555-555-5555,
       email: email,
       city: 'Denver',
       state: 'CO',
       zip: '80216',
       image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg',
       admin: false
     });
  },
  updateUser: function(userId, username, phone, email, address, city, state, zip) {
    return knex('users').where('id', userId).update({
      username: username,
      phone: phone,
      email: email,
      address: address,
      city: city,
      state: state,
      zip: zip
    });
  },
  getUserRating: function(userID) {
    return knex('users').avg('rating').innerJoin('rating_driver','rating_driver.user_id','users.id').where('users.id',userID).first();
  },
  isUserInRideID: function(userID) {
    return knex('ride').innerJoin('rider', 'rider.user_id', 'ride.id').innerJoin('users', 'users.id', 'rider.user_id').where('users.id', userID);
  }
};

module.exports = query;
