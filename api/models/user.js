const dbConnection = require('../configs/database')

exports.getData = (data, callback) => {
    var query = 'SELECT * FROM login WHERE username = "' + data.userName + '" AND password = "' + data.password + '"';
    dbConnection.getResult(query, (dataCallback) => {
        callback(dataCallback)
    })
}
