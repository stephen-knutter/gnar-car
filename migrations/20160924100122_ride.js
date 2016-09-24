
exports.up = function(knex, Promise) {
  knex.schema.createTable('ride', function(table){
    table.increments();
    table.integer('car_id').references('id').inTable('car').onDelete('CASCADE');
    table.integer('mountain_id').references('id').inTable('mountain').onDelete('CASCADE');
    table.timestamp('home_depTime');
    table.timestamp('mtn_depTime');
    table.integer('seats_avail');
    table.money('cost_seat');
    table.float('meetupLoc_lat');
    table.float('meetupLoc_long');
    table.boolean('pickup');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('ride');
};
