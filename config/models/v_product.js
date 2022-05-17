const Sequelize = require('sequelize');
const db = require('../database');
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const productModel = db.define('v_product', {
  // Define attributes
  fullname:{
      type:DataTypes.STRING
  },
  email:{
    type:DataTypes.STRING
},
item:{
  type:DataTypes.STRING
},
  price:{
      type:DataTypes.DOUBLE
  },
  id_customer: {
    type: DataTypes.BIGINT
  },
  id_product: {
    type: DataTypes.BIGINT
  },
  customerid: {
    type: DataTypes.BIGINT
  },
  productid: {
    type: DataTypes.BIGINT
  },
  quantity: {
    type: DataTypes.BIGINT
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  timestamps: false,
  createdAt: false,
  updatedAt: false

});
productModel.removeAttribute('id');
 
module.exports=productModel