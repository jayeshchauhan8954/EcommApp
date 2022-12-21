const express = require("express");
const productRouter = express.Router();
const productController = require("./../controller/product.controller");

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", productController.createNewProduct);
productRouter.post("/bulkcreate/", productController.insertProducts);
productRouter.put("/:id", productController.updateProductById);
productRouter.delete("/:id", productController.deleteProductById);

module.exports = productRouter;