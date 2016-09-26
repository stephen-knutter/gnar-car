
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car_user', function(table){
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('car_id').references('id').inTable('car').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.unique(['user_id', 'car_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('car_user');
};
