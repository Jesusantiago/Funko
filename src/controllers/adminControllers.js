const {getAllAdmin, addProduct, editService, deleteService} = require("../services/adminService");
const {getOneItem} = require("../services/itemsServices")
const {getLicenceItem} = require("../services/licenceService")
const {getCategoryItem} = require("../services/categoryService")


const getAdmin = async (req,res) => {
    let items = await getAllAdmin()
    if(items.error){
        items = `Hubo un error`
    }

    res.render("../views/admin/admin", {
        view : {
            title : "Admin - FunkoShop",
            script : "/static/modulosJS/listado/moduloListado.js"
        },
        items : items
    })
}

const getViewAdd = async (req, res) =>{
    let licence = await getLicenceItem()
    let category = await getCategoryItem();
    
    res.render("../views/admin/add", {
        view : {
            title : "Agregar producto - FunkoShop",
            script : "../static/modulosJS/modalAdd/moduleAdd.js"
        },
        category : category,
        licence : licence
    })
}

const postCreate = async (req,res) =>{
    const data = req.body;
    console.log(data);
    await addProduct(data)
    res.redirect("/admin")
}

const getViewEdit = async (req, res) => {
    const id = req.params.id;
    let items = await getOneItem({product_id : id})
    let licence = await getLicenceItem();
    let category = await getCategoryItem();
    
    res.render("../views/admin/edit", {
        view : {
            title: `Edit #${id} - Admin FunkoShop`
        },
        item : items[0], 
        categories : category,
        licences : licence
    })
}

const editItem = async (req,res) => {
    const id = req.params.id;
    const item = req.body;

    await editService(item, id);
    res.redirect("/admin")
}

const deleteItem = async (req,res) => {
    const id = req.params.id;

    await deleteService({product_id : id});
    res.redirect("/admin")
}

module.exports = {
    getAdmin,
    getViewAdd,
    getViewEdit,
    postCreate,
    editItem,
    deleteItem
}