const express = require("express");

const app = express();
const port = 3000;

const products = require("./routes/products");
const users = require("./routes/users");

app.use("/products", products);
app.use("/users", users);

app.listen(port, () => {
  console.log("Express is running at port 3000");
});
