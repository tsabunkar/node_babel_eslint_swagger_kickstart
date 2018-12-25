'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require('./config/swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _invoice = require('./routes/invoice.routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./config/config');

// nodejs package, require() -> nodejs function

var _require = require('./db/mongoose_config'),
    mongoose = _require.mongoose;

var app = (0, _express2.default)();

mongoose.connect(process.env.MONGODB_URI) // connecting to mongodb db atlas
.then(function () {
    console.log('connected to db !'); // eslint-disable-line
}).catch(function () {
    console.log('failed to connect to db!'); // eslint-disable-line
});

app.use(_bodyParser2.default.json()); // !middleware which parses incoming request in JSON format, this body-parser middleware must be
// !registered with express so wrote inside app.use();

app.use(_bodyParser2.default.urlencoded({ // to parse
    extended: false
}));

// !CORS error-
app.use(function (req, resp, next) {
    // before contiuing the request to next middle ware just written below this middleware want to remove CORS error
    resp.setHeader('Access-Control-Allow-Origin', '*'); // allowing access to all the url/paths
    resp.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // it may have this headers key
    resp.setHeader('Access-Control-Expose-Headers', 'max-records, my-token'); // Allowing to custom-header expose to frontend
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});

// !Swagger-UI
// http://localhost:3000/api-docs/
app.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
    explorer: true
}));

// !filter routes with '/api/invoice' -> redirect to invoiceRoute
// http://localhost:3000/api/invoice
app.use('/api/invoice', _invoice.invoiceRoute);

// validating the PORT
var normalizePort = function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};

var PORT = normalizePort(process.env.PORT || '3000');

app.set('port', PORT); // setting port

var server = _http2.default.createServer(app); // create node server which uses express

server.listen(PORT); // start the server
//# sourceMappingURL=app.js.map