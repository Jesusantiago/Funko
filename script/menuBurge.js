// Menu Burger

const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", (e)=>{
    console.log(e.target)
    header.classList.toggle("a");

})

// Menu Filter

const main = document.getElementById("main__Shop");
const filter = document.getElementById("filter");


filter.addEventListener("click", () => {
    main.classList.toggle("activeFilter")
})