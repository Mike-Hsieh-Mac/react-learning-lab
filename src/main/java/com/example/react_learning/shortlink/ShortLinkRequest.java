package com.example.react_learning.shortlink;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record ShortLinkRequest(
        @NotBlank(message = "Target URL cannot be blank")
        @Pattern(regexp = "^https?://.+", message = "Invalid URL format")
        String targetUrl
) {
}
