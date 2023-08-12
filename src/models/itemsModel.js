const {conn} = require("../config/conn.js");


/* 
    Query del Home.
        Trae el producto con la licencia 
*/
const home = async () =>{ 
    try{
        const [rows] = await conn.query("SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id ORDER BY RAND() LIMIT 3;")
        return rows;
    } catch(e){
        const error = {
            isError: true,
            message: `no pudimos recuperar los datos por: ${e}`
        }
        return error;
    }
}

/*
    Query del Show.
        Trae todos los productos en tandas de 9 con su licencia
*/

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

/*
    Query detail.
        Trae un producto con toda su información
*/

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

/*
    Query delete
        Elimina un producto de la base de datos
*/

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

/*
    Query Admin.
        Trae la lista de los productos en el Admin con su licencia
*/

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

/*
    Query AddItem
        Agrega un producto a la base de datos
*/

const addItem = async (params) => {

    try{

        const [rows] = await conn.query("INSERT INTO product (product_name, product_description, price, stock, disconunt, sku, dues, licence_id, category_id) VALUES (?);", [params]);
        
        const response = {
            isError : false,
            data : rows
        };
        

        return response;
    }   catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear los valores seleccionados por: ${e}`
    };
    console.log(error);
    return error;
    }
}

/*
    Query edit.
        Trae la lista de view de edit.
*/

// const getEdit = async (params) =>{
//     try{
//         const [rows] = await conn.query("SELECT product_name, product_description, price, stock, disconunt, sku, dues, imagen_back,imagen_front, licence.licence_name, category.category_name FROM product JOIN licence ON product.licence_id = licence.licence_id JOIN category ON product.category_id = category.category_id WHERE product.?;", params)
        
//         return rows
//     }catch(e){
//         const error = {
//             isError : true,
//             message : `Huebo un error en: ${e}`
//         }
//         return error
//     }
// }


module.exports = {
    getAll,
    getOne,
    deleteOne,
    home,
    getAdmin,
    addItem
    // getEdit
}