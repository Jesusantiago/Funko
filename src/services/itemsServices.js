const { getAll, getOne } = require("../models/itemsModel");

const getAllItems = async () =>{
    const getAllItemsShop = await getAll()

    return getAllItemsShop;
}

const getOneItem = async (params) =>{
    const getOneItemView = await getOne(params)

    return getOneItemView;
}

module.exports = {
    getAllItems,
    getOneItem
}