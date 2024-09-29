const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/create-checkout-session",
    createProxyMiddleware({
      target: "https://swipe-v9h6.onrender.com",
      //target: 'http://localhost:3002',
      changeOrigin: true,
    })
  );
};
