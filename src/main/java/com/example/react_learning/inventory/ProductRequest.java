package com.example.react_learning.inventory;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record ProductRequest(
        @NotBlank String name,
        @Min(value = 1, message = "price 至少要 1") int price,
        @Min(value = 0, message = "stock 不能是負數") int stock
) {
}
