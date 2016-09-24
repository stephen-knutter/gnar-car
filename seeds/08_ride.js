
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ride').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ride').insert({car_id: 1, mountain_id: 1, home_depTime: '2016-12-01 6:00:00', mtn_depTime: '2016-12-01 15:00:00', seats_avail: 4, cost_seat: 15.00, meetupLoc_lat: 39.7532293, meetupLoc_long: 105.0024597, pickup: false})
      ]);
    });
};
