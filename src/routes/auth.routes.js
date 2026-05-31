const express = require("express");
const router = express.Router();
// const User = require("../src/models/User");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");

/* POST Request /api/auth/register*/
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
