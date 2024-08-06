package com.onePass.onePass.controller;


import com.onePass.onePass.Request.LoginRequest;
import com.onePass.onePass.Response.LoginResponse;
import com.onePass.onePass.entity.Native_users;
import com.onePass.onePass.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class OnePassController
{



    //@Autowired
    //inga serviceimpl lam dec panu

    //create constructors for those

    //@Post, put elam paniko (thevaiyana alavu)
    //response will be the object files which will store values retrieved from db
    //entity will be the java equivalent of the db table
    // create getter setter and const for both packages
    //service here we create what action to be done in db as a java method
    //which will be written as db query in repository

    public OnePassController(UserServiceImpl userServiceImpl)
    {
        this.userServiceImpl = userServiceImpl;
    }

    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/getAll")
    public List<Native_users> getAllUsers()
    {
        System.out.println(userServiceImpl.allUsers());
        return userServiceImpl.allUsers();
    }

    @PostMapping("/login")
    public ResponseEntity<Object> getData(@RequestBody LoginRequest loginCred)
    {

        //Decorator Pattern used. Also prevents SQL Injection.
        LoginRequest fetchUser = loginCall(loginCred.getUser_name());
        LoginResponse validateUser;


//        Native_users fetchUser = searchByUserName(data.getUser_name());
        System.out.println(loginCred.getUser_cred()+" : "+fetchUser.getUser_cred());
        if(loginCred.getUser_cred().equals(fetchUser.getUser_cred())){
            validateUser = new LoginResponse(fetchUser.getUserID(), fetchUser.getUser_name(),true);
            return ResponseEntity.ok(validateUser);
        }
        else {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
        }



        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Data");

    }

    @GetMapping("/login/{userName}")
    public LoginRequest loginCall(@PathVariable("userName") String userName)
    {
        return userServiceImpl.getLoginCred(userName);
    }

    @GetMapping("/native_users/{userName}")
    public Native_users searchByUserName(@PathVariable("userName") String userName)
    {
        return userServiceImpl.searchByUserName(userName);
    }




}

