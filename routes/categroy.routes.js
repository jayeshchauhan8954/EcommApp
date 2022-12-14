let express = require("express");
let categroyRouter = express.Router();
let categoryController = require("./../controller/category.controller");
categroyRouter.get("/", categoryController.getAllCategory);

module.exports = categroyRouter;