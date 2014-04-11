dbconnectHelper = require('../../helpers/dbConnect');
exports.getLog = function(req, res){
    var logId = null;
    var message = null;
    var title = null;
    var type = null;
    var logUrl = null;
    var status = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;
    var snapshotValue1 = null;
    var snapshotValue2 = null;

    if (req.query.LogId) logId = req.query.LogId;
    if (req.query.Message) message = req.query.Message;
    if (req.query.Title) title = req.query.Title;
    if (req.query.Type) type = req.query.Type;
    if (req.query.LogUrl) logUrl = req.query.LogUrl;
    if (req.query.Status) status = req.query.Status;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_log($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
        , [
            logId
            , message
            , title
            , type
            , logUrl
            , status
            , ownerId
            , pageSize
            , skipSize
            , snapshotValue1
            , snapshotValue2
        ]);
};
exports.addLog= function(req, res){
    req.body;
};
exports.deleteLog= function(req, res){
    req.body;
};
exports.updateLog = function(req, res){
    req.body;
};