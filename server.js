const express = require("express");
// import mongoose
const mongoose = require("mongoose");

// setup an express app
const app = express();

// setup a middleware to handle JSON request
app.use(express.json());

// connect to MongoDB using Mongoose
async function connectToMongoDB() {
  try {
    // wait for the MongoDB to connect
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log(error);
  }
}

connectToMongoDB();

// setup root route
app.get("/", (req, res) => {
  res.send("Happy coding!");
});

// // import all the routers
const productRouter = require("./routes/product");
app.use("/products", productRouter);

// start the express server
app.listen(5123, () => {
  console.log("server is running at http://localhost:5123");
});
