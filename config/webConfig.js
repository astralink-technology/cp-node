exports.dbConfig = function(){
    dbConfig = new Object();

    dbConfig.appName = 'eyeOrcas';
    dbConfig.username = 'ubuntu';
    dbConfig.password = 'astralink';
    dbConfig.host = 'api.eyeorcas.com';
    dbConfig.port = '5432';
    dbConfig.db = 'OrcasEye';

    return dbConfig;
}