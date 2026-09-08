package com.example.react_learning.task;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * TaskRequest：前端「建立任務」時送進來的請求資料（Request DTO）。
 *
 * <p>對應前端 {@code POST /api/tasks} 的 request body，例如：{@code { "title": "學 React" }}。</p>
 *
 * <h3>為什麼不直接用 {@link Task}，而要多一個 TaskRequest？</h3>
 * <ul>
 *   <li><b>欄位不同：</b>前端建立任務時只需要提供 title；
 *       id、done、createdAt 都應該由「後端」決定（見 {@link TaskService#createTask}）。
 *       如果直接收 Task，惡意使用者就可以自己塞 id 或把 done 設成 true。</li>
 *   <li><b>職責不同：</b>Request 物件負責「接收外部輸入 + 驗證」，
 *       Task 負責「系統內部的完整資料」。分開之後，兩邊要改都不會互相影響。
 *       這種模式一般稱為 DTO（Data Transfer Object）。</li>
 * </ul>
 *
 * <h3>驗證註解怎麼運作？</h3>
 * <p>這些註解本身不會執行，是 Controller 參數上的 {@code @Valid}
 * （見 {@link TaskController#createTask}）觸發 Spring 幫我們檢查。
 * 驗證失敗時，Spring 會「自動」回 400 Bad Request，根本不會進到 Service，
 * 所以 Service 裡完全不用再寫 if 判斷 title 是否為空。</p>
 *
 * @param title 任務標題。
 *              {@code @NotBlank}：不能是 null、空字串、或只有空白（" " 也不行）；
 *              {@code @Size(max = 20)}：最多 20 個字。
 *              message 屬性是驗證失敗時回給前端的錯誤訊息。
 */
public record TaskRequest(
        @NotBlank(message = "請輸入任務標題")
        @Size(max = 20, message = "任務標題最多 20 個字")
        String title
) {
}
