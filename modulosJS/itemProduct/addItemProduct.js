const subtract = document.getElementById("subtractItemProduct");

const add = document.getElementById("addItemProduct");

let item = document.getElementById("itemTotal");

let value = 1;

item.innerText = value;

subtract.addEventListener("click", () =>{
    if(value == 1){
        return value;
    }else{
        value--;
        return item.innerText = value;
    }
    
})

add.addEventListener("click", () =>{
    value++;
    return item.innerText = value;
})
