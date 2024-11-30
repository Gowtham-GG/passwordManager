package com.onePass.onePass.service;

import com.onePass.onePass.entity.Vault_references;
import com.onePass.onePass.repository.VaultReferencesRepo;


import java.util.List;


public interface VaultReferencesService {

    List<Vault_references> getAllVaults();

    List<String> findAllVaultsByUser(Long userID);

    Long getVaultIdByName (String vaultName);
}
