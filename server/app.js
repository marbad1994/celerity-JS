const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

/**
 * MIDDLEWARES
**/

app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

/**
 * *ROUTES
**/
app.get('/', (req, res) => {
    res.send('WE aRE ON HOME');
});


/**
 * DATABASE
**/
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () =>  console.log("connected to db")
);

app.listen(3002);