var knex = require('./db/knex.js');

// Mountains Queries

function findMountains(){
  return knex('mountain');
}

function findMountainsById(id){
  return findMountains().where('id',id);
}

// Weather Icon Queries

function getWeatherIcon(id){
  return knex('icons').select('icon').where('id',id);
}

module.exports = {
  hashPassword: hasPassword,
  findUser: findUser,
  findUserInformation: findUserInformation,
  findHashedPassword: findHashedPassword,
  authenticateUser: authenticateUser,
  addUser: addUser,

  findMountains: findMountains,
  findMountainsById: findMountainsById,
  getWeatherIcon: getWeatherIcon
};
