package com.example.react_learning.expense;

import java.util.Map;

public record ExpenseSummary(
        long total,
        Map<String, Long> byCategory
) {
}
