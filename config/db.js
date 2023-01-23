import { Sequelize } from "sequelize";
// const mysql = require('mysql2');


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '25_Cyn_14>25',
//   database: 'validation_app'
// });

// module.exports = connection

const db = new Sequelize('snb_validation', 'root', '25_Cyn_14>25',
{
    host : "localhost",
    dialect : "mysql"
})

export default db;