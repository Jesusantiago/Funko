const {conn} = require("../config/conn.js")

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

module.exports = {
    home
}