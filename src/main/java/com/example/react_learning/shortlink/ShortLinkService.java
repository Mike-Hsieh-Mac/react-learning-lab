package com.example.react_learning.shortlink;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.security.SecureRandom;
import java.time.Instant;
import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ShortLinkService {
    private static final String ALPHABET =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private final SecureRandom random = new SecureRandom();
    private final ShortLinkRepository shortLinkRepository;

    public ShortLinkService(ShortLinkRepository shortLinkRepository) {
        this.shortLinkRepository = shortLinkRepository;
    }

    public List<ShortLink> getLinks() {
        return shortLinkRepository.findAll().stream()
                .map(this::toShortLink)
                .toList();
    }

    private ShortLink toShortLink(ShortLinkEntity entity) {
        return new ShortLink(entity.getId(), entity.getCode(),
                entity.getTargetUrl(), entity.getClicks(), entity.getCreatedAt());
    }

    public ShortLink createLink(ShortLinkRequest request) {
        // Generate a unique code for the short link
        String code = generateUniqueCode();
        ShortLinkEntity entity = new ShortLinkEntity(code, request.targetUrl(), Instant.now());
        shortLinkRepository.save(entity);
        return toShortLink(entity);
    }

    private String generateUniqueCode() {
        while (true) {
            StringBuilder sb = new StringBuilder(6);
            for (int i = 0; i < 6; i++) {
                sb.append(ALPHABET.charAt(random.nextInt(ALPHABET.length())));
            }
            String code = sb.toString();
            if (shortLinkRepository.findByCode(code).isEmpty()) {
                return code;
            }
        }
    }

    public ShortLink getLink(String code) {
        return toShortLink(findByCodeOrThrow(code));
    }

    ShortLinkEntity findByCodeOrThrow(String code) {
        return shortLinkRepository.findByCode(code)
                .orElseThrow(() -> new ResponseStatusException(
                        NOT_FOUND, "找不到短網址: " + code));
    }

    public String resolveAndCount(String code){
        ShortLinkEntity entity = findByCodeOrThrow(code);
        entity.incrementClicks();
        shortLinkRepository.save(entity);
        return entity.getTargetUrl();
    }
}
