import React from "react";
import "./style.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function Login()
{

    
      
    console.log("HI");
    return (
        <div className="body">
            <div class="box">
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


                <div class="login">
                    <div class="loginBox">
                        <div class="loginText"> <h1><i class="fa-solid fa-right-to-bracket"></i>Login</h1>
                        
                                <div class="inputFields">
                                    <input class = "input" type="text" placeholder="Username"></input>
                                    <input class = "input" type="password" placeholder="Password"></input>
                                    <br/>
                                    <input type="submit" placeholder="Login"></input>
                                    <div class="hyperButtons">
                                                <a href="#">Forget Password</a>
                                                <a href = "#">Sign Up</a>
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