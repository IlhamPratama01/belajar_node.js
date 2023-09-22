const express = require("express");
const router = express.Router();
const path = require("path");

// Setup essential routes
router.get("/user", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/user.html"));
});
router.post("/user", function (req, res) {
  res.send("user berhasil ditambah");
});

router.put("/user", function (req, res) {
  res.send("user berhasil diedit");
});

router.delete("/user", function (req, res) {
  res.send("user berhasil didelete");
});

module.exports = router;
