
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ride', function(table) {
    table.increments();
    table.integer('car_id').references('id').inTable('car').onDelete('CASCADE');
    table.integer('mountain_id').references('id').inTable('mountain').onDelete('CASCADE');
    table.date('departure_date');
    table.time('departure_time');
    table.date('return_date');
    table.time('return_time');
    table.integer('seats_avail');
    table.float('cost_seat');
    table.string('meetup_loc');
    table.boolean('pickup');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ride');
};
