dbconnectHelper = require('../../helpers/dbConnect');
exports.getImage = function(req, res){

    var imageId = null;
    var title = null;
    var type = null;
    var filename = null;
    var imageUrl = null;
    var status = null;
    var fileType = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ImageId) imageId = req.query.ImageId;
    if (req.query.Title) title = req.query.Title;
    if (req.query.Type) type = req.query.Type;
    if (req.query.FileName) filename = req.query.FileName;
    if (req.query.ImageUrl) imageUrl = req.query.ImageUrl;
    if (req.query.Status) status = req.query.Status;
    if (req.query.FileType) fileType = req.query.FileType;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_image($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        , [
            imageId
            , title
            , type
            , filename
            , imageUrl
            , status
            , fileType
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addImage= function(req, res){
    req.body;
};
exports.deleteImage= function(req, res){
    req.body;
};
exports.updateImage = function(req, res){
    req.body;
};