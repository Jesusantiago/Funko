const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")
const { isLogged } = require("../middlewares/auth")

const uploadFiles = require("../middlewares/uploadFile")
const {productValidation, validateProduct} = require("../middlewares/validateInput")


// Obtener la vista del admin
router.get("/", isLogged, adminControllers.getAdmin);

// Obtiene la vista del agregar producto
router.get("/add", isLogged,  adminControllers.getViewAdd);

// Sube los productos a la base de datos 
router.post("/add", isLogged, uploadFiles.array("images",2), productValidation, validateProduct, adminControllers.postCreate);

// Obtieen la vista del edit Product
router.get("/edit/:id", isLogged, adminControllers.getViewEdit);

// Sube los edit Product a la base de datos
router.post("/edit/:id", isLogged, productValidation, validateProduct, adminControllers.editItem);

// Elimina un producto de la base de datos
router.get("/delete/:id", isLogged, adminControllers.deleteItem);

module.exports = router;