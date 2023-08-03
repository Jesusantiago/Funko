const { conn } = require("../config/conn");

const getAdmin = async () => {
    try{
        const [rows] = await conn.query("SELECT product_id,sku,product_name,licence.licence_name FROM product JOIN licence ON product.licence_id = licence.licence_id; ")

        return rows;
    }catch(e){
        const error = {
            isError : true,
            message : `Hubo un error en: ${e}`
        }
        return error;
    }
}

const getEdit = async (params) =>{
    try{
        const [rows] = await conn.query("SELECT product_name, product_description, price, stock, disconunt, sku, dues, imagen_back,imagen_front, licence.licence_name, category.category_name FROM product JOIN licence ON product.licence_id = licence.licence_id JOIN category ON product.category_id = category.category_id WHERE product.?;", params)

        return rows
    }catch(e){
        const error = {
            isError : true,
            message : `Huebo un error en: ${e}`
        }
        return error
    }
}

module.exports = {
    getAdmin,
    getEdit
}