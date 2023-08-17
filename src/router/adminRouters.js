const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path")

const adminControllers = require("../controllers/adminControllers")

/*logica para guardar imagenes en el servir*/

const storage = multer.diskStorage({
    destination : (req, file, cb) => cb(null, path.resolve(__dirname, "../../public/img")),
    filename: (req, file, cb) => cb(null, `${Date.now()} - ${file.originalname}`)
});

const uploadFile = multer({storage});


router.get("/", adminControllers.getAdmin);
router.get("/add", adminControllers.getViewAdd);
router.post("/add", uploadFile.array("images",2), adminControllers.postCreate);
router.get("/edit/:id", adminControllers.getViewEdit);
router.post("/edit/:id", adminControllers.editItem);
router.get("/delete/:id", adminControllers.deleteItem);

module.exports = router;