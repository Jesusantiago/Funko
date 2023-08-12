const {getAdmin, addItem} = require("../models/itemsModel")

const getAllAdmin = async () => {
    const getAllAdminItem = await getAdmin();

    return getAllAdminItem
};

const addProduct = async (data) =>{
    
    // return await addItem(data)
    const createProduct = {
        product_name : data.name,
        product_description : data.description,
        price: data.price,
        stock : data.stock,
        discount : data.discount,
        sku : data.sku,
        dues : data.dues,
        licence_id: data.licence,
        category_id: data.category
    }
    console.log(Object.values(createProduct));
    return await addItem(Object.values(createProduct)) 
}

// const getAllEdit = async (params) => {
//     const getEditView = await getEdit(params)

//     return getEditView
// }

module.exports = {
    getAllAdmin,
    addProduct
    // getAllEdit
}