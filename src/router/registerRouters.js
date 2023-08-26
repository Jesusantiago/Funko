const express = require("express");
const router = express.Router()

const {registerController, registerDataController} = require("../controllers/registerControllers")
const {registerValidation, validateRegister} = require("../middlewares/validateInput")

router.get("/", registerController)

router.post("/", registerValidation, validateRegister, registerDataController)

module.exports = router;