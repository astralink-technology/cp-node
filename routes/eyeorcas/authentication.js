var authHelper = require('../../helpers/authentication');
var dbConnectHelper = require('../../helpers/dbConnect');
var dateTimeHelper = require('../../helpers/dateTime');

exports.authenticate = function(req, res){
    if (
            req.body.AuthenticationString &&
            req.body.Password
        ){
        var authenticationString = null;
        var password = null;

        if (req.body.AuthenticationString) authenticationString= req.body.AuthenticationString;
        if (req.body.Password) password = req.body.Password;

        authHelper.authenticate(req, res, authenticationString, password, true, function(authenticated, authenticationId){
            if (authenticated){
                //if user is authenticated
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
            }else{
                res.json({
                    RowsReturned : null,
                    Data : false,
                    Error : true,
                    ErrorDesc : 'Authentication Failed',
                    ErrorCode: null
                });
            }

        });

    }else{
        res.json({
            RowsReturned : null,
            Data : false,
            Error : true,
            ErrorDesc : 'Username and Password Required',
            ErrorCode: null
        });
    }
};

exports.verifyAccount = function(req, res){
    if (
            req.query.AuthenticationId
        ){

        var authenticationId = req.query.AuthenticationId;
        var lastUpdate = dateTimeHelper.utcNow();

        dbConnectHelper.connectAndQuery(req, res
            , 'UPDATE entity SET ' +
                'status = $1, ' +
                'approved = $2, ' +
                'last_update = $3 WHERE ' +
                'authentication_id =  $4'
            , [
                'V'
                , 't'
                , lastUpdate
                , authenticationId
            ],
        function(){
            res.json({
                RowsReturned : null,
                Data : true,
                Error : false,
                ErrorDesc : null,
                ErrorCode: null
            });
        });
    }else{
        res.json({
            RowsReturned : null,
            Data : false,
            Error : true,
            ErrorDesc : 'Unauthorized Access!',
            ErrorCode: null
        });
    }
}