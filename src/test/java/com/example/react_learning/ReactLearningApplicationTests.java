package com.example.react_learning;

import com.example.react_learning.learning.LearningLabController;
import com.example.react_learning.learning.LearningNoteMapper;
import com.example.react_learning.learning.InMemoryLearningNoteRepository;
import com.example.react_learning.learning.LearningLabService;
import com.example.react_learning.learning.GlobalExceptionHandler;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class ReactLearningApplicationTests {

    private final LocalValidatorFactoryBean validator = createValidator();
    private final LearningLabService learningLabService = new LearningLabService(
            new InMemoryLearningNoteRepository(),
            new LearningNoteMapper()
    );
    private final MockMvc mockMvc = MockMvcBuilders
            .standaloneSetup(new LearningLabController(learningLabService))
            .setControllerAdvice(new GlobalExceptionHandler())
            .setValidator(validator)
            .build();

    private static LocalValidatorFactoryBean createValidator() {
        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
        validator.afterPropertiesSet();
        return validator;
    }

    @Test
    void contextLoads() {
        assertThat(learningLabService.getOverview().title()).isEqualTo("React + Spring Boot Learning Lab");
    }

    @Test
    void shouldReturnLearningOverview() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/overview"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("React + Spring Boot Learning Lab")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"state\"")));
    }

    @Test
    void shouldReturnPagedLearningNotes() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/notes")
                        .param("page", "0")
                        .param("size", "5")
                        .param("query", "React"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"data\"")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"totalCount\"")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"availableFeatures\"")));
    }

    @Test
    void shouldReturnBackendLabs() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/backend-labs"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("query-paging")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("/api/learning/stats")));
    }

    @Test
    void shouldIncludeDeleteFlowAndDtoMappingLabs() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/backend-labs"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"delete-flow\"")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"dto-mapping\"")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("LearningNoteMapper.toNewEntity")));
    }

    @Test
    void shouldRecalculateNoteCountAfterCreate() {
        int before = learningLabService.getStats().noteCount();
        learningLabService.createNote(new com.example.react_learning.learning.LearningNoteRequest(
                "統計觀察員",
                "Spring Boot 練習",
                "noteCount 應該要即時反映新增的筆記。"
        ));
        int after = learningLabService.getStats().noteCount();
        assertThat(after).isEqualTo(before + 1);
    }

    @Test
    void shouldReturnLearningStats() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/stats"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"lessonCount\":5")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"hookCount\":5")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("GET /api/learning/notes?page=0&size=5&query=&feature=all")));
    }

    @Test
    void shouldReturnSingleLearningNote() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/notes/1"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("新人小美")));
    }

    @Test
    void shouldCreateLearningNote() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.request(HttpMethod.POST, "/api/learning/notes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "learnerName": "測試學員",
                                  "feature": "API 串接",
                                  "question": "我想知道 POST 之後畫面為什麼會自動更新。"
                                }
                                """))
                .andExpect(status().isCreated())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("測試學員")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("API 串接")));
    }

    @Test
    void shouldUpdateLearningNote() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.put("/api/learning/notes/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "learnerName": "新人小美",
                                  "feature": "React State",
                                  "question": "我現在知道可以用 PUT 更新既有資料。"
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("PUT 更新既有資料")));
    }

    @Test
    void shouldDeleteLearningNote() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/learning/notes/2"))
                .andExpect(status().isNoContent());

        mockMvc.perform(MockMvcRequestBuilders.get("/api/learning/notes/2"))
                .andExpect(status().isNotFound())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"code\":\"NOT_FOUND\"")));
    }

    @Test
    void shouldRejectInvalidLearningNote() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.request(HttpMethod.POST, "/api/learning/notes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "learnerName": "",
                                  "feature": "React State",
                                  "question": ""
                                }
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"code\":\"VALIDATION_ERROR\"")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("\"field\":\"learnerName\"")));
    }

}
