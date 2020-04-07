const express = require('express')
const db = require('./config/db')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

//config of db
db();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
require('./routes')(app)

app.listen(process.env.PORT || 3001, () => {
    console.log('API running')
})