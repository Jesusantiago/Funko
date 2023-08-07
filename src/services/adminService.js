const {getAdmin} = require("../models/itemsModel")

const getAllAdmin = async () => {
    const getAllAdminItem = await getAdmin();

    return getAllAdminItem
};

// const getAllEdit = async (params) => {
//     const getEditView = await getEdit(params)

//     return getEditView
// }

module.exports = {
    getAllAdmin
    // getAllEdit
}