const filter = document.getElementById("main__Shop");
const navFilter = document.getElementById("nav__category");
const btnFilter = document.getElementById("filter");
const arrow = document.getElementById("bx_arrow");


btnFilter.addEventListener("click", () => {
    navFilter.classList.toggle("nav__category-act")
    console.log("hola")
})

arrow.addEventListener("click", ()=>{
    navFilter.classList.toggle("nav__category-act")
})
