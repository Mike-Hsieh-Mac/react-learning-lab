package com.example.react_learning.learning;

import java.time.Instant;

public record LearningNote(
        long id,
        String learnerName,
        String feature,
        String question,
        Instant createdAt
) {
}

