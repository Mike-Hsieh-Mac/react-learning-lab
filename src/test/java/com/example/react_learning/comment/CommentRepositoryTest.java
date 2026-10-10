package com.example.react_learning.comment;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @DataJpaTest：只載入 JPA 相關的元件（Entity、Repository、內嵌的測試用資料庫），
 * 不會啟動整個 Spring 應用（沒有 Controller、沒有 Web 層）。
 * 預設會自動換成「記憶體版 H2」測試資料庫（跟你正式用的檔案版 H2 是分開的），
 * 每一個測試方法結束後資料會自動 rollback，測試之間不會互相汙染。
 *
 * 這份測試的目的：驗證 CommentRepository.findAllByOrderByCreatedAtDesc()
 * 這個「衍生查詢（derived query）」真的有照時間新到舊排序——
 * 這是 Repository 層最值得寫測試的地方，因為查詢邏輯是 Spring Data JPA
 * 依照方法名稱「自動生成」的，一旦改錯方法名稱（拼字、方向），
 * 編譯期不會報錯，只有跑過一次測試才抓得到。
 */
@DataJpaTest
class CommentRepositoryTest {

    @Autowired
    private CommentRepository commentRepository;

    @Test
    void findAllByOrderByCreatedAtDesc_returnsNewestFirst() throws InterruptedException {
        CommentEntity older = commentRepository.save(new CommentEntity("A", "比較舊的留言"));
        Thread.sleep(5); // 確保兩筆留言的 createdAt 不會剛好相同毫秒數
        CommentEntity newer = commentRepository.save(new CommentEntity("B", "比較新的留言"));

        List<CommentEntity> result = commentRepository.findAllByOrderByCreatedAtDesc();

        assertThat(result).hasSize(2);
        assertThat(result.get(0).getId()).isEqualTo(newer.getId());
        assertThat(result.get(1).getId()).isEqualTo(older.getId());
    }

    @Test
    void save_withPrePersist_autoFillsCreatedAt() {
        CommentEntity comment = new CommentEntity("Mike", "測試 @PrePersist");
        assertThat(comment.getCreatedAt()).isNull(); // 存進資料庫之前還是 null

        CommentEntity saved = commentRepository.save(comment);

        assertThat(saved.getCreatedAt()).isNotNull(); // @PrePersist 已經自動補上
    }

    @Test
    void existsById_returnsFalse_whenIdNotPresent() {
        assertThat(commentRepository.existsById(999_999L)).isFalse();
    }
}


