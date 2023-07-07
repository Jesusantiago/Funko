let express = require("express");

let app = express();

app.get("/", (req,res)=>{
    res.status(200).send({
        message: 'Get home go'
    })
}).listen("3000")