package com.example.react_learning.shortlink;

import java.time.Instant;

public record ShortLink(
        long id,
        String code,
        String targetUrl,
        long clicks,
        Instant createdAt
) {
}
