
export const clearInput = () =>{
    console.log("nuevo clear")
    
    let nameInput = document.getElementById("nameAdd");
    let descriptionInput = document.getElementById("descriptionAdd");
    let skuInput = document.getElementById("skuAdd");
    let priceInput = document.getElementById("priceAdd");
    let stockInput = document.getElementById("stockAdd");
    let discountInput = document.getElementById("discountAdd");

    if(nameInput.value != ""){
        nameInput.value = "";
    }
    if(descriptionInput.value != ""){
        descriptionInput.value = "";
    }
    if(skuInput.value != ""){
        skuInput.value = "";
    }
    if(priceInput.value != ""){
        priceInput.value = "";
    }
    if(stockInput != ""){
        stockInput.value = "";
    }
    if(discountInput.value != ""){
        discountInput.value = "";
    }



}