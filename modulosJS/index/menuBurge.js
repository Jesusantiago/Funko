// Menu Burger

const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", (e)=>{
    // console.log(e.target.classList)
    header.classList.toggle("a");
})

// Menu grid
/*

const itemBlock = document.getElementById("bx_block");
const itemInline = document.getElementById("bx_inline");
const menuBlock = document.getElementById("shop__list_product_grid");

itemBlock.addEventListener("click", () =>{
    menuBlock.classList.toggle("shop__list_product_flex")
    menuBlock.classList.toggle("shop__list_product_grid");
    
})

itemInline.addEventListener("click", () => {
    menuBlock.classList.toggle("shop__list_product_flex")
    menuBlock.classList.toggle("shop__list_product_grid")
})


//MEDIOS DE PAGO

const mediosBtn = document.getElementById("medios");
const mainDetailProduct = document.getElementById("product__main");

mediosBtn.addEventListener("click", () => {
    // console.log("hola")
    mainDetailProduct.classList.toggle("product__main__active")
})

//CLOSE DEL MODAL

const closeModal = document.getElementById("close__modal");

closeModal.addEventListener("click", () => {
    mainDetailProduct.classList.toggle("product__main__active")
})
*/