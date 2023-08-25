const { body, validationResult} = require("express-validator");

const loginValidation = [
    body("email","Necesito que ingrese un correo Valido")
    .exists()
    .isEmail(),

    body("password", "La Contraseña debe de tener al menos 6 caracteres y contener letras y numeros")
    .isLength({min: 6, max:16})
    .isAlphanumeric()
]

const validateInput = (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        
        const valores = req.body;
        const validaciones = errors.array()

        if(validaciones.length === 3){
            validaciones.pop()
        }
        
        res.status(400).
        render("../views/about/login", {
            view : {
                title : "Login - FunkoShop"
            },
            validaciones,
            valores
        })
    }else {
        next()
    }

}

module.exports = {
    loginValidation,
    validateInput
};