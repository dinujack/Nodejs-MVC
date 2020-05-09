const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

exports.getResult = (query, dataCallback) => {
    connection.query(query, (err, rows) => {
        if (err) console.log(err);
        dataCallback(rows);
    })
}