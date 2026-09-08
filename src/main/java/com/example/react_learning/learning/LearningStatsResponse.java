package com.example.react_learning.learning;

import java.util.List;

public record LearningStatsResponse(
        int lessonCount,
        int noteCount,
        int glossaryCount,
        int componentCount,
        int hookCount,
        List<String> backendCapabilities
) {
}

