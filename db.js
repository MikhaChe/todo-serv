const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PSW,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)