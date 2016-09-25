
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', function(table){
    table.increments();
    table.string('make');
    table.string('model');
    table.integer('max_seats');
    table.integer('drive_id');
    table.boolean('ski_rack');
    table.boolean('smoking');
    table.boolean('dog');
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('car');
};
