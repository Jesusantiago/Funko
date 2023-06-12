import {validateString, emailRegex, passRegex} from "../login/getDataLogin.js";
import { sendDataregister } from "./sendDataRegister.js";

export const getDataRegister = () =>{
    let name;
    let subname;
    let email;
    let password;
    let checkbox;

    const nameInput = document.getElementById("registerName");
    const subnameInput = document.getElementById("registerSubname");
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("registerPassword");
    const checkboxInput = document.getElementById("registerCheck");

    const textRegex = /[A-ZÑa-zñ]+/i;

    name = document.getElementById("registerName").value;
    subname = document.getElementById("registerSubname").value;
    email = document.getElementById("registerEmail").value;
    password = document.getElementById("registerPassword").value;
    checkbox = document.getElementById("registerCheck").checked;

    let strValid = false;

    if(!validateString(name,textRegex)){
        nameInput.style.border = "1px solid yellow"
        strValid = true;
    }

    if(!validateString(subname,textRegex)){
        subnameInput.style.border = "1px solid yellow"
        strValid = true;
    }
    
    if(!validateString(email,emailRegex)){
        emailInput.style.border = "1px solid yellow"
        strValid = true;
    }
    
    if(!validateString(password,passRegex)){
        passwordInput.style.border = "1px solid yellow"
        strValid = true;
    }

    if(checkbox == false){
        checkboxInput.style.border = "2px solid yellow"
        strValid = true
    }

    const data = {
        name: name,
        subname: subname,
        email: email,
        password: password,
        check: checkbox
    }

    if(strValid){
        console.log("NO SE PUEDE ENVIAR")
    }else{
        sendDataregister();
    }
    
    console.log(data)


}

/*

Se hace la validación  de todos los campos, si todos los campos estan bien se envia y manda por un objetos todos los datos
Si el input checkbox no esta marcado no se logra enviar los datos y FALTARÍA HACER UN MODAL PARA ELLO.




*/