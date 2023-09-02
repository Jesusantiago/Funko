//    Controllers de login, que trae la vista del login 

const loginViewController = async(req,res) => {
    res.render("../views/about/login", {
        view : {
            title: "Login - FunkoShop",
            isLogged : "undefined"
        }
    })
};


//Objeto de usuario

const userCredentials = {
    email : "aironman@gmail.com",
    password : "rojoValiente24"
}


//    Controller que manda los datos para verificar si estas registrado e iniciar seccion

const loginDataController = async(req,res) => {
    const {email, password} = req.body
    const emailValidation = userCredentials.email == email;
    const passValidation = userCredentials.password == password
    req.session.Islogged = emailValidation && passValidation ? true : false;
    

    if(req.session.Islogged){
        // console.log(req.session.Islogged);
        res.redirect("/admin")
    }else{
        res.status(401)
        .render("../views/about/login", {
            view : {
                title: "Login - FunkoShop",
                isLogged : req.session.Islogged
            }
        })
    }

};

module.exports = {
    loginViewController,
    loginDataController
}