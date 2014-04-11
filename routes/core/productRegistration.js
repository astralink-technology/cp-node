dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getProductRegistration = function(req, res){
    var productRegistrationId = null;
    var status = null;
    var type = null;
    var productId = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductRegistrationId) productRegistrationId = req.query.ProductRegistrationId;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_product_registration($1, $2, $3, $4, $5, $6, $7)'
        , [
            productRegistrationId
            , status
            , type
            , productId
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.getProductEntityRegistrationDetail = function(req, res){
    var productRegistrationId = null;
    var type = null;
    var status = null;
    var productId = null;
    var entityId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductRegistrationId) productRegistrationId = req.query.ProductRegistrationId;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Status) status = req.query.Status;
    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity_product_registration_details($1, $2, $3, $4, $5, $6, $7)'
        , [
            productRegistrationId
            , type
            , status
            , productId
            , entityId
            , pageSize
            , skipSize
        ]);
};
exports.addProductRegistration= function(req, res){
    req.body;
};
exports.deleteProductRegistration= function(req, res){
    req.body;
};
exports.updateProductRegistration = function(req, res){
    req.body;
};