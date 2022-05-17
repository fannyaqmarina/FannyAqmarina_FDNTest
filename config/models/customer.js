const Sequelize = require('sequelize');
const db = require('../database');
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Customer = db.define('customer', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
      type:DataTypes.STRING
  },
  price:{
      type:DataTypes.DOUBLE
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  timestamp:false
});
 
// Export model Customer
export default Customer;