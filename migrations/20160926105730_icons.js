
exports.up = function(knex, Promise) {
  return knex.schema.createTable('icons', function(table) {
    table.increments();
    table.string('icon');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('icons');
};
