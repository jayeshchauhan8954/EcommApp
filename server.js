const express = require("express");
const serverConfig = require("./config/server.config");
const expressApp = express();
const router = require("./routes/index");
const bodyparser = require("body-parser");
expressApp.use(bodyparser.json());
expressApp.use(router);

expressApp.listen(serverConfig.PORT, () => {
    console.log("server is running on port " + serverConfig.PORT)
});