const mediosBtn = document.getElementById("medios");
const mainDetailProduct = document.getElementById("product__main");

mediosBtn.addEventListener("click", () => {
    mainDetailProduct.classList.toggle("product__main__active")
})

//CLOSE DEL MODAL

const closeModal = document.getElementById("close__modal");

closeModal.addEventListener("click", () => {
    mainDetailProduct.classList.toggle("product__main__active")
})