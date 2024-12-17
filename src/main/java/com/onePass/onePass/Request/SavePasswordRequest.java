package com.onePass.onePass.Request;

public class SavePasswordRequest {
    
    private String savedSite;

    private String savedUser;

    private String savedCred;

    private String vaultName;

    private String credNickname;

    private Long userID;

    public void setSavedSite(String savedSite) {
        this.savedSite = savedSite;
    }

    public String getVaultName() {
        return vaultName;
    }

    public void setVaultName(String vaultName) {
        this.vaultName = vaultName;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public SavePasswordRequest(String savedSite, String savedUser, String savedCred, String vaultName, String credNickname, Long userID) {
        this.savedSite = savedSite;
        this.savedUser = savedUser;
        this.savedCred = savedCred;
        this.vaultName = vaultName;
        this.credNickname = credNickname;
        this.userID = userID;
    }

    public SavePasswordRequest() {
    }

    public String getSavedSite() {
        return savedSite;
    }

    public void setSiteSite(String siteSite) {
        this.savedSite = siteSite;
    }

    public String getSavedUser() {
        return savedUser;
    }

    public void setSavedUser(String savedUser) {
        this.savedUser = savedUser;
    }

    public String getSavedCred() {
        return savedCred;
    }

    public void setSavedCred(String savedCred) {
        this.savedCred = savedCred;
    }

    public String getCredNickname() {
        return credNickname;
    }

    public void setCredNickname(String credNickname) {
        this.credNickname = credNickname;
    }

    public SavePasswordRequest(String savedSite, String savedUser, String savedCred, String vaultName, String credNickname) {
        this.savedSite = savedSite;
        this.savedUser = savedUser;
        this.savedCred = savedCred;
        this.vaultName = vaultName;
        this.credNickname = credNickname;
    }
    
}
