const express = require('express')
const srv = express()
const route = require('./routes/api')
srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.get('/',(req,res)=>{
    res.send('Hello')
})

srv.use('/todos',route)

srv.listen(3000,()=>{
    console.log('The server is running on http://localhost:3000/')
})