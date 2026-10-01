package com.example.react_learning.auth;

import jakarta.persistence.*;

@Entity
@Table(name = "app_users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String passwordHash;

    protected UserEntity() {}

    public UserEntity(String username, String passwordHash) {
        this.username = username;
        this.passwordHash = passwordHash;
    }

    public Long getId() { return id; }

    public String getUsername() { return username; }

    public String getPasswordHash() { return passwordHash; }

    public void setUsername(String username) { this.username = username; }
}
