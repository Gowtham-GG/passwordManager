package com.onePass.onePass.entity;



import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.data.relational.core.mapping.Column;

import java.util.Set;

//getter setter important for all members ilana hibernate olunga work agathu

@Entity
@Table(name = "native_users")
public class Native_users {

    @Id
//    @GeneratedValue
    @Column("user_id")
    private Long userId;

    @Column("user_name")
    private String userName;

    @Column("user_cred")
    private String userCred;

    @Column("user_email")
    private String userEmail;


    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "users_vault_map",
            joinColumns = {
                    @JoinColumn(name = "user_id", referencedColumnName = "userId"),

            },
            inverseJoinColumns = {
                    @JoinColumn(name = "vault_name", referencedColumnName = "vaultName")
            }
    )
    private Set<Vault_references> vaultsUnderUser;

    public Set<Vault_references> getVaultsUnderUser() {
        return vaultsUnderUser;
    }

    public void setVaultsUnderUser(Set<Vault_references> vaultsUnderUser) {
        this.vaultsUnderUser = vaultsUnderUser;
    }

    public Native_users(String userName) {
        this.userName = userName;
    }

    public Native_users(Long userId, String userName, String userCred, String userEmail) {
        this.userId = userId;
        this.userName = userName;
        this.userCred = userCred;
        this.userEmail = userEmail;
    }

    public Native_users(Long userId, String userName, String userCred, String userEmail, Set<Vault_references> vaultsUnderUser) {
        this.userId = userId;
        this.userName = userName;
        this.userCred = userCred;
        this.userEmail = userEmail;
        this.vaultsUnderUser = vaultsUnderUser;
    }

    public Native_users() {

    }

    public Long getuserId() {
        return userId;
    }

    public void setuserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserCred() {
        return userCred;
    }

    public void setUserCred(String userCred) {
        this.userCred = userCred;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }


}
