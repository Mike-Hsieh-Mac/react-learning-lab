package com.example.react_learning.blog;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<PostEntity> getPosts(@RequestParam(required = false) Boolean published) {
        if (published != null && published) {
            return postRepository.findByPublishedTrueOrderByCreatedAtDesc();
        } else {
            return postRepository.findAll();
        }
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public PostEntity createPost(@Valid @RequestBody PostRequest postRequest) {
        PostEntity post = new PostEntity(postRequest.title(), postRequest.body());
        return postRepository.save(post);
    }

    @PatchMapping("/{id}/publish")
    public PostEntity publishPost(@PathVariable Long id) {
        PostEntity post = postRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Post not found"));
        post.publish();
        return postRepository.save(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
        } else {
            throw new NoSuchElementException("Post not found");
        }
    }
}
