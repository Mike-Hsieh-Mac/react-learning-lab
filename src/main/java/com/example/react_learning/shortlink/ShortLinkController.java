package com.example.react_learning.shortlink;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/links")
public class ShortLinkController {
    private final ShortLinkService shortLinkService;

    public ShortLinkController(ShortLinkService shortLinkService) {
        this.shortLinkService = shortLinkService;
    }

    @GetMapping
    public List<ShortLink> getLinks() {
        return shortLinkService.getLinks();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public ShortLink createLink(@Valid @RequestBody ShortLinkRequest shortLinkRequest) {
        return shortLinkService.createLink(shortLinkRequest);
    }

    @GetMapping("/{code}")
    public ShortLink getLink(@PathVariable String code) {
        return shortLinkService.getLink(code);
    }
}
