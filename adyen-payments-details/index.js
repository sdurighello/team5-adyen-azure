const requestPromise = require('request-promise');

module.exports = function(context, req) {
    context.log('starting req payments-details', req);

    requestPromise.post({
        url: 'https://checkout-test.adyen.com/v40/payments/details',
        json: true,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'AQEshmfxLInKbBVBw0m/n3Q5qf3Va4NIDphLTG1ZyEdUu6dvTZ206j5QzFZb/swQwV1bDb7kfNy1WIxIIkxgBw==-lDCAjV1HCMxSVMJwrFOhcIjeQsatqCj4SXKS1a64+ZU=-D4La7KmY64ZsEaCX'
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
