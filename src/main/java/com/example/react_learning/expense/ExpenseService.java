package com.example.react_learning.expense;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public List<Expense> getExpenses(String category){
        if(category == null || category.isEmpty()){
            return expenseRepository.findAll().stream().map(this::toExpense).toList();
        }else {
            return expenseRepository.findByCategory(category).stream().map(this::toExpense).toList();
        }
    }

    private Expense toExpense(ExpenseEntity expenseEntity){
        return new Expense(
                expenseEntity.getId(),
                expenseEntity.getTitle(),
                expenseEntity.getAmount(),
                expenseEntity.getCategory(),
                expenseEntity.getCreatedAt()
        );
    }

    public Expense createExpense(ExpenseRequest request){
        ExpenseEntity entity = new ExpenseEntity(
                request.title(),
                request.amount(),
                request.category(),
                Instant.now()
        );
        expenseRepository.save(entity);
        return toExpense(entity);
    }

    public void deleteExpense(Long id){
        if (!expenseRepository.existsById(id)) {
            throw new ResponseStatusException(NOT_FOUND, "找不到支出紀錄: " + id);
        }
        expenseRepository.deleteById(id);
    }

    public ExpenseSummary getSummary(){
        long total = expenseRepository.findAll().stream().mapToLong(ExpenseEntity::getAmount).sum();
        Map<String, Long> categoryTotals = expenseRepository.findAll().stream()
                .collect(Collectors.groupingBy(ExpenseEntity::getCategory, Collectors.summingLong(ExpenseEntity::getAmount)));
        return new ExpenseSummary(total, categoryTotals);
    }
}
