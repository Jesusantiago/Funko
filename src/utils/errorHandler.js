const path = require("path");

module.exports = {
    error404 : (req,res,next)=>{
        res.status(404).render("404",{
            view : {
                title : "Página no encontrada"
            }
        })
    },
    serverError : (req,res,next)=>{
        res.status(500).send("el servidor ha fallado")
    }

}