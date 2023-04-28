// let close = document.querySelector(".gg-close-r");
// let menu = document.querySelector(".menuBurger");
// let header = document.querySelector(".header");
// let burger = document.querySelector(".span__burger");

// burger.addEventListener("click", (e)=>{
//     console.log(e.target)
//     header.classList.toggle("active")
//     menu.classList.toggle("menuBurger_none")
// })


// close.addEventListener("click", ()=>{
//     console.log("burger close")
//     menu.classList.toggle("menuBurger__none")
// })


const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", (e)=>{
    console.log(e.target)
    header.classList.toggle("a");

})