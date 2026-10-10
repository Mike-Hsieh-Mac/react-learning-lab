package com.example.react_learning.blog;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<PostEntity, Long> {
    List<PostEntity> findByPublishedTrueOrderByCreatedAtDesc();

}
