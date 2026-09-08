package com.example.react_learning.learning;

import java.util.List;

public record LearningOverviewResponse(
        String title,
        String description,
        List<String> architectureSteps,
        List<LessonSummary> lessons,
        List<String> tips,
        List<GettingStartedStep> gettingStartedSteps,
        List<GlossaryTerm> glossaryTerms,
        List<ComponentGuide> componentGuides
) {
}
