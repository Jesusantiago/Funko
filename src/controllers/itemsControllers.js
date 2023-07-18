const items = require("../data/data.js")

const getItems =  (req, res)=>{ 
    res.send(items);    
};

const getItem = (req,res)=>{
    const itemId = req.params.item;
    const item = items.find(item => item.id == itemId)
    res.send(item)
}


module.exports = {
    getItems,
    getItem
}