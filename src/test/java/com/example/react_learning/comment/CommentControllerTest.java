package com.example.react_learning.comment;

import com.example.react_learning.auth.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * @WebMvcTest：只載入「Web 層」（Controller + 相關的過濾器/例外處理），
 * 不會啟動真正的資料庫。CommentRepository 是用 @MockitoBean 假物件取代，
 * 這樣測試可以：
 *   1. 跑得很快（不用連資料庫）
 *   2. 只測 Controller 自己的職責：HTTP 狀態碼對不對、有沒有正確呼叫 Repository、
 *      驗證失敗時是不是真的回 400。
 */
@WebMvcTest(CommentController.class)
class CommentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // 用自己 new 的 ObjectMapper，而不是靠 @Autowired 注入 Spring 的那份：
    // Spring Boot 4 把 JacksonAutoConfiguration 拆到另一個模組，這個 @WebMvcTest
    // 切片不一定會自動裝好 ObjectMapper bean；反正測試只是要把 Java 物件轉成 JSON 字串，
    // 自己 new 一個最單純、最不依賴 Spring 裝配細節。
    private final ObjectMapper objectMapper = new ObjectMapper();

    @MockitoBean
    private CommentRepository commentRepository;

    // 這個專案全域啟用了 Spring Security（JwtAuthFilter），@WebMvcTest 預設不會排除
    // 自訂的 Filter（因為它屬於「跟 Web 層相關」的元件），所以 JwtAuthFilter 仍然會被建立，
    // 連帶需要它建構子依賴的 JwtUtil。這裡用假物件補上，避免整個 Spring 測試情境因為
    // 「找不到 JwtUtil」而組裝失敗——這跟 CommentController 本身的邏輯完全無關，
    // 純粹是因為切片測試（slice test）也會載入安全性設定。
    @MockitoBean
    private JwtUtil jwtUtil;

    @Test
    void createComment_withValidBody_returns201AndSavedEntity() throws Exception {
        CommentEntity saved = new CommentEntity("Mike", "第一則留言");
        when(commentRepository.save(any(CommentEntity.class))).thenReturn(saved);

        mockMvc.perform(post("/api/comments")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(new CommentRequest("Mike", "第一則留言"))))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.author").value("Mike"))
                .andExpect(jsonPath("$.content").value("第一則留言"));

        verify(commentRepository, times(1)).save(any(CommentEntity.class));
    }

    @Test
    void createComment_withBlankAuthor_returns400AndNeverCallsRepository() throws Exception {
        // author 是空字串，會被 CommentRequest 的 @NotBlank 擋下來，
        // 這一步在 Controller 方法「被呼叫之前」就發生了（Spring 的參數驗證機制）。
        mockMvc.perform(post("/api/comments")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(new CommentRequest("", "有內容但沒作者"))))
                .andExpect(status().isBadRequest());

        verify(commentRepository, never()).save(any(CommentEntity.class));
    }

    @Test
    void getComments_returnsListFromRepository_sortedByRepository() throws Exception {
        CommentEntity first = new CommentEntity("A", "較新的留言");
        CommentEntity second = new CommentEntity("B", "較舊的留言");
        when(commentRepository.findAllByOrderByCreatedAtDesc()).thenReturn(List.of(first, second));

        mockMvc.perform(get("/api/comments"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].author").value("A"));

        // 這裡故意驗證呼叫的是「依時間排序」的那個衍生查詢方法，
        // 而不是普通的 findAll()——這就是在測試「排序到底是誰負責的」。
        verify(commentRepository).findAllByOrderByCreatedAtDesc();
        verify(commentRepository, never()).findAll();
    }

    @Test
    void deleteComment_whenExists_returns204() throws Exception {
        when(commentRepository.existsById(1L)).thenReturn(true);

        mockMvc.perform(delete("/api/comments/1"))
                .andExpect(status().isNoContent());

        verify(commentRepository).deleteById(1L);
    }

    @Test
    void deleteComment_whenNotExists_returns404AndNeverDeletes() throws Exception {
        when(commentRepository.existsById(anyLong())).thenReturn(false);

        mockMvc.perform(delete("/api/comments/999"))
                .andExpect(status().isNotFound());

        verify(commentRepository, never()).deleteById(anyLong());
    }
}





