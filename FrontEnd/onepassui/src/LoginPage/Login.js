import React, { useReducer } from "react";
import "./style.css";
import styles from "./style.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";

function Login()
{
    const [userName, setUserName] = React.useState("");
    

    const onChangeHandler = event => {
        setUserName(event.target.value);
        
        
    }
    
    const [password, setPassword] = React.useState("");

    const onChangeHandlerPW = event => {
        setPassword(event.target.value);
        
    }
      
    const navigate = useNavigate();
    
    
    
    
    

    

    const submit = (e) => {

        e.preventDefault();

        var isValidUN = true;
        var isValidPW = true;
        var userElement = document.getElementById("username");
        var pwElement = document.getElementById("password");
        var submitElement = document.getElementById("submit");
        var titleElement = document.getElementById("loginTitle");
        var authTitleElement = document.getElementById("authTextPreAuth");
        var hyperElement1 = document.getElementById("hyper1");
        var hyperElement2 = document.getElementById("hyper2");
        var loginBoxElement = document.getElementById("loginBox");
        var boxElement = document.getElementById("box");
        console.log("U : ", userName.length, ", P : ", password.length, ", flag : ");
        console.log("ClassNames: ",userElement.className,
        titleElement.className,authTitleElement.className,hyperElement1.className,
        hyperElement2.className,loginBoxElement.className,boxElement.className,
        
        pwElement.className,submitElement.className);

        if (userName.length < 3) {

            isValidUN = false;
            if (!isValidUN) {

                userElement.classList.add("inputInvalid");
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

                userElement.classList.remove("inputInvalid");
                userElement.classList.add("input");
                // console.log("Hi ",userElement.className);

            } 
        }

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
        if(isValidPW == true & isValidUN == true)
        {
            userElement.classList.add("postAuth");
            pwElement.classList.add("postAuth");
            submitElement.classList.add("postAuth");
            hyperElement1.classList.add("postAuth");
            hyperElement2.classList.add("postAuth");
            titleElement.classList.add("postAuth");
            authTitleElement.classList.add("authTextPostAuth");
            authTitleElement.classList.remove("authTextPreAuth");
            authTitleElement.classList.remove("loginText");
            loginBoxElement.classList.add("postAuthloginBox");
            boxElement.classList.add("postAuthBox");
            boxElement.classList.remove("box");
            console.log("ClassNames: ",userElement.className,
        titleElement.className,authTitleElement.className,hyperElement1.className,
        hyperElement2.className,loginBoxElement.className,boxElement.className,
        
        pwElement.className,submitElement.className, "Auth : ", authTitleElement.className);
        console.log("User Name : " + userName + ", Cred : " + password);
        // Use the variable name while sending object to backend, make sure variable name is db datamember name
        axios.post("http://localhost:8080/api/login", {user_name: userName, user_cred: password}).then((resp) =>
        
            {
                console.log("UserName : ", resp.data);
            }
        
        );

        setTimeout(function(){navigate('/dash');},2000);

        }
        // navigate('/dash');
    }

    
    


    return (
        <div className="body">
            <div class="box" id = "box">
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


                <div class="login">
                    <div class="loginBox" id = "loginBox">
                    <div class="loginText authTextPreAuth" id="authTextPreAuth"> <h1><i class="fa-solid fa-lock-open"></i>Authenticated</h1></div>
                        <div class="loginText" id = "loginTitle"> <h1><i class="fa-solid fa-right-to-bracket"></i>Login</h1>
                        
                                <div class="inputFields">
                                    <input className = "input" id="username" type="text" placeholder="Username" onChange={onChangeHandler}></input>
                                    <input className = "input" id="password" type="password" placeholder="Password" onChange={onChangeHandlerPW}></input>
                                    <br/>
                                    <input class = "submit" type="submit" placeholder="Login" id = "submit" onClick={submit}></input>
                                    <div class="hyperButtons" id = "hyperGroupLogin"> 
                                                <a href="#" id = "hyper1">Forget Password</a>
                                                <a href = "#" id = "hyper2">Sign Up</a>
                                    </div>
                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            </div>  


    );  

    
}   

export default Login;