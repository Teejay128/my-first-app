const express = require('express');
const dbConnection = require('./dbConnection');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Xup Bitches');
});

dbConnection();

app.listen(PORT, () => {
    console.log("Server is up and running at localhost:port", PORT);
});