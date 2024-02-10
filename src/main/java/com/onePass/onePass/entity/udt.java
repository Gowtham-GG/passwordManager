package com.onePass.onePass.entity;



import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;



@Entity
@Table(name = "udt")
public class udt {

    @Id
    @Column("username")
    private Long username;

    @Column("password")
    private String password;
    private Long id;

    public Long getUsername() {
        return username;
    }

    public void setUsername(Long username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @jakarta.persistence.Id
    public Long getId() {
        return id;
    }
}
