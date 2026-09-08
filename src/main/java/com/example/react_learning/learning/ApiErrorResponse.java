package com.example.react_learning.learning;

import java.time.Instant;
import java.util.List;

public record ApiErrorResponse(
        int status,
        String code,
        String message,
        String path,
        Instant timestamp,
        List<ApiFieldError> fieldErrors
) {
}

