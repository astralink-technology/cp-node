dbconnectHelper = require('../../helpers/dbConnect');
exports.getProduct = function(req, res){
    var productId = null;
    var name = null;
    var status = null;
    var type = null;
    var code = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Code) code = req.query.Code;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_product($1, $2, $3, $4, $5, $6, $7, $8)'
        , [
            productId
            , name
            , status
            , type
            , code
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addProduct= function(req, res){
    req.body;
};
exports.deleteProduct= function(req, res){
    req.body;
};
exports.updateProduct = function(req, res){
    req.body;
};