package com.example.react_learning.inventory;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int stock;

    @Version
    private Long version;

    protected ProductEntity() {}

    public ProductEntity(String name, int price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public Long getId() { return id; }

    public String getName() { return name; }

    public int getPrice() { return price; }

    public int getStock() { return stock; }

    public void decreaseStock(){
        this.stock -= 1;
    }
}
