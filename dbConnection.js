// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

// module.export = connection;

const query = require('node-querybuilder')

const settings = {
  host: process.env.HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dateStrings: true,
  charset : 'utf8mb4',
};
const qb = query.QueryBuilder(settings, 'mysql', 'single');
console.log("Connection establish successfully!");
module.exports = qb;