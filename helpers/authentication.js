var cryptHelper = require('./crypt');
var dateTimeHelper = require('./dateTime');
var dbConnectHelper = require('./dbConnect');
var idGenHelper = require('./idGen');

function updateAuthenticationLastLogIn(req, res, authenticationId, callback){
    var loginTime = dateTimeHelper.utcNow();
    dbConnectHelper.connectAndQuery(req, res
        , 'UPDATE authentication SET ' +
            'last_login = $1 WHERE ' +
            'authentication_id =  $2'
        , [
            loginTime
            , authenticationId
        ], function(result){
            callback(result);
        });
}

function checkUserExists(req, res, userString, callback){
    var userStringLower = userString.toLowerCase();
    dbConnectHelper.connectAndQuery(req, res
        , 'SELECT authentication_id FROM authentication WHERE ' +
            'authentication_string_lower = $1'
        , [
            userStringLower
        ],
    function(result){
        if (result.rows.length > 0){
            callback(true);
        }else{
            callback(false);
        }
    });
}

function getEntityDetails(req, res, authenticationId, callback){
    dbConnectHelper.connectAndQuery(req, res
        , 'SELECT * FROM  get_admin_entity_detail($1, $2, $3, $4)'
        , [
            null
            , authenticationId
            , null
            , null
        ]
        , function(result){
            callback(result);
        });
}

function startUserSession(req, res, entityDetails){
    req.session.firstName = entityDetails.rows[0].first_name;
    req.session.lastName = entityDetails.rows[0].last_name;
    req.session.status = entityDetails.rows[0].status;
    req.session.approved = entityDetails.rows[0].approved;
    req.session.entityId = entityDetails.rows[0].entity_id;
    req.session.authenticationId = entityDetails.rows[0].authentication_id;
    req.session.authorizationLevel = entityDetails.rows[0].authorization_level;
}

//directly authenticateUser and create a new session without the need for logging in
exports.authenticateExpress = function (req, res, userString, authenticationId, callback){
    if (authenticationId){
        updateAuthenticationLastLogIn(req, res, authenticationId, function(){
            //get the details and initiate user session
            getEntityDetails(req, res, authenticationId, function(entityDetails){
                startUserSession(req, res, entityDetails);
                callback(true, entityDetails);
            });
        });
    }else{
        var userStringLower = userString.toLowerCase();
        dbConnectHelper.connectAndQuery(req, res
            , 'SELECT authentication_id FROM authentication WHERE ' +
                'authentication_string_lower = $1'
            , [
                userStringLower
            ],
            function(result){
                //log the user in
                var derivedAuthId = result.rows[0].authentication_id;
                //update the lastLogin
                updateAuthenticationLastLogIn(req, res, derivedAuthId, function(){
                    //get the details and initiate user session
                    getEntityDetails(req, res, derivedAuthId, function(entityDetails){
                        startUserSession(req, res, entityDetails);
                        callback(true, entityDetails);
                    });
                });
            });
    }
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
                    getEntityDetails(req, res, authenticationId, function(entityDetails){
                        callback(true, entityDetails);
                        startUserSession(req, res, entityDetails);
                    });
                    updateAuthenticationLastLogIn(req, res, authenticationId);
                }else{
                    if (legacy){
                        //LEGACY METHOD
                        cryptHelper.legacyDecrypt(req, res, pass, userHash, function(legacyAuth){
                            if (legacyAuth){
                                getEntityDetails(req, res, authenticationId, function(entityDetails){
                                    callback(true, entityDetails);
                                    startUserSession(req, res, entityDetails);
                                });
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

//generic session destroy
exports.destroyAuthentication = function (req, res){
    req.session.destroy();
}

//Generic signup method
exports.newAuthentication = function(req, res, userString, pass, firstName, lastName, callback){
    var userStringLower = userString.toLowerCase();
    var hash = cryptHelper.encrypt(req, res, pass);
    var name = firstName + " " + lastName;

    var authenticationId = idGenHelper.generateId();
    var entityId = idGenHelper.generateId();

    var createDate = dateTimeHelper.utcNow();

    checkUserExists(req, res, userString, function(exist){
        if (!exist){
            if (pass.length >= 8){
                dbConnectHelper.connectAndQuery(
                    req
                    , res
                    , 'SELECT * FROM  add_authentication($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
                    , [
                        authenticationId
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
                                , firstName
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
                                        callback(result);
                                    }
                                );
                            }
                        );
                    });
            }else{
                var result = new Object();
                result.Error = true;
                result.ErrorDesc = "Password length must be more than 8";
                result.ErrorCode = 500;
                callback(result);
            }
        }else{
            var result = new Object();
            result.Error = true;
            result.ErrorDesc = "User Exists";
            result.ErrorCode = 500;
            callback(result);
        }
    })
}

//Generic password change method
exports.changeAuthenticationPass = function (req, res, oldPass, newPass){

}

//Generic password request method
exports.requestAuthenticationPass = function (req, res, email){

}