package com.example.react_learning.shortlink;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
public class RedirectController {
    private final ShortLinkService shortLinkService;

    public RedirectController(ShortLinkService shortLinkService) {
        this.shortLinkService = shortLinkService;
    }

    @GetMapping("/s/{code}")
    public ResponseEntity<Void> redirect(@PathVariable String code) {
        String targetUrl = shortLinkService.resolveAndCount(code);
        return ResponseEntity.status(HttpStatus.FOUND)
                .location(URI.create(targetUrl))
                .build();
    }
}
