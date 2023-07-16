const express = require("express");
const router = express.Router();

router.get("/shop", (req, res)=>{
    console.log("hola");
    res.send("Hola por shop");    
})

router.post("/post", (req,res)=>{
    console.log("hola desde post")
    const data = req.body;
    res.send(data);
})

module.exports = router;
