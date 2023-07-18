const path = require("path");

module.exports = {
    error404 : (req,res,next)=>{
        res.status(404).sendFile(path.resolve(__dirname,"../../public/html/404.html"))
    },
    serverError : (req,res,next)=>{
        res.status(500).send("el servidor ha fallado")
    }

}