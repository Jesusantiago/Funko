const express = require("express");
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("../views/about/register", {
        view : {
            title : "Registro - FunkoShop"
        }
    })
})

router.post("/", (req,res)=>{
    const data = req.body;
    res.send("Acá van los datos del resgister")
})

module.exports = router;