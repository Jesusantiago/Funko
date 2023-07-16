const express = require("express");
const router = express.Router();

router.get("/contact", (req, res)=>{
    res.send(`Hola desde contact`)
})

/*
    Espera los datos del formulario
*/

router.post("/contact", (req,res)=>{
    console.log(`Espera los datos del formulario`)
    const data = req.body;
    res.send(data)
})

module.exports = router;