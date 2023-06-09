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