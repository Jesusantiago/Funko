const {getAdmin, addItem, editUpdateModel, deleteModel} = require("../models/itemsModel")

const getAllAdmin = async () => {
    const getAllAdminItem = await getAdmin();

    return getAllAdminItem
};

const addProduct = async (data, files) =>{
    
    const createProduct = {
        product_name : data.name,
        product_description : data.description,
        price: data.price,
        stock : data.stock,
        discount : data.discount,
        sku : data.sku,
        dues : data.dues,
        imagen_back: "/img/" + files[0].filename,
        imagen_front: "/img/" + files[1].filename,
        licence_id: data.licence,
        category_id: data.category
    }

    return await addItem(Object.values(createProduct)) 
}

const editService = async (item,id) => {
    const data = {
        product_name : item.name,
        product_description : item.description,
        price : item.price,
        stock : item.stock,
        disconunt : item.discount,
        sku : item. sku,
        dues : item.dues,
        licence_id : item.licence,
        category_id : item.category
    }
    
    return await editUpdateModel(data,{product_id : id});
}

const deleteService = async (id) => {
    const deleteProduct = await deleteModel(id);

    return deleteProduct;
}


module.exports = {
    getAllAdmin,
    addProduct,
    editService,
    deleteService
}