const { log } = require("console");
const { getAllItems, getOneItem } = require( "../services/itemsServices")

const getItems =  async (req, res)=>{ 
    let items = await getAllItems()

    res.render("../views/shop/shop", {
        view : {
            title: "Shop - FunkoShop",
            script : "/static//modulosJS/shop/moduloshop.js"
        },
        items: items
    });    
};

const getItem = async (req,res)=>{
    const id = req.params.id;
    let item = await getOneItem({product_id : id})
    res.render("../views/shop/item", {
        view : {
            title: "Item - FunkoShop",
            script: "/static/modulosJS/itemProduct/moduloItemProduct.js"
        },
        item
    });
};




module.exports = {
    getItems,
    getItem
}