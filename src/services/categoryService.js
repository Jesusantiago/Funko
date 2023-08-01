const {getCategory} = require("../models/categoryModel");

const getCategoryItem = async () => {
    const getCategoryList = await getCategory()

    return getCategoryList
}

module.exports = {
    getCategoryItem
}