package com.onePass.onePass.service;

import com.onePass.onePass.Response.LoginResponse;
import com.onePass.onePass.entity.Native_users;

import java.util.List;

public interface UserService
{

    List<Native_users> allUsers();

    LoginResponse getLoginCred(String user_name);


    Native_users searchByUserName(String userName);

}
