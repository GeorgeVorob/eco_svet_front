const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use( //TODO: make it better
        createProxyMiddleware(['/getImage', '/getProject', '/live_contact'],
            {
                target: 'http://localhost:3000',
                changeOrigin: true,
            })
    );
};