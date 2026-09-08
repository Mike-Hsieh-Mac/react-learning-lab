// Java 基礎概念小測驗與程式碼導讀任務資料。
// 對應 05B「Java 新手基礎導讀」：答對概念測驗才會解鎖下一個概念。

export const javaConceptQuizzes = {
  'class-object': {
    question: 'LearningLabService.java 裡的方法與欄位，都寫在哪裡面？',
    options: [
      { id: 'a', label: '直接寫在檔案最外層，跟 JS 檔案一樣' },
      { id: 'b', label: '寫在 public class LearningLabService { ... } 裡面' },
      { id: 'c', label: '寫在一個叫 main 的特殊資料夾裡' },
    ],
    correctOptionId: 'b',
    explanation: 'Java 所有程式碼都必須住在 class 裡，這是它跟 JS 最大的差異之一。',
  },
  'method-signature': {
    question: '看到 public void deleteNote(long id)，這個方法會回傳什麼？',
    options: [
      { id: 'a', label: '回傳被刪除的那筆 note' },
      { id: 'b', label: '回傳 true 或 false' },
      { id: 'c', label: '不回傳任何內容，void 就是「沒有回傳值」' },
    ],
    correctOptionId: 'c',
    explanation: 'void 表示這個方法做完事就結束，不會交回任何資料。',
  },
  'record-dto': {
    question: 'record 做出來的物件（例如 LearningNoteResponse），建立之後欄位可以再修改嗎？',
    options: [
      { id: 'a', label: '可以，跟一般 JS 物件一樣隨時能改' },
      { id: 'b', label: '不行，record 是不可變的，欄位建立後就固定了' },
      { id: 'c', label: '只有 id 欄位不能改，其他都可以' },
    ],
    correctOptionId: 'b',
    explanation: 'record 建立後欄位不可變，想要「更新」就是重新做一個新的 record。',
  },
  annotation: {
    question: '@PostMapping("/notes") 放在方法上面的作用是？',
    options: [
      { id: 'a', label: '只是給人看的註釋，程式不會理它' },
      { id: 'b', label: '讓這個方法對應 POST /api/learning/notes 這個請求' },
      { id: 'c', label: '把這個方法變成私有方法' },
    ],
    correctOptionId: 'b',
    explanation: 'annotation 是給 Spring 看的設定，@PostMapping 就是把 HTTP 請求接到這個方法。',
  },
  'access-modifier': {
    question: 'private final LearningNoteRepository learningNoteRepository 代表什麼？',
    options: [
      { id: 'a', label: '只有這個 class 內能使用它，而且不能再換成別的物件' },
      { id: 'b', label: '任何 class 都可以直接拿去用' },
      { id: 'c', label: '這個欄位是暫時的，程式跑完就會消失' },
    ],
    correctOptionId: 'a',
    explanation: 'private 是限制存取範圍，final 是指定之後不能再重新指派。',
  },
  collections: {
    question: 'List<LearningNote> 裡的 <LearningNote> 是什麼意思？',
    options: [
      { id: 'a', label: '這個清單的名字叫 LearningNote' },
      { id: 'b', label: '限制這個清單只能裝 LearningNote 這種型別的資料' },
      { id: 'c', label: '這個清單最多只能裝一筆資料' },
    ],
    correctOptionId: 'b',
    explanation: '這叫泛型：List<T> 會限制清單內容的型別，JS 的陣列則什麼都能裝。',
  },
  stream: {
    question: 'notes.stream().filter(note -> note.feature().contains(keyword)) 裡的 filter 在做什麼？',
    options: [
      { id: 'a', label: '把每一筆 note 都改成新的內容' },
      { id: 'b', label: '把清單排序' },
      { id: 'c', label: '只留下符合條件的資料，其他的過濾掉' },
    ],
    correctOptionId: 'c',
    explanation: '跟 JS 陣列的 filter 一樣：條件成立的留下，不成立的丟掉。',
  },
  exception: {
    question: 'findById(id).orElseThrow(...) 什麼時候會真的丟出例外？',
    options: [
      { id: 'a', label: '每次呼叫都會丟' },
      { id: 'b', label: '只有找不到該 id 的資料時才會丟' },
      { id: 'c', label: '只有資料庫壞掉時才會丟' },
    ],
    correctOptionId: 'b',
    explanation: 'orElseThrow 是「有資料就給我，沒有就丟例外」，這就是 404 JSON 的來源。',
  },
  'constructor-injection': {
    question: 'LearningLabService 用的 repository 是怎麼來的？',
    options: [
      { id: 'a', label: '在方法裡自己 new 一個出來' },
      { id: 'b', label: '從全域變數直接拿' },
      { id: 'c', label: '由建構子從外面收進來（依賴注入）' },
    ],
    correctOptionId: 'c',
    explanation: '需要的工具從建構子收進來，之後測試時就能換成假的實作，這是 Spring 的核心習慣。',
  },
}

