const mongoose = require('mongoose');

const dbConnection = (() => {
    mongoose.connect("mongodb://localhost/myApp")
    .then(() => console.log('Connected to database.....'))
    .catch((err) => console.log('An error occured:', err.message))
});

module.exports = dbConnection;