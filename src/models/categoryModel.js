const {conn} = require("../config/conn");

const getCategory = async () => {
    try{
    const [ rows ] = await conn.query("SELECT category_name FROM category")

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
    getCategory
}