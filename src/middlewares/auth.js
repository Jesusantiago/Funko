const isLogged = (req, res, next) => {
    
    if(req.session.isLogged){
        console.log("hola");
        return next();      
       
    } else {

        return res.status(401).redirect("/login")

    }
}

module.exports = {
    isLogged
}