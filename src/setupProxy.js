const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  // eslint-disable-next-line no-unused-expressions
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true
    })
  );
  app.use(
    '/public',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true
    })
  )
}