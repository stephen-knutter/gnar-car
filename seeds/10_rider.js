
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rider').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('rider').insert({ride_id: 1, user_id: 1}),
        knex('rider').insert({ride_id: 1, user_id: 2}),
        knex('rider').insert({ride_id: 1, user_id: 3}),
        knex('rider').insert({ride_id: 2, user_id: 1}),
        knex('rider').insert({ride_id: 3, user_id: 2})
      ]);
    });
};
