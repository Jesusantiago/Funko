// Menu Burger

const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", (e)=>{
    // console.log(e.target.classList)
    header.classList.toggle("a");
})

