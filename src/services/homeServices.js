const { home } = require("../models/homeModel");

const itemHome = async () =>{
    const getThreeItemHome = await home()
    return getThreeItemHome;
}

module.exports = {
    itemHome
}