const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")

const uploadFiles = require("../middlewares/uploadFile")
const {productValidation, validateProduct} = require("../middlewares/validateInput")


// Obtener la vista del admin
router.get("/", adminControllers.getAdmin);

// Obtiene la vista del agregar producto
router.get("/add", adminControllers.getViewAdd);

// Sube los productos a la base de datos 
router.post("/add", uploadFiles.array("images",2), productValidation, validateProduct,  adminControllers.postCreate);

// Obtieen la vista del edit Product
router.get("/edit/:id", adminControllers.getViewEdit);

// Sube los edit Product a la base de datos
router.post("/edit/:id", productValidation, validateProduct, adminControllers.editItem);

// Elimina un producto de la base de datos
router.get("/delete/:id", adminControllers.deleteItem);

module.exports = router;