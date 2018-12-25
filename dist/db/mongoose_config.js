'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise; // !By default mongoose uses callback, but if
// !we want to use async-await or promises then this code will specifiy it

// first mongoose file, which will get executed
var url = process.env.MONGODB_URI;

_mongoose2.default.connect(url, { // !remove deprication warning
    useNewUrlParser: true
});
//for production env, we are using the mongodb uri as -> process.env.MONGODB_URI

module.exports = {
    mongoose: _mongoose2.default
};
// !exporting this mongoose, where some operations r perfomed,
//! (now whole application wil be using this mongoose only, rather than importing directly
// !from mongoose libr)
//# sourceMappingURL=mongoose_config.js.map