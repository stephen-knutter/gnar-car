var knex = require('./db/knex.js');

// Ride Queries
function getRides(){
  return knex('ride');
}

function getRidesByMountainId(id){
  return getRides().where('mountain_id',id);
}

module.exports = {
  getRides: getRides,
  getRidesByMountainId: getRidesByMountainId
};
