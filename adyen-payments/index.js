const requestPromise = require('request-promise');

module.exports = function(context, req) {
    context.log('starting req payments', req);

    requestPromise.post({
        url: 'https://checkout-test.adyen.com/v40/payments',
        json: true,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ''
        },
        body: req.body,
    }).then((adyenResponse) => {
        context.res = {
          // status: 200
          body: adyenResponse
        };
        context.done();
    }).catch(err => {
        context.log(err);
        context.res = {
            status: 500,
            body: err
        };
        context.done();
    });
};
