const express = require("express");
const router = express.Router();

const {contactViewCont, contactDataCont} = require("../controllers/contactControllers")
const {contactValidation, validateContact} = require("../middlewares/validateInput")

router.get("/", contactViewCont)

router.post("/", contactValidation, validateContact, contactDataCont)

module.exports = router;