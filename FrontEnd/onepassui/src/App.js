// import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './LoginPage/Login';
import LandingPage from './LandingPage/LandingPage';
import CreateVaultPage from './CreateVaultPage/CreateVaultPage';
import SavePasswordPage from './SavePasswordPage/SavePasswordPage';
import React, { useReducer } from "react";
import VaultLookupPage from './VaultLookupPage/VaultLookupPage';

function App() {

  const [userData, setUserData] = React.useState({
    "userID": "",
    "userName": "",
    "loginStatus": false
});

  const handleLoginSuccess = (data) => {
    setUserData(data);
  };

  


  console.log("App: ", userData);
  userData.loginStatus = true;
  userData.userID = 4;
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */} 
      
      <BrowserRouter>
      <Routes>
        <Route path="/login" element = {<Login  onLoginSuccess={handleLoginSuccess} />}/>
        {userData.loginStatus && <Route path="/dash" element = {<LandingPage  userData={userData} />}/>}
        {userData.loginStatus && <Route path='/create-vault' element = {<CreateVaultPage userData={userData}/>}/>}
        {userData.loginStatus && <Route path='/save-password' element = {<SavePasswordPage userData={userData}/>}/>}
        {userData.loginStatus && <Route path='/vault-lookup' element = {<VaultLookupPage userData={userData}/>}/>}
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
