'use strict';

var invoices = [{
    id: '123',
    item: 'Amazon'
}, {
    id: '124',
    item: 'Flipkart'
}, {
    id: '125',
    item: 'Snapdeal'
}];

var findAllInvoices = function findAllInvoices(req, resp) {
    resp.status(200).json({
        message: invoices
    });
};

module.exports = {
    findAllInvoices: findAllInvoices
};
//# sourceMappingURL=invoice.controller.js.map