package com.onePass.onePass.service;

import com.onePass.onePass.entity.Cred_vault;

import java.util.List;

public interface CredService {

    public void recordAPassword(Cred_vault credVault);

    public List<Cred_vault> retrieveCredsForUserAndVault(Long userId, Long vaultId);
}
