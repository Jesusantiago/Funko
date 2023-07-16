const express = require("express");
const router = express.Router();

router.get("/login", (req, res)=>{
    res.send("Hola desde el login")
})

router.post("/", (req,res)=>{
    const data = req.body;
    res.send(data)
})

module.exports = router;