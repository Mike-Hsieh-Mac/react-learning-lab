package com.example.react_learning.learning;

import java.util.List;

public record BackendLab(
        String id,
        String title,
        String summary,
        String httpMethod,
        String endpoint,
        String whyItMatters,
        List<String> backendSteps,
        String requestExample,
        String responseExample,
        List<String> codePointers,
        String practiceTask
) {
}

