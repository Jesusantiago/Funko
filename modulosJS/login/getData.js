import {sendData} from"./sendData.js"

export const getData= () =>{
    let email;
    let password;
    let ckeckbox;
    
    const emailInput = document.getElementById("loginEmail");
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const passwordInput = document.getElementById("loginPassword");
    const passRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    email = document.getElementById("loginEmail").value;
    password = document.getElementById("loginPassword").value;
    ckeckbox = document.getElementById("ingresar__checkbox").checked;


    let strValid = false;

    if(!validateString(email,emailRegex)){
        emailInput.style.border = "1px solid green"
        strValid = true;
    }
    
    if(!validateString(password, passRegex)){
        passwordInput.style.border = "1px solid green"
        strValid = true;
    }


    const data = {
        email: email,
        password: password,
        ckeckbox: ckeckbox
    }
    
    console.log(data)

    if(strValid){
        console.log("nose puede enviar")
    }else{
        sendData()
    }

}

/*
sendData
obtiene los datos ingresados del input, llama a la function que los valida y si los datos son correctos este los guarda en una clase y los mande por parametros a setData para hacer el fetch
*/


const validateString = (str, regex)=>{
    const validoRegex = regex;
    return validoRegex.test(str);
}

/*

ValidateString 

valida los datos ingresamos por parte de los input por parametros

*/