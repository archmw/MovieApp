
/**
 * create a module for db connections and add it to export list so it can be reused in other module
*/

const mysql = require('mysql');

function connect(){
    const connection = mysql.createConnection({
        user: 'dmc',
        password: 'dmc',
        host: 'localhost',
        database: 'moviesdb',
        port: 3306
    });
    connection.connect();
    return connection;
}

module.exports = {
    connect: connect
}