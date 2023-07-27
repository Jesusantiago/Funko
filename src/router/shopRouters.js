const express = require("express");
const router = express.Router();
const itemsControllers = require("../controllers/itemsControllers.js")

router.get("/", itemsControllers.getItems)
router.get("/item/:id", itemsControllers.getItem)
router.post("/create", itemsControllers.createItem)
router.delete("/:id/delete", itemsControllers.deleteItem)

module.exports = router;
