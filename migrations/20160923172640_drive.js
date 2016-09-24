
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drive',function(table){
    table.increments();
    table.string('type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drive');
};
