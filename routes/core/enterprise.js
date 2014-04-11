dbconnectHelper = require('../../helpers/dbConnect');
exports.getEnterprise = function(req, res){

    var enterpriseId = null;
    var name = null;
    var code = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EnterpriseId) enterpriseId = req.query.EnterpriseId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Code) code = req.query.Code;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_enterprise($1, $2, $3, $4, $5)'
        , [
            enterpriseId 
            , name 
            , code
            , pageSize
            , skipSize
        ]);
};
exports.addEnterprise= function(req, res){
    req.body;
};
exports.deleteEnterprise= function(req, res){
    req.body;
};
exports.updateEnterprise = function(req, res){
    req.body;
};