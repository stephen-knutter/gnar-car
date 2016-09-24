
exports.up = function(knex, Promise) {
  knex.schema.createTable('rating_rider', function(table){
    table.increments();
    table.integer('user_id').references('id').inTable('user').onDelete('CASCADE');
    table.integer('rating');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('rating_rider');
};
