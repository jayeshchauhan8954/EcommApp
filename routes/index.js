let express = require("express");
let router = express.Router();
let categroyRoutes = require("./categroy.routes");
router.get("/", (req, res) => {
    res.status(200).send("This is the Base Page.");
    res.end();
})

router.use("/ecomm/api/v1/category", categroyRoutes);
module.exports = router;