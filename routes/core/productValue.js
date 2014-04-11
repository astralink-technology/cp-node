dbconnectHelper = require('../../helpers/dbConnect');
exports.getProductValue = function(req, res){
    var productValueId = null;
    var productValueName = null;
    var value = null;
    var value2 = null;
    var value3 = null;
    var valueUnit = null;
    var status = null;
    var type = null;
    var productId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductValue) productValue = req.query.ProductValue;
    if (req.query.ProductValueName) productValueName = req.query.ProductValueName;
    if (req.query.Value) value = req.query.Value;
    if (req.query.Value2) value2 = req.query.Value2;
    if (req.query.Value3) value3 = req.query.Value3;
    if (req.query.ValueUnit) valueUnit = req.query.ValueUnit;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_product_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
        , [
            productValueId
            , productValueName
            , value
            , value2
            , value3
            , valueUnit
            , status
            , type
            , productId
            , pageSize
            , skipSize
        ]);
};
exports.addProductValue= function(req, res){
    req.body;
};
exports.deleteProductValue= function(req, res){
    req.body;
};
exports.updateProductValue = function(req, res){
    req.body;
};