
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car_user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('car_user').insert({user_id: 1, car_id: 1})
      ]);
    });
};
