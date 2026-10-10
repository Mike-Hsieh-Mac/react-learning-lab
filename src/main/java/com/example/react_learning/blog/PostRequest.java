package com.example.react_learning.blog;

import jakarta.validation.constraints.NotBlank;

public record PostRequest(
        @NotBlank(message = "Title is required")
        String title,
        @NotBlank(message = "Body is required")
        String body
) {
}
