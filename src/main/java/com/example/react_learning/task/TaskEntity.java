package com.example.react_learning.task;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;

/**
 * TaskEntity：任務在「資料庫」裡的樣子（JPA Entity）。
 *
 * <p>一個 Entity 類別 = 一張資料表；一個 Entity 物件 = 表中的一列（row）。
 * Hibernate 會根據這個類別自動建立資料表：</p>
 * <pre>
 * CREATE TABLE tasks (
 *     id         BIGINT AUTO_INCREMENT PRIMARY KEY,
 *     title      VARCHAR(50) NOT NULL,
 *     done       BOOLEAN NOT NULL,
 *     created_at TIMESTAMP NOT NULL
 * );
 * </pre>
 *
 * <h3>為什麼不能沿用 Task record？為什麼要多一個類別？</h3>
 * <ul>
 *   <li>JPA 規範要求 Entity 必須有「無參數建構子」而且「欄位可以修改（setter）」，
 *       因為 Hibernate 從資料庫讀資料時，是先 new 一個空物件、再逐欄塞值。
 *       record 天生不可變、沒有無參建構子，所以不能當 Entity。</li>
 *   <li>刻意把「資料庫模型（TaskEntity）」和「API 回傳模型（Task record）」分開，
 *       是業界常見做法：以後資料表加了敏感欄位（例如建立者 IP），
 *       不會不小心跟著 JSON 一起洩漏給前端。</li>
 *   <li>兩者之間的轉換寫在 {@link #toTask()} 和 {@link #fromRequest(String, Instant)}。</li>
 * </ul>
 *
 * <h3>類別上的註解</h3>
 * <ul>
 *   <li>{@code @Entity}：告訴 JPA「這個類別要對應到資料表」，Hibernate 啟動時會掃描它。</li>
 *   <li>{@code @Table(name = "tasks")}：指定資料表名稱。不寫的話預設用類別名（TASK_ENTITY），
 *       明確指定比較清楚，也避免和資料庫保留字衝突。</li>
 * </ul>
 */
@Entity
@Table(name = "tasks")
public class TaskEntity {

    /**
     * 主鍵（Primary Key）。
     * <ul>
     *   <li>{@code @Id}：標記這個欄位是主鍵，資料庫用它唯一識別每一列。</li>
     *   <li>{@code @GeneratedValue(strategy = IDENTITY)}：id 由「資料庫」自動遞增產生
     *       （AUTO_INCREMENT）。注意！這取代了記憶體版的 {@code AtomicLong nextId()}——
     *       現在保證 id 不重複的責任交給資料庫，我們存檔前 id 是 null，
     *       save() 之後 Hibernate 會把資料庫配好的 id 填回來。</li>
     *   <li>型別用包裝類 {@code Long} 而不是基本型別 {@code long}：
     *       因為「還沒存進資料庫」的新物件 id 必須是 null，基本型別無法表達 null。</li>
     * </ul>
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 任務標題。
     * {@code @Column(nullable = false, length = 50)}：
     * 在「資料庫層」也加上 NOT NULL 和長度 50 的限制，
     * 和 {@link TaskRequest} 的 @NotBlank/@Size 形成雙重防線——
     * 就算有人繞過 API 直接寫資料庫，也塞不進不合法的資料。
     */
    @Column(nullable = false, length = 50)
    private String title;

    /** 是否完成。boolean 對應資料庫的 BOOLEAN 欄位。 */
    @Column(nullable = false)
    private boolean done;

    /**
     * 建立時間。
     * 欄位名 createdAt 會被 Hibernate 自動轉成蛇形命名的欄位名 created_at
     * （Java 慣用駝峰、SQL 慣用蛇形，Hibernate 預設幫你翻譯）。
     */
    @Column(nullable = false)
    private Instant createdAt;

    /**
     * JPA 規範要求的「無參數建構子」。
     * Hibernate 從資料庫讀資料時會呼叫它建立空物件，再用反射塞值。
     * 宣告成 protected：滿足 JPA 需求，但阻止我們自己的程式誤用它建出「空任務」。
     */
    protected TaskEntity() {
    }

    /** 我們自己程式用的建構子：建立一筆「還沒存進資料庫」的新任務（id 為 null）。 */
    public TaskEntity(String title, boolean done, Instant createdAt) {
        this.title = title;
        this.done = done;
        this.createdAt = createdAt;
    }

    // ---------- getter / setter ----------
    // Entity 是「可變的」：Hibernate 靠 setter 塞值，
    // 我們也靠 setDone() 直接修改後再存回去（對比 record 的「整筆換新」）。

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    // ---------- 轉換方法：資料庫模型 ⇄ API 模型 ----------

    /**
     * 把資料庫模型轉成 API 回傳模型（{@link Task} record）。
     * Controller 回給前端的 JSON 形狀因此完全不變：
     * {@code {"id":1,"title":"...","done":false,"createdAt":"..."}}——
     * 前端一行程式都不用改，這就是「分層 + 轉換」帶來的隔離效果。
     */
    public Task toTask() {
        return new Task(id, title, done, createdAt);
    }

    /**
     * 用前端請求資料建立一筆「待儲存」的新 Entity。
     * 商業規則和記憶體版相同：done 一律 false、時間由後端決定；
     * 唯一不同是 id 不再自己產生（留 null，交給資料庫 AUTO_INCREMENT）。
     */
    public static TaskEntity fromRequest(String title, Instant createdAt) {
        return new TaskEntity(title, false, createdAt);
    }
}

