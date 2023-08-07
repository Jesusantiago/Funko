const { getAll, getOne, home } = require("../models/itemsModel");

const getAllItems = async () =>{
    const getAllItemsShop = await getAll()

    return getAllItemsShop;
}

const getOneItem = async (params) =>{
    const getOneItemView = await getOne(params)

    return getOneItemView;
}

const itemHome = async () =>{
    const getThreeItemHome = await home()
    return getThreeItemHome;
}


module.exports = {
    getAllItems,
    getOneItem,
    itemHome
}