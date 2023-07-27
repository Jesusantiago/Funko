const express = require("express");
const router = express.Router();
const itemsControllers = require("../controllers/itemsControllers.js")

router.get("/shop", itemsControllers.getItems)
// router.get("/shop", (req, res)=>{ res.render("../views/shop/shop")})
router.get("/shop/items/:id", itemsControllers.getItem)
router.post("/create", itemsControllers.createItem)
router.delete("/:id/delete", itemsControllers.deleteItem)

module.exports = router;
