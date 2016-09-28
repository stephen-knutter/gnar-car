
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car_user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('car_user').insert({id: 1, user_id: 1, car_id: 1}),
        knex('car_user').insert({id: 2, user_id: 2, car_id: 2}),
        knex('car_user').insert({id: 3, user_id: 3, car_id: 3}),
        knex('car_user').insert({id: 4, user_id: 4, car_id: 4})
      ]);
    });
};
