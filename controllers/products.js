const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { brand, name, sort, select } = req.query;
  const queryObj = {};

  if (brand) {
    queryObj.brand = brand;
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

  let page = Number(req.query.page) || 1;
  let limitVar = Number(req.query.limit) || 10;

  let skipVar = (page - 1) * limitVar;

  apiData = apiData.skip(skipVar).limit(limitVar);

  const Products = await apiData;
  res.status(200).json({ Products, nbHits: Products.length });
};

module.exports = { getAllProducts };
