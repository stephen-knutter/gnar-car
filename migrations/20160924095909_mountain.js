
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mountain', function(table){
    table.increments();
    table.string('name');
    table.string('api_url');
    table.float('lat');
    table.float('long');
    table.text('description');
    table.integer('elevation');
    table.integer('runs');
    table.string('image_url');
    table.string('website');
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mountain');
};
