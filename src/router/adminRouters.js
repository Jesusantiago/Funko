const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")

router.get("/", adminControllers.getAdmin)
router.get("/add", adminControllers.getViewAdd)
router.post("/add", adminControllers.postCreate)
router.get("/edit/:id", adminControllers.getViewEdit)
router.post("/edit/:id", adminControllers.editItem);

module.exports = router;