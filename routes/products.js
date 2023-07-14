const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsid
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/:id").get(getAllProductsid);

module.exports = router;
