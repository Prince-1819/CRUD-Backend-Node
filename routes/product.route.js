const express = require("express");
const {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

const productRouter = express.Router();

//Create or Add Product
productRouter.post("/", addProduct);

//Get All Products
productRouter.get("/", getAllProducts);

//Get Single Product
productRouter.get("/:id", getOneProduct);

//Update Product
productRouter.put("/:id", updateProduct);

//Delete Product
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
