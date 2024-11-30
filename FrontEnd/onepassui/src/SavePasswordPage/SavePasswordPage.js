import React from "react";
import Navbar from "../General/Navbar";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Dropdown } from "bootstrap";

function SavePasswordPage({ userData }){

    console.log(userData)

    const [passwordName, setPasswordName] = React.useState("");
    

    const onChangeHandler = event => {
        setPasswordName(event.target.value);        
    }
    
    const [siteName, setSiteName] = React.useState("");
    

    const onChangeHandlerSite = event => {
        setSiteName(event.target.value);        
    }

    const [password, setPassword] = React.useState("");

    const onChangeHandlerPW = event => {
        setPassword(event.target.value);        
    }


    const [rePassword, setRePassword] = React.useState("");

    const onChangeHandlerRePW = event => {
        setRePassword(event.target.value);        
    }
    

    const [vaultName, setVaultName] = React.useState("");
    
    


    const [options, setOptions] = React.useState([]); // Store the dropdown options
  const [selectedValue, setSelectedValue] = React.useState(""); // Store the selected value

  // Fetch data from API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/vaults/byUser/" + userData.userID); // Replace with your API URL
        setOptions(response.data); // Assuming response.data is a list
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  // Handle change event
  const handleChange = (event) => {
    console.log("Event Target Value:", event.target.value); // Debugging
    setSelectedValue(event.target.value); // Update selected value in state
  };

        async function fetchVaultsByUser() {
            try {
              const resp = await axios.get("http://localhost:8080/api/vaults/byUser/" + userData.userID);
              let getVaultsByUser = Object.values(resp.data);
              console.log("Vaults by user:", getVaultsByUser);
              return getVaultsByUser; // If you need to use it elsewhere
            } catch (err) {
              console.error("Error fetching vaults:", err);
            }
          }
          
          
      


    const navigate = useNavigate();


    const submit = (e) => {
        e.preventDefault();

        var isValidUN = true;
        var isValidSite = true;
        var isValidPW = true;
        var isValidRePW = true;
        var pwMatch = true;
        var isVaultDefault = true;
        var passwordElement = document.getElementById("password-name");
        var siteElement = document.getElementById("site-name");
        var pwElement = document.getElementById("password");
        var rePwElement = document.getElementById("re-type-password");
        var vaultElement = document.getElementById("dynamicSelect");
        var submitElement = document.getElementById("submit");
        var titleElement = document.getElementById("loginTitle");
        var authTitleElement = document.getElementById("authTextPreAuth");
        var vaultIconElement = document.getElementById("vault-icon");
        var boxElement = document.getElementById("box-static");
        // var authTitleElement = document.getElementById("authTextPreAuth");

        if (passwordName.length < 3) {

            isValidUN = false;
            if (!isValidUN) {
                // console.log("Error");
                passwordElement.classList.add("inputInvalid");
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

                passwordElement.classList.remove("inputInvalid");
                passwordElement.classList.add("input");
                // console.log("Hi ",userElement.className);

            } 
        }

        if (siteName.length < 3) {

            isValidSite = false;
            if (!isValidSite) {
                // console.log("Error");
                siteElement.classList.add("inputInvalid");
                submitElement.classList.add("buttonInvalid");
                // submitElement.classList.remove("submit");
                // console.log("before : ", submitElement.className);
                setTimeout(function() {submitElement.classList.remove("buttonInvalid")}, 1000);
                // console.log(userElement.className);
                // console.log("after : ", submitElement.className);

            }
        }
        else { 

            isValidSite = true;
            if (isValidSite) {

                siteElement.classList.remove("inputInvalid");
                siteElement.classList.add("input");
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
    console.log(vaultName);

    if (vaultName==="Select A Vault") {

        isVaultDefault = false;
        if (!isVaultDefault) {
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

        isVaultDefault = true;
        if (isVaultDefault) {

            vaultElement.classList.remove("inputInvalid");
            vaultElement.classList.add("input");
            // console.log("Hi ",userElement.className);

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
        if(isValidPW == true & isValidUN == true & isValidRePW == true & pwMatch === true)
        {
            console.log(password, siteName, selectedValue, passwordName)        
            axios.post("http://localhost:8080/api/creds/create", {savedSite: siteName, savedUser: userData.userID, savedCred: password, vaultName: selectedValue, credNickname: passwordName}).then( e =>{

            passwordElement.classList.add("postAuth");
            pwElement.classList.add("postAuth");
            rePwElement.classList.add("postAuth");
            submitElement.classList.add("postAuth");
            vaultElement.classList.add("postAuth");
            siteElement.classList.add("postAuth");
            // hyperElement1.classList.add("postAuth");
            // hyperElement8962.classList.add("postAuth");
            titleElement.classList.add("postAuth");
            authTitleElement.classList.add("authTextPostAuth-static");
            authTitleElement.classList.remove("authTextPreAuth");
            authTitleElement.classList.remove("loginText");
            vaultIconElement.classList.remove("authTextPreAuthIconColor");
            vaultIconElement.classList.add("authTextPostAuthIconColor");
            boxElement.classList.add("postAuthBox-static");
            boxElement.classList.remove("box-static");
          
        
        setTimeout(function(){navigate('/dash');},2000);
        })

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
  
  <div class="pageText authTextPreAuth" id="authTextPreAuth"> <h1><VpnKeyIcon id="vault-icon"/>Cred Saved</h1></div>
  <div class="pageText" id = "loginTitle"> <h1><VpnKeyIcon className="authTextPreAuthIconColor" id="vault-icon"/>Save Password</h1></div>
  <div class="inputFields-static">
                                    <input className = "input" id="password-name" type="text" placeholder="Enter Nickname" onChange={onChangeHandler}></input>
                                    <input className = "input" id="site-name" type="text" placeholder="Enter Site Address" onChange={onChangeHandlerSite}></input>
                                    <input className = "input" id="password" type="password" placeholder="Enter Vault Credentials" onChange={onChangeHandlerPW}></input>
                                    <input className = "input" id="re-type-password" type="password" placeholder="Re-Enter Vault Credentials" onChange={onChangeHandlerRePW}></input>
                                    
                                    <select className = "input"
                                        id="dynamicSelect"
                                        value={selectedValue}
                                        onChange={handleChange}
                                        
                                        >
                                        <option value="" disabled>
                                            -- Select an option --
                                        </option>
                                        {options.map((option, index) => (
                                            <option key={index} value={option} className = "options">
                                            {option}
                                            </option>
                                        ))}     
                                        </select>

                                    <br/>
                                    <br/>
                                    <input class = "submit" type = "submit" placeholder="Remember" id = "submit" onClick={submit}></input>
                                   
                                </div>


   </div>



</div>

    )
}
export default SavePasswordPage;