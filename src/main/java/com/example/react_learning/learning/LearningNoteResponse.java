package com.example.react_learning.learning;

public record LearningNoteResponse(
        long id,
        String learnerName,
        String feature,
        String question,
        String createdAt
) {
}

