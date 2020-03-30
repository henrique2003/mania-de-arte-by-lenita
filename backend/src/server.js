const express = require('express');
const db = require('./config/db');
const morgan = require('morgan');
const app = express();

//config of db
db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
require('./routes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('API running');
})