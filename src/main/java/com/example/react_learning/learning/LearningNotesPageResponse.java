package com.example.react_learning.learning;

import java.util.List;

public record LearningNotesPageResponse(
        List<LearningNoteResponse> data,
        int pageNumber,
        int pageSize,
        long totalCount,
        int totalPages,
        boolean hasNext,
        boolean hasPrevious,
        List<String> availableFeatures
) {
}

