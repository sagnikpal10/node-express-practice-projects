const route = require('express').Router()
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
})

route.get('/',(req,res)=>{
    connection.query(
        `SELECT * FROM persons`,
        function(err, rows, cols) {
            if (err) {
                console.error(err)
            } else {
                res.send(rows)
            }
        }
    )
})

route.post('/',(req,res)=>{
    connection.query(
        `INSERT INTO persons (name, age, city) VALUES (
            '${req.body.name}',
            ${req.body.age},
            '${req.body.city}'
        )`,
        function(err, rows,cols) {
            if (err) {
                console.error(err)
            } else {
                res.redirect('/')
            }
        }
    )
})

module.exports = route