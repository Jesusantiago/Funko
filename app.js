const express = require("express");
const app = express();
const PORT = 3000;
const homeRouters = require("./src/router/homeRouters.js");
const shopRouters = require("./src/router/shopRouters.js")

app.use('/static', express.static(__dirname + "/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", homeRouters);
app.use("/", shopRouters);

app.listen(PORT, ()=>console.log(`Se inicio el servidor en ${PORT}`))