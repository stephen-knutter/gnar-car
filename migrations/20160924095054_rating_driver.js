
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rating_driver', function(table){
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('rating');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rating_driver');
};
