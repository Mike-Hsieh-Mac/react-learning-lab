package com.example.react_learning.expense;

import java.time.Instant;

public record Expense(
        long id,
        String title,
        int amount,
        String category,
        Instant createdAt
) {

}
