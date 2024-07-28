const express = require('express')
const cors = require('cors')
const {db} = require('./controller/db/db')
const {readdirSync} = require('fs')
const app = express()



//middleware
app.use(express.json())
app.use(cors())


//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))



app.listen(3000,()=>{
    console.log('server started on port 3000.')
})