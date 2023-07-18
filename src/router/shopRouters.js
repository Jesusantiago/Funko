const express = require("express");
const router = express.Router();
const itemsControllers = require("../controllers/itemsControllers.js")

router.get("/shop", itemsControllers.getItems)
router.get("/shop/:item", itemsControllers.getItem)

module.exports = router;
