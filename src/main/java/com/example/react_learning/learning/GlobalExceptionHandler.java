package com.example.react_learning.learning;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;
import java.util.NoSuchElementException;

@ControllerAdvice
public class GlobalExceptionHandler {

    // NoSuchElementException 常用在「找不到資源就丟例外」的寫法（例如 CommentController 刪除不存在的留言）。
    // 沒有這個 handler 的話，它會被下面範圍更大的 handleUnexpected(Exception.class) 接住，
    // 誤回 500，但明明「資源不存在」在語意上應該是 404——這正是寫測試時最容易抓到的那種 bug。
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ApiErrorResponse> handleNotFound(
            NoSuchElementException exception,
            HttpServletRequest request
    ) {
        ApiErrorResponse response = new ApiErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                "NOT_FOUND",
                exception.getMessage() != null ? exception.getMessage() : "找不到指定的資源。",
                request.getRequestURI(),
                Instant.now(),
                List.of()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handleValidation(
            MethodArgumentNotValidException exception,
            HttpServletRequest request
    ) {
        List<ApiFieldError> fieldErrors = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(this::toApiFieldError)
                .toList();

        ApiErrorResponse response = new ApiErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "VALIDATION_ERROR",
                "請先修正欄位錯誤後再送出。",
                request.getRequestURI(),
                Instant.now(),
                fieldErrors
        );
        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ApiErrorResponse> handleResponseStatus(
            ResponseStatusException exception,
            HttpServletRequest request
    ) {
        HttpStatus status = HttpStatus.valueOf(exception.getStatusCode().value());
        ApiErrorResponse response = new ApiErrorResponse(
                status.value(),
                status.name(),
                exception.getReason() != null ? exception.getReason() : "請求處理失敗。",
                request.getRequestURI(),
                Instant.now(),
                List.of()
        );
        return ResponseEntity.status(status).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorResponse> handleUnexpected(
            Exception exception,
            HttpServletRequest request
    ) {
        ApiErrorResponse response = new ApiErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "INTERNAL_ERROR",
                "系統暫時發生未預期錯誤，請稍後再試。",
                request.getRequestURI(),
                Instant.now(),
                List.of()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    private ApiFieldError toApiFieldError(FieldError fieldError) {
        return new ApiFieldError(
                fieldError.getField(),
                fieldError.getDefaultMessage() != null ? fieldError.getDefaultMessage() : "欄位驗證失敗"
        );
    }
    // 建議加在 GlobalExceptionHandler 裡，跟其他例外處理放在一起：
    @ExceptionHandler(ObjectOptimisticLockingFailureException.class)
    public ResponseEntity<ApiErrorResponse> handleOptimisticLock(ObjectOptimisticLockingFailureException ex) {
        ApiErrorResponse body = new ApiErrorResponse(
                409, "STOCK_CONFLICT", "商品剛被搶購，請重新整理再試一次。", null, Instant.now(), List.of());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(body);
    }
}


