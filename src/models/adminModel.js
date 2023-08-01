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

module.exports = {
    getAdmin,
}