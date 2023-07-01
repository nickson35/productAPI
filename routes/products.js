const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");

router.route("/").get(getAllProducts);

module.exports = router;
