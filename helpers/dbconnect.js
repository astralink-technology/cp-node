var config = require('../config/webConfig');
var pg = require('pg');

exports.connectAndQuery = function(req, res, queryString, variables){
    var dbConfig = config.dbConfig();
    var conString = dbConfig.appName + "://" +  dbConfig.username + ":" + dbConfig.password + "@" + dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.db;
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            console.log(err + " " + conString);
        }
        client.query(
            queryString
            , variables
            , function(err, result) {
                if(err) {
                    return console.error(err);
                }else{
                    res.json(result.rows);
                }
                client.end();
            });
    });
}