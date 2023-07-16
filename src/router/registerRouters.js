const express = require("express");
const router = express.Router()

router.get("/register", (req,res)=>{
    res.send("Hola desde register")
})

router.post("/", (req,res)=>{
    const data = req.body;
    res.send("Acá van los datos del resgister")
})

module.exports = router;