const express = require("express");
const router = express.Router();

router.get("/login", (req, res)=>{
    res.render("../views/about/login", {
        view : {
            title: "Login - FunkoShop"
        }
    })
})

router.post("/", (req,res)=>{
    const data = req.body;
    res.send(data)
})

module.exports = router;