import { getDataAdd } from "./validadAdd.js"

export const sendDataAdd = () =>{
    console.log(getDataAdd())
}

const btnAdd = document.getElementById("btnADD");

btnAdd.addEventListener("click", (e)=>{
    e.preventDefault();
    sendDataAdd()
})

