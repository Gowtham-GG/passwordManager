package com.onePass.onePass.Request;

public class PasswordsForVaultRequest {

    private Long userId;

    private String vaultName;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getVaultName() {
        return vaultName;
    }

    public void setVaultName(String vaultName) {
        this.vaultName = vaultName;
    }

    public PasswordsForVaultRequest() {
    }

    public PasswordsForVaultRequest(Long userId, String vaultName) {
        this.userId = userId;
        this.vaultName = vaultName;
    }
}
