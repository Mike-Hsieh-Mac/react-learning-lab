package com.example.react_learning.blog;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "posts")
public class PostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    @Lob
    @Column(nullable = false)
    private String body;

    @Column(nullable = false)
    private boolean published;

    @Column(nullable = false)
    private Instant createdAt;

    protected PostEntity() {}

    public PostEntity(String title, String body) {
        this.title = title;
        this.body = body;
        this.published = false;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getBody() { return body; }
    public boolean isPublished() { return published; }
    public Instant getCreatedAt() { return createdAt; }

    public void publish() { this.published = true; }
}
