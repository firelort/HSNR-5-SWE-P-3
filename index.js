const express = require('express');
const app = express();
const dotenv = require('dotenv');
var path = require('path');

dotenv.config();

const PORT = process.env.PORT || 8080;
const pathToDatabase = process.env.DB_PATH;

const database = require('./src/Database/Connecion')(pathToDatabase);

app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    res.redirect('/index.html');
});

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});