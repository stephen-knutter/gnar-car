
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'user1', password: '$2a$10$hivSJerqoWNWzIXQj36PQ.P2X0GLki3rVoSkaNWF9z.1Jg7U2Mwzy', phone: '3035555555', email: 'user@gmail.com', address: '1234 Main St.', city: 'Denver', state: 'CO', zip: '80216', image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg', admin: true}),
      ]);
    });
};
