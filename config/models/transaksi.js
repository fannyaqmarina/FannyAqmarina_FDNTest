const Sequelize = require('sequelize');
const db = require('../database');
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Transaksi = db.define('transaction', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  id_customer:{
      type:DataTypes.INTEGER
  },
  id_product:{
      type:DataTypes.INTEGER
  },
  quantity:{
      type:DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  timestamp:false
});
 
// Export model Product
export default Transaksi;