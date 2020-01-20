const Setup = require("./src/Database/Setup");

const express = require('express');
const app = express();
const dotenv = require('dotenv');
var path = require('path');

const Connection = require('./src/Database/Connecion');


dotenv.config();

const PORT = process.env.PORT || 8080;
const pathToDatabase = process.env.DB_PATH;
(async () => {


        let database;


        try {
            database = await Connection(pathToDatabase);
        } catch (e) {
            console.log(e)
        }
        console.log(database);

        try {
            new Setup(database);
        } catch (e) {
            console.log(e)
        }


        app.use(express.static(path.join(__dirname, 'static')));

        app.get("/", (req, res) => {
            res.redirect('/index.html');
        });

        app.listen(PORT, function () {
            console.log(`App listening on port ${PORT}!`);
        });

    }
)();
