
exports.up = function(knex, Promise) {
  knex.schema.createTable('mountain', function(table){
    table.increments();
    table.string('name');
    table.string('api_url');
    table.float('lat');
    table.float('long');
    table.text('description');
    table.integer('elevation');
    table.integer('runs');
    table.string('imageURL');
    table.string('website');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('mountain');
};
