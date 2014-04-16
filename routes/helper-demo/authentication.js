var authHelper = require('../../helpers/authentication');
var dbConnectHelper = require('../../helpers/dbConnect');

exports.auth = function(req, res){
    authHelper = authHelper.authenticate(req, res, 'shiweifong@gmail.com', 's8944896d', true, function(result, authenticationId){
        //if its app side authentication, requires entity details to be returned
        dbConnectHelper.connectAndQuery(req, res
            , 'SELECT * FROM entity WHERE ' +
                'authentication_id =  $1'
            , [authenticationId]
            , function(result){
                res.json({
                    RowsReturned : result.rows.length,
                    Data : result.rows,
                    Error : null,
                    ErrorDesc : null,
                    ErrorCode: null
                });
            });
    });
}