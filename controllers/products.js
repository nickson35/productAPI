const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, sort, select, selectId } = req.query;
  const queryObj = {};
  if (company) {
    queryObj.company = company;
  }

  if (name) {
    // regex and options provide the functionality of search by name
    queryObj.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObj);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  const Products = await apiData;
  res.status(200).json(Products);
};

const getAllProductsid = async (req, res) => {
const data = await Product.findById(req.params.id);
  res.status(200).json(data);
};

module.exports = { getAllProducts, getAllProductsid };
