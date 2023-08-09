const express = require("express");
const app = express();
require("dotenv").config();


const homeRouters = require("./src/router/homeRouters.js");
const shopRouters = require("./src/router/shopRouters.js")
const contactRouters = require("./src/router/contactRouters.js")
const loginRouters = require("./src/router/loginRouters.js")
const registerRouters = require("./src/router/registerRouters.js")
const adminRouters = require("./src/router/adminRouters.js")
const {error404} = require("./src/utils/errorHandler.js")

const PORT = process.env.PORT;

app.use('/static', express.static(__dirname + "/public"))

app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/", homeRouters);
app.use("/shop", shopRouters);
app.use("/contact", contactRouters);
app.use("/login", loginRouters);
app.use("/register", registerRouters);
app.use("/admin", adminRouters);

app.use(error404)

app.listen(PORT, ()=>console.log(`Se inicio el servidor en ${PORT}`))