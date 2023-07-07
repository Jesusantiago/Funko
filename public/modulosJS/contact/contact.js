// import { getdataContact } from "./getDataContact.js";
import { sendDataContact } from "./sendDataContact.js";

console.log("contact")

const btnContac = document.getElementById("btnConta");

btnContac.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("hola")
    sendDataContact();
})

/*
Escucha el evento del click en contacto para verificar si la información dada es correcta
*/
