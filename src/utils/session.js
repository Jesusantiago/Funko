const session = require("express-session");
require("dotenv").config()

const initSession = () => {
    
    return session({
        secret : process.env.SESSION_NAME,
        resave: false,
        saveUninitialized: true 
    })
}

module.exports = {
    initSession
}