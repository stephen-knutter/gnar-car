
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', function(table){
    table.increments();
    table.string('make');
    table.string('model');
    table.integer('max_seats');
    table.integer('drive_id').references('id').inTable('drive');
    table.boolean('ski_rack');
    table.boolean('smoking');
    table.boolean('dog');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('car');
};
