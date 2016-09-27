var knex = require('./config');

// Ride Queries
function getRides(){
  return knex('ride');
}

function getRideMountainDriverData(){
  return knex('ride').select('ride.seats_avail', 'ride.cost_seat', 'ride.home_depTime','mountain.name','mountain.id','mountain.image_url','users.username').innerJoin('mountain','mountain.id','ride.mountain_id').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('users','users.id','car_user.user_id');
}

function getRidesByMountainId(id){
  return getRides().where('mountain_id',id);
}

module.exports = {
  getRides: getRides,
  getRideMountainDriverData: getRideMountainDriverData,
  getRidesByMountainId: getRidesByMountainId
};
