package com.onePass.onePass.service.impl;

import com.onePass.onePass.entity.Vault_references;
import com.onePass.onePass.repository.VaultReferencesRepo;
import com.onePass.onePass.service.VaultReferencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VaultReferencesServiceImpl implements VaultReferencesService {

    @Autowired
    private VaultReferencesRepo vaultReferencesRepo;

    public List<Vault_references> getAllVaults(){
        return vaultReferencesRepo.findAll();
    }

    public Long getVaultIdByName(String vaultName){
        return vaultReferencesRepo.findIdByVaultName(vaultName);
    }

    public Vault_references recordAVault(Vault_references vaultReferences){
        return vaultReferencesRepo.save(vaultReferences);
    }

    public boolean checkIfFound(String vaultName){

        return vaultReferencesRepo.findAllByVaultNameTrue(vaultName).size() >= 1 ? true : false;

    }


    public List<String> findAllVaultsByUser(Long userID){
        return vaultReferencesRepo.findAllVaultsByUserID(userID);
    }


}
