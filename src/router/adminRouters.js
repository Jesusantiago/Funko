const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("../views/admin/admin", {
        view : {
            title : "Admin - FunkoShop"
        }
    })
})

module.exports = router;

// const express = require("express")
// const router = express.Router()

// router.get("/", (req,res)=>{
//     res.render("../views/admin/admin", {
//         view: {
//             title : "admin - FunkoShop"
//         }
//     })
// })