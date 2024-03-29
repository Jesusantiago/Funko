const {itemHome} = require("../services/itemsServices")

const getHome = async(req, res)=>{
    let data = await itemHome();
    res.render("home", {
        view: {
            title : "Home - FunkoShop",
            script : "/static/moduloindex.js"
        },
        items: data
        })
}

module.exports = {
    getHome 
}