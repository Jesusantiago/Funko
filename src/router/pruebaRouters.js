const express = require("express")
const router = express.Router();


const items = [
    {
        id:1,
        name: "pepe"
    },
    {
        id:2,
        name: "hulk"
    },
    {
        id:3,
        name: "iron"
    },
    {
        id:4,
        name: "spiderman"
    },
    {
        ide:5,
        name: "pokemon"
    }
]


/*
    Metodo para poder captar los params para se pasen por la url, este metodo es por get.
*/
router.get("/item/:item", (req,res)=>{
    const itemId = req.params.item;
    const item = items.find(item => item.id == itemId)

    res.send(item)
})
/*
    De esta manera podemos buscar por medio de los params dentro de un objeto , esto nos sirve para imprementar un filtro por ejemplo.
*/
router.get("/item", (req, res)=>{
    const {name} = req.query;
    const itemsFiltered = items.filter(el => el.name == name) || items
    console.log(name);

    res.send(itemsFiltered)
})

module.exports = router;