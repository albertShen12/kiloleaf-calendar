const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        proxy("/local", {
            target: "http://127.0.0.1:8000/",
            changeOrigin: true
        })
    );
    app.use(
        proxy("/mock", {
            target: "http://106.54.115.152:8091/mock/11/scal/",
            changeOrigin: true
        })
    );
};