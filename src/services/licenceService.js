const { getLicence } = require("../models/licenceModel");

const getLicenceItem = async () =>{
    const getLicenceList = await getLicence()

    return getLicenceList
}

module.exports = {
    getLicenceItem
}