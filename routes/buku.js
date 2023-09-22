const express = require("express");
const router = express.Router();
const path = require("path");

// Setup essential routes
router.get("/buku", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/buku.html"));
});

router.post("/buku", (req, res) => {
  res.send("Buku berhasil ditambah");
});

router.put("/buku", (req, res) => {
  res.send("Buku berhasil diedit");
});

router.delete("/buku", (req, res) => {
  res.send("Buku berhasil didelete");
});

module.exports = router;
