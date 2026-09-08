package com.example.react_learning.learning;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LearningNoteRequest(
        @NotBlank(message = "請輸入學習者名稱")
        @Size(max = 30, message = "學習者名稱最多 30 個字")
        String learnerName,

        @NotBlank(message = "請選擇正在學習的主題")
        @Size(max = 50, message = "主題名稱最多 50 個字")
        String feature,

        @NotBlank(message = "請輸入你的問題或觀察")
        @Size(max = 240, message = "內容最多 240 個字")
        String question
) {
}

