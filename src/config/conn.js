const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((error, connection)=>{
    if(error){
        console.error("Hubo un error de conexión: " , error)
    } else{
        console.log("Conexión a la base de datos fue exitosa");
        connection.release();
    }
})

module.exports = {
    conn: pool.promise()
}