const {getAllAdmin} = require("../services/adminService");
const {getLicenceItem} = require("../services/licenceService")
const {getCategoryItem} = require("../services/categoryService")
const {getAllEdit} = require("../services/adminService")

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

const getViewAdd = async (req, res) =>{
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

const getViewEdit = async (req, res) => {
    const id = req.params.id;
    let items = await getAllEdit({product_id : id})
    console.log(items)

    res.render("../views/admin/edit", {
        view : {
            title: "Edit - FunkoShop"
        },
        items : items
    })

}


module.exports = {
    getAdmin,
    getViewAdd,
    getViewEdit
}