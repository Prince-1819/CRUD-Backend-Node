const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Shopping Page!");
});

/*
when you have to write data in other mode other than JSON then --->
app.use(express.urlencoded({ extended: false }));
*/

mongoose
  .connect("mongodb://localhost:27017/CRUD_Node")
  .then(() => {
    console.log("Database Succesfullly Connnected!");
    app.listen(8080, () => {
      console.log("Running on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
