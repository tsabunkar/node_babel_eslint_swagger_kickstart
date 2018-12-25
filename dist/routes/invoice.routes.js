'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _invoice = require('../controllers/invoice.controller');

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// !GET
router.get('', _invoice2.default.findAllInvoices);

module.exports = {
    invoiceRoute: router
};
//# sourceMappingURL=invoice.routes.js.map