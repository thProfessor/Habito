const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    msg: "Message from subscribe Page",
  });
});

module.exports = router;
