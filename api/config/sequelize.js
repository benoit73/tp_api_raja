const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://root:root@127.0.0.1:5432/postgres');

module.exports = sequelize;