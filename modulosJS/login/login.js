import { getData } from "./getData.js";

const btn = document.getElementById("btnIngresar")

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    getData();

})

/*
Escucha el evento del click para verificar si los datos son correctos y si estas validado
*/