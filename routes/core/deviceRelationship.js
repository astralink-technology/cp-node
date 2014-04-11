dbconnectHelper = require('../../helpers/dbConnect');
exports.getDeviceRelationship = function(req, res){
    var deviceRelationshipId = null;
    var deviceId = null;
    var ownerId  = null;
    var messageTriggerEvent = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.DeviceRelationshipId) deviceRelationshipId = req.query.DeviceRelationshipId;
    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.MessageTriggerEvent) messageTriggerEvent= req.query.MessageTriggerEvent;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_relationship($1, $2, $3, $4, $5, $6)'
        , [
            deviceRelationshipId
            , deviceId
            , ownerId
            , messageTriggerEvent
            , pageSize
            , skipSize
        ]);
};
exports.addDeviceRelationship= function(req, res){
    req.body;
};
exports.deleteDeviceRelationship= function(req, res){
    req.body;
};
exports.updateDeviceRelationship = function(req, res){
    req.body;
};