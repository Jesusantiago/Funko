const express = require("express");
const router = express.Router();
const itemsControllers = require("../controllers/itemsControllers.js")

router.get("/", itemsControllers.getItems)
router.get("/item/:id", itemsControllers.getItem)

module.exports = router;
