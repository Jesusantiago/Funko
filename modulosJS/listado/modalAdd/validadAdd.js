import { validateString } from "../../login/getDataLogin.js";
import {sendDataAdd} from "./sendDataAdd.js"

export const getDataAdd = () =>{
    let category;
    let license;
    let name;
    let description;
    let sku;
    let price;
    let stock;
    let discount;
    let quota;
    // let image;

    const categoryInput = document.getElementById("categoryAdd");
    const licenseInput = document.getElementById("licenseAdd");
    const nameInput = document.getElementById("nameAdd");
    const descriptionInput = document.getElementById("descriptionAdd");
    const skuInput = document.getElementById("skuAdd");
    const priceInput = document.getElementById("priceAdd");
    const stockInput = document.getElementById("stockAdd");
    const discountInput = document.getElementById("discountAdd");
    const quotasInput = document.getElementById("quotasAdd");
    // const imageInput = document.getElementById("imageAdd");


    const textRegex = /[A-ZÑa-zñ]+/i;
    const skuRegex = /^[0-9a-zA-Z]+$/;
    const numRegex = /^[0-9]+$/;

    category = document.getElementById("categoryAdd").options[document.getElementById("categoryAdd").selectedIndex].text;
    // category.options[category.selectedIndex].text;
    license = document.getElementById("licenseAdd").options[document.getElementById("licenseAdd").selectedIndex].text;
    name = document.getElementById("nameAdd").value;
    description = document.getElementById("descriptionAdd").value;
    sku = document.getElementById("skuAdd").value;
    price = document.getElementById("priceAdd").value;
    stock = document.getElementById("stockAdd").value;
    discount = document.getElementById("discountAdd").value;
    quota = document.getElementById("quotasAdd").options[document.getElementById("quotasAdd").selectedIndex].text;
    // image = document.getElementById("imageAdd").value;

    let strValid = false;

    if(!validateString(name, textRegex)){
        nameInput.style.border = "1px solid red"
        strValid = true;
    }
    if(!validateString(description, textRegex)){
        descriptionInput.style.border = "1px solid red"
        strValid = true;
    }
    if(!validateString(sku,skuRegex)){
        skuInput.style.border = "1px solid red"
        strValid = true;
    }
    if(!validateString(price, numRegex)){
        priceInput.style.border = "1px solid red"
        strValid = true;
    }
    if(!validateString(stock, numRegex)){
        stockInput.style.border = "1px solid red"
        strValid = true;
    }
    if(!validateString(discount, numRegex)){
        stockInput.style.border = "1px solid red"
        strValid = true;
    }

    const data = {
        category: category,
        license: license,
        name: name,
        description : description,
        sku: sku,
        price: price,
        stock: stock,
        discount: discount,
        quota: quota
        // image: image
    }

    
    if(strValid){
        console.log("NO SE PUEDE ENVIAR")
    }else{
        const dataLocal = localStorage.setItem("product", JSON.stringify(data))
    }

    return data;
}


