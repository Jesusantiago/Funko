let express = require("express");

let app = express();

app.use('/static', express.static(__dirname + "/public"))

app.get("/hola", (req, res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.send(`Tu resultado es: ${a * b}`);
})


app.get("/", (req,res)=>{
    res.sendFile("./public/index.html", {
        root: __dirname
    })
})

app.listen("3000")