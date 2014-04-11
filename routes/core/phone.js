dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getPhone = function(req, res){

    var phoneId = null;
    var phoneDigits = null;
    var digits = null;
    var countryCode = null;
    var code = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.PhoneId) phoneId = req.query.PhoneId;
    if (req.query.PhoneDigits) phoneDigits = req.query.PhoneDigits;
    if (req.query.Digits) digits = req.query.Digits;
    if (req.query.CountryCode) countryCode = req.query.CountryCode;
    if (req.query.Code) code = req.query.Code;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_phone($1, $2, $3, $4, $5, $6, $7, $8)'
        , [
            phoneId
            , phoneDigits
            , digits
            , countryCode
            , code
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addPhone= function(req, res){
    req.body;
};
exports.deletePhone= function(req, res){
    req.body;
};
exports.updatePhone = function(req, res){
    req.body;
};