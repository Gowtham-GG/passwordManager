package com.onePass.onePass.Request;

import com.onePass.onePass.entity.Vault_references;

public class AddVaultRequest {

    private long userID;

    private String vaultName;

    public AddVaultRequest() {
    }

    public AddVaultRequest(long userID, String vaultName) {
        this.userID = userID;
        this.vaultName = vaultName;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getVaultName() {
        return vaultName;
    }

    public void setVaultName(String vaultName) {
        this.vaultName = vaultName;
    }
}
