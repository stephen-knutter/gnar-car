
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drive').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('drive').insert({id: 1, type: 'AWD'}),
        knex('drive').insert({id: 2, type: 'FWD'}),
        knex('drive').insert({id: 3, type: 'RWD'}),
        knex('drive').insert({id: 4, type: '4WD'})
      ]);
    });
};
