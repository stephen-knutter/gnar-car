//SET NODE_ENV=production IN .env FILE
var environment = process.env.NODE_ENV;
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
