const {getAllAdmin } = require("../services/adminService");

const getAdmin = async (req,res) => {
    let items = await getAllAdmin()
    if(items.error){
        items = `Hubo un error`
    }

    res.render("../views/admin/admin", {
        view : {
            title : "Admin - FunkoShop"
        },
        items : items
    })
}

module.exports = {
    getAdmin
}