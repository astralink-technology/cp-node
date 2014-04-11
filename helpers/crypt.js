var bcrypt = require('bcrypt');
exports.encrypt = function(req, res, password){
    var hash = bcrypt.hashSync(password, 10);
    return hash;
}
exports.decrypt = function(req, res, userPassword, hashedPassword){
    var match = bcrypt.compareSync(userPassword, hashedPassword);
    if (match){
        return true;
    }else{
        return false;
    }
}