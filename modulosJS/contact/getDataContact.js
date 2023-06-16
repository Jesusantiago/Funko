
import { validateString } from "../login/getDataLogin.js";
import { sendDataContact } from "./sendDataContact.js";

export const getdataContact = () =>{
    let name;
    let subname;
    let email;
    let message;

    const nameInput = document.getElementById("nameContact");
    const subnameInput = document.getElementById("subnameContact");
    const emailInput = document.getElementById("emailContact");
    const messageInput = document.getElementById("messageContact");

    name = document.getElementById("nameContact").value;
    subname = document.getElementById("subnameContact").value;
    email = document.getElementById("emailContact").value;
    message = document.getElementById("messageContact").value;

    let strValid = false;

    const textRegex = /[A-ZÑa-zñ]+/i;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!validateString(name,textRegex)){
        nameInput.style.border = "1px solid yellow"
        strValid = true;
    }

    if(!validateString(subname,textRegex)){
        subnameInput.style.border = "1px solid yellow"
        strValid = true;
    }

    if(!validateString(email,emailRegex)){
        emailInput.style.border = "1px solid yellow";
        strValid = true
    }

    if(!validateString(message,textRegex)){
        messageInput.style.border = "1px solid yellow"
        strValid = true
    }

    const dataContact = {
        name: name,
        subname: subname,
        email: email,
        message: message
    }

    if(strValid){
        console.log("no se puede enviar")
    }else{
        console.log(dataContact)
    }
return dataContact;

}
