package com.onePass.onePass.repository;

import com.onePass.onePass.entity.Cred_vault;
import com.onePass.onePass.entity.Native_users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CredVaultRepo extends JpaRepository<Cred_vault, Long>  {

    @Query("SELECT new com.onePass.onePass.entity.Cred_vault( credId,  savedSite,  savedUser,  savedCred,  vaultId, credNickname,  userId) from Cred_vault where userId = ?1 and vaultId = ?2")
    public List<Cred_vault> readCred_vaultByVaultIdAndUserId(Long userId, Long vaultId);


}
