dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getDeviceSession = function(req, res){
    var deviceId = null;
    var connectedDeviceId = null;
    var status = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.ConnectedDeviceId) connectedDeviceId = req.query.ConnectedDeviceId;
    if (req.query.Status) status = req.query.Status;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_session($1, $2, $3, $4, $5)'
        , [
            deviceId
            , connectedDeviceId
            , status
            , pageSize
            , skipSize
        ]);
};
exports.addDeviceSession= function(req, res){
    req.body;
};
exports.deleteDeviceSession= function(req, res){
    req.body;
};
exports.updateDeviceSession = function(req, res){
    req.body;
};