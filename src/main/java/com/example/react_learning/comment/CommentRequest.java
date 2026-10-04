package com.example.react_learning.comment;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CommentRequest(
        @NotBlank(message = "Author is required")
        @Size(max = 50, message = "Author must be at most 50 characters")
        String author,
        @NotBlank(message = "Content is required")
        @Size(max = 500, message = "Content must be at most 500 characters")
        String content
) {
}
