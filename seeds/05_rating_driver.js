
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rating_driver').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('rating_driver').insert({id: 1, user_id: 1, rating: 5}),
        knex('rating_driver').insert({id: 2, user_id: 1, rating: 4}),
        knex('rating_driver').insert({id: 3, user_id: 1, rating: 5}),
        knex('rating_driver').insert({id: 4, user_id: 2, rating: 5}),
        knex('rating_driver').insert({id: 5, user_id: 2, rating: 4}),
        knex('rating_driver').insert({id: 6, user_id: 3, rating: 5}),
        knex('rating_driver').insert({id: 7, user_id: 4, rating: 2}),
        knex('rating_driver').insert({id: 8, user_id: 4, rating: 3})
      ]);
    });
};
