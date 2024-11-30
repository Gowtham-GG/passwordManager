package com.onePass.onePass.repository;

import com.onePass.onePass.entity.Cred_vault;
import com.onePass.onePass.entity.Native_users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredVaultRepo extends JpaRepository<Cred_vault, Long>  {


}
