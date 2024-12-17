package com.onePass.onePass.entity;

import com.onePass.onePass.entity.Vault_references;
import com.onePass.onePass.service.VaultReferencesService;
import jakarta.persistence.*;
import org.springframework.data.relational.core.mapping.Column;

//getter setter important for all members ilana hibernate olunga work agathu

@Entity
@Table(name = "cred_vault")
public class Cred_vault {
    @Id
    @GeneratedValue
    @Column("cred_id")
    private Long credId;

    @Column("saved_site")
    private String savedSite;

    @Column("saved_user")
    private String savedUser;

    @Column("saved_cred")
    private String savedCred;

    @Column("vault_id")
    private Long vaultId;

    @Column("cred_nickname")
    private String credNickname;

    @Column("saved_by")
    private Long userId;

    public Cred_vault() {
    }

    public Cred_vault(String savedSite, Long userId, String savedCred, Long vauldId, String credNickname) {
        this.savedSite = savedSite;
        this.userId = userId;
        this.savedCred = savedCred;
        this.vaultId = vaultId;
        this.credNickname = credNickname;
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

    public void setSavedSite(String savedSite) {
        this.savedSite = savedSite;
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

    public Long getVaultId() {
        return vaultId;
    }

    public void setVaultId(Long vaultId) {
        this.vaultId = vaultId;
    }

    public String getCredNickname() {
        return credNickname;
    }

    public void setCredNickname(String credNickname) {
        this.credNickname = credNickname;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Cred_vault(Long credId, String savedSite, Long userId, String savedCred, Long vaultId, String credNickname) {
        this.credId = credId;
        this.savedSite = savedSite;
        this.userId = userId;
        this.savedCred = savedCred;
        this.vaultId = vaultId;
        this.credNickname = credNickname;
    }

    public Cred_vault(Long credId, String savedSite, String savedUser, String savedCred, Long vaultId, String credNickname, Long userId) {
        this.credId = credId;
        this.savedSite = savedSite;
        this.savedUser = savedUser;
        this.savedCred = savedCred;
        this.vaultId = vaultId;
        this.credNickname = credNickname;
        this.userId = userId;
    }

    public Cred_vault(String savedSite, String savedUser, String savedCred, Long vaultId, String credNickname, Long userId) {
        this.savedSite = savedSite;
        this.savedUser = savedUser;
        this.savedCred = savedCred;
        this.vaultId = vaultId;
        this.credNickname = credNickname;
        this.userId = userId;
    }
}
