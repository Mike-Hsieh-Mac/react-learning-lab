package com.example.react_learning.learning;

import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class InMemoryLearningNoteRepository implements LearningNoteRepository {

    private final AtomicLong noteIdGenerator = new AtomicLong(2);
    private final CopyOnWriteArrayList<LearningNote> notes = new CopyOnWriteArrayList<>(List.of(
            new LearningNote(
                    1,
                    "新人小美",
                    "React State",
                    "我發現點按按鈕後，只改 state 就會自動重新渲染畫面。",
                    Instant.now().minusSeconds(3600)
            ),
            new LearningNote(
                    2,
                    "新人小傑",
                    "API 串接",
                    "前端送出 fetch 後，Spring Boot Controller 會回傳 JSON 給 React。",
                    Instant.now().minusSeconds(1200)
            )
    ));

    @Override
    public long nextId() {
        return noteIdGenerator.incrementAndGet();
    }

    @Override
    public List<LearningNote> findAll() {
        return List.copyOf(notes);
    }

    @Override
    public Optional<LearningNote> findById(long id) {
        return notes.stream().filter(note -> note.id() == id).findFirst();
    }

    @Override
    public LearningNote save(LearningNote note) {
        notes.add(0, note);
        return note;
    }

    @Override
    public LearningNote update(LearningNote note) {
        for (int index = 0; index < notes.size(); index++) {
            if (notes.get(index).id() == note.id()) {
                notes.set(index, note);
                return note;
            }
        }
        return note;
    }

    @Override
    public boolean deleteById(long id) {
        return notes.removeIf(note -> note.id() == id);
    }

    @Override
    public long count() {
        return notes.size();
    }
}

