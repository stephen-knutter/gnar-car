
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.string('username');
    table.string('password');
    table.string('phone');
    table.string('email');
    table.string('address');
    table.string('city');
    table.string('state');
    table.integer('zip');
    table.string('imageURL');
    table.boolean('admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
