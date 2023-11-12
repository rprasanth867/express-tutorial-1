const express = require("express");

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Request for all products");
});

router.get("/details", (req, res) => {
  res.send("Request for a specified product");
});

router.post("/create", (req, res) => {
  res.send("Created product successfully");
});

router.put("/update", (req, res) => {
  res.send("Updated product successfully");
});

router.delete("/delete", (req, res) => {
  res.send("Deleted product successfully");
});

module.exports = router;
