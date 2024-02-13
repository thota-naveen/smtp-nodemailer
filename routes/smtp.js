const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/smtp");

router.post("/", sendMail);

module.exports = router;
