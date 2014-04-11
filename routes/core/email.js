dbconnectHelper = require('../../helpers/dbconnect');
exports.getEmail = function(req, res){
    var emailId = null;
    var emailAddress = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EmailId) emailId = req.query.EmailId;
    if (req.query.EmailAddress) emailAddress = req.query.EmailAddress;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(req, res, 'SELECT * FROM  get_email($1, $2, $3, $4, $5)', [emailId, emailAddress, ownerId, pageSize, skipSize]);

};
exports.addEmail = function(req, res){
    req.body;
    res.json({
        name : 'shiwei'
    });
};
exports.deleteEmail= function(req, res){
    res.json({
        name : 'shiwei'
    });
};
exports.updateEmail = function(req, res){
    res.json({
        name : 'shiwei'
    });
};