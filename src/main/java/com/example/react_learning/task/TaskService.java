package com.example.react_learning.task;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.time.Instant;
import java.util.List;
import static org.springframework.http.HttpStatus.NOT_FOUND;
/**
 * TaskService：任務功能的「商業邏輯層（Business Logic Layer）」——資料庫版。
 *
 * <p>升級成真正資料庫後，這一層「規則」完全沒變：</p>
 * <ul>
 *   <li>新任務 done 一律 false、建立時間由伺服器決定。</li>
 *   <li>toggle 是「反轉」done，不讓前端直接指定。</li>
 *   <li>找不到資料回 404。</li>
 * </ul>
 * <p>唯一的差別是「資料的形狀」：Repository 現在存取的是 {@link TaskEntity}
 * （資料庫模型），而 Controller / 前端看到的仍然是 {@link Task}（API 模型），
 * 所以 Service 多了一個新職責——在兩者之間「轉換」。
 * 這樣 Controller 和前端程式一行都不用改，就完成了資料庫升級。</p>
 */
@Service
public class TaskService {
    /**
     * 注意：這裡注入的是「介面」。實作類別是 Spring Data JPA
     * 在啟動時自動產生的（我們整個專案裡找不到它的 class 檔），
     * 這就是「面向介面寫程式」——Service 只關心能做什麼，不關心怎麼做。
     */
    private final TaskRepository taskRepository;
    /** 建構子注入：Spring 自動把生成好的 Repository 實作傳進來。 */
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    /**
     * 取得所有任務。
     *
     * <p>{@code findAll()} 會下 SQL：{@code SELECT * FROM tasks}，
     * 拿回 {@code List<TaskEntity>}，再用 stream().map() 把每一筆
     * Entity 轉成 API 模型 Task 回給 Controller。</p>
     */
    public List<Task> getTasks() {
        return taskRepository.findAll().stream()
                .map(TaskEntity::toTask)   // 方法引用：等同 entity -> entity.toTask()
                .toList();
    }
    /**
     * 建立一筆新任務。
     *
     * <p>商業規則不變：前端只能給 title，done=false 和 createdAt 由後端決定。
     * 和記憶體版的差別在 id 的產生方式：</p>
     * <ul>
     *   <li>以前：{@code taskRepository.nextId()}（AtomicLong 自己數）。</li>
     *   <li>現在：new 出來的 Entity id 是 null，{@code save()} 會下
     *       {@code INSERT INTO tasks ...}，資料庫用 AUTO_INCREMENT 配號後，
     *       Hibernate 把配好的 id「填回」回傳的 Entity——所以要用 save() 的
     *       回傳值轉成 Task，前端才拿得到 id。</li>
     * </ul>
     *
     * @param taskRequest 已通過 @Valid 驗證的請求資料（title 保證不是空白）
     * @return 建立完成、含資料庫配發 id 的 Task，由 Controller 以 201 回給前端
     */
    public Task createTask(TaskRequest taskRequest) {
        TaskEntity saved = taskRepository.save(
                TaskEntity.fromRequest(taskRequest.title(), Instant.now()));
        return saved.toTask();
    }
    /**
     * 切換任務的完成狀態（done 反轉）。
     *
     * <p>「Optional + orElseThrow → 404」的模式和記憶體版一模一樣；
     * 但「更新」的做法不同，正好對照兩種資料模型的差異：</p>
     * <ul>
     *   <li>記憶體版（record，不可變）：複製一筆新 Task，再 replace 換掉舊的。</li>
     *   <li>資料庫版（Entity，可變）：直接 {@code setDone(!isDone())} 修改欄位，
     *       再 {@code save()}。因為 Entity 已經有 id，save 會下
     *       {@code UPDATE tasks SET done=? WHERE id=?} 而不是 INSERT。</li>
     * </ul>
     *
     * @param id 要切換的任務 id（來自網址路徑）
     * @return 更新後的 Task（done 已反轉）
     * @throws ResponseStatusException 404，當 id 不存在時
     */
    public Task toggleTask(long id) {
        // 步驟 1：findById 下 SELECT ... WHERE id=?；找不到就丟 404，後面不會執行。
        TaskEntity entity = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        NOT_FOUND, "找不到任務: " + id));
        // 步驟 2：Entity 是可變的，直接反轉 done 欄位。
        entity.setDone(!entity.isDone());
        // 步驟 3：save() 發現 id 已存在 → 下 UPDATE，把變更寫回資料庫。
        return taskRepository.save(entity).toTask();
    }
    /**
     * 刪除一筆任務。
     *
     * <p>JPA 的 {@code deleteById} 沒有回傳值（不像記憶體版回傳 boolean），
     * 所以改成「先查存不存在」：</p>
     * <ul>
     *   <li>{@code existsById} 下 {@code SELECT COUNT(*) ... WHERE id=?}，
     *       不存在 → 丟 404，讓前端知道「你要刪的東西不存在」而不是假裝成功。</li>
     *   <li>存在 → {@code deleteById} 下 {@code DELETE FROM tasks WHERE id=?}，
     *       Controller 回 204。</li>
     * </ul>
     *
     * @param id 要刪除的任務 id
     * @throws ResponseStatusException 404，當 id 不存在時
     */
    public void deleteTask(long id) {
        if (!taskRepository.existsById(id)) {
            throw new ResponseStatusException(NOT_FOUND, "找不到要刪除的任務: " + id);
        }
        taskRepository.deleteById(id);
    }
}
