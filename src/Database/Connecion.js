let sqlite3 = require('sqlite3').verbose(); // Variante mit Debugging-Informationen

let connectedDatabase = (pathToFile) => {
    let db = new sqlite3.Database(pathToFile, (error) => {
        if (error) {
            console.error(error.message);
            throw error;
        } else {
            console.log('Connected to the SQlite database.');
            return db;
        }
    });
};


module.exports = connectedDatabase;
