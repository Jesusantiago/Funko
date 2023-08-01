const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")

router.get("/", adminControllers.getAdmin)
router.get("/add", adminControllers.getLicenceAdd)
// router.post("/admin/create", adminControllers.postCreate)

module.exports = router;
