const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
})

module.exports = connection