package com.example.react_learning.comment;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.resttestclient.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * ============================================================================
 * 進階選學：Testcontainers 整合測試
 * ============================================================================
 * 這份測試會在「跑測試的當下」自動用 Docker 啟動一個全新、乾淨的 MySQL 容器
 * （不是你 docker-compose.yml 裡那個常駐的 mysql 服務，是獨立、用完即丟的一次性容器），
 * 然後讓 Spring Boot 真的連上這個容器跑完整的 HTTP 請求 → Controller → Repository
 * → 真正的 MySQL 流程，測試結束後容器會自動被刪除，不會留下任何髒資料。
 *
 * 這代表：
 *   1. 這份測試「必須要有 Docker 在跑」才能執行——這台沒有 Docker 的機器會直接失敗，
 *      請在你另一台能跑 Docker 的機器上執行（跟你串接外部資料庫、cross-machine 的
 *      工作流程完全一致）。
 *   2. 比起 @DataJpaTest（預設換成記憶體 H2），這份測試測的是「跟正式環境同一種資料庫」，
 *      能抓到 H2 測不出來的 MySQL 專屬行為差異（例如型別轉換、SQL 方言差異）。
 *
 * 想在本機（沒有 Docker）略過這份測試，可以用：
 *   mvn test -Dtest='!CommentTestcontainersIntegrationTest'
 * ============================================================================
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
class CommentTestcontainersIntegrationTest {

    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.4")
            .withDatabaseName("learning_lab_test")
            .withUsername("learner")
            .withPassword("learn123");

    // 把 Testcontainers 啟動後「隨機產生」的連線資訊，動態塞進 Spring 的設定裡，
    // 這樣 application.properties 完全不用寫死任何連線字串。
    @DynamicPropertySource
    static void overrideDatasourceProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mysql::getJdbcUrl);
        registry.add("spring.datasource.username", mysql::getUsername);
        registry.add("spring.datasource.password", mysql::getPassword);
        registry.add("spring.datasource.driver-class-name", mysql::getDriverClassName);
        registry.add("spring.jpa.hibernate.ddl-auto", () -> "update");
    }

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void fullCrudFlow_worksAgainstRealMySqlContainer() {
        String baseUrl = "http://localhost:" + port + "/api/comments";

        ResponseEntity<CommentEntity> createResponse = restTemplate.postForEntity(
                baseUrl, new CommentRequest("Mike", "整合測試留言（真的連去 MySQL）"), CommentEntity.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        Long createdId = createResponse.getBody().getId();
        assertThat(createdId).isNotNull();

        ResponseEntity<CommentEntity[]> listResponse = restTemplate.getForEntity(baseUrl, CommentEntity[].class);
        assertThat(listResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(listResponse.getBody()).isNotEmpty();

        restTemplate.delete(baseUrl + "/" + createdId);

        ResponseEntity<CommentEntity[]> afterDelete = restTemplate.getForEntity(baseUrl, CommentEntity[].class);
        boolean stillExists = java.util.Arrays.stream(afterDelete.getBody())
                .anyMatch(comment -> comment.getId().equals(createdId));
        assertThat(stillExists).isFalse();
    }
}


