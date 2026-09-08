package com.example.react_learning.learning;

import java.util.List;
import java.util.Optional;

public interface LearningNoteRepository {

    long nextId();

    List<LearningNote> findAll();

    Optional<LearningNote> findById(long id);

    LearningNote save(LearningNote note);

    LearningNote update(LearningNote note);

    boolean deleteById(long id);

    long count();
}

