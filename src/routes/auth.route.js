const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.use("/login", authController.login);

module.exports = router;
