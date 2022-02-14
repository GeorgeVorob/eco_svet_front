const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use( //TODO: make it better
        createProxyMiddleware(['/getImage', '/getProject', '/live_contact', '/getModel'],
            {
                target: 'http://26.78.200.146:3000',
                changeOrigin: true,
            })
    );
};