const session = require("cookie-session");
require("dotenv").config()

const initSession = () => {
    
    return session({
        secret : process.env.SESSION_NAME, 
    })
}

module.exports = {
    initSession
}