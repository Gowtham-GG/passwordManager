package com.onePass.onePass.service;

import com.onePass.onePass.Request.LoginRequest;
import com.onePass.onePass.entity.Native_users;

import java.util.List;
import java.util.Optional;

public interface UserService
{

    List<Native_users> allUsers();

    LoginRequest getLoginCred(String user_name);


    Optional<Native_users> searchByUserName(Long userId);

    Native_users updateUser(Native_users nativeUsers);

    void addVaultToUser(Long userID, String vaultName);

}
