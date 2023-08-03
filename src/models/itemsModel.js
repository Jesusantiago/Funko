const {conn} = require("../config/conn.js");

const getAll = async () =>{ 
    try{
        const [rows] = await conn.query("SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id LIMIT 9;")
        return rows;
    }catch(e){
        const error = {
            isError : true,
            message: `Hubo un error en: ${e}`
        }
        return error;
    }
}

const getOne = async (params) =>{ 
    try{
        const [rows] = await conn.query("SELECT * FROM product WHERE ?;", params)
        return rows
    }catch(e){
        const error = {
            isError : true,
            message: `Hubo un error en: ${e}`
        }
        return error
    }
}

// const addOne = async (params) =>{
//     try{
//         const [rows] = ("INSERT INTO product (product_name, product_description, price, stock, disconunt, sku, dues, imagen_front, imagen_back, licence_id, category_id) VALUES ?;", [params])
//     }catch(e){

//     }
// }

const deleteOne = async (req,res)=>{
    try{
        const [rows] = await conn.query("DELETE  FROM product WHERE ?;", params)
        return rows
    }catch(e){
        const error = {
            isError : true,
            message: `Hubo un error en: ${e}`
        }
        return error
    }
}

module.exports = {
    getAll,
    getOne,
    deleteOne
}