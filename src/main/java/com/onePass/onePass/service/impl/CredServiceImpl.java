package com.onePass.onePass.service.impl;

import com.onePass.onePass.Request.PasswordsForVaultRequest;
import com.onePass.onePass.entity.Cred_vault;
import com.onePass.onePass.repository.CredVaultRepo;
import com.onePass.onePass.service.CredService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CredServiceImpl implements CredService {

    @Autowired
    private CredVaultRepo credVaultRepo;

    public CredServiceImpl(CredVaultRepo credVaultRepo) {
        this.credVaultRepo = credVaultRepo;
    }

    public CredServiceImpl() {
    }

    @Override
    public void recordAPassword(Cred_vault credVault) {
        credVaultRepo.save(credVault);

    }

    @Override
    public List<Cred_vault> retrieveCredsForUserAndVault(Long userId, Long vaultId){
        return credVaultRepo.readCred_vaultByVaultIdAndUserId(userId, vaultId);
    }
}
