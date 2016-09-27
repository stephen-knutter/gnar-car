var knex = require('./config');

// Ride Queries
function getRides(){
  return knex('ride');
}

function getRideMountainDriverData(){
  return knex('ride').select('ride.id AS rideID','ride.seats_avail', 'ride.cost_seat', 'ride.home_depTime','mountain.name','mountain.id AS mountainID','mountain.image_url','users.username').innerJoin('mountain','mountain.id','ride.mountain_id').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('users','users.id','car_user.user_id');
}

function getRideDataLimitThree(){
  return getRideMountainDriverData().orderBy('ride.home_depTime','desc').limit(3);
}

function getRideMountainDriverDataByMountainId(id){
  return getRideMountainDriverData().where('mountain_id',id);
}

module.exports = {
  getRides: getRides,
  getRideMountainDriverData: getRideMountainDriverData,
  getRideDataLimitThree: getRideDataLimitThree,
  getRideMountainDriverDataByMountainId: getRideMountainDriverDataByMountainId
};
