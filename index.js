require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require("./database/connect");
const port = process.env.PORT || 2000;
const cors = require('cors');

app.use(cors());


const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hello, Welcomne to fake fashion api (for seeing products, type '/api/products' in the url )");
});

// routes for the api use

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`${port} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
