const { body, validationResult} = require("express-validator");

//validaciones para el login

const loginValidation = [
    body("email","Por favor ingresa un correo existente")
    .exists()
    .isEmail(),

    body("password", "Por favor ingresa una contraseña entre 6 a 16 caracteres. La contrasera debe de tener algo menos un numero, una letra.")
    .isLength({min: 6, max:16})
    .isAlphanumeric()
]

const validateInput = (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        
        const valores = req.body;
        const validaciones = errors.array()
        console.log(validaciones);

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

//validaciones para Contact

const contactValidation = [
    
    body("name", "Por favor ingresa un nombre")
        .exists()
        .isLength({min : 2 , max : 15}).withMessage('Por favor ingrese un nombre entre 2 y 15 caracteres.')
        .isAlpha().withMessage('Por favor ingrese solamente letras.'),

    body("subname", "Por favor ingresa un apellido")
        .exists()
        .isLength({min : 2 , max : 15}).withMessage("Por favor ingrese un apellido entre 2 y 15 caracteres.")
        .isAlpha().withMessage('Por favor ingrese solamente letras.'),
    
    body("email","Por favor ingresa un correo existente")
    .exists()
    .isEmail(),
    
    body("message","Por favor Sea un poco mas especifico ")
    .exists()
    .isLength({min : 40, max : 150}),

]

const validateContact = (req,res,next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        
        const valores = req.body;
        const validaciones = errors.array()
        
        res.status(400).
        render("../views/about/contact", {
            view : {
                title : "Contacto - FunkoShop"
            },
            validaciones,
            valores
        })
    }else {
        next()
    }
}

//Validaciones para Create

const registerValidation = [
    
    body("name")
        .exists()
        .isLength({min : 2 , max : 15}).withMessage('Por favor ingrese un nombre entre 2 y 15 caracteres.')
        .isAlpha().withMessage('Por favor ingrese solamente letras.'),
    
    body("subname", "Por favor ingresa un apellido")
        .exists()
        .isLength({min : 2 , max : 15}).withMessage("Por favor ingrese un apellido entre 2 y 15 caracteres.")
        .isAlpha().withMessage('Por favor ingrese solamente letras.'),  
        
    body("email","Por favor ingresa un correo existente")
        .exists()
        .isEmail(),

    body("password")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
        .withMessage("*minimo 8 caracteres, al menos una letra en mayuscula, al menos una letra en minuscula, al menos un caracter especial")
]

const validateRegister = (req,res,next) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        
        const valores = req.body;
        const validaciones = errors.array()
        console.log(validaciones);
        
        res.status(400).
        render("../views/about/register", {
            view : {
                title : "Contacto - FunkoShop"
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
    contactValidation,
    validateInput,
    validateContact,
    registerValidation,
    validateRegister
};