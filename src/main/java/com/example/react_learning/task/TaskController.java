package com.example.react_learning.task;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * TaskController：任務功能的「HTTP 入口層」。
 *
 * <p>分層架構中每一層只做一件事：</p>
 * <pre>
 * 前端 fetch → Controller（接請求、驗證、決定狀態碼）
 *            → Service（商業邏輯）
 *            → Repository（資料存取）
 * </pre>
 * <p>Controller 應該保持「很薄」：只負責把 HTTP 世界（URL、狀態碼、JSON）
 * 翻譯成 Java 方法呼叫，任何邏輯判斷都交給 Service。
 * 你會發現每個方法幾乎都只有一行，這是刻意的好習慣。</p>
 *
 * <h3>類別上的註解說明</h3>
 * <ul>
 *   <li>{@code @RestController}：告訴 Spring「這是一個 API 控制器」，
 *       所有方法的回傳值都會自動序列化成 JSON（等於 @Controller + @ResponseBody）。</li>
 *   <li>{@code @RequestMapping("api/tasks")}：這個類別底下所有 API 的共同路徑前綴，
 *       所以下面的 @GetMapping 實際網址是 GET /api/tasks。</li>
 * </ul>
 */
@RestController
@RequestMapping("api/tasks")
public class TaskController {

    /** 用 final 宣告，強迫一定要在建構子完成注入，之後不能被換掉。 */
    private final TaskService taskService;

    /**
     * 建構子注入（Constructor Injection）。
     *
     * <p>我們自己「不會」寫 {@code new TaskController(...)}——
     * Spring 啟動時會掃描到 {@link TaskService} 上的 {@code @Service}，
     * 先建立好 TaskService 的實例，再自動塞進這個建構子（這就是「依賴注入 DI」）。
     * 只有一個建構子時，連 {@code @Autowired} 都可以省略。</p>
     */
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    /**
     * 查詢所有任務。
     *
     * <p>對應：{@code GET /api/tasks} → 200 OK + 任務 JSON 陣列。</p>
     * <p>回傳的 {@code List<Task>} 會被 Spring 自動轉成 JSON 陣列，
     * 例如 {@code [{"id":1,"title":"學 React","done":false,...}]}，
     * 不用自己組字串。沒有標 @ResponseStatus 時，預設就是 200。</p>
     */
    @GetMapping
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    /**
     * 建立一筆新任務。
     *
     * <p>對應：{@code POST /api/tasks} + body {@code {"title":"..."}} → 201 Created + 新任務 JSON。</p>
     * <ul>
     *   <li>{@code @RequestBody}：把前端送來的 JSON body 轉成 {@link TaskRequest} 物件。</li>
     *   <li>{@code @Valid}：觸發 TaskRequest 裡的 @NotBlank / @Size 驗證；
     *       驗證失敗 Spring 會直接回 400，這個方法根本不會被執行。</li>
     *   <li>{@code @ResponseStatus(HttpStatus.CREATED)}：REST 慣例——
     *       「成功建立資源」要回 201 而不是預設的 200，語意更精確。</li>
     * </ul>
     * <p>回傳建立完成的 Task（含後端產生的 id），讓前端拿到 id 之後才能做勾選、刪除。</p>
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task createTask(@Valid @RequestBody TaskRequest taskRequest) {
        return taskService.createTask(taskRequest);
    }

    /**
     * 切換任務的完成狀態（done: true ⇄ false）。
     *
     * <p>對應：{@code PUT /api/tasks/{id}/toggle} → 200 OK + 更新後的任務 JSON。</p>
     * <ul>
     *   <li>{@code {id}} 是「路徑變數」：網址 PUT /api/tasks/3/toggle 中的 3
     *       會被 {@code @PathVariable} 綁定到參數 id。</li>
     *   <li>用 PUT 是因為這是「更新既有資源」的操作（REST 慣例：GET 查、POST 建、PUT 改、DELETE 刪）。</li>
     *   <li>如果 id 不存在，Service 會丟出 404（見 {@link TaskService#toggleTask}），
     *       Controller 這層不用處理，Spring 會自動轉成 HTTP 404 回應。</li>
     * </ul>
     */
    @PutMapping("/{id}/toggle")
    public Task toggleTask(@PathVariable long id) {
        return taskService.toggleTask(id);
    }

    /**
     * 刪除一筆任務。
     *
     * <p>對應：{@code DELETE /api/tasks/{id}} → 204 No Content（成功但沒有內容需要回傳）。</p>
     * <ul>
     *   <li>回傳型別是 void，搭配 {@code @ResponseStatus(HttpStatus.NO_CONTENT)}：
     *       REST 慣例中「刪除成功」常回 204，表示成功、且 body 是空的。</li>
     *   <li>找不到 id 時，Service 會丟 404（見 {@link TaskService#deleteTask}），
     *       所以前端可以區分「刪成功（204）」和「本來就不存在（404）」。</li>
     * </ul>
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable long id) {
        taskService.deleteTask(id);
    }
}
