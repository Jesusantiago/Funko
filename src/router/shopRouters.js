const express = require("express");
const router = express.Router();

/*
    Este metodo traé todos los datos del shop
*/

router.get("/shop", (req, res)=>{ 
    console.log("hola");
    res.send("Hola por shop");    
})

/*
    Este metodo manda por url los filtros
*/

router.post("/post", (req,res)=>{
    console.log("hola desde post")
    const data = req.body;
    res.send(data);
})

module.exports = router;
