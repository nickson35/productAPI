require("dotenv").config();
const connectDb = require("./database/connect");
const Product = require("./models/product");

const productJson = require('./data.json');

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(productJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
