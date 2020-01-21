class CurrentInformation {

    constructor(database) {
        this.database = database;
    }


    async getList() {
        let list = await this.database.all('select * from CurrentInformation');
        return list;
    }

    async get(id) {
        let row = await this.database.get('select * from CurrentInformation where id = ?', [id]);
        return row;
    }

    async add(text) {
        let row = await this.database.run('insert into  CurrentInformation (text) values (?)', [text]);
        return row;
    }

    async edit(data) {
        let row = await this.database.run('update CurrentInformation set text = ? where id = ?', [data.text, data.id]);
        return row;
    }

    async delete(id) {
        let row = await this.database.run('delete from CurrentInformation where id = ?', [id]);
        return row;
    }


}

module.exports = CurrentInformation;