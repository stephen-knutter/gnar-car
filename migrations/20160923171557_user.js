
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.string('password');
    table.string('phone');
    table.string('email');
    table.string('address');
    table.string('city');
    table.string('state');
    table.integer('zip');
    table.string('image_url');
    table.boolean('admin');
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
