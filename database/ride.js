var knex = require('./config');

// Ride Queries
function getRides(){
  return knex('ride');
}

function getRideData(){
  return knex('ride').select('ride.id AS rideID','ride.seats_avail', 'ride.cost_seat', 'ride.home_depTime', 'ride.meetup_loc', 'mountain.name','mountain.id AS mountainID','mountain.image_url','users.username','users.image_url').innerJoin('mountain','mountain.id','ride.mountain_id').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('users','users.id','car_user.user_id').orderBy('ride.home_depTime','asc');
}

function getCarDataByRideID(rideID){
  return knex('ride').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('car','car.id','car_user.car_id').innerJoin('drive','car.drive_id','drive.id').where('ride.id',rideID);
}

function getRideDataByRideID(rideID){
  return getRideData().where('ride.id',rideID);
}

function getRideDataLimitThree(){
  return getRideData().limit(3);
}

function getRideDataByMountainId(id){
  return getRideData().where('mountain_id',id);
}

function getDriverRatingByRideID(rideID){
  return knex('ride').avg('rating').innerJoin('car_user','car_user.user_id','ride.car_id').innerJoin('users','car_user.user_id','users.id').innerJoin('rating_driver','rating_driver.user_id','users.id').where('ride.id',rideID).first();
}


module.exports = {
  getRides: getRides,
  getRideData: getRideData,
  getCarDataByRideID: getCarDataByRideID,
  getRideDataByRideID: getRideDataByRideID,
  getRideDataLimitThree: getRideDataLimitThree,
  getRideDataByMountainId: getRideDataByMountainId,
  getDriverRatingByRideID: getDriverRatingByRideID
};
