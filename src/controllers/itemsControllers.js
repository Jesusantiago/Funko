const { getAllItems, getOneItem } = require( "../services/itemsServices")

const getItems =  async (req, res)=>{ 
    let items = await getAllItems()
    if(items.error){
        items = `Hubo un error`
    }

    res.render("../views/shop/shop", {
        view : {
            title: "Shop - FunkoShop"
        },
        items: items
    });    
};
const getItem = async (req,res)=>{
    const id = req.params.id;
    let item = await getOneItem({product_id : id})
    if(item.error){
        item = `Hubo un error`
    }
    res.render("../views/shop/item", {
        view : {
            title: "Item - FunkoShop"
        },
        item: item
    });
};




module.exports = {
    getItems,
    getItem
}