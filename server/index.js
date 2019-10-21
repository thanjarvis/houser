require('dotenv').config()
const ctrl = require('./controller')
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/houses', ctrl.getAll)
app.post('/api/addNew', ctrl.addNew)
app.delete('/api/deleteOne/:id', ctrl.deleteOne)





// console.log('heres the connection string', CONNECTION_STRING);



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB connected')
})

const port = SERVER_PORT
app.listen(port, () => console.log(`server running on port ${port}`))

