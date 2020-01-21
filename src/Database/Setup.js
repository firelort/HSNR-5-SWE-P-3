const CantCreateTableException = require("./Exception/CantCreateTableException");


class Setup {
    constructor(database) {
        this.database = database;

        this.createTables();

    }

    createTables() {
        this.createCurrentInformtionTable();

    }

    async createCurrentInformtionTable() {

        try {
            await this.database.run(`CREATE TABLE CurrentInformation
                           (
                               id   INTEGER PRIMARY KEY AUTOINCREMENT,
                               text text
                           )`);
        } catch (e) {
            throw new CantCreateTableException("CurrentInformation", e);
        }



    }
}

module.exports = Setup;