const sql = require("mysql");
const config = require("./config");

let dbconfig = {
    host: config.databaseHost,
    port: config.databasePort,
    database: config.database,
    user: config.databaseUser,
    password: config.databasePassword
};
const conn = sql.createConnection(dbconfig);

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = conn;