var bcrypt = require('bcrypt');
var knex = require('./db/knex.js');




// Mountains Queries

function findMountains(){
  return knex('mountain');
}

function findMountainsById(id){
  return findMountains().where('id',id);
}

module.exports = {
  findMountains: findMountains,
  findMountainsById: findMountainsById
};
