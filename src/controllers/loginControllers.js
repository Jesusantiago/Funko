
/*
    Controllers de login, que trae la vista del login 
*/

const loginViewController = async(req,res) => {
    res.render("../views/about/login", {
        view : {
            title: "Login - FunkoShop"
        }
    })
};

/*
    Controller que manda los datos para verificar si estas registrado e iniciar seccion
*/

// const loginDataController = async(req,res) => {
//     // const data = req.body
//     // console.log(data);
//     // res.send(data)
// };

module.exports = {
    loginViewController
    // loginDataController
}