const express = require("express");
const router = express.Router();

const {loginViewController, loginDataController} = require("../controllers/loginControllers");
const {loginValidation, validateInput} = require("../middlewares/validateInput");

router.get("/", loginViewController);
router.post("/", loginValidation, validateInput, loginDataController)

module.exports = router;