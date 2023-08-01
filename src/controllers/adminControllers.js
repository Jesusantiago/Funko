const {getAllAdmin} = require("../services/adminService");
const {getLicenceItem} = require("../services/licenceService")
const {getCategoryItem} = require("../services/categoryService")

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

const getLicenceAdd = async (req, res) =>{
    let licence = await getLicenceItem()
    let category = await getCategoryItem();
    
    res.render("../views/admin/add", {
        view : {
            title : "Agregar producto - FunkoShop"
        },
        category : category,
        licence : licence
    })
}


module.exports = {
    getAdmin,
    getLicenceAdd
}