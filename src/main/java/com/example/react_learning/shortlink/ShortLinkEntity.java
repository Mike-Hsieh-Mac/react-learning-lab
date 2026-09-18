package com.example.react_learning.shortlink;

import com.example.react_learning.task.Task;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "short_links")
public class ShortLinkEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(nullable = false)
    private String targetUrl;

    @Column(nullable = false)
    private long clicks;

    @Column(nullable = false)
    private Instant createdAt;

    protected ShortLinkEntity() {

    }
    public ShortLinkEntity(String code, String targetUrl, Instant createdAt) {
        this.code = code;
        this.targetUrl = targetUrl;
        this.clicks = 0;
        this.createdAt = createdAt;
    }
    public long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getTargetUrl() {
        return targetUrl;
    }

    public long getClicks() {
        return clicks;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void incrementClicks() {
        this.clicks++;
    }

}
