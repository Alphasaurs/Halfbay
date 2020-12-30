const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("posts");
});

router.get("/1", (req, res) => {
  res.send("posts-1");
});

module.exports = router;
