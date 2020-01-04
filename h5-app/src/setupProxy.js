const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    console.log("Setup proxy is ever called");
    app.use(
        proxy("/local", {
            target: "http://127.0.0.1:8000/",
            changeOrigin: true
        })
    );
    app.use(
        proxy("/test", {
            target: "http://106.54.115.152:8091/mock/11/scal/",
            pathRewrite:{"/test":''},
            changeOrigin: true
        })
    );
};