const express = require("express");
const router = express.Router();

const connSocket = require("./module/socket");

router.use("/api/socket/", connSocket);

module.exports = router;
