var cryptHelper = require('./crypt');
var dateTimeHelper = require('./dateTime');
var dbConnectHelper = require('./dbConnect');
var idGenHelper = require('./idGen');

function updateAuthenticationLastLogIn(req, res, authenticationId){
    var loginTime = dateTimeHelper.utcNow();
    dbConnectHelper.connectAndQuery(req, res
        , 'UPDATE authentication SET ' +
            'last_login = $1 WHERE ' +
            'authentication_id =  $2'
        , [
            loginTime
            , authenticationId
        ]);
}


//Generic log in method - taken care of legacy method. Requires cp-legacy password compat if legacy option is chosen
exports.authenticate = function(req, res, userString, pass, legacy, callback){
    var userStringLower = userString.toLowerCase();
    dbConnectHelper.connectAndQuery(req, res
        , 'SELECT * FROM authentication WHERE ' +
            'authentication_string_lower =  $1'
        , [userStringLower]
        , function(result){
            if (result.rows.length == 0){
                callback(false);
            }else{
                var authenticationId = result.rows[0].authentication_id;
                //if user is found, check the password
                var userHash = result.rows[0].hash;
                var authenticated = cryptHelper.decrypt(req, res, pass, userHash);
                if (authenticated){
                    callback(true, authenticationId);
                    updateAuthenticationLastLogIn(req, res, authenticationId);
                }else{
                    if (legacy){
                        //LEGACY METHOD
                        cryptHelper.legacyDecrypt(req, res, pass, userHash, function(legacyAuth){
                            if (legacyAuth){
                                callback(true, authenticationId);
                                updateAuthenticationLastLogIn(req, res, authenticationId);
                            }else{
                                callback(false);
                            }
                        });
                    }else{
                        callback(false);
                    }
                }
            }
        });

}

//Generic signup method
exports.newAuthentication = function(req, res, userString, pass, firstname, lastname){
    var userStringLower = userString.toLowerCase();
    var hash = cryptHelper.encrypt(req, res, pass);
    var name = firstname + " " + lastname;

    var authenticationId = idGenHelper.generateId();
    var entityId = idGenHelper.generateId();

    var createDate = dateTimeHelper.utcNow();

    dbConnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  add_authentication($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
        , [
            authentication_id
            , userString
            , userStringLower
            , hash
            , null
            , null
            , null
            , null
            , null
            , null
            , null
            , createDate
            , null
        ],
         function(){
             dbConnectHelper.connectAndQuery(
                 req
                 , res
                 , 'SELECT * FROM  add_entity($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
                 , [
                     entityId
                     , firstname
                     , lastName
                     , null
                     , name
                     , 'U'
                     , 'f'
                     , 1
                     , createDate
                     , null
                     , authenticationId
                     , userStringLower
                     , null
                 ],
                function(){
                    //after creating both the authentication and entity, return the entity detail
                    dbConnectHelper.connectAndQuery(
                        req
                        , res
                        , 'SELECT * FROM  get_admin_entity_detail($1, $2, $3, $4)'
                        , [
                            entityId
                            , authenticationId
                            , null
                            , null
                        ],
                        function(result){
                            res.json({
                                RowsReturned : 1,
                                Data : result.rows[0],
                                Error : false,
                                ErrorDesc : null,
                                ErrorCode: null
                            })
                        }
                    );
                }
             );
     });
}

//Generic password change method
exports.changeAuthenticationPass = function (req, res, oldPass, newPass){

}

//Generic password request method
exports.requestAuthenticationPass = function (req, res, email){

}