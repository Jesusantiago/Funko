const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")

router.get("/", adminControllers.getAdmin)
router.get("/add", adminControllers.getViewAdd)
// router.post("/admin/create", adminControllers.postCreate)
router.get("/item/:id", adminControllers.getViewEdit)

module.exports = router;
