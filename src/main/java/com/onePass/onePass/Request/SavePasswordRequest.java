package com.onePass.onePass.Request;

public class SavePasswordRequest {

    
    private Long credId;

    
    private String savedSite;

    private Long savedUser;

    private String savedCred;

    private String vaultName;

    private String credNickname;

    public SavePasswordRequest() {
    }

    public Long getCredId() {
        return credId;
    }

    public void setCredId(Long credId) {
        this.credId = credId;
    }

    public String getSavedSite() {
        return savedSite;
    }

    public void setSiteSite(String siteSite) {
        this.savedSite = siteSite;
    }

    public Long getSavedUser() {
        return savedUser;
    }

    public void setSavedUser(Long savedUser) {
        this.savedUser = savedUser;
    }

    public String getSavedCred() {
        return savedCred;
    }

    public void setSavedCred(String savedCred) {
        this.savedCred = savedCred;
    }

    public String getvaultName() {
        return vaultName;
    }

    public void setvaultName(String vaultName) {
        this.vaultName = vaultName;
    }

    public String getCredNickname() {
        return credNickname;
    }

    public void setCredNickname(String credNickname) {
        this.credNickname = credNickname;
    }

    public SavePasswordRequest(String savedSite, Long savedUser, String savedCred, String vaultName, String credNickname) {
        this.savedSite = savedSite;
        this.savedUser = savedUser;
        this.savedCred = savedCred;
        this.vaultName = vaultName;
        this.credNickname = credNickname;
    }

    public SavePasswordRequest(Long credId, String savedSite, Long savedUser, String savedCred, String vaultName, String credNickname) {
        this.credId = credId;
        this.savedSite = savedSite;
        this.savedUser = savedUser;
        this.savedCred = savedCred;
        this.vaultName = vaultName;
        this.credNickname = credNickname;
    }
    
}
