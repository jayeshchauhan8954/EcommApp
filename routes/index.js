const express = require("express");
const router = express.Router();
const categroyRoutes = require("./categroy.routes");
const productRoutes = require("./product.routes");
router.get("/", (req, res) => {
    res.status(200).send("This is the Base Page.");
    res.end();
})

router.use("/ecomm/api/v1/category", categroyRoutes);
router.use("/ecomm/api/v1/product", productRoutes);
module.exports = router;