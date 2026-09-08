package com.example.react_learning.learning;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class LearningLabService {

    private final LearningNoteRepository learningNoteRepository;
    private final LearningNoteMapper learningNoteMapper;

    public LearningLabService(LearningNoteRepository learningNoteRepository, LearningNoteMapper learningNoteMapper) {
        this.learningNoteRepository = learningNoteRepository;
        this.learningNoteMapper = learningNoteMapper;
    }

    public LearningOverviewResponse getOverview() {
        return new LearningOverviewResponse(
                "React + Spring Boot Learning Lab",
                "從零開始，用互動頁面一步步學會 React 基礎、常用元件、常見 hooks、表單控制，以及 Spring Boot API 與後端實作的完整資料流。",
                List.of(
                        "使用者在 React 頁面點擊按鈕或輸入表單。",
                        "React 透過 useState 儲存畫面狀態，必要時觸發重新渲染。",
                        "當畫面邏輯變複雜時，會搭配 useEffect、useMemo、useCallback、useRef 等 hooks。",
                        "當需要後端資料時，前端使用 fetch 呼叫 /api/learning/* API。",
                        "Spring Boot Controller 接收請求，交給 Service 處理規則與資料。",
                        "Service 會整理教學內容、驗證規則與統計資料，再由 Spring Boot 轉成 JSON 給前端顯示。"
                ),
                List.of(
                        new LessonSummary(
                                "hooks",
                                "React Hooks 實戰入門",
                                "學會 useEffect、useMemo、useCallback、useRef 的用途與差異。",
                                "hooks 分工、搜尋、DOM 聚焦、效能優化",
                                "當 hooks 需要資料時，會搭配 GET API 與穩定回應"
                        ),
                        new LessonSummary(
                                "state",
                                "React State 入門",
                                "學習 useState 如何驅動畫面更新。",
                                "useState、事件處理、重新渲染",
                                "此單元先不依賴後端，聚焦前端狀態。"
                        ),
                        new LessonSummary(
                                "form",
                                "表單控制與資料送出",
                                "理解 controlled component 與 POST 請求。",
                                "onChange、表單 state、送出事件",
                                "@PostMapping、@Valid、Request Body 驗證"
                        ),
                        new LessonSummary(
                                "api",
                                "API 資料流",
                                "觀察 React 與 Spring Boot 如何交換 JSON。",
                                "useEffect、非同步請求、載入狀態",
                                "@GetMapping、Service、JSON Response"
                        ),
                        new LessonSummary(
                                "backendCrud",
                                "後端 CRUD 與資料同步",
                                "理解 GET / POST / PUT / DELETE 如何讓前後端資料保持一致。",
                                "單筆讀取、更新、刪除、畫面同步",
                                "@PutMapping、@DeleteMapping、404、Service 更新邏輯"
                        )
                ),
                List.of(
                        "先觀察畫面互動，再對照右側程式碼片段。",
                        "每做一次操作，就看下方事件紀錄，理解資料流方向。",
                        "先弄懂 state 與 props，再進到 hooks 與 API，學習曲線會更平順。",
                        "看到 hook 時，先問自己它是在保存資料、處理副作用，還是在優化效能。",
                        "看到後端 endpoint 時，先分清楚哪一層在接請求、做驗證、整理回應。"
                ),
                List.of(
                        new GettingStartedStep(
                                "map-1",
                                "先認識畫面上有哪些區塊",
                                "先看頁面分成哪些部分：新手導覽、名詞字典、常用元件練習、完整 lesson、筆記與 API 回應。",
                                "新人最容易卡在不知道先看哪裡，先建立地圖後，後面的程式碼才有位置感。"
                        ),
                        new GettingStartedStep(
                                "map-2",
                                "先學 React 的最小單位：元件 + state",
                                "從按鈕、輸入框、清單開始，理解畫面其實是由元件組合而成，元件中的 state 會控制畫面。",
                                "只要先理解元件與 state，之後看到事件處理、表單、條件渲染都比較不會混亂。"
                        ),
                        new GettingStartedStep(
                                "map-3",
                                "再看 hooks、表單與 API",
                                "當你知道畫面怎麼更新後，再來理解常用 hooks、使用者輸入怎麼被保存，並送到後端 API。",
                                "這會把前端互動與後端資料串起來，是全端理解的關鍵一步。"
                        ),
                        new GettingStartedStep(
                                "map-4",
                                "最後對照 Spring Boot 的 Controller / Service",
                                "從前端的 fetch 反查到 Spring Boot 的 @GetMapping、@PostMapping 與 Service 方法。",
                                "你會知道同一個功能在前後端各自負責什麼，不再只是背語法。"
                        )
                ),
                List.of(
                        new GlossaryTerm(
                                "JSX",
                                "React 用來描述畫面的語法，看起來像 HTML，但其實是 JavaScript 的一部分。",
                                "return <button>送出</button>",
                                "Spring Boot 不直接寫 JSX，它通常回傳資料給 React 顯示。"
                        ),
                        new GlossaryTerm(
                                "Component 元件",
                                "可以重複使用的畫面區塊，像是一個按鈕卡片或整個表單。",
                                "function WelcomeCard() { return <section>...</section> }",
                                "Spring Boot 裡比較接近職責拆分的概念是 Controller、Service。"
                        ),
                        new GlossaryTerm(
                                "State 狀態",
                                "元件裡會改變的資料，只要 state 改變，畫面就會跟著更新。",
                                "const [count, setCount] = useState(0)",
                                "後端比較像是方法中的資料處理結果，最後再回傳給前端。"
                        ),
                        new GlossaryTerm(
                                "Hook",
                                "React 提供的一組工具函式，讓函式元件也能保存狀態、處理副作用與重用邏輯。",
                                "useState、useEffect、useMemo、useCallback 都是常見 hooks。",
                                "後端沒有 hook，但會透過方法拆分、Service 注入等方式重用邏輯。"
                        ),
                        new GlossaryTerm(
                                "Props",
                                "父元件傳給子元件的資料，讓不同元件之間能夠合作。",
                                "<LessonCard title={lesson.title} />",
                                "Spring Boot 也會把資料從 Service 傳到 Controller，再回傳給前端。"
                        ),
                        new GlossaryTerm(
                                "API",
                                "前端向後端拿資料或送資料的入口。",
                                "fetch('/api/learning/overview')",
                                "@GetMapping(\"/overview\") 會定義一個 API 路徑。"
                        ),
                        new GlossaryTerm(
                                "JSON",
                                "前後端交換資料時最常見的格式。",
                                "{ title: 'React State 入門' }",
                                "Spring Boot 會把 Java record 自動轉成 JSON。"
                        ),
                        new GlossaryTerm(
                                "Controller / Service",
                                "Controller 接請求，Service 處理邏輯，分工清楚比較好維護。",
                                "React 會呼叫 API，但不處理後端商業邏輯。",
                                "Controller 負責接收請求，Service 負責組資料與規則。"
                        )
                ),
                List.of(
                        new ComponentGuide(
                                "button",
                                "Button 按鈕",
                                "當使用者需要觸發一個動作時，例如加一、送出表單、重新載入資料。",
                                List.of(
                                        "button 元素用來觸發事件。",
                                        "onClick 會綁定一個事件處理函式。",
                                        "按鈕文案應該直接說明這個動作會做什麼。"
                                ),
                                "<button type=\"button\" onClick={handleIncrement}>Count +1</button>",
                                "試著找到畫面上所有按鈕，說出它們各自會觸發哪個函式。"
                        ),
                        new ComponentGuide(
                                "input",
                                "Input 輸入框",
                                "當你要讓使用者輸入文字時使用，例如姓名、搜尋關鍵字、留言。",
                                List.of(
                                        "value 代表輸入框目前顯示的值。",
                                        "onChange 會在使用者輸入時更新 state。",
                                        "這種寫法叫做 controlled component。"
                                ),
                                "<input name=\"learnerName\" value={form.learnerName} onChange={handleInputChange} />",
                                "試著在輸入框輸入資料，再觀察 form state 是如何被更新的。"
                        ),
                        new ComponentGuide(
                                "list",
                                "List 清單",
                                "當你有多筆資料要重複顯示時，例如學習筆記、lesson 列表。",
                                List.of(
                                        "map() 會把陣列轉成多個 JSX 元素。",
                                        "每個元素都需要穩定的 key。",
                                        "清單資料通常來自 state 或 API。"
                                ),
                                "{notes.map((note) => <article key={note.id}>{note.question}</article>)}",
                                "找到 notes 清單是怎麼用 map render 出來的。"
                        ),
                        new ComponentGuide(
                                "conditional",
                                "Conditional Rendering 條件渲染",
                                "當某段畫面只在某些條件下出現時使用，例如 loading、error、空資料提示。",
                                List.of(
                                        "condition ? A : B 可以根據條件顯示不同內容。",
                                        "condition && A 可以在條件成立時才顯示內容。",
                                        "這是動態畫面非常常見的基礎能力。"
                                ),
                                "{error ? <div className=\"error-banner\">{error}</div> : null}",
                                "試著找出這個頁面有哪些區塊是條件成立時才顯示。"
                        )
                )
        );
    }

    public LearningNotesPageResponse getNotes(int page, int size, String query, String feature) {
        int safePageSize = Math.max(1, Math.min(size, 20));
        int requestedPage = Math.max(page, 0);
        String normalizedQuery = query == null ? "" : query.trim().toLowerCase(Locale.ROOT);
        String normalizedFeature = feature == null ? "" : feature.trim();

        List<LearningNote> allNotes = learningNoteRepository.findAll();
        List<String> availableFeatures = allNotes.stream()
                .map(LearningNote::feature)
                .distinct()
                .sorted(String.CASE_INSENSITIVE_ORDER)
                .toList();

        List<LearningNote> filteredNotes = allNotes.stream()
                .filter(note -> normalizedFeature.isBlank() || "all".equalsIgnoreCase(normalizedFeature)
                        || note.feature().equalsIgnoreCase(normalizedFeature))
                .filter(note -> normalizedQuery.isBlank() || containsIgnoreCase(note.learnerName(), normalizedQuery)
                        || containsIgnoreCase(note.feature(), normalizedQuery)
                        || containsIgnoreCase(note.question(), normalizedQuery))
                .sorted(Comparator.comparing(LearningNote::createdAt).reversed())
                .toList();

        long totalCount = filteredNotes.size();
        int totalPages = totalCount == 0 ? 1 : (int) Math.ceil((double) totalCount / safePageSize);
        int safePageNumber = Math.min(requestedPage, Math.max(totalPages - 1, 0));
        int fromIndex = Math.min(safePageNumber * safePageSize, filteredNotes.size());
        int toIndex = Math.min(fromIndex + safePageSize, filteredNotes.size());

        List<LearningNoteResponse> pageData = filteredNotes.subList(fromIndex, toIndex)
                .stream()
                .map(learningNoteMapper::toResponse)
                .toList();

        return new LearningNotesPageResponse(
                pageData,
                safePageNumber,
                safePageSize,
                totalCount,
                totalPages,
                safePageNumber + 1 < totalPages,
                safePageNumber > 0,
                availableFeatures
        );
    }

    public LearningNoteResponse createNote(LearningNoteRequest request) {
        LearningNote note = learningNoteMapper.toNewEntity(
                learningNoteRepository.nextId(),
                request,
                Instant.now()
        );
        return learningNoteMapper.toResponse(learningNoteRepository.save(note));
    }

    public LearningNoteResponse getNote(long id) {
        return learningNoteMapper.toResponse(findNoteOrThrow(id, "找不到指定的學習筆記: " + id));
    }

    public LearningNoteResponse updateNote(long id, LearningNoteRequest request) {
        LearningNote current = findNoteOrThrow(id, "找不到要更新的學習筆記: " + id);
        LearningNote updated = learningNoteMapper.toUpdatedEntity(current, request, Instant.now());
        return learningNoteMapper.toResponse(learningNoteRepository.update(updated));
    }

    public void deleteNote(long id) {
        boolean removed = learningNoteRepository.deleteById(id);
        if (!removed) {
            throw new ResponseStatusException(NOT_FOUND, "找不到要刪除的學習筆記: " + id);
        }
    }

    public List<BackendLab> getBackendLabs() {
        return List.of(
                new BackendLab(
                        "validation",
                        "表單驗證：避免後端收到不完整資料",
                        "透過 @Valid、@NotBlank、@Size 保護 API，確保進來的 JSON 符合需求。",
                        "POST",
                        "/api/learning/notes",
                        "如果前端漏填資料，後端仍然要有最後一道防線，避免髒資料進系統。",
                        List.of(
                                "Controller 用 @Valid @RequestBody 接收 JSON。",
                                "Spring Boot 先做欄位驗證。",
                                "驗證通過後才交給 Service 建立 note。"
                        ),
                        "{\n  \"learnerName\": \"小美\",\n  \"feature\": \"表單控制\",\n  \"question\": \"為什麼要 preventDefault?\"\n}",
                        "{\n  \"id\": 3,\n  \"learnerName\": \"小美\",\n  \"feature\": \"表單控制\",\n  \"question\": \"為什麼要 preventDefault?\",\n  \"createdAt\": \"2026-07-29T08:15:00Z\"\n}",
                        List.of("LearningLabController.createNote", "LearningNoteRequest", "LearningLabService.createNote"),
                        "故意把 learnerName 留空，再觀察為什麼 API 會回 400。"
                ),
                new BackendLab(
                        "query-paging",
                        "搜尋 / filter / 分頁：讓列表 API 更像真實專案",
                        "真實專案的列表 API 通常不會一次把所有資料都吐給前端，而是支援 query、feature filter 與 page/size。",
                        "GET",
                        "/api/learning/notes?page=0&size=5&query=React&feature=React State",
                        "當資料量增加時，前端需要能搜尋、篩選與分頁，後端也要回傳完整的分頁資訊。",
                        List.of(
                                "Controller 用 RequestParam 接 page、size、query、feature。",
                                "Service 先做 filter，再切出當前頁資料。",
                                "回傳 LearningNotesPageResponse，包含 data、totalCount、totalPages。"
                        ),
                        "GET /api/learning/notes?page=0&size=5&query=React&feature=all",
                        "{\n  \"data\": [ ... ],\n  \"pageNumber\": 0,\n  \"pageSize\": 5,\n  \"totalCount\": 12,\n  \"totalPages\": 3\n}",
                        List.of("LearningLabController.getNotes", "LearningNotesPageResponse", "LearningLabService.getNotes"),
                        "切換搜尋關鍵字或主題 filter，觀察回來的 totalCount 與 data 是否一起改變。"
                ),
                new BackendLab(
                        "response-shaping",
                        "回應整理：把教學內容包成統一 JSON",
                        "後端不只是查資料，也會先整理成前端容易消化的結構。",
                        "GET",
                        "/api/learning/overview",
                        "當前端一次需要標題、lesson 摘要、名詞字典與提示時，用單一 response 會更好讀。",
                        List.of(
                                "Service 組出 LearningOverviewResponse。",
                                "每個區塊用 record 明確定義欄位。",
                                "Spring Boot 自動把 Java record 轉成 JSON。"
                        ),
                        "GET /api/learning/overview",
                        "{\n  \"title\": \"React + Spring Boot Learning Lab\",\n  \"lessons\": [ ... ],\n  \"glossaryTerms\": [ ... ]\n}",
                        List.of("LearningOverviewResponse", "LearningLabService.getOverview"),
                        "試著從 overview JSON 中指出哪幾個欄位是給新手導覽、哪幾個是給 lesson。"
                ),
                new BackendLab(
                        "service-flow",
                        "Controller / Service 分工：讓邏輯更好維護",
                        "Controller 專心接 HTTP，Service 專心整理資料與建立回應。",
                        "GET",
                        "/api/learning/backend-labs",
                        "當功能變多時，把規則都塞在 Controller 會很難維護，拆層會更清楚。",
                        List.of(
                                "Controller 提供 endpoint 路徑。",
                                "Service 回傳後端實作案例清單。",
                                "React 再把案例 render 成教學卡片。"
                        ),
                        "GET /api/learning/backend-labs",
                        "[\n  {\n    \"id\": \"validation\",\n    \"title\": \"表單驗證...\"\n  }\n]",
                        List.of("LearningLabController.getBackendLabs", "LearningLabService.getBackendLabs"),
                        "從前端 fetch 追到 Controller，再追到 Service，說出每層各自做了什麼。"
                ),
                new BackendLab(
                        "error-contract",
                        "錯誤格式統一：前端不再只收到零散錯誤字串",
                        "當驗證失敗或找不到資料時，後端會回傳統一的 ApiErrorResponse，前端比較容易顯示與除錯。",
                        "ANY",
                        "/api/learning/*",
                        "真實專案通常會把 status、code、message、fieldErrors 做成一致格式，減少前端判斷成本。",
                        List.of(
                                "ControllerAdvice 統一攔截例外。",
                                "MethodArgumentNotValidException 會轉成欄位錯誤列表。",
                                "ResponseStatusException 會被包成統一 JSON 錯誤格式。"
                        ),
                        "POST /api/learning/notes with invalid body",
                        "{\n  \"status\": 400,\n  \"code\": \"VALIDATION_ERROR\",\n  \"message\": \"請先修正欄位錯誤後再送出。\",\n  \"fieldErrors\": [ ... ]\n}",
                        List.of("GlobalExceptionHandler", "ApiErrorResponse", "ApiFieldError"),
                        "故意送錯欄位，觀察前端是否能穩定顯示統一錯誤訊息。"
                ),
                new BackendLab(
                        "stats",
                        "後端統計：把多份資料整理成摘要",
                        "後端可以根據現有資料計算出統計資訊，不一定每次都直接原樣回傳。",
                        "GET",
                        "/api/learning/stats",
                        "真實專案常需要 dashboard、摘要數字、活躍主題，這些通常都由後端整理。",
                        List.of(
                                "Service 根據 lessons、notes、glossary、components 計算統計數。",
                                "把統計結果包成專門的 response record。",
                                "前端可以直接渲染摘要卡，不必自己重新計算所有資料。"
                        ),
                        "GET /api/learning/stats",
                        "{\n  \"lessonCount\": 5,\n  \"noteCount\": 2,\n  \"hookCount\": 5,\n  \"backendCapabilities\": [\"GET /overview\", \"POST /notes\", \"PUT /notes/{id}\"]\n}",
                        List.of("LearningLabController.getStats", "LearningStatsResponse", "LearningLabService.getStats"),
                        "按下 stats 預覽後，看看 noteCount 為什麼會跟著新增筆記而改變。"
                ),
                new BackendLab(
                        "delete-flow",
                        "刪除流程：先確認存在，再回 204",
                        "DELETE 不是直接砍資料就好，通常會先確認資料存在，成功後回 204 No Content。",
                        "DELETE",
                        "/api/learning/notes/{id}",
                        "如果刪除不存在的資料還回成功，前端會以為有刪到，造成資料不同步。",
                        List.of(
                                "Controller 用 `@PathVariable` 接住網址上的 id。",
                                "Service 先確認該 id 的 note 存在，不存在就丟 404。",
                                "刪除成功後回 `204 No Content`，代表成功但沒有內容需要回傳。"
                        ),
                        "DELETE /api/learning/notes/3",
                        "HTTP/1.1 204 No Content\n(刪除成功時沒有 response body)",
                        List.of("LearningLabController.deleteNote", "LearningLabService.deleteNote", "InMemoryLearningNoteRepository.deleteById"),
                        "先刪一筆存在的 note 觀察 204，再刪同一筆觀察 404 錯誤格式。"
                ),
                new BackendLab(
                        "dto-mapping",
                        "DTO 轉換：Request、Entity、Response 為什麼要分開",
                        "前端送進來的格式、系統內部的格式、回給前端的格式，三者分開才不會互相綁死。",
                        "POST",
                        "/api/learning/notes",
                        "如果 API 直接吐內部 entity，之後想改內部欄位就會直接弄壞前端。",
                        List.of(
                                "Controller 收到 JSON 後先轉成 `LearningNoteRequest`。",
                                "Mapper 把 request + 新 id + 建立時間組成 `LearningNote`。",
                                "存檔後再由 Mapper 轉成 `LearningNoteResponse` 回給前端。"
                        ),
                        "{\n  \"learnerName\": \"小賀\",\n  \"feature\": \"DTO 轉換\",\n  \"question\": \"為什麼不直接回傳 entity?\"\n}",
                        "{\n  \"id\": 4,\n  \"learnerName\": \"小賀\",\n  \"feature\": \"DTO 轉換\",\n  \"question\": \"為什麼不直接回傳 entity?\",\n  \"createdAt\": \"2026-08-18T09:00:00Z\"\n}",
                        List.of("LearningNoteRequest", "LearningNoteMapper.toNewEntity", "LearningNoteMapper.toResponse"),
                        "打開 LearningNoteMapper，找出 trim() 在哪裡發生，想想為什麼要在後端做。"
                )
        );
    }

    public LearningStatsResponse getStats() {
        return new LearningStatsResponse(
                5,
                (int) learningNoteRepository.count(),
                8,
                4,
                5,
                List.of(
                        "GET /api/learning/overview",
                        "GET /api/learning/notes?page=0&size=5&query=&feature=all",
                        "GET /api/learning/notes/{id}",
                        "POST /api/learning/notes",
                        "PUT /api/learning/notes/{id}",
                        "DELETE /api/learning/notes/{id}",
                        "GET /api/learning/backend-labs",
                        "GET /api/learning/stats"
                )
        );
    }

    private LearningNote findNoteOrThrow(long id, String message) {
        return learningNoteRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, message));
    }

    private boolean containsIgnoreCase(String source, String keyword) {
        return source != null && source.toLowerCase(Locale.ROOT).contains(keyword);
    }
}





