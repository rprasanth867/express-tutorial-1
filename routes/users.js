const express = require("express");

const router = express.Router();

/*
  It is a middleware. It calls when reached /users routes

  Using for logging the request for /users routes
*/
router.use("/", (req, res, next) => {
  console.log('+++ Request +++', req);
  next();
});

router.get("/all", (req, res) => {
  res.send("Request for all users");
});

// handling path params
router.get("/details/:id", (req, res) => {
  res.send("Request for a specified users/"+req.params.id);
});

// handling regex expression
router.get("/search-by-key/:key([0-9]{4,6})", (req, res) => {
  const data = {
    key: req.params.key,
    message: `You got results for ${req.params.key}`
  };
  res.send(data);
});

router.post("/create", (req, res) => {
  res.send("Created user successfully");
});

router.put("/update", (req, res) => {
  res.send("Updated user successfully");
});

router.delete("/delete", (req, res) => {
  res.send("Deleted user successfully");
});

// handling URL not found for /users routes
router.all("*", (req, res) => {
  res.send({status: 404, message: "URL not found"});
});

module.exports = router;
