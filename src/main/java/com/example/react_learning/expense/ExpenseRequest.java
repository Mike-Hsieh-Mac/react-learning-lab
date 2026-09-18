package com.example.react_learning.expense;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.Instant;

public record ExpenseRequest(
        @NotBlank(message = "Title is required")
        String title,

        @NotNull(message = "Amount is required")
        @Min(value = 1, message = "Amount must be greater than 0")
        int amount,

        @NotBlank(message = "Category is required")
        @Size(max = 10, message = "Category must be at most 10 characters")
        String category
) {
}
