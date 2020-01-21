class CantCreateTableException {


    constructor(tablename, databaseError) {
        this.message = `Die Tabelle "${tablename}" konnte nicht erstellt werden.`;
        this.error = databaseError;
        this.errorCode = "0001";
    }

}

module.exports = CantCreateTableException;