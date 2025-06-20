require('dotenv').config();
const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const dbConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    operatorAliases: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.connex = dbConnection;
db.packages = require('./packages.model')(dbConnection, Sequelize);
module.exports = db;
