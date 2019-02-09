module.exports = function(context, req) {
    context.log('redirecting to ', req.query.redirectUrl);

    const res = { status: 302, headers: { "location": req.query.redirectUrl }, body: null };
    context.res = res;
    context.done();
};
