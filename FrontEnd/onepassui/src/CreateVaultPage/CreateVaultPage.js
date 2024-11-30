import React from "react";
import Navbar from "../General/Navbar";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';

function CreateVaultPage({ userData }){

    const [vaultName, setVaultName] = React.useState("");
    

    const onChangeHandler = event => {
        setVaultName(event.target.value);        
    }
    
    const [password, setPassword] = React.useState("");

    const onChangeHandlerPW = event => {
        setPassword(event.target.value);        
    }


    const [rePassword, setRePassword] = React.useState("");

    const onChangeHandlerRePW = event => {
        setRePassword(event.target.value);        
    }
    
    const navigate = useNavigate();
    console.log({userID: userData.userID, vaultID: vaultName})

    const submit = (e) => {
        e.preventDefault();

        var isValidUN = true;
        var isValidPW = true;
        var isValidRePW = true;
        var pwMatch = true;
        var vaultElement = document.getElementById("vault-name");
        var pwElement = document.getElementById("password");
        var rePwElement = document.getElementById("re-type-password");
        var submitElement = document.getElementById("submit");
        var titleElement = document.getElementById("loginTitle");
        var authTitleElement = document.getElementById("authTextPreAuth");
        var vaultIconElement = document.getElementById("vault-icon");
        var boxElement = document.getElementById("box-static");
        // var authTitleElement = document.getElementById("authTextPreAuth");

        if (vaultName.length < 3) {

            isValidUN = false;
            if (!isValidUN) {
                // console.log("Error");
                vaultElement.classList.add("inputInvalid");
                submitElement.classList.add("buttonInvalid");
                // submitElement.classList.remove("submit");
                // console.log("before : ", submitElement.className);
                setTimeout(function() {submitElement.classList.remove("buttonInvalid")}, 1000);
                // console.log(userElement.className);
                // console.log("after : ", submitElement.className);

            }
        }
        else { 

            isValidUN = true;
            if (isValidUN) {

                vaultElement.classList.remove("inputInvalid");
                vaultElement.classList.add("input");
                // console.log("Hi ",userElement.className);

            } 
        }
        // password.length < 3
        if (password.length < 3) {
                // console.log(password.length)
            isValidPW = false;
            if (!isValidPW) {

                pwElement.classList.add("inputInvalid");
                // console.log(pwElement.className);

            }
        }
        else { 

            isValidPW = true;
            if (isValidPW) {

                pwElement.classList.remove("inputInvalid");
                pwElement.classList.add("input");
                // console.log("Hii ",pwElement.className);

            }  
        }
        // console.log("RE PW : ", rePassword);
            
        if (rePassword.length < 3) {
            // console.log(password.length)
            isValidRePW = false;
        if (!isValidRePW) {

            rePwElement.classList.add("inputInvalid");
            // console.log(pwElement.className);

        }
    }
    else { 

        isValidRePW = true;
        if (isValidRePW) {

            rePwElement.classList.remove("inputInvalid");
            rePwElement.classList.add("input");
            // console.log("Hii ",rePwElement.className);

        }  
    }
    if(password === rePassword)
        {
            pwMatch = true;
        }
        else
        {
            pwMatch = false;
            rePwElement.classList.add("inputInvalid");
            pwElement.classList.add("inputInvalid");
        }
        // isValidPW == true & isValidUN == true
        // console.log(isValidPW == true & isValidUN == true & isValidRePW == true & pwMatch === true)
        if(isValidPW == true & isValidUN == true & isValidRePW == true & pwMatch === true)
        {
            
            // hyperElement1.classList.add("postAuth");
            // hyperElement8962.classList.add("postAuth");
            
            // console.log("Hi : ", vaultIconElement.className);
            // vaultIconElement.classList.add("authTextPostAuth-static");
            // loginBoxElement.classList.add("postAuthloginBox");
            // boxElement.classList.add("postAuthBox");
            // boxElement.classList.remove("box");
        //     console.log("ClassNames: ",userElement.className,
        // titleElement.className,authTitleElement.className,hyperElement1.className,
        // hyperElement2.className,loginBoxElement.className,boxElement.className,
        
        // pwElement.className,submitElement.className, "Auth : ", authTitleElement.className);
        // console.log("User Name : " + userName + ", Cred : " + password);
        // Use the variable name while sending object to backend, make sure variable name is db datamember name
        // axios.post("http://localhost:8080/api/login", {user_name: vaultName, user_cred: password}).then((resp) =>
        
        //     {
        //         console.log("UserName : ", resp.data);
        //     }
        
        // );

        // setTimeout(function(){navigate('/dash');},2000);
        console.log({vaultName: vaultName, vaultCred: password})
        console.log("Data : ",{userID: userData.userID, vaultName: vaultName})
        console.log(vaultName, password);
        
        console.log(axios.get("http://localhost:8080/api/vaults/duplicateCheck/"+vaultName))
        axios.get("http://localhost:8080/api/vaults/duplicateCheck/"+vaultName).then( ifFound => 

            {if(!ifFound.data){

                vaultElement.classList.remove("inputInvalid");
            
            axios.post("http://localhost:8080/api/vaults/create",{vaultName: vaultName, vaultCred: password}).then(

                waitTime => {setTimeout(resolve => {

                    (axios.post("http://localhost:8080/api/native_users/add_vault",{userID: userData.userID, vaultName: vaultName}))
                    vaultElement.classList.add("postAuth");
            pwElement.classList.add("postAuth");
            rePwElement.classList.add("postAuth");
            submitElement.classList.add("postAuth");
            titleElement.classList.add("postAuth");
            authTitleElement.classList.add("authTextPostAuth-static");
            authTitleElement.classList.remove("authTextPreAuth");
            authTitleElement.classList.remove("loginText");
            vaultIconElement.classList.remove("authTextPreAuthIconColor");
            vaultIconElement.classList.remove("pageText-icon");
            vaultIconElement.classList.add("authTextPostAuthIconColor");
            boxElement.classList.add("postAuthBox-static");
            boxElement.classList.remove("box-static");
                    setTimeout(function(){navigate('/dash');},2000)
                },5000)}

            )
            
        }
        else{
            console.log("Vault name already found, try different one")
            vaultElement.classList.add("inputInvalid");
        }
        }

        )
        }
        
        
    



    }

    return(

<div className="body">

<div class="box-static" id = "box-static">
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <div class="pageText authTextPreAuth" id="authTextPreAuth"> <h1><i class="fa-solid fa-vault"></i> Vault Created</h1></div>
  <div class="pageText" id = "loginTitle"> <h1><i id = "vault-icon" class="fa-solid fa-vault authTextPreAuthIconColor pageText-icon"></i> Create Vault</h1></div>
  <div class="inputFields-static">
                                    <input className = "input" id="vault-name" type="text" placeholder="Enter Vault Name" onChange={onChangeHandler}></input>
                                    <input className = "input" id="password" type="password" placeholder="Enter Vault Credentials" onChange={onChangeHandlerPW}></input>
                                    <input className = "input" id="re-type-password" type="password" placeholder="Re-Enter Vault Credentials" onChange={onChangeHandlerRePW}></input>
                                    <br/>
                                    <br/>
                                    <input class = "submit" type="submit" placeholder="Login" id = "submit" onClick={submit}></input>
                                   
                                </div>


</div>



</div>

    )
}
export default CreateVaultPage;