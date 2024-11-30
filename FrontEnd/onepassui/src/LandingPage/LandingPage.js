import React from "react";
import Navbar from "../General/Navbar.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LandingPage({ userData }) {

  const navigate = useNavigate();

  const moveToVaultPage = (e) => {

    e.preventDefault();
    setTimeout(function(){navigate('/create-vault');},2000);
    
}

const [fetchedVaults, setFetchedVaults] = React.useState("");

const onChangeHandlerVaults = event => {
  setFetchedVaults(event.target.value);        
}

const moveToSavePasswordPage = (e) => {

  e.preventDefault();
  setTimeout(function(){navigate('/save-password');},2000);
  
}

const moveToVaultLookupPage = (e) => {

  e.preventDefault();
  setTimeout(function(){navigate('/vault-lookup');},2000);
  
}

console.log("LAnding: ", userData);




  return (
<div>
<Navbar userData={userData}/> 
    <div class="body">
      <div class="outer">
        <div class="outer-animation">
          <div class="inner">
            <div class="orange"><div class="inner-orange-opaque">
              <div class="inner-orange-transparent"></div>
            </div></div>


            <div class="red"><div class="inner-red-opaque">
              <div class="inner-red-transparent"></div>
            </div></div>


            <div class="blue"><div class="inner-blue-opaque"><div class="blue-animation">
              <div class="inner-blue-transparent"></div>
            </div></div></div>

          </div></div>


        {/* Button Solid Circles */}
        <div class="ring-button-outer" id="button-1" onClick={moveToSavePasswordPage}><div class="ring-button-inner"></div></div>

        <div class="ring-button-outer" id="button-3" onClick={moveToVaultPage}><div class="ring-button-inner" onClick={moveToVaultPage}x1></div></div>

        <div class="ring-button-outer" id="button-2"><div class="ring-button-inner"></div></div>

        <div class="ring-button-outer" id="button-4" onClick={moveToVaultLookupPage}><div class="ring-button-inner"></div></div>

        {/* Lines */}

        <div class="line-3" id="line-3" onClick={moveToVaultPage}></div>
        <div class="diagonal-line-3" onClick={moveToVaultPage}></div>
        <div class="info-text" id="create-vault" onClick={moveToVaultPage}>Create a Vault</div>

        <div class="line-2" id="line-2"></div>
        <div class="diagonal-line-2"></div>
        <div class="info-text" id="manage-vault">Manage Vault</div>

        <div class="line-1" id="line-1" onClick={moveToSavePasswordPage}></div>
        <div class="diagonal-line-1" onClick={moveToSavePasswordPage}></div>
        <div class="info-text" id="save-password" onClick={moveToSavePasswordPage}>Save a Password</div>

        <div class="line-4" id="line-4" onClick={moveToVaultLookupPage}></div>
        <div class="diagonal-line-4" onClick={moveToVaultLookupPage}></div>
        <div class="info-text" id="vault-lookup" onClick={moveToVaultLookupPage}>Vault Lookup</div>


      </div>

      

        
        

    </div>

    
    </div>


  )
}

export default LandingPage;