const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ler_manga',
});

module.exports = connection;