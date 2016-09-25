
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rating_rider').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('rating_rider').insert({id: 1, user_id: 1, rating: 5}),
        knex('rating_rider').insert({id: 2, user_id: 1, rating: 5}),
        knex('rating_rider').insert({id: 3, user_id: 1, rating: 5})
      ]);
    });
};
