const express = require("express");
const serverConfig = require("./config/server.config");
const dbConnection = require("./config/db.config")
const expressApp = express();

const router = require("./routes/index");
const bodyparser = require("body-parser");
const Category = require("./model/Category");
const Product = require("./model/Product");
Category.hasMany(Product);
expressApp.use(bodyparser.json());
expressApp.use(router);

let init = async () => {
    await dbConnection.sync({ force: true })
    console.log("Category table created successfully");
    insertCategory();
};
let insertCategory = async (req, res, next) => {
    await Category.bulkCreate(
        [{
            name: "Electronincs"
        },
        {
            name: "Grocery"
        },
        {
            name: "Clothes"
        },
        {
            name: "Footwear"
        },
        {
            name: "Pharmacy"
        },]
    )
};


expressApp.listen(serverConfig.PORT, () => {
    console.log("server is running on port " + serverConfig.PORT)
    // init();
});