var knex = require('./config');

// Ride Queries
function getRides(){
  return knex('ride');
}

function addRide(car_id, mountain_id, departureDate, departureTime, returnDate, returnTime, seats_avail, cost_seat, meetup_loc){
  var home_depTime = departureDate + ' ' + departureTime;
  var mtn_depTime = returnDate + ' ' + returnTime;
  return knex('ride').insert({car_id: car_id, mountain_id: mountain_id, home_depTime: home_depTime, mtn_depTime: mtn_depTime, seats_avail: seats_avail, cost_seat: cost_seat, meetup_loc: meetup_loc, pickup: false});
}

function getRideData(){
  return knex('ride').select('ride.id AS rideID','ride.seats_avail', 'ride.cost_seat', 'ride.home_depTime', 'ride.meetup_loc', 'mountain.name','mountain.id AS mountainID','mountain.image_url AS mountain_image','users.username','users.image_url').innerJoin('mountain','mountain.id','ride.mountain_id').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('users','users.id','car_user.user_id').orderBy('ride.home_depTime','asc');
}

function getCarDataByRideID(rideID){
  return knex('ride').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('car','car.id','car_user.car_id').innerJoin('drive','car.drive_id','drive.id').where('ride.id',rideID);
}

function getRideDataByRideID(rideID){
  return getRideData().where('ride.id',rideID);
}

function getRideDataByUserID(userID){
  return getRideData().where('users.id',userID);
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
  addRide: addRide,
  getRideData: getRideData,
  getCarDataByRideID: getCarDataByRideID,
  getRideDataByRideID: getRideDataByRideID,
  getRideDataByUserID: getRideDataByUserID,
  getRideDataLimitThree: getRideDataLimitThree,
  getRideDataByMountainId: getRideDataByMountainId,
  getDriverRatingByRideID: getDriverRatingByRideID
};
