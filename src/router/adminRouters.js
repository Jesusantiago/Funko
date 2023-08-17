const express = require("express");
const router = express.Router();
const uploadFiles = require("../middlewares/uploadFile")

const adminControllers = require("../controllers/adminControllers")

router.get("/", adminControllers.getAdmin);
router.get("/add", adminControllers.getViewAdd);
router.post("/add", uploadFiles.array("images",2), adminControllers.postCreate);
router.get("/edit/:id", adminControllers.getViewEdit);
router.post("/edit/:id", adminControllers.editItem);
router.get("/delete/:id", adminControllers.deleteItem);

module.exports = router;