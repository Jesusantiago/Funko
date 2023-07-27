const {itemHome} = require("../services/homeServices")

const getHome = async(req, res)=>{
    let data = await itemHome();
    res.render("Home", {
        view: {
            title : "Home - FunkoShop"
        },
        items: data
        })
}

module.exports = {
    getHome 
}