import { getDataRegister } from "./getDataRegister.js";

const btnRegister = document.getElementById("registerBtn").addEventListener("click", (e) =>{
    e.preventDefault();
    getDataRegister()
})

//se escuche el evento click para ejecutar la validaaión de los input 