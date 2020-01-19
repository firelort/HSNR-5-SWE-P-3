let Database = require('sqlite-async'); // Variante mit Debugging-Informationen

let connectedDatabase = async (pathToFile) => {
    try {
        let db = Database.open(pathToFile);
        console.log('Connected to the SQlite database.');
        return db;
    } catch (e) {
        console.error(e.message);
        throw e;
    }

};


module.exports = connectedDatabase;
