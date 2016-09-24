
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('car').insert({make: 'toyota', model: '4Runner', max_seats: 4, drive_id: 'AWD', ski_rack: true, smoking: false, dog: true})
      ]);
    });
};
