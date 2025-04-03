const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Product = sequelize.define(
  'Product',
  {
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    price: {
        type: DataTypes.FLOAT,
    },
    quantity: {
        type: DataTypes.INTEGER,
    }
  },

);
module.exports = Product;