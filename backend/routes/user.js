const express = require("express");
const router = express.Router();

const { signin, signup } = require("../controllers/user.js");

router.route("/signin").post(signin);
router.route("/signup").post(signup);

module.exports = router;
