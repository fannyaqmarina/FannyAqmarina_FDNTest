var Sequelize = require('sequelize');
 
// create connection
const db = new Sequelize('fdn_test', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});
 
module.exports = db;