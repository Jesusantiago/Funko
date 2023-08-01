const { getAdmin, getAdd } = require("../models/adminModel");

const getAllAdmin = async () => {
    const getAllAdminItem = await getAdmin();

    return getAllAdminItem
};

module.exports = {
    getAllAdmin
}