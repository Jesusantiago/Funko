const express = require("express");
const router = express.Router();

const {loginViewController} = require("../controllers/loginControllers");
const validateInput = require("../middlewares/validateInput");
const { body } = require("express-validator")

const loginValidation = [
    body("email")
    .isEmail()
    .withMessage("Necesito que ingrese un correo Valido"),
    body("password")
    .isLength({min: 6})
    .isAlphanumeric()
    .withMessage("La Contraseña debe de tener al menos 6 caracteres y contener letras y numeros")
]

router.get("/", loginViewController);
router.post("/", loginValidation, validateInput)

module.exports = router;