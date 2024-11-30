package com.onePass.onePass.controller;


import com.onePass.onePass.Request.AddVaultRequest;
import com.onePass.onePass.Request.LoginRequest;
import com.onePass.onePass.Request.SavePasswordRequest;
import com.onePass.onePass.Response.LoginResponse;
import com.onePass.onePass.entity.Cred_vault;
import com.onePass.onePass.entity.Native_users;
import com.onePass.onePass.entity.Vault_references;
import com.onePass.onePass.service.impl.CredServiceImpl;
import com.onePass.onePass.service.impl.UserServiceImpl;
import com.onePass.onePass.service.impl.VaultReferencesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = {"https://localhost","http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class OnePassController {


    //@Autowired
    //inga serviceimpl lam dec panu

    //create constructors for those

    //@Post, put elam paniko (thevaiyana alavu)
    //response will be the object files which will store values retrieved from db
    //entity will be the java equivalent of the db table
    // create getter setter and const for both packages
    //service here we create what action to be done in db as a java method
    //which will be written as db query in repository

    public OnePassController(UserServiceImpl userServiceImpl, VaultReferencesServiceImpl vaultReferencesServiceImpl) {
        this.userServiceImpl = userServiceImpl;
        this.vaultReferencesServiceImpl = vaultReferencesServiceImpl;
    }

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private VaultReferencesServiceImpl vaultReferencesServiceImpl;

    @Autowired
    private CredServiceImpl credServiceImpl;

    @GetMapping("/getAll")
    public List<Native_users> getAllUsers() {
        System.out.println(userServiceImpl.allUsers());
        return userServiceImpl.allUsers();
    }

    @PostMapping("/login")
    public ResponseEntity<Object> getData(@RequestBody LoginRequest loginCred) {

        //Decorator Pattern used. Also prevents SQL Injection.
        LoginRequest fetchUser = loginCall(loginCred.getUser_name());
        LoginResponse validateUser;


//        Native_users fetchUser = searchByUserName(data.getUser_name());
        System.out.println(loginCred.getUser_cred() + " : " + fetchUser.getUser_cred());
        if (loginCred.getUser_cred().equals(fetchUser.getUser_cred())) {
            validateUser = new LoginResponse(fetchUser.getUserID(), fetchUser.getUser_name(), true);
            return ResponseEntity.ok(validateUser);
        } else {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
        }


        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Data");

    }

    @GetMapping("/login/{userName}")
    public LoginRequest loginCall(@PathVariable("userName") String userName) {
        return userServiceImpl.getLoginCred(userName);
    }

    @GetMapping("/native_users/{userId}")
    public Optional<Native_users> searchByUserName(@PathVariable("userId") Long userId) {
        return userServiceImpl.searchByUserName(userId);
    }

    @PostMapping("/native_users/update/{userId}")
    public Native_users updateUser(@RequestBody Native_users nativeUsers) {
        return userServiceImpl.updateUser(nativeUsers);
    }

    //Add user_vault_reference
    @PostMapping("/native_users/add_vault")
    public void updateVaultToUser(@RequestBody AddVaultRequest vaultAddRequest){
//        System.out.println("Inthisssss");
        userServiceImpl.addVaultToUser(vaultAddRequest.getUserID(), vaultAddRequest.getVaultName());
    }

    /************************************Vault Reference EndPoint***********************************/

    @GetMapping("/vaults/duplicateCheck/{vaultName}")
    public boolean checkDuplicateVault(@PathVariable String vaultName){

        if(vaultReferencesServiceImpl.checkIfFound(vaultName)){
//            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
            System.out.println("Vault already found");
            return true;
        }else{
            return false;
        }

    }

    @GetMapping("/vaults/all")
    public List<Vault_references> getAllVaults() {
        return vaultReferencesServiceImpl.getAllVaults();
    }

    //This is to be called internally when a new vault is created, it works this way ig.
    @PostMapping("/vaults/create")
    public Vault_references createAVault(@RequestBody Vault_references vaultReferences) {
        return vaultReferencesServiceImpl.recordAVault(vaultReferences);
    }

    @GetMapping("/vaults/byUser/{userID}")
    public List<String> getAllVaultsByUser(@PathVariable Long userID){
        return vaultReferencesServiceImpl.findAllVaultsByUser(userID);
    }

    public Long getVauldId(String vaultName){
        System.out.println(vaultName    );
        return vaultReferencesServiceImpl.getVaultIdByName(vaultName);
    }

    /****************************Credentials End Point**************************/



    @PostMapping("/creds/create")
    public void saveAPassword(@RequestBody SavePasswordRequest savePasswordRequest) {

        Cred_vault credVault = new Cred_vault(savePasswordRequest.getSavedSite(), savePasswordRequest.getSavedUser(), savePasswordRequest.getSavedCred(), getVauldId(savePasswordRequest.getvaultName()), savePasswordRequest.getCredNickname());
        credServiceImpl.recordAPassword(credVault);
    }

}
