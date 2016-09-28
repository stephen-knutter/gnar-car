exports.up = function(knex, Promise) {
  return knex.schema.createTable('rider', function(table) {
    table.integer('ride_id').references('id').inTable('ride').onDelete('CASCADE');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.unique(['ride_id', 'user_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rider');
};
