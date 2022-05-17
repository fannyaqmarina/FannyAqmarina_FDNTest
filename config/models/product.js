const Sequelize = require('sequelize');
const db = require('../database');
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const productModel = db.define('products', {
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
  timestamps: false,
  createdAt: false,
  updatedAt: false

});
 
module.exports=productModel