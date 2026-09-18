package com.example.react_learning.expense;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "expenses")
public class ExpenseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false)
    private int amount;

    @Column(nullable = false, length = 10)
    private String category;

    @Column(nullable = false)
    private Instant createdAt;

    public ExpenseEntity(String title, int amount, String category, Instant createdAt) {
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.createdAt = createdAt;
    }

    protected ExpenseEntity() {

    }

    public Long getId() { return id; }

    public String getTitle() { return title; }

    public int getAmount() { return amount; }

    public String getCategory() { return category; }

    public Instant getCreatedAt() { return createdAt; }

    public void setTitle(String title) { this.title = title; }

    public void setAmount(int amount) { this.amount = amount; }

    public void setCategory(String category) { this.category = category; }

}
