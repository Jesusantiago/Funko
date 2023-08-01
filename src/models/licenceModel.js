const { conn } = require("../config/conn");

const getLicence = async () => {
    try{
        const [rows] = await conn.query("SELECT licence_name FROM licence;")

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
    getLicence
}