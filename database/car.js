var knex = require('./config');

var query = {
  insertCar: function(userId, make, model, seats, skiracks, drive, smoking, dogs) {
    return knex('car').insert({
      make: make,
      model: model,
      max_seats: seats,
      drive_id: drive,
      ski_rack: skiracks,
      smoking: smoking,
      dog: dogs
    })
    .returning('id')
    .then(function(response) {
      var carId = response[0];
      return knex('car_user').insert({user_id: userId, car_id: carId});
    });
  },
  updateCar: function(carId, make, model, seats, skiracks, dogs, drive, smoking) {
    return knex('car').where('id', carId).update({
      make: make,
      model: model,
      max_seats: seats,
      drive_id: drive,
      ski_rack: skiracks,
      smoking: smoking,
      dog: dogs
    });
  }
};

module.exports = query;
