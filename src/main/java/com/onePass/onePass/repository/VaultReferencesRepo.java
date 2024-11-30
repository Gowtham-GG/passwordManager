package com.onePass.onePass.repository;

import com.onePass.onePass.entity.Vault_references;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VaultReferencesRepo extends JpaRepository<Vault_references, Long> {

    @Query("SELECT new com.onePass.onePass.entity.Vault_references(vaultName) from Vault_references Where vaultName = ?1")
    public List<String> findAllByVaultNameTrue(String vaultName);


    @Query(value = "SELECT vault_name from  users_vault_map where user_id = ?1", nativeQuery = true)
    public List<String> findAllVaultsByUserID(Long userID);

    @Query(value = "SELECT vault_id from  vault_references where vault_name = ?1", nativeQuery = true)
   public Long findIdByVaultName(String vaultName);

}
