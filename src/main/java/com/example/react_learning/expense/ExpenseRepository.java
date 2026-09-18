package com.example.react_learning.expense;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
    List<ExpenseEntity> findByCategory(String category);
}