export const javaCodeReadingChallenges = [
  {
    id: 'reading-create-note',
    title: '導讀任務 1：createNote 每一行在做什麼',
    intro: '這段程式碼直接取自 LearningLabService.java 的新增筆記方法，替每一行選出正確的解釋。',
    codeLines: [
      {
        id: 'line-signature',
        code: 'public LearningNoteResponse createNote(LearningNoteRequest request) {',
        options: [
          { id: 'a', label: '宣告一個公開方法：吃前端的 request，回傳 response 格式' },
          { id: 'b', label: '建立一個新的 class' },
          { id: 'c', label: '直接把 request 存進資料庫' },
        ],
        correctOptionId: 'a',
      },
      {
        id: 'line-mapper',
        code: '    LearningNote note = learningNoteMapper.toNewEntity(',
        options: [
          { id: 'a', label: '把 note 回傳給前端' },
          { id: 'b', label: '請 Mapper 把 request 轉成系統內部的 LearningNote' },
          { id: 'c', label: '檢查 request 的欄位有沒有填' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'line-next-id',
        code: '            learningNoteRepository.nextId(),',
        options: [
          { id: 'a', label: '跟 repository 要一個還沒被使用的新 id' },
          { id: 'b', label: '查詢最後一筆 note 的內容' },
          { id: 'c', label: '刪掉舊的 id' },
        ],
        correctOptionId: 'a',
      },
      {
        id: 'line-instant',
        code: '            Instant.now()',
        options: [
          { id: 'a', label: '等待一秒鐘再繼續' },
          { id: 'b', label: '讀取前端傳來的時間' },
          { id: 'c', label: '由後端自己產生目前時間，當作建立時間' },
        ],
        correctOptionId: 'c',
      },
      {
        id: 'line-save-return',
        code: '    return learningNoteMapper.toResponse(learningNoteRepository.save(note))',
        options: [
          { id: 'a', label: '先存檔，再把存好的資料轉成 response 格式回傳' },
          { id: 'b', label: '先回傳，再慢慢存檔' },
          { id: 'c', label: '把資料印在後端的 console' },
        ],
        correctOptionId: 'a',
      },
    ],
  },
  {
    id: 'reading-get-note',
    title: '導讀任務 2：getNote 怎麼處理「找不到」',
    intro: '這段是查單筆筆記的流程，重點是看懂找不到資料時 404 怎麼發生。',
    codeLines: [
      {
        id: 'line-get-signature',
        code: 'public LearningNoteResponse getNote(long id) {',
        options: [
          { id: 'a', label: '宣告公開方法：用 id 查一筆資料並回傳 response' },
          { id: 'b', label: '建立一筆新的 note' },
          { id: 'c', label: '刪除指定 id 的 note' },
        ],
        correctOptionId: 'a',
      },
      {
        id: 'line-find',
        code: '    return learningNoteRepository.findById(id)',
        options: [
          { id: 'a', label: '把 id 存進資料庫' },
          { id: 'b', label: '請 repository 找這個 id 的資料，結果可能有、可能沒有' },
          { id: 'c', label: '一定會拿到資料，不可能失敗' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'line-map-response',
        code: '            .map(learningNoteMapper::toResponse)',
        options: [
          { id: 'a', label: '如果有找到資料，就把它轉成回給前端的格式' },
          { id: 'b', label: '把資料畫成一張地圖' },
          { id: 'c', label: '把資料複製一份備份' },
        ],
        correctOptionId: 'a',
      },
      {
        id: 'line-or-else-throw',
        code: '            .orElseThrow(() -> new ResponseStatusException(',
        options: [
          { id: 'a', label: '不管有沒有找到都丟出錯誤' },
          { id: 'b', label: '找不到資料時，丟出一個帶狀態碼的例外' },
          { id: 'c', label: '重新查詢一次資料庫' },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'line-not-found',
        code: '                    HttpStatus.NOT_FOUND, "找不到指定的學習筆記: " + id))',
        options: [
          { id: 'a', label: '指定這個錯誤是 500 伺服器錯誤' },
          { id: 'b', label: '把錯誤寫進log檔就結束' },
          { id: 'c', label: '指定錯誤是 404，並附上給前端看的訊息' },
        ],
        correctOptionId: 'c',
      },
    ],
  },
]

