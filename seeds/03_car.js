
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('car').insert({id: 1, make: 'toyota', model: '4Runner', max_seats: 4, drive_id: 1, ski_rack: true, smoking: false, dog: true}),
        knex('car').insert({id: 2, make: 'subaru', model: 'forester', max_seats: 4, drive_id: 1, ski_rack: true, smoking: false, dog: false}),
        knex('car').insert({id: 3, make: 'volvo', model: 'XC90', max_seats: 6, drive_id: 1, ski_rack: true, smoking: true, dog: true}),
        knex('car').insert({id: 4, make: 'toyota', model: 'camry', max_seats: 4, drive_id: 2, ski_rack: false, smoking: false, dog: false})
      ]);
    });
};
