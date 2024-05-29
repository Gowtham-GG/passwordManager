package com.onePass.onePass.entity;



import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import org.springframework.data.relational.core.mapping.Column;



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


    public Native_users(String userName) {
        this.userName = userName;
    }

    public Native_users(Long userId, String userName, String userCred, String userEmail) {
        this.userId = userId;
        this.userName = userName;
        this.userCred = userCred;
        this.userEmail = userEmail;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
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
