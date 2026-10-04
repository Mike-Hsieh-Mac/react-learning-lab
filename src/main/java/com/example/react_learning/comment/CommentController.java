package com.example.react_learning.comment;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private CommentRepository commentRepository;
    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommentEntity createComment(@Valid @RequestBody CommentRequest commentRequest) {
        return commentRepository.save(new CommentEntity(commentRequest.author(), commentRequest.content()));
    }

    @GetMapping
    public List<CommentEntity> getComments() {
        return commentRepository.findAllByOrderByCreatedAtDesc();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long id) {
        if (commentRepository.existsById(id)) {
            commentRepository.deleteById(id);
        } else {
            throw new NoSuchElementException("Comment with id( " + id + " ) not found");
        }
    }
}
