// Azure URL: https://team5-adyen-azure2.azurewebsites.net/api/adyen/ideal/redirect?code=KMc9RR2FmxaZ9cuVU9aNu7bcTYX2zEqWpOUEbhNGHk2DVDi7WPRDAA==

module.exports = function(context, req) {
    context.log('redirecting to ', req.query.redirectUrl);

    const res = { status: 302, headers: { "location": req.query.redirectUrl }, body: null };
    context.res = res;
    context.done();
};
