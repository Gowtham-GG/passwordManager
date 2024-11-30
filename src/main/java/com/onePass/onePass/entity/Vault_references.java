package com.onePass.onePass.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.data.relational.core.mapping.Column;

import java.util.Set;

@Entity
@Table(name = "vault_references")
public class Vault_references {

    public Vault_references(Long vaultId) {
        this.vaultId = vaultId;
    }

    @Id
    @GeneratedValue
    @Column("vault_id")
    private Long vaultId;

    @Column("vault_name")
    private String vaultName;

    @Column("vault_cred")
    private String vaultCred;

    @JsonIgnore
    @ManyToMany(mappedBy = "vaultsUnderUser", fetch = FetchType.LAZY)
    private Set<Native_users> usersToVault;

    public Long getVaultId() {
        return vaultId;
    }

    public Vault_references(String vaultName) {
        this.vaultName = vaultName;
    }

    public void setVaultId(Long vaultID) {
        this.vaultId = vaultID;
    }

    public String getVaultName() {
        return vaultName;
    }

    public void setVaultName(String vaultName) {
        this.vaultName = vaultName;
    }

    public String getVaultCred() {
        return vaultCred;
    }

    public void setVaultCred(String vaultCred) {
        this.vaultCred = vaultCred;
    }

    public Vault_references() {
    }

    public Vault_references(String vaultName, String vaultCred, Set<Native_users> usersToVault) {
        this.vaultName = vaultName;
        this.vaultCred = vaultCred;
        this.usersToVault = usersToVault;
    }

    public Vault_references(Long vaultId, String vaultName, String vaultCred, Set<Native_users> usersToVault) {
        this.vaultId = vaultId;
        this.vaultName = vaultName;
        this.vaultCred = vaultCred;
        this.usersToVault = usersToVault;
    }
}
