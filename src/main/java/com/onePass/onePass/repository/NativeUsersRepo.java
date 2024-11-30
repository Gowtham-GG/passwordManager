package com.onePass.onePass.repository;

import com.onePass.onePass.Request.AddVaultRequest;
import com.onePass.onePass.Request.LoginRequest;
import com.onePass.onePass.entity.Native_users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface NativeUsersRepo extends JpaRepository<Native_users, Long> {


    @Query("SELECT new com.onePass.onePass.Request.LoginRequest(userId, userName, userCred) FROM Native_users WHERE userName = ?1")
    public LoginRequest loginCred(String userName);

    @Query("SELECT new com.onePass.onePass.entity.Native_users(userId, userName, userCred, userEmail, vaultsUnderUser) FROM Native_users WHERE userName = ?1")
    public Native_users searchByUserName(String userName);

    @Transactional
    @Modifying
    @Query(value = "insert into users_vault_map (user_id,vault_name) values(?1,?2)", nativeQuery = true)
    public  void addVaultToUser(Long userID, String vaultName);

//    @Query("UPDATE TABLE new com.onePass.onePass.Request.AddVaultRequest(userID, user_name, newVault)")
//    public AddVaultRequest addVaultToUser(AddVaultRequest addVaultRequest);




}
