package com.example.react_learning.expense;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public List<Expense> getExpenses(@RequestParam(required = false) String category) {
        return expenseService.getExpenses(category);
    }

    @GetMapping("/summary")
    public ExpenseSummary getSummary() {
        return expenseService.getSummary();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Expense createExpense(@Valid @RequestBody ExpenseRequest expenseRequest) {
        return expenseService.createExpense(expenseRequest);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteExpense(@PathVariable long id) {
        expenseService.deleteExpense(id);
    }
}
