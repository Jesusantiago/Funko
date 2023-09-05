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
    admin : {
        email : process.env.USER_ADMIN,
        password : process.env.PASSWORD_ADMIN
    },
    user : {
        email : process.env.USER_USER,
        password : process.env.PASSWORD_USER
    }
}


//    Controller que manda los datos para verificar si estas registrado e iniciar seccion

const loginDataController = async(req,res) => {
    const {email, password} = req.body;
    req.session.roles

    if(userCredentials.admin.email == email && userCredentials.admin.password == password){
        req.session.isLogged = true 
        req.session.roles = "admin"
        res.redirect("/admin")
        
    } else if (userCredentials.user.email == email && userCredentials.user.password == password){
        req.session.isLogged = true 
        req.session.roles = "user"
        res.redirect("/")

    } else {
        req.session.isLogged == false
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