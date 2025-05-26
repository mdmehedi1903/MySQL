const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
process.env.DB_NAME, //dbname
process.env.DB_USER, //dbuser
process.env.DB_PASS, //dbpassword 
{
  host: process.env.DB_HOST, //dbhost
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;

