let express = require("express");
let categroyRouter = express.Router();
let categoryController = require("./../controller/category.controller");
categroyRouter.get("/", categoryController.getAllCategory);
categroyRouter.get("/:id", categoryController.getCategoryById);
categroyRouter.post("/", categoryController.createNewCategory);
categroyRouter.put("/:id", categoryController.updateCategoryById);
categroyRouter.delete("/:id", categoryController.deleteCategoryById);

module.exports = categroyRouter;