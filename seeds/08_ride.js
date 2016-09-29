
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ride').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ride').insert({id: 1, car_id: 1, mountain_id: 1, departure_date: '2016-12-01', departure_time: '6:00:00', return_date: '2016-12-01', return_time: '15:00:00', seats_avail: 4, cost_seat: 15.00, meetup_loc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 2, car_id: 1, mountain_id: 2, departure_date: '2016-12-17', departure_time: '5:00:00', return_date: '2016-12-17', return_time: '15:00:00', seats_avail: 2, cost_seat: 20.00, meetup_loc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 3, car_id: 1, mountain_id: 3, departure_date: '2016-12-10', departure_time: '6:00:00', return_date: '2016-12-10', return_time: '15:00:00', seats_avail: 1, cost_seat: 10.00, meetup_loc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 4, car_id: 1, mountain_id: 4, departure_date: '2017-01-01', departure_time: '6:00:00', return_date: '2017-01-01', return_time: '15:00:00', seats_avail: 3, cost_seat: 15.00, meetup_loc: 'Union Station', pickup: false}),

        knex('ride').insert({id: 5, car_id: 1, mountain_id: 5, departure_date: '2017-03-01', departure_time: '6:00:00', return_date: '2017-03-01', return_time: '15:00:00', seats_avail: 2, cost_seat: 12.00, meetup_loc: 'Union Station', pickup: false})
      ]);
    });
};
