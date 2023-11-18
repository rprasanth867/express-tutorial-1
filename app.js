const express = require("express");
const mongoose = require("mongoose");
const dbProperties = require("./properties");

const app = express();
const port = 3000;

mongoose.connect(dbProperties.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("+++ MongoDB Connected +++");
});

const products = require("./routes/products");
const users = require("./routes/users");

app.use("/products", products);
app.use("/users", users);

app.listen(port, () => {
  console.log("Express is running at port 3000");
});
