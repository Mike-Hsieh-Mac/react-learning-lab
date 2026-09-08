package com.example.react_learning.learning;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@RestController
@RequestMapping("/api/learning")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@Validated
public class LearningLabController {

    private final LearningLabService learningLabService;

    public LearningLabController(LearningLabService learningLabService) {
        this.learningLabService = learningLabService;
    }

    @GetMapping("/overview")
    public LearningOverviewResponse getOverview() {
        return learningLabService.getOverview();
    }

    @GetMapping("/notes")
    public LearningNotesPageResponse getNotes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String feature
    ) {
        return learningLabService.getNotes(page, size, query, feature);
    }

    @GetMapping("/notes/{id}")
    public LearningNoteResponse getNote(@PathVariable long id) {
        return learningLabService.getNote(id);
    }

    @GetMapping("/backend-labs")
    public List<BackendLab> getBackendLabs() {
        return learningLabService.getBackendLabs();
    }

    @GetMapping("/stats")
    public LearningStatsResponse getStats() {
        return learningLabService.getStats();
    }

    @PostMapping("/notes")
    @ResponseStatus(HttpStatus.CREATED)
    public LearningNoteResponse createNote(@Valid @RequestBody LearningNoteRequest request) {
        return learningLabService.createNote(request);
    }

    @PutMapping("/notes/{id}")
    public LearningNoteResponse updateNote(@PathVariable long id, @Valid @RequestBody LearningNoteRequest request) {
        return learningLabService.updateNote(id, request);
    }

    @DeleteMapping("/notes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteNote(@PathVariable long id) {
        learningLabService.deleteNote(id);
    }
}




