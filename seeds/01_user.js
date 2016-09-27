exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          username: 'user1',
          password:
          '$2a$10$hivSJerqoWNWzIXQj36PQ.P2X0GLki3rVoSkaNWF9z.1Jg7U2Mwzy',
          phone: '3035555555',
          email: 'user1@gmail.com',
          address: '1234 Main St.',
          city: 'Denver',
          state: 'CO',
          zip: '80216',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg',
          admin: true
        }),
        knex('users').insert({
          id: 2,
          username: 'user2',
          password: '222222######################',
          phone: '3035554945',
          email: 'user2@gmail.com',
          address: '567 Broadway St.',
          city: 'Denver',
          state: 'CO',
          zip: '80202',
          image_url: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-md.png',
          admin: true
        }),
        knex('users').insert({
          id: 3,
          username: 'user3',
          password: '33333######################',
          phone: '3036666666',
          email: 'user3@gmail.com',
          address: '89 Frontage Rd.',
          city: 'Denver',
          state: 'CO',
          zip: '80212',
          image_url: 'http://cliparts.co/cliparts/8cz/Kjx/8czKjxbqi.jpg',
          admin: true
        }),
        knex('users').insert({
          id: 4,
          username: 'user4',
          password: '44444######################',
          phone: '30390909090',
          email: 'user4@gmail.com',
          address: '10 Second Pkwy.',
          city: 'Denver',
          state: 'CO',
          zip: '80112',
          image_url: 'http://vignette2.wikia.nocookie.net/ghostbusters/images/1/11/Bill_Murray.jpeg',
          admin: true
        })
      ]);
    });
};
