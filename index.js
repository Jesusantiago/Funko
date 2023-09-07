const express = require("express");
const path = require("path");
const app = express();
const { initSession } = require("./src/utils/session");
require("dotenv").config();

// importanción de rutas
const homeRouters = require("./src/router/homeRouters.js");
const shopRouters = require("./src/router/shopRouters.js")
const contactRouters = require("./src/router/contactRouters.js")
const loginRouters = require("./src/router/loginRouters.js")
const registerRouters = require("./src/router/registerRouters.js")
const adminRouters = require("./src/router/adminRouters.js")
const {error404} = require("./src/utils/errorHandler.js");
const { localIsLogged, localRoles } = require("./src/middlewares/locals");

const PORT = process.env.PORT;

// Rutas para archivos estaticos
app.use('/static', express.static(path.resolve(__dirname + "./public")))

// User session

app.use(initSession());
app.use(localIsLogged);
app.use(localRoles);


// Template engine - EJS
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./src/views"))

// Manejo de data a enviar 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Rutas necesarias
app.use("/", homeRouters);
app.use("/shop", shopRouters);
app.use("/contact", contactRouters);
app.use("/login", loginRouters);
app.use("/register", registerRouters);
app.use("/admin", adminRouters);

// View de ruta no encontrada
app.use(error404)

// Puerto a utilizar
app.listen(PORT, ()=>console.log(`Se inicio el servidor en ${PORT}`))