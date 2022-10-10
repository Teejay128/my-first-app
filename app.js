const express = require('express');
const dbConnection = require('./models/dbConnection');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Xup Bitches');
});

dbConnection();

app.listen(PORT, () => {
    console.log("Server is up and running at localhost:port", PORT);
});