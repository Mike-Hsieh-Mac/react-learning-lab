package com.example.react_learning.task;

import java.time.Instant;

/**
 * Task：任務的「內部資料模型（Domain Model）」。
 *
 * <p>這是整個 /api/tasks 功能的核心資料結構，一筆任務在系統裡長什麼樣子，全由這裡決定。
 * Repository 存的是它、Service 操作的是它、Controller 回傳給前端的 JSON 也是由它自動轉換而來。</p>
 *
 * <h3>為什麼用 record 而不是一般 class？</h3>
 * <ul>
 *   <li>record 是 Java 16+ 的語法，宣告欄位後會自動產生：建構子、getter（例如 {@code task.id()}）、
 *       equals()、hashCode()、toString()，不用再手寫一堆樣板程式碼。</li>
 *   <li>record 是「不可變的（immutable）」：欄位都是 final，建立之後不能再修改。
 *       任何人拿到 Task 都不用擔心它被偷偷改掉，在多執行緒環境下特別安全。</li>
 *   <li>因為不可變，任何「修改」都必須建立一筆新的 Task——
 *       這和 React 的「不要直接改 state，要 setState 一個新物件」是同一種思想。</li>
 * </ul>
 *
 * <h3>JSON 對應</h3>
 * <p>Spring Boot（透過 Jackson）會自動把這個 record 轉成 JSON 回給前端，例如：</p>
 * <pre>
 * { "id": 1, "title": "學 React", "done": false, "createdAt": "2026-09-01T08:00:00Z" }
 * </pre>
 *
 * <h3>和 TaskEntity 的分工</h3>
 * <p>資料庫升級後，資料存取改由 {@link TaskEntity}（JPA Entity，對應資料表 tasks）負責，
 * 這個 record 專職「API 回傳模型」：Controller 回給前端的 JSON 形狀由它決定，
 * 資料表怎麼改都不會意外影響到前端。兩者的轉換寫在 {@link TaskEntity#toTask()}。</p>
 *
 * @param id        任務的唯一編號。由資料庫 AUTO_INCREMENT 產生（見 {@link TaskEntity} 的 @GeneratedValue），前端刪除、勾選時都靠它定位是哪一筆。
 * @param title     任務標題。內容由使用者輸入，但長度等驗證規則寫在 {@link TaskRequest}，不是這裡。
 * @param done      是否已完成。新任務一律是 false（見 {@link TaskService#createTask}），之後靠 toggle API 切換。
 * @param createdAt 建立時間。用 {@link Instant} 代表 UTC 時間點，避免時區問題；前端要顯示當地時間時再自行轉換。
 */
public record Task(
        long id,
        String title,
        boolean done,
        Instant createdAt
) {
}
