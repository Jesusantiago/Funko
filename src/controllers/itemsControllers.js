const {getAll, getOne, deleteOne} = require("../models/itemsModel")

const getItems =  async (req, res)=>{ 
    let items = await getAll()
    if(items.error){
        items = `Hubo un error`
    }

    res.render("../views/shop/shop", {view : {
        title: "Shop - FunkoShop"
    }});    
};

const getItem = async (req,res)=>{
    const id = req.params.id;
    let item = await getOne({product_id : id})
    if(item.error){
        item = `Hubo un error`
    }
    res.send(item)
}

const createItem = (req, res) =>{
    res.send("hola desde create ITEM")
}

const deleteItem =  (req,res) =>{
    const id = req.params.id;
    let result = deleteOne({product_id : id})
    res.send(result)
    
}


module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem
}