const CurrentInformation = require("./src/Database/CurrentInformation");

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

        app.use(express.json());
        app.use(express.static(path.join(__dirname, 'static')));


        app.get("/", (req, res) => {
            res.sendFile(__dirname + 'static/index.html');
        });

        app.get("/list", (req, res) => {
            res.sendFile(__dirname + '/static/list.html');
        });

        app.get("/list/:id", (req, res) => {
            res.sendFile(__dirname + '/static/detail.html');
        });

        app.get("/list/add", (req, res) => {
            res.sendFile(__dirname + '/static/detail.html');
        });


        app.get("/api/aktuelle-hinweise", async (req, res) => {
            let ci = new CurrentInformation(database);
            res.json(await ci.getList());
        });

        app.post("/api/aktuelle-hinweise", async (req, res) => {
            let ci = new CurrentInformation(database);
            res.json(await ci.add(req.body.text));
        });

        app.put("/api/aktuelle-hinweise/:id", async (req, res) => {

            let ci = new CurrentInformation(database);
            res.json(await ci.edit(req.body));
        });

        app.delete("/api/aktuelle-hinweise/:id", async (req, res) => {

            let ci = new CurrentInformation(database);
            ci.delete(req.params.id);
            res.json({status: "ok"});
        });

        app.get("/api/aktuelle-hinweise/:id", async (req, res) => {
            let ci = new CurrentInformation(database);
            res.send(await ci.get(req.params.id));
        });

        app.listen(PORT, function () {
            console.log(`App listening on port ${PORT}!`);
        });

    }
)();
