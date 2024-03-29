import { retrieveUrlsFromLocalStorage } from "./imageFile.js";

export const clearInput = () =>{
    let nameInput = document.getElementById("nameAdd");
    let descriptionInput = document.getElementById("descriptionAdd");
    let skuInput = document.getElementById("skuAdd");
    let priceInput = document.getElementById("priceAdd");
    let stockInput = document.getElementById("stockAdd");
    let discountInput = document.getElementById("discountAdd");
    let inputImagen = document.getElementById("imageAdd")

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
    
    const cleanImage = () =>{
        inputImagen.type = "text"
        inputImagen.type = "file"
    }
        
    cleanImage()

}

const btnClear = document.getElementById("btnCLEAR").addEventListener("click", (e)=>{
    e.preventDefault();
    clearInput()
})