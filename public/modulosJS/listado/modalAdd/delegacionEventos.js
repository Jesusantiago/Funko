import { clearFooter } from "./createModal.js";
import { getDataAdd } from "./validadAdd.js";
import {clearInput} from "./clearInput.js";
import { sendDataAdd } from "./sendDataAdd.js";
import { imgToBase64 } from "./imageFile.js";


const padreModal = document.getElementById("mainModal")
//Section del html donde aparece el modal
const modalAdd = document.getElementById("mainModal")
//Article del modal
const close = document.getElementById("closeModal")
//Icono del close


padreModal.addEventListener("click", (e) =>{
    //escucha todos los eventos click que sucedan en sus hijos y estos se ejecutaran sobre su id
    // console.log(e)
    if(e.target.id == "closeModal"){
        modalAdd.classList.replace("main__modal", "main__modal-none")
        clearFooter()
        //cierra el modal
    }
    if(e.target.id == "btnADD"){
        console.log("btnADD")
        e.preventDefault();
        sendDataAdd()
        //verifica y envio los input 
    }

    if(e.target.id == "btnClear"){
        console.log("clear")
        clearInput()
    }

    if(e.target.id == "imageAdd") imgToBase64()
})

console.log("delegacion de evento");