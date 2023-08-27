const {getAllAdmin, addProduct, editService, deleteService} = require("../services/adminService");
const {getOneItem} = require("../services/itemsServices")
const {getLicenceItem} = require("../services/licenceService")
const {getCategoryItem} = require("../services/categoryService")

// Controller de la lista de productos de Admin
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

// Obtiene la vista para agregar productos
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

// Sube los datos a la base de datos POST
const postCreate = async (req,res) =>{
    const data = req.body;
    const files = req.files
    // console.log(data, req.files);
    await addProduct(data, files)
    res.redirect("/admin")
}

// Obtiene la vista del edit Product
const getViewEdit = async (req, res) => {
    const id = req.params.id;
    let {message} = await getOneItem({product_id : id})
    let licence = await getLicenceItem();
    let category = await getCategoryItem();
    
    res.render("../views/admin/edit", {
        view : {
            title: `Editar #${id} - Admin FunkoShop`
        },
        item : message[0], 
        categories : category,
        licences : licence
    })
}

// Sube los datos del edit Product
const editItem = async (req,res) => {
    const id = req.params.id;
    const item = req.body;

    await editService(item, id);
    res.redirect("/admin")
}

// Elimina un producto de la base de datos
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