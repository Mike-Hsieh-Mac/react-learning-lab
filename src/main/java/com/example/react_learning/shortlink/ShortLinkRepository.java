package com.example.react_learning.shortlink;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShortLinkRepository extends JpaRepository<ShortLinkEntity, Long> {
    Optional<ShortLinkEntity> findByCode(String code);
}
