
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ride').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ride').insert({id: 1, car_id: 1, mountain_id: 1, home_depTime: '2016-12-01 6:00:00', mtn_depTime: '2016-12-01 15:00:00', seats_avail: 4, cost_seat: 15.00, meetupLoc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 2, car_id: 1, mountain_id: 2, home_depTime: '2016-12-17 5:00:00', mtn_depTime: '2016-12-17 15:00:00', seats_avail: 2, cost_seat: 20.00, meetupLoc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 3, car_id: 1, mountain_id: 3, home_depTime: '2016-12-10 6:00:00', mtn_depTime: '2016-12-10 15:00:00', seats_avail: 1, cost_seat: 10.00, meetupLoc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 4, car_id: 1, mountain_id: 4, home_depTime: '2017-01-01 6:00:00', mtn_depTime: '2017-01-01 15:00:00', seats_avail: 3, cost_seat: 15.00, meetupLoc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 5, car_id: 1, mountain_id: 5, home_depTime: '2017-03-01 6:00:00', mtn_depTime: '2017-03-01 15:00:00', seats_avail: 2, cost_seat: 12.00, meetupLoc: 'Union Station', pickup: false})
      ]);
    });
};
