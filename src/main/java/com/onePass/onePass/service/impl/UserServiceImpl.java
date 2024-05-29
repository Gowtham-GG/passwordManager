package com.onePass.onePass.service.impl;

import com.onePass.onePass.Response.LoginResponse;
import com.onePass.onePass.entity.Native_users;
import com.onePass.onePass.repository.NativeUsersRepo;
import com.onePass.onePass.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private NativeUsersRepo nativeUsersRepo;

    public UserServiceImpl(NativeUsersRepo nativeUsersRepo){
        this.nativeUsersRepo = nativeUsersRepo;
    }

    @Override
    public List<Native_users> allUsers()
    {
        return nativeUsersRepo.findAll();
    }

    @Override
    public LoginResponse getLoginCred(String userName)
    {
        return nativeUsersRepo.loginCred(userName);
    }

    @Override
    public Native_users searchByUserName(String userName)
    {
        return nativeUsersRepo.searchByUserName(userName);
    }

}
