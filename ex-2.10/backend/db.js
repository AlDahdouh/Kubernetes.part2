require("dotenv").config();
const Pool = require("pg").Pool;
// console.log(`process.env.POSTGRES_USER = ${process.env.POSTGRES_USER}`);
// console.log(`process.env.POSTGRES_HOST = ${process.env.POSTGRES_HOST}`);
// console.log(`process.env.POSTGRES_DB = ${process.env.POSTGRES_DB}`);
// console.log(`process.env.POSTGRES_PASSWORD = ${process.env.POSTGRES_PASSWORD}`);

const connection = {
  user: process.env.POSTGRES_USER.trim(),
  host: process.env.POSTGRES_HOST.trim(),
  database: process.env.POSTGRES_DB.trim(),
  password: process.env.POSTGRES_PASSWORD.trim(),
  port: 5432,
};
console.log("connection == ", connection);
const pool = new Pool(connection);

module.exports = pool;
