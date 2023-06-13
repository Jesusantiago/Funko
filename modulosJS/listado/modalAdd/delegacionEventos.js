import { clearFooter } from "./createModal.js";


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
    // if(e.target.id == )

})

console.log("delegacion de evento");