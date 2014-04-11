dbconnectHelper = require('../../helpers/dbConnect');
exports.getEntity = function(req, res){
    var entityId = null;
    var authenticationId  = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.AuthenticationId) authenticationId = req.query.AuthenticationId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity($1, $2, $3, $4)'
        , [
            entityId
            , authenticationId
            , pageSize
            , skipSize
        ]);
};
exports.getEntityDetail = function(req, res){
    var entityId = null;
    var authenticationId  = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.AuthenticationId) authenticationId = req.query.AuthenticationId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_admin_entity_detail($1, $2, $3, $4)'
        , [
            entityId
            , authenticationId
            , pageSize
            , skipSize
        ]);
}
exports.addEntity= function(req, res){
    req.body;
};
exports.deleteEntity= function(req, res){
    req.body;
};
exports.updateEntity = function(req, res){
    req.body;
};