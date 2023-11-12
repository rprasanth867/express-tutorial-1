const express = require("express");

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Request for all users");
});

router.get("/details", (req, res) => {
  res.send("Request for a specified user");
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

module.exports = router;
