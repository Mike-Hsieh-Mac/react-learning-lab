package com.example.react_learning.comment;

import jakarta.persistence.*;

import java.time.Instant;


@Entity
@Table(name = "comments")
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String author;

    @Column(nullable = false, length = 500)
    private String content;

    @Column(nullable = false)
    private Instant createdAt;

    protected CommentEntity() {}

    public CommentEntity(String author, String content) {
        this.author = author;
        this.content = content;
        //this.createdAt = Instant.now();
    }

    // JPA 在「真正送進資料庫前」會呼叫這個方法一次，
    // 讓 createdAt 不用每次 new CommentEntity 時手動塞值，也不會忘記設定。
    @PrePersist
    void onCreate() {
        if (createdAt == null) {
            createdAt = Instant.now();
        }
    }

    public Long getId() { return id; }
    public String getAuthor() { return author; }
    public String getContent() { return content; }
    public Instant getCreatedAt() { return createdAt; }

//    public void setAuthor(String author) { this.author = author; }
//    public void setContent(String content) { this.content = content; }
}
