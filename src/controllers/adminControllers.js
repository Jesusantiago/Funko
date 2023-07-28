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

const getAdd = async (req,res)=>{
    res.render("../views/admin/add", {
        view : {
            title : "Agregar un nuevo Item"
        }
    })
}
module.exports = {
    getAdmin,
    getAdd
}