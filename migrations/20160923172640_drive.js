
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drive',function(table){
    table.increments();
    // Need to limit to being able to put in RWD, FWD, AWD, 4WD
    table.string('type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(); 
};
