
/**
 * Module dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    core = require('./routes/core/'),
    eyeorcas = require('./routes/eyeorcas'),
    helperDemo = require('./routes/helper-demo'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'sh1w31p@ssw0rd'}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);

// JSON API
app.get ('/core/:base/:api', core);
app.post ('/core/:base/:api', core);
app.put ('/core/:base/:api', core);
app.delete ('/core/:base/:api', core);

app.get ('/eyeorcas/:base/:api', eyeorcas);
app.post ('/eyeorcas/:base/:api', eyeorcas);
app.put ('/eyeorcas/:base/:api', eyeorcas);
app.delete ('/eyeorcas/:base/:api', eyeorcas);

//Helper Demos
app.get ('/helper-demo/:base/:method', helperDemo);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});