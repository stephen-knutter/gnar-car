
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car_user', function(table){
    table.integer('user_id').references('id').inTable('user').onDelete('CASCADE');
    table.integer('car_id').references('id').inTable('car').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('car_user');
};
