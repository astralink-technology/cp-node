dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getMessage = function(req, res){
    var messageId = null;
    var message = null;
    var type = null;
    var ownerId = null;
    var triggerName = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.MessageId) messageId = req.query.MessageId;
    if (req.query.Message) message = req.query.Message;
    if (req.query.Type) type = req.query.Type;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.TriggerName) triggerName = req.query.TriggerName;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_message($1, $2, $3, $4, $5, $6, $7)'
        , [
            messageId
            , message
            , type
            , ownerId
            , triggerName
            , pageSize
            , skipSize
        ]);
};
exports.addMessage= function(req, res){
    req.body;
};
exports.deleteMessage= function(req, res){
    req.body;
};
exports.updateMessage = function(req, res){
    req.body;
};