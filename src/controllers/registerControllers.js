const registerController = (req,res) => {
    res.render("../views/about/register", {
        view : {
            title : "Registro - FunkoShop"
        }
    })
}

const registerDataController = async(req,res) =>{
    res.redirect("/")
}

module.exports = {
    registerController,
    registerDataController
}