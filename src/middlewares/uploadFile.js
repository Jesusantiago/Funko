const multer = require("multer");
const path = require("path")

/*logica para guardar imagenes en el servir*/

const storage = multer.diskStorage({
    destination : (req, file, cb) => cb(null, path.resolve(__dirname, "../../public/img")),
    filename: (req, file, cb) => cb(null, `${Date.now()} - ${file.originalname}`)
});

const uploadFile = multer({storage});

module.exports = uploadFile;