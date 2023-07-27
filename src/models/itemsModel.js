const {conn} = require("../config/conn.js");

const getAll = async () =>{ 
    try{
        const [rows] = await conn.query("SELECT * FROM product;")
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