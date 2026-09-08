package com.example.react_learning.learning;

import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class LearningNoteMapper {

    public LearningNote toNewEntity(long id, LearningNoteRequest request, Instant createdAt) {
        return new LearningNote(
                id,
                request.learnerName().trim(),
                request.feature().trim(),
                request.question().trim(),
                createdAt
        );
    }

    public LearningNote toUpdatedEntity(LearningNote existing, LearningNoteRequest request, Instant updatedAt) {
        return new LearningNote(
                existing.id(),
                request.learnerName().trim(),
                request.feature().trim(),
                request.question().trim(),
                updatedAt
        );
    }

    public LearningNoteResponse toResponse(LearningNote note) {
        return new LearningNoteResponse(
                note.id(),
                note.learnerName(),
                note.feature(),
                note.question(),
                note.createdAt().toString()
        );
    }
}

