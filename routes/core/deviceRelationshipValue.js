dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getDeviceRelationshipValue = function(req, res){
    var deviceRelationshipValueId
    var push
    var name
    var sms
    var token 
    var type 
    var resolution 
    var quality 
    var deviceRelationshipId 
    var pageSize
    var skipSize

    if (req.query.DeviceRelationshipValueId) deviceRelationshipValueId = req.query.DeviceRelationshipValueId;
    if (req.query.Push) push = req.query.Push;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Sms) sms = req.query.Sms;
    if (req.query.Token) token = req.query.Token;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Resolution) resolution = req.query.Resolution;
    if (req.query.Quality) quality = req.query.Quality;
    if (req.query.DeviceRelationshipId) deviceRelationshipId = req.query.DeviceRelationshipId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_relationship_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
        , [
            deviceRelationshipValueId
            , push
            , name
            , sms
            , token
            , type
            , resolution
            , quality
            , deviceRelationshipId
            , pageSize
            , skipSize
        ]);
};
exports.addDeviceRelationshipValue= function(req, res){
    req.body;
};
exports.deleteDeviceRelationshipValue= function(req, res){
    req.body;
};
exports.updateDeviceRelationshipValue = function(req, res){
    req.body;
};