const { getAllItems, getOneItem } = require( "../services/itemsServices")

const getItems =  async (req, res)=>{ 
    let items = await getAllItems()
    console.log(items)
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
    console.log(item)
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