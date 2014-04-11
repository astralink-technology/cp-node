dbconnectHelper = require('../../helpers/dbConnect');
exports.getMedia = function(req, res){
    var mediaId = null;
    var title = null;
    var type = null;
    var fileName = null;
    var mediaUrl = null;
    var status = null;
    var fileType = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.MediaId) mediaId = req.query.MediaId;
    if (req.query.Title) title = req.query.Title;
    if (req.query.Type) type = req.query.Type;
    if (req.query.FileName) fileName = req.query.FileName;
    if (req.query.FileType) fileType = req.query.FileType;
    if (req.query.MediaUrl) mediaUrl = req.query.MediaUrl;
    if (req.query.Status) status = req.query.Status;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_media($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        , [
            mediaId
            , title
            , type
            , fileName
            , mediaUrl
            , status
            , fileType
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addMedia= function(req, res){
    req.body;
};
exports.deleteMedia= function(req, res){
    req.body;
};
exports.updateMedia = function(req, res){
    req.body;
};