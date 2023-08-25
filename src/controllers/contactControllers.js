//  Controller para mandar la vista del login

const contactViewCont = (req,res) =>{
    res.render("../views/about/contact", {
        view : {
            title : "Contacto - FunkoShop"
        }
    })
}

const contactDataCont = (req,res) => {
    // res.redirect("/")
}

module.exports = {
    contactViewCont,
    contactDataCont
}