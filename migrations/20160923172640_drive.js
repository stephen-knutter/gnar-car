
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drive',function(table){
    table.increments();
    table.string('type');
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drive');
};
