package com.example.react_learning.learning;

import java.util.List;

public record ComponentGuide(
        String id,
        String name,
        String useCase,
        List<String> syntaxPoints,
        String reactSnippet,
        String learnerTask
) {
}

