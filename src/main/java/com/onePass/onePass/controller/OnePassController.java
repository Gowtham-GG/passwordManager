package com.onePass.onePass.controller;


import com.onePass.onePass.Response.LoginResponse;
import com.onePass.onePass.entity.Native_users;
import com.onePass.onePass.repository.NativeUsersRepo;
import com.onePass.onePass.service.impl.UserServiceImpl;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = {"http://localhost:3000"})
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
    public ResponseEntity<Object> getData(@RequestBody LoginResponse loginCred)
    {

        LoginResponse data = loginCall(loginCred.getUser_name());


        System.out.println(data.getUser_name());

        System.out.println("Sent user : " + loginCred.getUser_name());

        Native_users currentUser = searchByUserName(loginCred.getUser_name());

        System.out.println("Current User : " + currentUser.getUserName());

        return ResponseEntity.ok(currentUser    );

    }

    @GetMapping("/login/{userName}")
    public LoginResponse loginCall(@PathVariable("userName") String userName)
    {
        return userServiceImpl.getLoginCred(userName);
    }

    @GetMapping("/native_users/{userName}")
    public Native_users searchByUserName(@PathVariable("userName") String userName)
    {
        return userServiceImpl.searchByUserName(userName);
    }


}

