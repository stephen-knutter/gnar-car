
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drive').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('drive').insert({type: 'AWD'}),
        knex('drive').insert({type: 'FWD'}),
        knex('drive').insert({type: 'RWD'}),
        knex('drive').insert({type: '4WD'})
      ]);
    });
};
