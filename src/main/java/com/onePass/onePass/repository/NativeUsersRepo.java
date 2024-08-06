package com.onePass.onePass.repository;

import com.onePass.onePass.Request.LoginRequest;
import com.onePass.onePass.entity.Native_users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NativeUsersRepo extends JpaRepository<Native_users, Long> {


    @Query("SELECT new com.onePass.onePass.Request.LoginRequest(userId, userName, userCred) FROM Native_users WHERE userName = ?1")
    public LoginRequest loginCred(String userName);

    @Query("SELECT new com.onePass.onePass.entity.Native_users(userId, userName, userCred, userEmail) FROM Native_users WHERE userName = ?1")
    public Native_users searchByUserName(String userName);

}
