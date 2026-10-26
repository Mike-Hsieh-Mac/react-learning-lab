export const fallbackArchitectureSteps = [
  '使用者先在 React 畫面操作按鈕或輸入欄位。',
  'React 透過 useState 保存畫面狀態，狀態改變就重新渲染。',
  '當畫面邏輯變複雜時，React 會搭配 useEffect、useMemo、useCallback、useRef 等 hooks。',
  '需要後端資料時，前端呼叫 /api/learning/* API。',
  'Spring Boot Controller 接收請求並交給 Service 處理。',
  'Service 會整理教學內容、驗證規則與回應資料，最後由 Spring Boot 自動轉成 JSON。',
]

export const fallbackTips = [
  '先觀察互動，再對照程式碼，會比較容易理解。',
  '注意每個按鈕觸發的是哪一個事件處理函式。',
  '留意事件紀錄區，理解資料是如何在前後端之間流動。',
  '如果不知道去哪裡找，先看「程式碼定位導航」再搜尋 symbol。',
  '看到 hook 時，先問自己：它是在保存資料、處理副作用，還是在優化效能？',
  '看到後端 endpoint 時，先分清楚這一層是在接請求、做驗證，還是整理回應。',
]

export const fallbackGettingStartedSteps = [
  {
    id: 'map-1',
    title: '先理解學習地圖',
    explanation:
      '先認識這個頁面的幾個區塊：新手導覽、名詞字典、常用組件練習、完整 lesson、程式碼定位、可編輯實驗室。',
    whyItMatters: '當你知道每個區塊在教什麼，閱讀程式碼時就比較不會迷路。',
  },
  {
    id: 'map-2',
    title: '先學畫面怎麼動',
    explanation: '先從按鈕、輸入框、清單、條件顯示開始，理解 React 怎麼讓畫面跟著資料改變。',
    whyItMatters: '新人通常不是先卡在 API，而是先卡在畫面為什麼會變。',
  },
  {
    id: 'map-3',
    title: '再學資料怎麼送',
      explanation: '當你知道畫面怎麼更新後，再理解常用 hooks、表單 state、fetch 與後端 API。',
    whyItMatters: '這一步會把前端互動與後端資料流真正串起來。',
  },
  {
    id: 'map-4',
    title: '最後回頭定位程式碼',
    explanation: '看完畫面與互動後，再依照檔案路徑、symbol 與搜尋關鍵字，回到實際程式碼中對照。',
    whyItMatters: '你會知道每段程式碼的角色，而不是只背語法。',
  },
]

export const fallbackGlossaryTerms = [
  {
    term: 'JSX',
    plainMeaning: 'React 用來描述畫面的語法，長得像 HTML，但其實是在 JavaScript 裡寫畫面。',
    reactExample: 'return <button>送出</button>',
    springExample: 'Spring Boot 不寫 JSX，它通常回傳資料給 React 顯示。',
  },
  {
    term: 'Component 元件',
    plainMeaning: '可以重複使用的畫面區塊，例如按鈕卡片、表單區塊、lesson 面板。',
    reactExample: 'function WelcomeCard() { return <section>Welcome</section> }',
    springExample: '後端常見的拆分角色則是 Controller / Service。',
  },
  {
    term: 'State 狀態',
    plainMeaning: '元件中會改變的資料，只要 state 變了，畫面就會跟著更新。',
    reactExample: 'const [count, setCount] = useState(0)',
    springExample: '後端不叫 state，但會根據請求去組出新的回應資料。',
  },
  {
    term: 'Hook',
    plainMeaning: 'React 提供的一組工具函式，讓函式元件也能保存狀態、處理副作用與重用邏輯。',
    reactExample: 'useState、useEffect、useMemo、useCallback 都是常見 hooks。',
    springExample: '後端沒有 hook，但會透過方法拆分、Service 注入等方式重用邏輯。',
  },
  {
    term: 'Props',
    plainMeaning: '父元件傳給子元件的資料，讓元件之間能協作。',
    reactExample: '<LessonCard title={lesson.title} />',
    springExample: '像是 Service 把結果交給 Controller，再由 Controller 回傳給前端。',
  },
  {
    term: 'API',
    plainMeaning: '前端向後端拿資料或送資料的入口。',
    reactExample: "fetch('/api/learning/overview')",
    springExample: '@GetMapping("/overview") 會定義一個 API 路徑。',
  },
  {
    term: 'JSON',
    plainMeaning: '前後端最常用來交換資料的格式。',
    reactExample: "{ title: 'React State 入門' }",
    springExample: 'Spring Boot 會把 Java record 自動轉成 JSON。',
  },
  {
    term: 'Controller / Service',
    plainMeaning: 'Controller 接請求，Service 負責邏輯與資料整理。',
    reactExample: 'React 只負責畫面與互動，不負責後端商業邏輯。',
    springExample: 'Controller 呼叫 Service，再把結果回傳給前端。',
  },
]

export const fallbackComponentGuides = [
  {
    id: 'button',
    name: 'Button 按鈕',
    useCase: '當你要讓使用者觸發一個動作時，例如加一、送出表單、重新整理資料。',
    syntaxPoints: [
      'button 元素通常搭配 onClick。',
      '按鈕文案要清楚說明這次點擊會做什麼。',
      '點擊後通常會改變 state 或呼叫 API。',
    ],
    reactSnippet: '<button type="button" onClick={handleIncrement}>Count +1</button>',
    learnerTask: '請找出這個頁面中每一個按鈕背後綁定的函式。',
  },
  {
    id: 'input',
    name: 'Input 輸入框',
    useCase: '當你需要讓使用者輸入名字、留言、搜尋關鍵字時。',
    syntaxPoints: [
      'value 代表輸入框顯示的值。',
      'onChange 負責把使用者輸入同步回 state。',
      '這種寫法叫做 controlled component。',
    ],
    reactSnippet:
      '<input name="learnerName" value={form.learnerName} onChange={handleInputChange} />',
    learnerTask: '請輸入內容，觀察畫面如何立刻反映目前的 state。',
  },
  {
    id: 'props',
    name: 'Props 傳值',
    useCase: '當父元件要把資料、顯示設定或事件函式交給子元件時。',
    syntaxPoints: [
      'props 是父元件傳給子元件的輸入資料。',
      '子元件可以讀 props，但不應直接修改它。',
      '除了文字，也可以傳布林值、陣列、物件與函式。',
    ],
    reactSnippet: '<WelcomeCard learnerName={learnerName} topic="React Props" onRetry={handleRetry} />',
    learnerTask: '請改一個 props 值，觀察子元件畫面如何立刻跟著更新。',
  },
  {
    id: 'list',
    name: 'List 清單',
    useCase: '當你要顯示多筆資料時，例如 lesson 清單、學習筆記、待辦事項。',
    syntaxPoints: [
      '陣列常搭配 map() 轉成多個 JSX。',
      '每一筆資料都要有穩定的 key。',
      '資料通常來自 state 或 API 回應。',
    ],
    reactSnippet: '{notes.map((note) => <article key={note.id}>{note.question}</article>)}',
    learnerTask: '試著追蹤 notes 清單是如何從 API 回應變成畫面卡片。',
  },
  {
    id: 'conditional',
    name: 'Conditional Rendering 條件渲染',
    useCase: '當某段畫面只在特定條件下顯示時，例如 loading、error 或空資料提示。',
    syntaxPoints: [
      'condition ? A : B 可以顯示兩種不同內容。',
      'condition && A 可以在條件成立時才顯示某區塊。',
      '這是動態畫面非常常見的能力。',
    ],
    reactSnippet: '{error ? <div className="error-banner">{error}</div> : null}',
    learnerTask: '請找出這個頁面哪些區塊是「有條件才會出現」的。',
  },
]

export const quickWinTasks = [
  {
    id: 'quick-counter',
    title: '1 分鐘：讓畫面動起來',
    action: '按一次 Count +1，再按 Reset。',
    concept: '理解 state 改變會帶動畫面更新。',
  },
  {
    id: 'quick-props-pass',
    title: '2 分鐘：把資料傳給子元件',
    action: '到 props lesson 改一個 learnerName 或 topic，觀察子元件卡片立刻更新。',
    concept: '理解 props 是父元件往子元件傳資料的通道。',
  },
  {
    id: 'quick-hook-focus',
    title: '2 分鐘：感受 useRef',
    action: '到 hooks 工具箱按一次「聚焦 hooks 搜尋框」。',
    concept: '理解不是所有互動都要靠 state。',
  },
  {
    id: 'quick-post-note',
    title: '3 分鐘：送一筆資料到後端',
    action: '在表單區輸入名字與問題，送出一筆 learning note。',
    concept: '理解 React form state -> fetch -> Spring Boot 的流程。',
  },
  {
    id: 'quick-filter',
    title: '3 分鐘：操作真實列表 API',
    action: '在 notes 區輸入搜尋條件或切換 feature filter。',
    concept: '理解真實專案常見的搜尋、filter、分頁。',
  },
]

export const brokenCodeExercises = [
  {
    id: 'broken-state-setter',
    title: '修正 state 沒更新的 counter',
    difficulty: '新手 1 星',
    category: 'state',
    unlockLessonId: 'state',
    unlockLessonTitle: 'React State 入門',
    repairGoal: '把一般變數修改改成 React setter，讓畫面能重新渲染。',
    brokenCode: `function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    count = count + 1 // ❌ 問題在這裡
  }

  return <button onClick={handleClick}>+1</button>
}`,
    fixes: [
      {
        id: 'state-fix-a',
        label: '改成 setCount((current) => current + 1)',
        isCorrect: true,
        explanation: 'React 只會追蹤 state setter，直接改變變數不會觸發重新渲染。',
      },
      {
        id: 'state-fix-b',
        label: '改成 count++',
        isCorrect: false,
        explanation: 'count++ 一樣只是改一般變數，React 不知道要重新 render。',
      },
    ],
    whyItFails: '因為 React 需要透過 setter 才知道 state 變了。',
    learningPoint: '看到「畫面沒更新」時，先檢查是不是正確呼叫 setter。',
    hints: ['先問自己：這裡改的是 state 還是一般變數？', '搜尋 setCount。'],
    repairSuccessHint: '你應該要看到 `setCount(...)`，而不是直接改 `count`。',
  },
  {
    id: 'broken-props-passing',
    title: '修正子元件拿不到 props 的 WelcomeCard',
    difficulty: '新手 1 星',
    category: 'props',
    unlockLessonId: 'props',
    unlockLessonTitle: 'Props 傳值與元件拆分',
    repairGoal: '把父元件的資料正確傳給子元件，讓 WelcomeCard 顯示名稱。',
    brokenCode: `function App() {
  const learnerName = '小美'

  return <WelcomeCard />
}

function WelcomeCard({ learnerName }) {
  return <h3>你好，{learnerName}</h3>
}`,
    fixes: [
      {
        id: 'props-fix-a',
        label: '改成 <WelcomeCard learnerName={learnerName} />',
        isCorrect: true,
        explanation: '父元件必須真的把資料傳出去，子元件才接得到。',
      },
      {
        id: 'props-fix-b',
        label: '只把畫面文字改成「你好，React」',
        isCorrect: false,
        explanation: '這只是硬寫死畫面，沒有真正修好父元件 -> 子元件的傳值。',
      },
    ],
    whyItFails: '子元件雖然有解構 props，但父元件根本沒有把 learnerName 傳進來。',
    learningPoint: '看到子元件畫面是空的時，要同時檢查 JSX 傳值與子元件接收名稱是否一致。',
    hints: ['先看 <WelcomeCard /> 這一行有沒有帶 props。', '再確認子元件解構的名稱是不是 learnerName。'],
    repairSuccessHint: '修好後，至少要看到 <WelcomeCard learnerName={learnerName} /> 這段。',
  },
  {
    id: 'broken-input-onchange',
    title: '修正不能輸入的 controlled input',
    difficulty: '新手 1 星',
    category: 'form',
    unlockLessonId: 'form',
    unlockLessonTitle: '表單控制與資料送出',
    repairGoal: '補上 controlled component 缺少的 onChange，讓 React 能接住輸入。',
    brokenCode: `<input
  name="learnerName"
  value={form.learnerName}
  placeholder="例如：小美"
  // ❌ 少了 onChange
/>`,
    fixes: [
      {
        id: 'input-fix-a',
        label: '加上 onChange={handleInputChange}',
        isCorrect: true,
        explanation: 'controlled component 需要 value + onChange 這一組，少一個都不完整。',
      },
      {
        id: 'input-fix-b',
        label: '把 placeholder 改得更長一點',
        isCorrect: false,
        explanation: 'placeholder 只影響提示文字，不會讓 React 知道輸入內容。',
      },
    ],
    whyItFails: '因為 value 已經交給 React 控制，但你沒有告訴 React 怎麼接收新輸入。',
    learningPoint: '看到不能輸入的 input，先檢查有沒有 onChange。',
    hints: ['想想 controlled component 的兩個核心屬性是什麼。', '看看其他成功的 input 怎麼寫。'],
    repairSuccessHint: '成功版本要同時出現 `value={...}` 與 `onChange={handleInputChange}`。',
  },
  {
    id: 'broken-form-submit',
    title: '修正送出表單後整頁重整',
    difficulty: '新手 2 星',
    category: 'form',
    unlockLessonId: 'form',
    unlockLessonTitle: '表單控制與資料送出',
    repairGoal: '在 submit 流程最前面阻止瀏覽器預設送出。',
    brokenCode: `async function handleSubmit(event) {
  // ❌ 少了 event.preventDefault()
  const response = await fetch('/api/learning/notes', {
    method: 'POST',
    body: JSON.stringify(form),
  })
}`,
    fixes: [
      {
        id: 'submit-fix-a',
        label: '在最前面加上 event.preventDefault()',
        isCorrect: true,
        explanation: '這樣可以阻止瀏覽器的預設表單送出刷新。',
      },
      {
        id: 'submit-fix-b',
        label: '把 method 改成 GET',
        isCorrect: false,
        explanation: '問題不在 HTTP method，而是瀏覽器預設送出行為沒有被阻止。',
      },
    ],
    whyItFails: '因為瀏覽器對 form 有預設 submit 行為，沒有阻止就會刷新頁面。',
    learningPoint: '表單一送出就重整，第一個先找 preventDefault。',
    hints: ['先想想誰讓頁面刷新的。', '搜尋 handleSubmit。'],
    repairSuccessHint: '成功版本通常會在 handleSubmit 開頭先出現 `event.preventDefault()`。',
  },
  {
    id: 'broken-api-path',
    title: '修正打錯的 API 路徑',
    difficulty: '新手 2 星',
    category: 'api',
    unlockLessonId: 'api',
    unlockLessonTitle: 'API 資料流',
    repairGoal: '讓前端 fetch path 對上後端 Controller 路徑。',
    brokenCode: `const response = await fetch('/api/learn/notes') // ❌ path 打錯了`,
    fixes: [
      {
        id: 'api-fix-a',
        label: "改成 fetch('/api/learning/notes')",
        isCorrect: true,
        explanation: '404 很常是因為 endpoint path 打錯，前後端路徑不一致。',
      },
      {
        id: 'api-fix-b',
        label: '把 response.json() 刪掉',
        isCorrect: false,
        explanation: '404 發生在路徑找不到，和 JSON 解析無關。',
      },
    ],
    whyItFails: '前端 fetch path 沒有對到後端 Controller 的路徑，所以 API 找不到。',
    learningPoint: '看到 404 時，先比對 fetch path 與 @GetMapping / @PostMapping。',
    hints: ['先去 Controller 看真正的 endpoint。', '搜尋 @GetMapping("/notes")。'],
    repairSuccessHint: '成功版本應該要對上 `/api/learning/notes`。',
  },
]

export const reactHookGuides = [
  {
    id: 'hook-state',
    hook: 'useState',
    isUsedInProject: true,
    summary: '保存會改變的畫面資料，是新人最先接觸的 hook。',
    useCase: 'counter、表單欄位、loading、錯誤訊息、目前選到哪一課。',
    projectExample: '這個專案用它管理 `count`、`form`、`notes`、`selectedLessonId`。',
    beginnerQuestion: '當你想讓畫面記住一個會改變的值時，就先想到 `useState`。',
    everydayScenario: '例如你在做 Counter，按一下按鈕後，數字要真的留在畫面上，不是下一次 render 又消失。',
    exampleTitle: '範例：記住目前學習次數',
    exampleCode: `const [count, setCount] = useState(0)

function handleIncrement() {
  setCount((current) => current + 1)
}

return <button onClick={handleIncrement}>Count +1（{count}）</button>`,
    visibleOutcome: '每按一次按鈕，畫面上的 count 都會立即更新。',
    useItWhen: '畫面上有一個值會跟著使用者操作改變，而且你希望 React 幫你重新渲染。',
    avoidItWhen: '如果只是想拿到 DOM 元素或保存不需要重畫的值，應該改想 `useRef`。',
    formatGuide: {
      title: '把 `const [count, setCount] = useState(0)` 拆開看',
      signature: 'const [count, setCount] = useState(0)',
      parts: [
        {
          label: '`count`',
          meaning: '目前的 state 值。畫面通常直接讀它，例如 `{count}`。',
        },
        {
          label: '`setCount`',
          meaning: '更新 state 的 setter。你要通知 React 重畫畫面時，就是呼叫它。',
        },
        {
          label: '`useState(0)`',
          meaning: '建立一份初始值為 `0` 的 state。第一次 render 時，count 會先是 0。',
        },
        {
          label: '`[count, setCount]`',
          meaning: '陣列解構：左邊拿目前值，右邊拿更新函式，兩個通常一起出現。',
        },
      ],
      usageSteps: [
        'React 先建立一份 state，初始值是 `0`。',
        '畫面 render 時讀取 `count`，所以畫面會先顯示 0。',
        '當你呼叫 `setCount(...)`，React 會安排重新 render。',
        '重新 render 後，畫面改讀新的 `count` 值。',
      ],
      patternModes: [
        {
          pattern: 'const [count, setCount] = useState(0)',
          timing: '最基本的數字 state',
          bestFor: 'Counter、數量、索引。',
        },
        {
          pattern: "const [name, setName] = useState('')",
          timing: '字串 state',
          bestFor: 'input、搜尋字、標題。',
        },
        {
          pattern: 'const [form, setForm] = useState({ learnerName: "" })',
          timing: '物件 state',
          bestFor: '表單、多欄位資料。',
        },
      ],
    },
    syntaxSnippet: 'const [count, setCount] = useState(0)',
    beginnerPitfall: '直接改變一般變數，React 不知道你改了什麼，就不會更新畫面。',
    searchHint: '搜尋 `useState(`、`setCount`、`setForm`。',
    jumpTarget: { lessonId: 'state', syncMvpLesson: true, sectionKey: 'practice', logMessage: '已前往 state lesson，對照 useState 的真實互動。' },
  },
  {
    id: 'hook-effect',
    hook: 'useEffect',
    isUsedInProject: true,
    summary: '處理副作用，例如初次載入資料、訂閱、計時器、清理邏輯。',
    useCase: '頁面打開後先抓 API，或在某個條件改變時同步外部世界。',
    projectExample: '這個專案用 `useEffect` 在一載入畫面時執行 `loadOverview()` 與 `loadNotes()`。',
    beginnerQuestion: '當你想在畫面出現後，自動做一件事時，就要想 `useEffect`。',
    everydayScenario: '例如頁面一打開就先去後端抓 overview 與 notes，這種不是按鈕點擊當下直接 render 的事，就是副作用。',
    exampleTitle: '範例：頁面一打開就抓資料',
    exampleCode: `useEffect(() => {
  loadOverview()
  loadNotes()
}, [])`,
    visibleOutcome: '使用者一進頁面，不用先按按鈕，也能先看到 API 資料。',
    useItWhen: '你要在 render 之後做外部操作，例如抓 API、設定計時器、監聽事件。',
    avoidItWhen: '如果只是根據現有 state 算一個值，先想 `useMemo`，不要把純計算塞進 effect。',
    formatGuide: {
      title: '把 `useEffect(() => {}, [])` 拆開看',
      signature: 'useEffect(() => { /* callback 內容 */ }, [])',
      parts: [
        {
          label: '`useEffect(`',
          meaning: '告訴 React：這裡有一段「render 完之後才做」的副作用邏輯。',
        },
        {
          label: '`() => { ... }`',
          meaning: '這一段就是 callback。React 不會在你寫到這行時立刻做，而是等畫面 render 完後再呼叫它。',
        },
        {
          label: '`{ ... }` 裡面',
          meaning: '放真正要執行的副作用，例如 `fetch()`、`console.log()`、`setInterval()`、`addEventListener()`。',
        },
        {
          label: '`return () => { ... }`',
          meaning: '這是可選的 cleanup function，用來清掉計時器、移除監聽、取消訂閱。',
        },
        {
          label: '`, []`',
          meaning: '依賴陣列。空陣列代表第一次 render 完後跑一次；不是完全「只跑一次」，而是 mount 後執行。',
        },
      ],
      usageSteps: [
        'React 先把畫面 render 出來。',
        'render 完後，React 呼叫 `() => { ... }` 這個 callback。',
        'callback 裡的副作用開始執行，例如呼叫 API。',
        '如果 callback 有回傳 `return () => { ... }`，React 會在下一次 effect 前或元件卸載時先做 cleanup。',
      ],
      patternModes: [
        {
          pattern: 'useEffect(() => { ... })',
          timing: '每次 render 完後都會執行',
          bestFor: '很少見的新手情境，通常不會先從這種開始。',
        },
        {
          pattern: 'useEffect(() => { ... }, [])',
          timing: '第一次 render 完後執行',
          bestFor: '頁面初始化，例如一打開先抓資料。',
        },
        {
          pattern: 'useEffect(() => { ... }, [keyword])',
          timing: '第一次 render 後執行，之後每次 `keyword` 改變再執行',
          bestFor: '某個值改變時，想同步做副作用。',
        },
      ],
    },
    syntaxSnippet: 'useEffect(() => { loadOverview(); loadNotes() }, [])',
    beginnerPitfall: '把所有邏輯都塞進 useEffect，或不知道 dependency array 為什麼會影響觸發時機。',
    searchHint: '搜尋 `useEffect(() =>`、`bootstrap`。',
    jumpTarget: { lessonId: 'api', syncMvpLesson: true, sectionKey: 'practice', logMessage: '已前往 API lesson，對照 useEffect 如何載入資料。' },
  },
  {
    id: 'hook-memo',
    hook: 'useMemo',
    isUsedInProject: true,
    summary: '記住計算結果，避免每次 render 都重新做同樣的資料整理。',
    useCase: '過濾清單、整理大量資料、從 API 資料推導出畫面摘要。',
    projectExample: '這個專案用它整理 `lessons`，並在 hooks 區依關鍵字過濾 hook 卡片。',
    beginnerQuestion: '當你是「根據某個輸入重新算結果」而不是保存資料時，就想 `useMemo`。',
    everydayScenario: '例如 hooks 搜尋框輸入關鍵字後，要重新篩選卡片，但不想每次 render 都重跑一堆整理邏輯。',
    exampleTitle: '範例：根據搜尋字篩選 hook 卡片',
    exampleCode: `const filteredHookGuides = useMemo(() => {
  const keyword = hookKeyword.trim().toLowerCase()
  if (!keyword) return reactHookGuides

  return reactHookGuides.filter((guide) =>
    [guide.hook, guide.summary].join(' ').toLowerCase().includes(keyword),
  )
}, [hookKeyword])`,
    visibleOutcome: '你每次輸入搜尋字，畫面只顯示符合條件的 hooks 卡片。',
    useItWhen: '你已經有原始資料，現在只是想根據某個條件整理出新結果。',
    avoidItWhen: '如果資料本身要被使用者改動，還是先用 `useState` 保存原始值。',
    formatGuide: {
      title: '把 `const result = useMemo(() => ..., [deps])` 拆開看',
      signature: 'const filtered = useMemo(() => { /* 計算結果 */ }, [keyword])',
      parts: [
        {
          label: '`filtered`',
          meaning: '整理完之後的結果。這不是新的 state，而是算出來的值。',
        },
        {
          label: '`useMemo(`',
          meaning: '告訴 React：這裡有一段可記住結果的計算。',
        },
        {
          label: '`() => { ... }`',
          meaning: '這是一個計算函式。React 會在依賴改變時重新執行它，拿到新的結果。',
        },
        {
          label: '`[keyword]`',
          meaning: '依賴陣列。只有 `keyword` 改變時，才需要重新計算。',
        },
      ],
      usageSteps: [
        'React 先看目前依賴值，例如 `keyword`。',
        '如果依賴沒變，就重用上一次的計算結果。',
        '如果依賴變了，才重新執行 `() => { ... }`。',
        '畫面最後讀到的是計算後的結果，不是原始資料。',
      ],
      patternModes: [
        {
          pattern: 'const filtered = useMemo(() => filterList(items, keyword), [items, keyword])',
          timing: '依據多個依賴重算',
          bestFor: '清單篩選、搜尋結果整理。',
        },
        {
          pattern: 'const stats = useMemo(() => buildStats(data), [data])',
          timing: '資料改變時重算摘要',
          bestFor: '摘要卡、統計資訊。',
        },
      ],
    },
    syntaxSnippet: 'const lessons = useMemo(() => source.map(...), [overview])',
    beginnerPitfall: '太早優化，或把它當成 state 使用；它只是在記住「計算結果」。',
    searchHint: '搜尋 `useMemo(`、`filteredHookGuides`。',
    jumpTarget: { sectionKey: 'hooks', logMessage: '已定位到 hooks 工具箱，可直接用搜尋框觀察 useMemo 效果。' },
  },
  {
    id: 'hook-callback',
    hook: 'useCallback',
    isUsedInProject: true,
    summary: '記住函式本身，通常用在把 handler 傳下去或避免 effect 依賴一直改變。',
    useCase: '事件處理函式要被多處重用，或成為其他 hook 的依賴。',
    projectExample: '這個專案用它包住 `appendLog`、`loadOverview`、`loadNotes`、`handleRefresh`。',
    beginnerQuestion: '當你不是要記住資料，而是想讓「同一個函式參照」穩定下來時，才考慮 `useCallback`。',
    everydayScenario: '例如 `handleRefresh` 會被多個地方重用，或某個 `useEffect` 依賴了它，你不希望每次 render 都被當成新的函式。',
    exampleTitle: '範例：把重新整理函式保持穩定',
    exampleCode: `const handleRefresh = useCallback(async () => {
  setLoading(true)
  await Promise.all([loadOverview(), loadNotes()])
  setLoading(false)
}, [loadNotes, loadOverview])`,
    visibleOutcome: '當其他 hook 依賴這個函式時，不會因為每次 render 都產生新函式而變得難追。',
    useItWhen: '函式需要成為其他 hook 的依賴，或你很清楚自己要穩定函式參照。',
    avoidItWhen: '如果只是一般按鈕 handler，而且沒有依賴問題，不必一開始就用它。',
    formatGuide: {
      title: '把 `const fn = useCallback(() => ..., [deps])` 拆開看',
      signature: 'const handleRefresh = useCallback(() => { /* 函式內容 */ }, [loadNotes])',
      parts: [
        {
          label: '`handleRefresh`',
          meaning: '你最後得到的是一個函式參照，可以拿去按鈕事件、effect 依賴或傳給其他元件。',
        },
        {
          label: '`useCallback(`',
          meaning: '告訴 React：幫我把這個函式參照穩定下來。',
        },
        {
          label: '`() => { ... }`',
          meaning: '這就是函式本體。和一般 function 很像，只是外面多包一層 useCallback。',
        },
        {
          label: '`[loadNotes]`',
          meaning: '依賴陣列。只有依賴改變時，React 才需要換一個新的函式參照。',
        },
      ],
      usageSteps: [
        'React 先建立一個函式參照。',
        '只要依賴沒變，就沿用同一個函式參照。',
        '依賴改變後，才建立新的函式參照。',
        '這能幫助 effect 或子元件不用因為函式一直變而重跑或重算。',
      ],
      patternModes: [
        {
          pattern: 'const handleClick = useCallback(() => setOpen(true), [])',
          timing: '幾乎不依賴外部值',
          bestFor: '很簡單但需要穩定參照的 handler。',
        },
        {
          pattern: 'const handleRefresh = useCallback(() => loadNotes(keyword), [loadNotes, keyword])',
          timing: '依賴值改變時換新函式',
          bestFor: '函式會成為 effect 依賴或需要精準追蹤時。',
        },
      ],
    },
    syntaxSnippet: 'const appendLog = useCallback((type, message) => { ... }, [])',
    beginnerPitfall: '以為所有函式都必須 useCallback；其實只有在真的需要穩定參照時才用。',
    searchHint: '搜尋 `useCallback(`、`appendLog`。',
    jumpTarget: { lessonId: 'hooks', syncMvpLesson: false, sectionKey: 'code', codeTab: 'react', logMessage: '已前往 hooks 的 React 程式碼對照，查看 useCallback。' },
  },
  {
    id: 'hook-ref',
    hook: 'useRef',
    isUsedInProject: true,
    summary: '保存不需要觸發重新渲染的值，或直接指向 DOM 元素。',
    useCase: '讓輸入框取得焦點、記住上一次值、整合第三方套件。',
    projectExample: '這個專案會用 `useRef` 指向 hooks 搜尋輸入框，示範如何手動 focus。',
    beginnerQuestion: '當你想直接碰某個 input / DOM，或保存一個不需要重畫畫面的值時，就想 `useRef`。',
    everydayScenario: '例如你按下按鈕後，希望游標直接跳進 hooks 搜尋框，這種不是畫面資料，而是 DOM 操作。',
    exampleTitle: '範例：按一下按鈕就聚焦搜尋框',
    exampleCode: `const hookSearchInputRef = useRef(null)

function handleFocusHookSearch() {
  hookSearchInputRef.current?.focus()
}

return <input ref={hookSearchInputRef} />`,
    visibleOutcome: '按按鈕後，游標會立刻跳進輸入框，但不需要多一個 state。',
    useItWhen: '你想直接操作 DOM，或保存一個改變後不需要重新 render 的值。',
    avoidItWhen: '如果你希望值一改變畫面就更新，應該改想 `useState`。',
    formatGuide: {
      title: '把 `const ref = useRef(initialValue)` 拆開看',
      signature: 'const hookSearchInputRef = useRef(null)',
      parts: [
        {
          label: '`hookSearchInputRef`',
          meaning: '這是一個 ref 物件，不是直接的 DOM 元素。真正的值會放在 `.current` 裡。',
        },
        {
          label: '`useRef(null)`',
          meaning: '建立一個初始值為 `null` 的 ref。通常在 DOM 還沒掛上去前會先是 null。',
        },
        {
          label: '`.current`',
          meaning: '真正保存值的位置。若綁到 input，`current` 會指向那個 DOM 元素。',
        },
        {
          label: '`ref={hookSearchInputRef}`',
          meaning: '把 ref 綁到 JSX 元素後，React 會幫你把該元素放進 `.current`。',
        },
      ],
      usageSteps: [
        'React 先建立一個 ref 物件。',
        'render 時把 ref 綁到對應元素。',
        '元素掛到畫面後，`.current` 會指向那個 DOM。',
        '你可以透過 `.current` 呼叫像 `focus()` 這樣的方法，而且不會觸發重新 render。',
      ],
      patternModes: [
        {
          pattern: 'const inputRef = useRef(null)',
          timing: 'DOM ref',
          bestFor: 'focus input、scroll 到某元素。',
        },
        {
          pattern: 'const previousValueRef = useRef(value)',
          timing: '保存不觸發畫面更新的值',
          bestFor: '記住上一個值、暫存外部物件。',
        },
      ],
    },
    syntaxSnippet: 'const hookSearchInputRef = useRef(null)',
    beginnerPitfall: '以為 ref 改變會自動更新畫面；ref 不是用來驅動畫面的。',
    searchHint: '搜尋 `useRef(`、`hookSearchInputRef`。',
    jumpTarget: { sectionKey: 'hooks', focusHookSearch: true, logMessage: '已定位到 hooks 搜尋框，直接體驗 useRef 聚焦效果。' },
  },
]

export const hookDecisionGuides = [
  {
    id: 'decision-state',
    question: '我想讓畫面記住一個會改變的值',
    answer: '先想 `useState`',
    explanation: '例如 count、input 內容、loading、目前選到哪一課，這些都屬於畫面狀態。',
    example: '像 Counter 的數字、表單欄位文字，都要存在 state 裡，畫面才知道要更新。',
    hookId: 'hook-state',
  },
  {
    id: 'decision-effect',
    question: '我想在畫面出現後，自動做一件事',
    answer: '先想 `useEffect`',
    explanation: '例如一打開頁面先抓 API、開始計時器、或同步瀏覽器外部世界。',
    example: '這個專案一載入就去抓 `/api/learning/overview` 與 notes，就是 effect 情境。',
    hookId: 'hook-effect',
  },
  {
    id: 'decision-memo',
    question: '我已經有資料，只想根據條件算出新結果',
    answer: '先想 `useMemo`',
    explanation: '它不是保存原始資料，而是幫你整理、篩選、推導結果。',
    example: '輸入搜尋字後，把 hook 卡片過濾成符合條件的清單，就是 useMemo 的典型情境。',
    hookId: 'hook-memo',
  },
  {
    id: 'decision-callback',
    question: '我需要讓某個函式參照穩定，不想每次 render 都變成新函式',
    answer: '再考慮 `useCallback`',
    explanation: '這通常是稍進階情境，常見於函式會成為其他 hook 依賴時。',
    example: '像 `handleRefresh`、`appendLog` 被多處重用，才比較有理由用 useCallback 包起來。',
    hookId: 'hook-callback',
  },
  {
    id: 'decision-ref',
    question: '我想直接碰 input / DOM，或保存不需要重畫畫面的值',
    answer: '先想 `useRef`',
    explanation: 'ref 不是畫面狀態，而是直接拿到元素或保存不觸發 render 的值。',
    example: '按一下按鈕就把焦點移到搜尋框，這種就很適合用 ref。',
    hookId: 'hook-ref',
  },
]

export const reactRenderFlowGuide = {
  title: 'React Render 流程與依賴陣列',
  summary: '先看懂「React 重新執行元件 → 比較差異 → 更新畫面 → effect 再執行」這條線，hook 會突然容易很多。',
  stages: [
    {
      id: 'render-trigger',
      title: '先有觸發點：事件、state、props 或資料回來了',
      description: '例如按了 Count +1、input 輸入文字、fetch 回應成功，或父元件傳來新的 props。',
      whyItMatters: 'React 不會無緣無故重跑元件，一定先有觸發來源。',
      watchFor: '先找事件處理函式、setter、或資料載入完成後哪裡改了 state。',
      relatedHooks: ['useState', 'useEffect'],
    },
    {
      id: 'render-reexecute',
      title: 'React 重新執行 component function',
      description: '元件函式會重新跑一次，重新算 JSX、重新讀 state / props，也會重新遇到 hooks。',
      whyItMatters: '很多新手以為 render 只是畫面重畫，其實第一步是元件函式再次執行。',
      watchFor: '這一步還不是 effect 執行，而是單純重新執行函式，整理下一版畫面。',
      relatedHooks: ['useState', 'useMemo', 'useCallback', 'useRef'],
    },
    {
      id: 'render-diff',
      title: 'React 比較這次 JSX 跟上一次有沒有差異',
      description: 'React 會看新的 JSX 結果和上一輪有什麼不同，再決定哪些 DOM 真的需要更新。',
      whyItMatters: 'render 不等於整頁 DOM 全重畫；React 會先比較差異。',
      watchFor: '你看到 component 重新 render，不代表每個 DOM 都真的被改。',
      relatedHooks: ['useMemo'],
    },
    {
      id: 'render-commit',
      title: '真的把必要 DOM 更新 commit 到畫面',
      description: '確認哪些地方有差後，React 才把必要變更套到真實畫面上。',
      whyItMatters: '這一步之後，使用者才會實際看到數字改變、文字改變、卡片出現。',
      watchFor: '畫面有變，代表 commit 已經完成。',
      relatedHooks: ['useRef'],
    },
    {
      id: 'render-effects',
      title: 'commit 後，React 才檢查 effect / memo / callback 的依賴',
      description: '這時才輪到 dependency array 發揮作用：決定 effect 要不要跑、memo 要不要重算、callback 要不要換新函式。',
      whyItMatters: 'dependency array 不是用來阻止 render，而是控制 hook 在 render 後要不要重跑或重算。',
      watchFor: '如果先搞懂這一步，就比較不會把 render 跟 effect 混在一起。',
      relatedHooks: ['useEffect', 'useMemo', 'useCallback'],
    },
  ],
  dependencyModes: [
    {
      id: 'effect-no-array',
      title: '沒有 dependency array：每次 render 後都會再跑 effect',
      hook: 'useEffect',
      signature: 'useEffect(() => { /* side effect */ })',
      renderRelation: '只要元件重新 render，這個 effect 在 commit 後就會再執行一次。',
      bestFor: '少數真的需要每次 render 後都同步的副作用。',
      caution: '新手最容易在這種模式裡不小心造成 effect 一直重跑。',
      sequence: [
        '事件或資料改變，元件重新 render。',
        'React 比較差異並更新必要 DOM。',
        '因為沒有 dependency array，所以 effect 直接再跑一次。',
      ],
      beginnerTakeaway: '它沒有阻止 render，也沒有挑條件；只要 render 發生，effect 幾乎都會跟著跑。',
      jumpTargets: [
        { label: '回 hooks 工具箱', target: { sectionKey: 'hooks', logMessage: '已回到 hooks 工具箱，對照沒有 dependency array 的 effect。' } },
      ],
    },
    {
      id: 'effect-empty-array',
      title: '空陣列 `[]`：第一次 render 完後跑一次 effect',
      hook: 'useEffect',
      signature: 'useEffect(() => { loadOverview(); loadNotes() }, [])',
      renderRelation: '元件還是會重新 render，但空陣列只讓這個 effect 在第一次 mount 後執行。',
      bestFor: '初始化載入，例如頁面一打開就抓資料。',
      caution: '空陣列不是阻止 render，而是告訴 effect：「沒有特定依賴值要追蹤」。',
      sequence: [
        'React 第一次 render 元件。',
        'React commit 畫面。',
        '因為是第一次 mount，而且 dependency array 是空陣列，所以 effect 跑一次。',
        '之後如果只是一般重新 render，這個 effect 不會因為 render 本身再跑。',
      ],
      beginnerTakeaway: '要分清楚：元件可以重新 render，但 `[]` 讓 effect 不會每次 render 後都重跑。',
      jumpTargets: [
        { label: '看 API lesson', target: { lessonId: 'api', syncMvpLesson: true, sectionKey: 'practice', logMessage: '已前往 API lesson，對照初始化 useEffect。' } },
        { label: '看 hooks lesson', target: { lessonId: 'hooks', sectionKey: 'practice', logMessage: '已前往 hooks lesson，對照空陣列 effect。' } },
      ],
    },
    {
      id: 'effect-keyword',
      title: '依賴 `[keyword]`：render 之後，只在 keyword 改變時跑 effect',
      hook: 'useEffect',
      signature: 'useEffect(() => { console.log(keyword) }, [keyword])',
      renderRelation: '元件每次 state 變動都可能 render，但只有 dependency array 裡的 `keyword` 真的改變時，effect 才會再跑。',
      bestFor: '根據某個 state 變化，同步外部副作用。',
      caution: '如果是別的 state 變了，例如 count 改變，但 keyword 沒變，元件還是 render，只是這個 effect 不跑。',
      sequence: [
        '某個 state 改變，元件重新 render。',
        'React commit 畫面。',
        'React 檢查 dependency array。',
        '只有當 `keyword` 和上一次不同，effect 才重跑。',
      ],
      beginnerTakeaway: 'dependency array 控制的是 effect 要不要重跑，不是 component 要不要 render。',
      jumpTargets: [
        { label: '回 hooks 工具箱', target: { sectionKey: 'hooks', focusHookSearch: true, logMessage: '已回 hooks 工具箱，可直接用搜尋框想像 keyword 變化。' } },
      ],
    },
    {
      id: 'memo-keyword',
      title: '`useMemo(..., [keyword])`：元件照樣 render，但結果只在 keyword 改變時重算',
      hook: 'useMemo',
      signature: 'const filtered = useMemo(() => filterGuides(keyword), [keyword])',
      renderRelation: 'component render 還是會發生；dependency array 只是在決定 `useMemo` 裡的計算要不要重跑。',
      bestFor: '搜尋、篩選、摘要整理等「根據依賴算結果」的情境。',
      caution: '不要把 useMemo 當成阻止 render 的工具；它只是在 render 過程中幫你重用計算結果。',
      sequence: [
        'state 改變，元件重新 render。',
        'React 在 render 過程中遇到 useMemo。',
        '如果 keyword 沒變，就重用上一輪的 filtered 結果。',
        '如果 keyword 變了，才重新執行計算函式。',
      ],
      beginnerTakeaway: 'useMemo 會跟著 render 被遇到，但 dependency array 決定是否重算，不是是否 render。',
      jumpTargets: [
        { label: '回 hooks 工具箱', target: { sectionKey: 'hooks', logMessage: '已回 hooks 工具箱，對照 useMemo 篩選卡片。' } },
      ],
    },
    {
      id: 'callback-deps',
      title: '`useCallback(..., [deps])`：元件照樣 render，但函式參照只在依賴改變時換新',
      hook: 'useCallback',
      signature: 'const handleRefresh = useCallback(() => loadNotes(), [loadNotes])',
      renderRelation: 'component render 一樣會發生；dependency array 控制的是回傳的函式參照要不要換新。',
      bestFor: '函式會成為 effect 依賴，或你想維持穩定函式參照時。',
      caution: '它不是拿來阻止畫面 render，而是讓某些依賴函式的地方不會一直被新函式干擾。',
      sequence: [
        'state 或 props 改變，元件重新 render。',
        'React 在 render 過程中遇到 useCallback。',
        '如果依賴沒變，就重用上一輪的函式參照。',
        '如果依賴變了，才建立新的函式參照。',
      ],
      beginnerTakeaway: 'useCallback 看 dependency array，但它在意的是函式參照，不是副作用執行。',
      jumpTargets: [
        { label: '看 hooks React 程式碼', target: { lessonId: 'hooks', sectionKey: 'code', codeTab: 'react', logMessage: '已前往 hooks React 程式碼對照 useCallback。' } },
      ],
    },
  ],
  misconceptions: [
    {
      title: 'render 不等於 DOM 整頁重畫',
      correction: 'React 會先重新執行 component function，之後比較差異，只更新必要的 DOM。',
    },
    {
      title: 'dependency array 不是用來阻止 render',
      correction: '它只控制 effect / memo / callback 在這次 render 過後要不要重跑、重算或換參照。',
    },
    {
      title: 'useEffect 不是 render 前就先跑',
      correction: '通常是 render 與 commit 完後，effect callback 才執行。',
    },
    {
      title: 'useMemo / useCallback 看依賴，不代表它們和 useEffect 做的是同一件事',
      correction: '它們都會看 dependency array，但 useMemo 管的是計算結果，useCallback 管的是函式參照，useEffect 管的是副作用。',
    },
  ],
  jumpTargets: [
    { label: '回 state lesson 看 render 起點', target: { lessonId: 'state', syncMvpLesson: true, sectionKey: 'practice', logMessage: '已前往 state lesson，從 state 改變理解 render。' } },
    { label: '回 hooks 工具箱對照 hook', target: { sectionKey: 'hooks', logMessage: '已前往 hooks 工具箱，對照 render 流程中的各種 hook。' } },
    { label: '看 React 程式碼對照', target: { lessonId: 'hooks', sectionKey: 'code', codeTab: 'react', logMessage: '已前往 hooks 的 React 程式碼對照。' } },
  ],
}

export const hookPracticeMissions = [
  {
    id: 'hook-mission-1',
    title: '先用問題判斷 hook，而不是背名字',
    action: '先看「我想做什麼？」判斷卡，再把 `useState`、`useEffect`、`useMemo`、`useCallback`、`useRef` 分到對應情境。',
    successSignal: '你能從需求反推 hook，而不是只背單字。',
  },
  {
    id: 'hook-mission-2',
    title: '先看範例，再回專案追程式碼',
    action: '挑一張 hook 卡，先讀它的使用範例，再到 `App.jsx` 搜尋對應 hook 與 symbol。',
    successSignal: '你能把「範例情境」和「真實專案程式碼」對起來。',
  },
  {
    id: 'hook-mission-3',
    title: '至少親手操作一個 hooks 效果',
    action: '先按一次「聚焦 hooks 搜尋框」，再用搜尋框輸入關鍵字，觀察 `useRef` 與 `useMemo` 各自造成什麼效果。',
    successSignal: '你能分辨哪個 hook 在操作 DOM、哪個 hook 在整理顯示結果。',
  },
]

export const fallbackBackendLabs = [
  {
    id: 'validation',
    title: '表單驗證：避免後端收到不完整資料',
    summary: '透過 `@Valid`、`@NotBlank`、`@Size` 保護 API，確保進來的 JSON 符合需求。',
    httpMethod: 'POST',
    endpoint: '/api/learning/notes',
    whyItMatters: '如果前端漏填資料，後端仍然要有最後一道防線，避免髒資料進系統。',
    backendSteps: [
      'Controller 用 `@Valid @RequestBody` 接收 JSON。',
      'Spring Boot 先做欄位驗證。',
      '驗證通過後才交給 Service 建立 note。',
    ],
    requestExample: '{\n  "learnerName": "小美",\n  "feature": "表單控制",\n  "question": "為什麼要 preventDefault?"\n}',
    responseExample: '{\n  "id": 3,\n  "learnerName": "小美",\n  "feature": "表單控制",\n  "question": "為什麼要 preventDefault?",\n  "createdAt": "2026-07-29T08:15:00Z"\n}',
    codePointers: ['LearningLabController.createNote', 'LearningNoteRequest', 'LearningLabService.createNote'],
    practiceTask: '故意把 learnerName 留空，再觀察為什麼 API 會回 400。',
  },
  {
    id: 'response-shaping',
    title: '回應整理：把教學內容包成統一 JSON',
    summary: '後端不只是查資料，也會先整理成前端容易消化的結構。',
    httpMethod: 'GET',
    endpoint: '/api/learning/overview',
    whyItMatters: '當前端一次需要標題、lesson 摘要、名詞字典與提示時，用單一 response 會更好讀。',
    backendSteps: [
      'Service 組出 `LearningOverviewResponse`。',
      '每個區塊用 record 明確定義欄位。',
      'Spring Boot 自動把 Java record 轉成 JSON。',
    ],
    requestExample: 'GET /api/learning/overview',
    responseExample: '{\n  "title": "React + Spring Boot Learning Lab",\n  "lessons": [ ... ],\n  "glossaryTerms": [ ... ]\n}',
    codePointers: ['LearningOverviewResponse', 'LearningLabService.getOverview'],
    practiceTask: '試著從 overview JSON 中指出哪幾個欄位是給新手導覽、哪幾個是給 lesson。',
  },
  {
    id: 'query-paging',
    title: '搜尋 / filter / 分頁：讓列表 API 更像真實專案',
    summary: '真實專案的列表 API 通常不會一次把所有資料都吐給前端，而是支援 query、feature filter 與 page/size。',
    httpMethod: 'GET',
    endpoint: '/api/learning/notes?page=0&size=5&query=React&feature=all',
    whyItMatters: '當資料量增加時，前端需要能搜尋、篩選與分頁，後端也要回傳完整的分頁資訊。',
    backendSteps: [
      'Controller 用 `RequestParam` 接 page、size、query、feature。',
      'Service 先做 filter，再切出當前頁資料。',
      '回傳 `LearningNotesPageResponse`，包含 data、totalCount、totalPages。',
    ],
    requestExample: 'GET /api/learning/notes?page=0&size=5&query=React&feature=all',
    responseExample: '{\n  "data": [ ... ],\n  "pageNumber": 0,\n  "pageSize": 5,\n  "totalCount": 12,\n  "totalPages": 3\n}',
    codePointers: ['LearningLabController.getNotes', 'LearningNotesPageResponse', 'LearningLabService.getNotes'],
    practiceTask: '切換搜尋關鍵字或主題 filter，觀察回來的 totalCount 與 data 是否一起改變。',
  },
  {
    id: 'service-flow',
    title: 'Controller / Service 分工：讓邏輯更好維護',
    summary: 'Controller 專心接 HTTP，Service 專心整理資料與建立回應。',
    httpMethod: 'GET',
    endpoint: '/api/learning/backend-labs',
    whyItMatters: '當功能變多時，把規則都塞在 Controller 會很難維護，拆層會更清楚。',
    backendSteps: [
      'Controller 提供 endpoint 路徑。',
      'Service 回傳後端實作案例清單。',
      'React 再把案例 render 成教學卡片。',
    ],
    requestExample: 'GET /api/learning/backend-labs',
    responseExample: '[\n  {\n    "id": "validation",\n    "title": "表單驗證..."\n  }\n]',
    codePointers: ['LearningLabController.getBackendLabs', 'LearningLabService.getBackendLabs'],
    practiceTask: '從前端 `fetch` 追到 Controller，再追到 Service，說出每層各自做了什麼。',
  },
  {
    id: 'error-contract',
    title: '錯誤格式統一：前端不再只收到零散錯誤字串',
    summary: '當驗證失敗或找不到資料時，後端會回傳統一的 ApiErrorResponse，前端比較容易顯示與除錯。',
    httpMethod: 'ANY',
    endpoint: '/api/learning/*',
    whyItMatters: '真實專案通常會把 status、code、message、fieldErrors 做成一致格式，減少前端判斷成本。',
    backendSteps: [
      'ControllerAdvice 統一攔截例外。',
      'MethodArgumentNotValidException 會轉成欄位錯誤列表。',
      'ResponseStatusException 會被包成統一 JSON 錯誤格式。',
    ],
    requestExample: 'POST /api/learning/notes with invalid body',
    responseExample: '{\n  "status": 400,\n  "code": "VALIDATION_ERROR",\n  "message": "請先修正欄位錯誤後再送出。",\n  "fieldErrors": [ ... ]\n}',
    codePointers: ['GlobalExceptionHandler', 'ApiErrorResponse', 'ApiFieldError'],
    practiceTask: '故意送錯欄位，觀察前端是否能穩定顯示統一錯誤訊息。',
  },
  {
    id: 'stats',
    title: '後端統計：把多份資料整理成摘要',
    summary: '後端可以根據現有資料計算出統計資訊，不一定每次都直接原樣回傳。',
    httpMethod: 'GET',
    endpoint: '/api/learning/stats',
    whyItMatters: '真實專案常需要 dashboard、摘要數字、活躍主題，這些通常都由後端整理。',
    backendSteps: [
      'Service 根據 lessons、notes、glossary、components 計算統計數。',
      '把統計結果包成專門的 response record。',
      '前端可以直接渲染摘要卡，不必自己重新計算所有資料。',
    ],
    requestExample: 'GET /api/learning/stats',
    responseExample: '{\n  "lessonCount": 5,\n  "noteCount": 2,\n  "hookCount": 5,\n  "backendCapabilities": ["GET /overview", "POST /notes", "PUT /notes/{id}"]\n}',
    codePointers: ['LearningLabController.getStats', 'LearningStatsResponse', 'LearningLabService.getStats'],
    practiceTask: '按下 stats 預覽後，看看 noteCount 為什麼會跟著新增筆記而改變。',
  },
  {
    id: 'delete-flow',
    title: '刪除流程：先確認存在，再回 204',
    summary: 'DELETE 不是直接砍資料就好，通常會先確認資料存在，成功後回 204 No Content。',
    httpMethod: 'DELETE',
    endpoint: '/api/learning/notes/{id}',
    whyItMatters: '如果刪除不存在的資料還回成功，前端會以為有刪到，造成資料不同步。',
    backendSteps: [
      'Controller 用 `@PathVariable` 接住網址上的 id。',
      'Service 先確認該 id 的 note 存在，不存在就丟 404。',
      '刪除成功後回 `204 No Content`，代表成功但沒有內容需要回傳。',
    ],
    requestExample: 'DELETE /api/learning/notes/3',
    responseExample: 'HTTP/1.1 204 No Content\n(刪除成功時沒有 response body)',
    codePointers: ['LearningLabController.deleteNote', 'LearningLabService.deleteNote', 'InMemoryLearningNoteRepository.deleteById'],
    practiceTask: '先刪一筆存在的 note 觀察 204，再刪同一筆觀察 404 錯誤格式。',
  },
  {
    id: 'dto-mapping',
    title: 'DTO 轉換：Request、Entity、Response 為什麼要分開',
    summary: '前端送進來的格式、系統內部的格式、回給前端的格式，三者分開才不會互相綁死。',
    httpMethod: 'POST',
    endpoint: '/api/learning/notes',
    whyItMatters: '如果 API 直接吐內部 entity，之後想改內部欄位就會直接弄壞前端。',
    backendSteps: [
      'Controller 收到 JSON 後先轉成 `LearningNoteRequest`。',
      'Mapper 把 request + 新 id + 建立時間組成 `LearningNote`。',
      '存檔後再由 Mapper 轉成 `LearningNoteResponse` 回給前端。',
    ],
    requestExample: '{\n  "learnerName": "小賀",\n  "feature": "DTO 轉換",\n  "question": "為什麼不直接回傳 entity?"\n}',
    responseExample: '{\n  "id": 4,\n  "learnerName": "小賀",\n  "feature": "DTO 轉換",\n  "question": "為什麼不直接回傳 entity?",\n  "createdAt": "2026-08-18T09:00:00Z"\n}',
    codePointers: ['LearningNoteRequest', 'LearningNoteMapper.toNewEntity', 'LearningNoteMapper.toResponse'],
    practiceTask: '打開 LearningNoteMapper，找出 trim() 在哪裡發生，想想為什麼要在後端做。',
  },
]

export const backendPracticeMissions = [
  {
    id: 'mission-create-note',
    title: '任務 1：成功新增一筆學習筆記',
    difficulty: '暖身',
    goal: '發送一筆合法的 POST 請求，拿到 201 與新筆記的 id。',
    expectation: '回應 status 201，body 內有數字 id 與你送出的 learnerName。',
    explains: '這條線就是 Controller → Request 驗證 → Service → Mapper → Repository 的完整流程。',
    codePointer: 'LearningLabController.createNote',
  },
  {
    id: 'mission-validation-400',
    title: '任務 2：故意觸發 400 驗證錯誤',
    difficulty: '暖身',
    goal: '把 learnerName 留空送出，觀察後端統一錯誤格式。',
    expectation: '回應 status 400，body 內有 code=VALIDATION_ERROR 與 fieldErrors 列表。',
    explains: '@Valid 擋下不合法資料後，GlobalExceptionHandler 會把錯誤包成統一 JSON。',
    codePointer: 'GlobalExceptionHandler.handleValidation',
  },
  {
    id: 'mission-search-notes',
    title: '任務 3：用關鍵字搜尋筆記列表',
    difficulty: '基本',
    goal: '呼叫帶 query 參數的列表 API，觀察分頁欄位。',
    expectation: '回應 status 200，body 內有 data、totalCount、pageSize 等分頁資訊。',
    explains: 'Service 會先過濾再分頁，回傳 LearningNotesPageResponse 而不是整包資料。',
    codePointer: 'LearningLabService.getNotes',
  },
  {
    id: 'mission-single-404',
    title: '任務 4：查詢一筆不存在的筆記',
    difficulty: '基本',
    goal: '用不存在的 id 查單筆資料，觀察 404 錯誤格式。',
    expectation: '回應 status 404，body 內有 message 說明找不到指定筆記。',
    explains: 'Service 找不到資料時丟 ResponseStatusException，再由例外處理器統一格式化。',
    codePointer: 'LearningLabService.getNote',
  },
  {
    id: 'mission-stats-change',
    title: '任務 5：觀察統計數字的變化',
    difficulty: '進階',
    goal: '先記下 noteCount，新增一筆筆記後再查一次 stats。',
    expectation: '第二次的 noteCount 比第一次多 1，證明統計是即時計算的。',
    explains: '後端 stats 不是寫死的數字，而是 Service 每次根據目前資料重新計算。',
    codePointer: 'LearningLabService.getStats',
  },
  {
    id: 'mission-update-note',
    title: '任務 6：更新一筆既有筆記 (PUT)',
    difficulty: '進階',
    goal: '先新增一筆筆記，再用 PUT 修改它的 question 欄位。',
    expectation: 'PUT 回應 status 200，body 的 question 變成更新後的內容。',
    explains: 'PUT 會先確認資料存在，再由 Mapper 產生更新後的 entity 存回去。',
    codePointer: 'LearningLabService.updateNote',
  },
  {
    id: 'mission-delete-note',
    title: '任務 7：刪除筆記並確認 404 (DELETE)',
    difficulty: '進階',
    goal: '先新增一筆筆記，刪除它，再查一次確認已經不存在。',
    expectation: 'DELETE 回 204，之後 GET 同一筆回 404。',
    explains: '這就是完整的資源生命週期：建立、刪除、再確認狀態。',
    codePointer: 'LearningLabService.deleteNote',
  },
]

export const fallbackBackendStats = {
  lessonCount: 5,
  noteCount: 2,
  glossaryCount: 8,
  componentCount: 4,
  hookCount: 5,
  backendCapabilities: [
    'GET /api/learning/overview',
    'GET /api/learning/notes?page=0&size=5&query=&feature=all',
    'GET /api/learning/notes/{id}',
    'POST /api/learning/notes',
    'PUT /api/learning/notes/{id}',
    'DELETE /api/learning/notes/{id}',
    'GET /api/learning/backend-labs',
    'GET /api/learning/stats',
  ],
}

export const lessonContent = {
  hooks: {
    title: 'React Hooks 實戰入門',
    goal: '把常用 hooks 的用途、差異與實際寫法連成一條線。',
    firstConcepts: [
      'hook 不是新語法，而是 React 提供的一組工具函式。',
      '不同 hook 的責任不同：有的保存 state，有的處理副作用，有的優化計算或函式參照。',
    ],
    practiceSteps: [
      '先在 hooks 工具箱找一張 hook 卡，閱讀它的「格式拆解」區塊。',
      '按下「聚焦 hooks 搜尋框」，感受 `useRef` 如何透過 `.current` 直接操作 DOM。',
      '切到右側程式碼對照，比較 `useState`、`useEffect`、`useMemo`、`useCallback`、`useRef` 的語法格式差異。',
    ],
    practiceChallenges: [
      {
        title: '挑戰 1：分類 hooks',
        action: '把 `useState`、`useEffect`、`useMemo`、`useCallback`、`useRef` 分到「資料 / 副作用 / 優化 / DOM」類別。',
        verify: '你可以不用看提示，就說出每個 hook 的主要用途。',
      },
      {
        title: '挑戰 2：拆解不同 hook 的格式',
        action: '至少各挑一個 `useState`、`useEffect`、`useMemo`、`useCallback`、`useRef` 範例，說出每一段語法各自在做什麼。',
        verify: '你能分辨哪個 hook 回傳值、哪個 hook 接 callback、哪個 hook 依賴 `[]`、哪個 hook 要看 `.current`。',
      },
      {
        title: '挑戰 3：說出不該濫用的情境',
        action: '思考為什麼不是每個函式都要 `useCallback`、也不是每段計算都要 `useMemo`。',
        verify: '你知道它們是優化工具，不是每個地方都必須加。',
      },
    ],
    commonPitfalls: [
      '把 hook 當成「背名字」而不是先理解它要解決什麼問題。',
      '只會背一整行語法，卻不知道每一段符號到底代表什麼。',
      '看到 `useMemo` / `useCallback` 就以為一定比較快，其實過度使用也會增加閱讀成本。',
      '看到 `useEffect(() => {}, [])` 時，只記得它會抓資料，卻不知道真正會被 React 呼叫的是 callback。',
    ],
    mistakeClinic: [
      {
        title: '看到 hook 名字就急著背',
        wrongThought: '我是不是要先把所有 hook 名稱背起來？',
        correction: '先只抓用途分類：保存資料 / 副作用 / 優化 / DOM，理解用途比背名字有用。',
      },
      {
        title: '把 useMemo 當成萬能加速器',
        wrongThought: '是不是只要加 useMemo，效能就一定更好？',
        correction: 'useMemo 是優化工具，不是預設值；太早用反而會增加閱讀成本。',
      },
      {
        title: '看到 useEffect 只會背整行',
        wrongThought: '我知道要寫 `useEffect(() => {}, [])`，但不知道 `() => {}` 到底是什麼。',
        correction: '中間那段 `() => { ... }` 是 callback function，React 會在 render 完後呼叫它；裡面才是你真正要做的副作用。',
      },
      {
        title: '把 `useRef` 當成會自動更新畫面的 state',
        wrongThought: '我改了 ref 的值，畫面應該也會一起更新吧？',
        correction: '不會。ref 是拿來保存不需要重新 render 的值，或直接碰 DOM；畫面要更新還是要靠 state。',
      },
    ],
    syntaxPoints: [
      '`useState` 會回傳 `[stateValue, setter]`，左邊讀值、右邊更新值。',
      'useEffect 常用來處理副作用，例如載入資料。',
      '`useEffect(() => {}, [])` 中，`()` 到 `{}` 這整段是 callback function，React render 完後才會呼叫它。',
      'callback 裡可以放 fetch、timer、event listener，必要時也可以 `return` cleanup function。',
      'useMemo 常用來記住計算後的結果。',
      '`useCallback` 會回傳一個函式參照，只有依賴改變時才換新的函式。',
      '`useRef` 會回傳一個帶有 `.current` 的物件，常用來綁 DOM 或保存不觸發 render 的值。',
      'useCallback 常用來記住函式參照，useRef 常用來碰 DOM 或保存不觸發 re-render 的值。',
    ],
    syntaxWalkthrough: [
      'hook 一律在元件最上層呼叫，不要放進 if 或 loop。',
      '`const [count, setCount] = useState(0)` 可以拆成「目前值 `count`」與「更新函式 `setCount`」。',
      '`useEffect(() => { loadOverview(); loadNotes() }, [])` 的第二段 `() => { ... }` 是 callback，React 會在 render 完後執行它。',
      'callback 內部的 `loadOverview()`、`loadNotes()` 才是真正的副作用內容；也就是你希望 React 幫你在畫面出現後做的事。',
      '`[]` 是 dependency array，代表這個 effect 依賴的值目前沒有特別要追蹤，所以第一次 render 後先跑一次。',
      '`useMemo(() => ..., [keyword])` 也是 callback + dependency array 組合，但它的目的是算出結果，不是做副作用。',
      '`useCallback(() => ..., [deps])` 和 `useMemo` 長得像，但它要記住的是函式本身，不是計算結果。',
      '`useRef(null)` 拿到的是 ref 物件，真正值放在 `.current` 裡。',
      '先用 `useState` 處理畫面資料，再根據需要補 `useEffect`、`useMemo`、`useCallback`、`useRef`。',
      '這個專案裡的 hooks 不是孤立存在，而是共同支援搜尋、載入、事件紀錄與預覽功能。',
    ],
    hookStructureGuides: reactHookGuides.map((guide) => ({
      id: guide.id,
      hook: guide.hook,
      title: guide.formatGuide?.title ?? `${guide.hook} 語法拆解`,
      signature: guide.formatGuide?.signature ?? guide.syntaxSnippet,
      parts: guide.formatGuide?.parts ?? [],
      usageSteps: guide.formatGuide?.usageSteps ?? [],
      patternModes: guide.formatGuide?.patternModes ?? [],
    })),
    effectCallbackGuide: {
      title: 'useEffect callback 到底是什麼？',
      summary: '請把 `useEffect(() => {}, [])` 看成「React 幫你安排一個 render 後要執行的 callback」。真正做事的是中間那個 callback，不是方括號本身。',
      signature: 'useEffect(() => { /* side effect */ }, [])',
      sections: [
        {
          label: '1. `() => { ... }` 是 callback function',
          description: '這和你平常傳給 `onClick={() => ...}` 的函式很像，只是這次不是按鈕點了才執行，而是 React render 完後執行。',
        },
        {
          label: '2. callback 裡面放副作用',
          description: '像 `fetch()`、計時器、監聽器、同步外部資料都放這裡；不要把純粹計算結果的程式塞進來。',
        },
        {
          label: '3. callback 可以回傳 cleanup',
          description: '如果你開了計時器或綁了事件，記得 `return () => { ... }` 在下一次 effect 前或 unmount 時清掉。',
        },
        {
          label: '4. `[]` 是 dependency array',
          description: '空陣列不是 callback 的內容，而是告訴 React：這個 effect 沒有額外依賴值需要在變化時重跑。',
        },
      ],
      compareSnippets: [
        {
          title: '初始化載入',
          code: `useEffect(() => {
  loadOverview()
  loadNotes()
}, [])`,
          explanation: '第一次 render 後執行，適合頁面打開就先抓資料。',
        },
        {
          title: '依賴某個值改變',
          code: `useEffect(() => {
  console.log('keyword changed:', keyword)
}, [keyword])`,
          explanation: '除了第一次 render 後，也會在 `keyword` 改變時再執行。',
        },
        {
          title: '帶 cleanup 的 callback',
          code: `useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick')
  }, 1000)

  return () => clearInterval(timer)
}, [])`,
          explanation: 'callback 回傳 cleanup function，用來清掉副作用。',
        },
      ],
    },
    codeNavigation: {
      mission: '目標是分清楚哪些 hook 在管資料、哪些在管副作用、哪些在做優化。',
      beforeYouRead: [
        '先找 `useState`，理解哪些資料會讓畫面更新。',
        '再找 `useEffect`、`useMemo`、`useCallback`、`useRef`。',
        '最後對照 hooks 工具箱區，看看畫面上的互動是如何對應回程式的。',
      ],
      filePointers: [
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'useEffect / useMemo / useCallback / useRef',
          purpose: '這裡可以一次看到 hooks 在真實頁面中的用法。',
          lookFor: '搜尋 useEffect(、useMemo(、useCallback(、useRef(。',
        },
        {
          filePath: 'react_learning_example/src/learningContent.js',
          symbol: 'reactHookGuides',
          purpose: '這裡定義每個 hook 的教學卡內容。',
          lookFor: '搜尋 reactHookGuides。',
        },
      ],
      searchKeywords: ['useEffect', 'useMemo', 'useCallback', 'useRef', 'reactHookGuides'],
    },
    playground: {
      title: '可編輯 Hooks 實驗室',
      description: '試著改搜尋 placeholder、按鈕文字，並觀察 hooks 教學區的互動提示如何跟著變。',
      instructions: [
        '把搜尋 placeholder 改成你喜歡的提示。',
        '把聚焦按鈕文字改成自己的版本。',
        '套用後回到 hooks 區操作，感受這些改動如何影響互動。',
      ],
      supportedEdits: ['placeholder="搜尋 hook"', '<button type="button">聚焦按鈕文字</button>'],
      emptyHint: '這個 playground 主要幫你熟悉 hooks 區的畫面與文案，不直接修改 hook 行為。',
    },
    confidenceTasks: [
      '我可以說出 `useState`、`useEffect`、`useMemo`、`useCallback`、`useRef` 的基本用途。',
      '我知道 `useRef` 不會因為值改變就自動重新渲染畫面。',
      '我知道效能優化類 hook 不是每個地方都必須加。',
    ],
    quizQuestions: [
      {
        id: 'hooks-q1',
        prompt: '哪個 hook 最常用來在畫面載入後呼叫 API？',
        options: ['useEffect', 'useMemo', 'useRef'],
        answer: 'useEffect',
        explanation: '因為它適合處理副作用，像載入資料、訂閱、計時器。',
      },
      {
        id: 'hooks-q2',
        prompt: '哪個 hook 最適合「直接聚焦某個 input」？',
        options: ['useState', 'useRef', 'useMemo'],
        answer: 'useRef',
        explanation: '`useRef` 可以拿到 DOM 元素的參照，常用來 focus。',
      },
      {
        id: 'hooks-q3',
        prompt: '哪句話最接近 `useMemo` 的用途？',
        options: ['保存畫面狀態', '記住計算結果，避免重複整理同樣資料', '發送 HTTP 請求'],
        answer: '記住計算結果，避免重複整理同樣資料',
        explanation: '`useMemo` 著重在計算結果的重用，而不是事件或請求本身。',
      },
    ],
    scenarioChallenge: {
      title: '情境題：你想做一個搜尋框，輸入時只想重算過濾結果',
      situation: '你已經有 `hookKeyword` state，現在每次輸入都要把 hooks 清單重新過濾。哪個工具最符合這個情境？',
      options: [
        {
          id: 'hooks-scenario-a',
          label: 'useMemo，因為它適合記住整理後的結果',
          isCorrect: true,
          explanation: '對，這種「根據某個輸入值重新推導結果」很適合用 useMemo。',
        },
        {
          id: 'hooks-scenario-b',
          label: 'useRef，因為搜尋框是 input',
          isCorrect: false,
          explanation: 'useRef 比較適合碰 DOM 或保存不觸發 re-render 的值，不是拿來重算資料。',
        },
      ],
    },
    reactCode: `const filteredHookGuides = useMemo(() => {
  const keyword = hookKeyword.trim().toLowerCase()
  if (!keyword) return reactHookGuides

  return reactHookGuides.filter((guide) =>
    [guide.hook, guide.summary].join(' ').toLowerCase().includes(keyword),
  )
}, [hookKeyword])

const hookSearchInputRef = useRef(null)

function handleFocusHookSearch() {
  hookSearchInputRef.current?.focus()
}

<input
  ref={hookSearchInputRef}
  placeholder="搜尋 hook，例如：effect、memo、ref"
/>

<button type="button">聚焦 hooks 搜尋框</button>`,
    springCode: `// 這一課主要是前端 hooks 觀念。
// 後端的角色是在 hooks 需要拿資料時，提供 API。
// 例如 useEffect 會搭配 GET /api/learning/overview。

@GetMapping("/overview")
public LearningOverviewResponse getOverview() {
    return learningLabService.getOverview();
}`,
    flowCode: `使用者輸入 hooks 搜尋字
  -> setHookKeyword 更新 state
  -> useMemo 重新計算篩選結果
  -> React 重新渲染 hooks 卡片
  -> 若點擊聚焦按鈕，useRef 直接操作 input`,
  },
  state: {
    title: 'React State 入門',
    goal: '點按按鈕後，理解 state 改變如何驅動畫面更新。',
    firstConcepts: [
      'React 元件可以保存自己的資料，這份資料就叫 state。',
      '當 state 改變時，React 會重新執行元件函式，讓畫面反映最新資料。',
    ],
    practiceSteps: [
      '先按下「Count +1」觀察數字變化。',
      '再看右側 React 程式碼，找到 setCount。',
      '最後按 Reset，確認畫面會跟著 state 一起回到初始值。',
    ],
    practiceChallenges: [
      {
        title: '挑戰 1：改變初始值',
        action: '到可編輯實驗室把 `useState(0)` 改成 `useState(5)`，再套用到預覽。',
        verify: '你應該會看到 counter 一開始就從 5 開始。',
      },
      {
        title: '挑戰 2：改變每次增加量',
        action: '把 `current + 1` 改成 `current + 2`。',
        verify: '每次點擊都應該改成 +2，而不是 +1。',
      },
      {
        title: '挑戰 3：說明資料流',
        action: '不用看提示，自己說一次按下按鈕後發生的 4 個步驟。',
        verify: '你能說出：事件 → setter → re-render → 畫面更新。',
      },
    ],
    commonPitfalls: [
      '以為直接改變變數就會更新畫面，但 React 只會追蹤 state setter。',
      '不知道為什麼畫面會重畫，其實是因為 setCount 觸發了重新渲染。',
    ],
    mistakeClinic: [
      {
        title: '把一般變數當成 state',
        wrongThought: '我都把數字改掉了，畫面為什麼沒更新？',
        correction: 'React 只追蹤 state setter，直接改一般變數不會通知 React。',
      },
      {
        title: '只背 setCount，不懂畫面讀哪裡',
        wrongThought: '我知道要用 setCount，但不知道畫面為什麼會變。',
        correction: '因為 JSX 裡直接讀 `{count}`，只要 state 變了，React 就會重新 render。',
      },
    ],
    syntaxPoints: [
      'useState(0) 會建立一個狀態值與對應的 setter。',
      'onClick 會在使用者點擊按鈕時執行函式。',
      'setCount((current) => current + 1) 使用前一個值計算下一個值。',
    ],
    syntaxWalkthrough: [
      'const [count, setCount] = useState(0)：建立 count 狀態，初始值是 0。',
      'handleIncrement：把目前 count 加 1。',
      '畫面上的 {count}：直接讀取 state，React 會自動顯示最新數字。',
    ],
    codeNavigation: {
      mission: '目標是找到「誰改了 count」與「count 顯示在哪裡」。',
      beforeYouRead: [
        '先找 useState，知道 count 與 setCount 在哪裡被宣告。',
        '再找 handleIncrement，確認按鈕點擊後是哪個函式被執行。',
        '最後找 JSX 中顯示 {count} 的位置，理解畫面怎麼讀 state。',
      ],
      filePointers: [
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'const [count, setCount] = useState(0)',
          purpose: '這行是 state 的起點，先找到它。',
          lookFor: '搜尋 useState(0) 或 count。',
        },
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'handleIncrement',
          purpose: '這個函式會真的改變 count。',
          lookFor: '搜尋 handleIncrement。',
        },
        {
          filePath: 'react_learning_example/src/learningContent.js',
          symbol: 'lessonContent.state',
          purpose: '這裡有這一課的語法解說與範例程式碼。',
          lookFor: '搜尋 lessonContent.state。',
        },
      ],
      searchKeywords: ['useState(0)', 'handleIncrement', 'count', 'lessonContent.state'],
    },
    playground: {
      title: '可編輯 Counter 實驗室',
      description: '直接修改初始值、每次加多少、按鈕文字，然後把改動套用到右側互動預覽。',
      instructions: [
        '先試著把 useState(0) 改成 useState(5)。',
        '再把 current + 1 改成 current + 2。',
        '最後把按鈕文字改成你自己的版本。',
      ],
      supportedEdits: ['useState(數字)', 'current + 數字 或 current - 數字', '<button>按鈕文字</button>'],
      emptyHint: '先改一點點程式碼，再按「套用到互動預覽」觀察差異。',
    },
    confidenceTasks: [
      '我已經按過 Count +1，知道畫面會跟著 state 更新。',
      '我知道 `setCount` 才是 React 真正追蹤的變化。',
      '我能在 `App.jsx` 中找到 `handleIncrement`。',
    ],
    quizQuestions: [
      {
        id: 'state-q1',
        prompt: '是哪一個動作會讓 React 重新渲染這個 counter？',
        options: ['直接改 count = count + 1', '呼叫 setCount(...)', '只改按鈕文字'],
        answer: '呼叫 setCount(...)',
        explanation: 'React 會追蹤 state setter，`setCount` 被呼叫後才知道要重新渲染。',
      },
      {
        id: 'state-q2',
        prompt: '畫面上的數字是從哪裡讀來的？',
        options: ['從 API 回應', '從 count state', '從 CSS'],
        answer: '從 count state',
        explanation: 'JSX 中直接讀取 `{count}`，所以 state 變了畫面就一起改。',
      },
      {
        id: 'state-q3',
        prompt: '如果把 `setCount((current) => current + 1)` 改成直接 `count = count + 1`，會怎樣？',
        options: ['畫面照樣更新', '變數可能改了，但 React 不會因此重新渲染', 'Spring Boot 會幫你同步'],
        answer: '變數可能改了，但 React 不會因此重新渲染',
        explanation: 'React 需要透過 state setter 才知道有狀態變化。',
      },
    ],
    scenarioChallenge: {
      title: '情境題：你做了一個按鈕，但點了之後數字沒變',
      situation: '你發現程式裡只有 `count = count + 1`，沒有呼叫 setter。你第一步應該改哪裡？',
      options: [
        {
          id: 'state-scenario-a',
          label: '把它改成 `setCount((current) => current + 1)`',
          isCorrect: true,
          explanation: '對，React 需要透過 setter 才知道要重新渲染。',
        },
        {
          id: 'state-scenario-b',
          label: '先改 CSS 字體大小',
          isCorrect: false,
          explanation: '畫面不更新的原因在資料流，不在 CSS。',
        },
      ],
    },
    reactCode: `const [count, setCount] = useState(0)

function handleIncrement() {
  setCount((current) => current + 1)
}

<button type="button" onClick={handleIncrement}>
  Count +1
</button>`,
    springCode: `// 這個單元主要學的是前端 state。
// 因為只是畫面上的數字變化，所以不需要呼叫後端 API。
// 等你理解狀態管理後，再進到表單送出與資料請求。`,
    flowCode: `使用者點按按鈕
  -> onClick 觸發 handleIncrement
  -> setCount 更新 state
  -> React 重新執行元件函式
  -> 畫面顯示新的 count`,
  },
  props: {
    title: 'Props 傳值與元件拆分',
    goal: '理解父元件如何把資料與函式交給子元件，讓畫面更容易拆分與重用。',
    firstConcepts: [
      'props 可以想成父元件傳給子元件的「輸入資料」。',
      '父元件改 state 後，會重新 render，子元件也會收到新的 props。',
      'props 是唯讀的；真正改資料的人通常還是父元件。',
    ],
    practiceSteps: [
      '先在 props demo 改 learnerName，觀察子元件標題立即改變。',
      '再把 topic 切到 useEffect，確認 child card 收到的新 props 會直接反映到畫面。',
      '最後按一次子元件按鈕，理解函式 prop 是怎麼把事件再送回父元件的。',
    ],
    practiceChallenges: [
      {
        title: '挑戰 1：改名字、看子元件同步',
        action: '把 learnerName 改成你自己的名字，觀察 WelcomeCard 標題是否立刻更新。',
        verify: '如果子元件標題立刻改變，表示父元件重新 render 後已把新 props 傳下去。',
      },
      {
        title: '挑戰 2：傳布林值做視覺差異',
        action: '把 highlight 打開，再觀察提示卡顏色與狀態文案是否改變。',
        verify: '你應該能說出：布林 props 常用來控制顯示狀態、樣式或條件渲染。',
      },
      {
        title: '挑戰 3：找出函式 prop',
        action: '按一次子元件裡的按鈕，追蹤是哪個函式真的改變了 retryCount。',
        verify: '你知道 `onRetry={handleRetry}` 傳的是函式參照，真正改 state 的人仍是父元件。',
      },
    ],
    commonPitfalls: [
      '把 props 和 state 混在一起，以為子元件可以直接改 props。',
      '看得懂 `<Card title="..." />`，卻不知道這其實就是在傳資料給子元件。',
      '看到函式 prop 時，以為按鈕在子元件內，所以 state 也一定在子元件內。',
    ],
    mistakeClinic: [
      {
        title: '以為 props 可以直接改',
        wrongThought: '我在子元件裡把 props.title 改掉，畫面應該就會更新吧？',
        correction: '不建議這樣做。props 是父元件給的輸入資料，應由父元件改 state 後重新傳下來。',
      },
      {
        title: '把 JSX 屬性當成普通 HTML',
        wrongThought: '<WelcomeCard learnerName={name} /> 只是標籤上的文字而已。',
        correction: '這些屬性就是 props，React 會把它們組成物件後交給 WelcomeCard。',
      },
      {
        title: '看到函式 prop 就混亂',
        wrongThought: '子元件按鈕有 onClick，所以 retryCount 一定在子元件裡。',
        correction: '不一定。子元件可以只負責呼叫 `onRetry()`，真正更新 retryCount 的邏輯仍然可以留在父元件。',
      },
    ],
    syntaxPoints: [
      '`<WelcomeCard learnerName={learnerName} topic="React Props" />` 是父元件把資料傳給子元件。',
      '`function WelcomeCard({ learnerName, topic })` 代表子元件用解構方式接收 props。',
      '布林 props 可以寫成 `highlight` 或 `highlight={true}`。',
      '函式也能當成 props，例如 `onRetry={handleRetry}`。',
    ],
    syntaxWalkthrough: [
      '`<WelcomeCard ... />` 可以想成在「使用一個子元件」，後面的屬性就是傳進去的 props。',
      '`learnerName={learnerName}` 左邊是 prop 名稱，右邊是父元件目前要傳出去的變數或 state。',
      '子元件收到 props 後，會在 JSX 裡直接讀 `{learnerName}`、`{topic}` 這些值。',
      '如果父元件 state 改了，React 會重新 render 父元件，再把新的 props 傳給子元件。',
      '函式 prop 常用來讓子元件觸發父元件行為，例如按鈕點下後呼叫 `onRetry()`。',
    ],
    formatGuide: {
      title: 'Props 語法格式怎麼看',
      summary: '把 JSX 上的屬性想成「父元件正在傳參數給子元件」。Props 不是額外魔法，而是資料傳遞介面。',
      signature: '<WelcomeCard learnerName={learnerName} topic="React Props" highlight onRetry={handleRetry} />',
      sections: [
        {
          label: '1. `<WelcomeCard ... />` 是使用子元件',
          description: '就像呼叫函式一樣，只是這次你是在 JSX 裡使用一個元件。',
        },
        {
          label: '2. `learnerName={learnerName}` 是把變數傳進去',
          description: '左邊是 prop 名稱，右邊是父元件目前的資料來源，可以是常數、state 或計算結果。',
        },
        {
          label: '3. `highlight` 是布林 props 簡寫',
          description: '沒寫值時，React 會把它當成 `highlight={true}`。',
        },
        {
          label: '4. `onRetry={handleRetry}` 是函式 props',
          description: '你傳下去的是函式參照，讓子元件有機會通知父元件「某件事發生了」。',
        },
      ],
      compareSnippets: [
        {
          title: '傳字串 props',
          code: '<WelcomeCard learnerName="小美" topic="Props 基礎" />',
          explanation: '直接寫死文字，適合最小示範。',
        },
        {
          title: '傳 state / 變數',
          code: '<WelcomeCard learnerName={learnerName} topic={currentTopic} />',
          explanation: '最常見的真實情境：父元件資料一變，子元件就收到新的 props。',
        },
        {
          title: '傳函式 props',
          code: '<WelcomeCard onRetry={handleRetry} />',
          explanation: '常用在按鈕、列表操作、關閉 modal 等需要「子通知父」的互動。',
        },
      ],
    },
    codeNavigation: {
      mission: '目標是找到「父元件在哪裡傳 props」以及「子元件在哪裡接 props」。',
      beforeYouRead: [
        '先找 `<WelcomeCard ... />` 這種 JSX，確認 props 是從哪裡送出去。',
        '再找 `function WelcomeCard({ ... })`，確認子元件怎麼接資料。',
        '最後看函式 props，理解子元件按鈕為什麼能回頭影響父元件 state。',
      ],
      filePointers: [
        {
          filePath: 'react_learning_example/src/components/PropsLessonDemo.jsx',
          symbol: 'PropsLessonDemo / WelcomeCard',
          purpose: '這裡集中示範父傳子資料、布林 props 與函式 props。',
          lookFor: '搜尋 WelcomeCard、onRetry、learnerName。',
        },
        {
          filePath: 'react_learning_example/src/components/LessonPracticePanel.jsx',
          symbol: 'LessonPracticePanel',
          purpose: '這裡負責渲染完整 lesson 練習區，讓 App.jsx 不必塞進所有課程 JSX。',
          lookFor: '搜尋 LessonPracticePanel。',
        },
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'lessonDemo / playgroundDefaults',
          purpose: '這裡決定 props lesson 何時顯示 demo，以及 playground 預設載入哪段程式碼。',
          lookFor: '搜尋 lessonDemo 或 playgroundDefaults。',
        },
      ],
      searchKeywords: ['PropsLessonDemo', 'WelcomeCard', 'learnerName', 'onRetry', 'LessonPracticePanel'],
    },
    playground: {
      title: '可編輯 Props 實驗室',
      description: '你可以先改父元件準備好的資料，再觀察右側預覽的子元件 props 內容怎麼跟著改變。',
      instructions: [
        '先把 learnerName 改成自己的名字。',
        '再把 topic 改成 `useEffect` 或你正在學的主題。',
        '最後把 highlight 在 true / false 之間切換，觀察預覽狀態。',
      ],
      supportedEdits: ["const learnerName = '小美'", "const topic = 'Props 傳值'", 'const highlight = true / false'],
      emptyHint: '這個 playground 先專注在「父元件改資料，子元件 props 跟著變」的核心感受。',
    },
    playgroundCode: `const learnerName = '小美'
const topic = 'Props 傳值'
const highlight = false

<WelcomeCard
  learnerName={learnerName}
  topic={topic}
  highlight={highlight}
/>`,
    confidenceTasks: [
      '我知道 props 是父元件傳給子元件的資料。',
      '我知道子元件不應直接修改 props。',
      '我能分辨什麼時候是在傳資料、什麼時候是在傳函式。',
    ],
    quizQuestions: [
      {
        id: 'props-q1',
        prompt: '父元件把資料交給子元件時，最常用什麼？',
        options: ['props', 'CSS animation', 'SQL query'],
        answer: 'props',
        explanation: '在 React 中，父 -> 子 的資料傳遞通常就是透過 props。',
      },
      {
        id: 'props-q2',
        prompt: '`<WelcomeCard topic="React Props" />` 裡的 `topic` 是什麼？',
        options: ['一個 prop 名稱', '一個 hook', '一個 API endpoint'],
        answer: '一個 prop 名稱',
        explanation: '這是在 JSX 上傳給子元件的屬性名稱。',
      },
      {
        id: 'props-q3',
        prompt: '如果子元件想讓父元件重新執行某個動作，最常見的做法是？',
        options: ['傳函式 props，讓子元件呼叫它', '直接在子元件裡修改 props', '先改 CSS 顏色'],
        answer: '傳函式 props，讓子元件呼叫它',
        explanation: '這樣資料仍由父元件管理，但子元件可以透過回呼函式發出互動。',
      },
    ],
    scenarioChallenge: {
      title: '情境題：你做了一張子元件卡片，想讓它顯示父元件選到的主題',
      situation: '父元件目前有 `selectedTopic` state。你希望 WelcomeCard 隨著這個值更新，最合理的做法是什麼？',
      options: [
        {
          id: 'props-scenario-a',
          label: '把 `selectedTopic` 當成 props 傳給 `<WelcomeCard topic={selectedTopic} />`',
          isCorrect: true,
          explanation: '對，這就是最標準的父傳子資料流。',
        },
        {
          id: 'props-scenario-b',
          label: '在子元件裡自己寫死 `const topic = "React"`',
          isCorrect: false,
          explanation: '這樣子元件就不會隨著父元件狀態更新。',
        },
      ],
    },
    reactCode: `function WelcomeCard({ learnerName, topic, highlight, onRetry }) {
  return (
    <article className={highlight ? 'card highlight' : 'card'}>
      <h3>{learnerName}</h3>
      <p>目前練習主題：{topic}</p>
      <button type="button" onClick={onRetry}>再提醒我一次</button>
    </article>
  )
}

function PropsDemo() {
  const [learnerName, setLearnerName] = useState('小美')
  const [topic, setTopic] = useState('Props 傳值')

  function handleRetry() {
    console.log('child 想請 parent 再做一次')
  }

  return (
    <WelcomeCard
      learnerName={learnerName}
      topic={topic}
      highlight={topic === 'useEffect'}
      onRetry={handleRetry}
    />
  )
}`,
    springCode: `// 這一課主要是 React 元件之間的資料傳遞。
// 後端不會直接參與 props 傳值；
// 它的角色通常是在父元件需要資料時提供 API。

@GetMapping("/overview")
public LearningOverviewResponse getOverview() {
    return learningLabService.getOverview();
}`,
    flowCode: `父元件 state 改變
  -> React 重新 render 父元件
  -> JSX 把最新 props 傳給 <WelcomeCard />
  -> 子元件重新 render 顯示最新資料
  -> 若子元件呼叫 onRetry()，真正改 state 的仍然是父元件`,
  },
  form: {
    title: '表單控制與資料送出',
    goal: '理解 controlled component、fetch POST 與後端驗證。',
    firstConcepts: [
      '表單欄位的值可以交給 React state 管理，這種方式叫 controlled component。',
      '送出表單時，前端會把 state 組成 JSON，傳給後端 API。',
    ],
    practiceSteps: [
      '輸入你的名字與想問的問題。',
      '按下送出，觀察下方筆記清單是否立刻更新。',
      '對照右側程式碼，找出前端 fetch 與後端 @PostMapping 的對應。',
    ],
    practiceChallenges: [
      {
        title: '挑戰 1：刻意觸發驗證錯誤',
        action: '把姓名或問題留空，思考為什麼按鈕會被禁用，後端又為什麼仍需要驗證。',
        verify: '你知道前端禁用按鈕只是第一層，後端驗證才是最後防線。',
      },
      {
        title: '挑戰 2：追出 JSON 形狀',
        action: '在表單送出前，先口頭說出 body 裡會有哪些欄位。',
        verify: '你能完整說出 `learnerName`、`feature`、`question`。',
      },
      {
        title: '挑戰 3：對照前後端檔案',
        action: '從 `handleSubmit` 追到 `createNote`，再追到 `LearningNoteRequest`。',
        verify: '你知道哪一層負責送資料、哪一層負責接資料、哪一層負責驗證。',
      },
    ],
    commonPitfalls: [
      '忘了寫 event.preventDefault()，導致瀏覽器直接重新整理。',
      '不知道為什麼輸入框要綁 value，因為 React 要掌握欄位目前的值。',
    ],
    mistakeClinic: [
      {
        title: '表單一送出頁面就刷新',
        wrongThought: '是不是 React 壞掉了？',
        correction: '通常是忘了 `event.preventDefault()`，瀏覽器做了預設送出行為。',
      },
      {
        title: '輸入框明明有值，但 state 沒同步',
        wrongThought: 'input 裡有字就代表 React 已經知道了。',
        correction: '只有 `value + onChange` 這組 controlled component 寫法，React 才真的掌握欄位值。',
      },
    ],
    syntaxPoints: [
      'value={form.learnerName} 與 onChange 讓輸入框受 React state 控制。',
      'fetch(url, { method: "POST" }) 會把資料送到後端。',
      '@Valid @RequestBody 會讓 Spring Boot 驗證傳入 JSON。',
    ],
    syntaxWalkthrough: [
      'onChange 事件把輸入值寫回 form state。',
      'handleSubmit 先阻止預設送出行為，再用 fetch 發送 POST。',
      '收到後端回應後，用 setNotes 把新資料插入畫面最上方。',
    ],
    codeNavigation: {
      mission: '目標是找到「輸入框怎麼連到 state」與「送出時誰呼叫了 API」。',
      beforeYouRead: [
        '先找 form state 的初始值，確認有哪些欄位。',
        '再找 handleInputChange，理解 onChange 怎麼更新 state。',
        '最後找 handleSubmit 與後端的 createNote。',
      ],
      filePointers: [
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'const [form, setForm] = useState(...)',
          purpose: '這裡定義了表單目前的資料狀態。',
          lookFor: '搜尋 setForm 或 learnerName。',
        },
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'handleSubmit',
          purpose: '這裡會組出 JSON 並發送 POST 請求。',
          lookFor: '搜尋 POST /api/learning/notes 或 handleSubmit。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningLabController.java',
          symbol: 'createNote',
          purpose: '這是 Spring Boot 接住 POST /notes 的入口。',
          lookFor: '搜尋 @PostMapping("/notes")。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningNoteRequest.java',
          symbol: 'LearningNoteRequest',
          purpose: '這裡定義後端期待收到哪些欄位。',
          lookFor: '搜尋 learnerName、feature、question。',
        },
      ],
      searchKeywords: ['setForm', 'handleInputChange', 'handleSubmit', '@PostMapping("/notes")'],
    },
    playground: {
      title: '可編輯 Form 實驗室',
      description: '你可以改 placeholder、預設主題、按鈕文案，然後用本地預覽了解表單 state 最後會組成什麼 JSON。',
      instructions: [
        '先把 feature 的預設值改成你想學的主題。',
        '再修改 input placeholder 與送出按鈕文字。',
        '套用後，在右側表單輸入資料並送出，觀察預覽 JSON。',
      ],
      supportedEdits: [
        "feature: '自訂主題'",
        'placeholder="你的提示文字"',
        '<button type="submit">按鈕文字</button>',
      ],
      emptyHint: '這裡是本地表單沙盒，不會污染後端資料，但能幫你熟悉欄位與 JSON 結構。',
    },
    confidenceTasks: [
      '我知道 input 的 `value` 與 `onChange` 是一組。',
      '我知道送出前為什麼要先 `event.preventDefault()`。',
      '我能說出後端收到的欄位有 `learnerName`、`feature`、`question`。',
    ],
    quizQuestions: [
      {
        id: 'form-q1',
        prompt: 'controlled component 的核心概念是什麼？',
        options: ['輸入框的值由 React state 控制', '輸入框永遠不能修改', '表單只能送到本地端'],
        answer: '輸入框的值由 React state 控制',
        explanation: 'value 來自 state，onChange 再把使用者輸入寫回 state，這就是 controlled component。',
      },
      {
        id: 'form-q2',
        prompt: '這個表單送出到哪個 API？',
        options: ['/api/learning/notes', '/api/learning/overview', '/api/login'],
        answer: '/api/learning/notes',
        explanation: '在 `handleSubmit` 中，`fetch` 使用的是 `POST /api/learning/notes`。',
      },
      {
        id: 'form-q3',
        prompt: '哪個後端語法會要求 Spring Boot 驗證傳入的 JSON？',
        options: ['@Valid @RequestBody', 'useMemo', 'className'],
        answer: '@Valid @RequestBody',
        explanation: '`@RequestBody` 代表把 JSON 轉成 Java 物件，`@Valid` 代表要一起做欄位驗證。',
      },
    ],
    scenarioChallenge: {
      title: '情境題：你送出表單後整頁重整，筆記也沒新增',
      situation: '你檢查後發現 fetch 根本還沒執行。最可能先檢查哪裡？',
      options: [
        {
          id: 'form-scenario-a',
          label: '先看 handleSubmit 裡有沒有 `event.preventDefault()`',
          isCorrect: true,
          explanation: '對，這是表單新手最常遇到的第一個卡點。',
        },
        {
          id: 'form-scenario-b',
          label: '先把 Vite 重裝',
          isCorrect: false,
          explanation: '這個問題通常先從 submit 流程檢查，而不是先重裝工具。',
        },
      ],
    },
    reactCode: `const [form, setForm] = useState({
  learnerName: '',
  feature: '表單控制與資料送出',
  question: '',
})

<input
  name="learnerName"
  value={form.learnerName}
  onChange={handleInputChange}
  placeholder="例如：小美"
/>

<button type="submit">送出到 Spring Boot</button>

async function handleSubmit(event) {
  event.preventDefault()

  const response = await fetch('/api/learning/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  const created = await response.json()
  setNotes((current) => [created, ...current])
}`,
    springCode: `@PostMapping("/notes")
@ResponseStatus(HttpStatus.CREATED)
public LearningNoteResponse createNote(
        @Valid @RequestBody LearningNoteRequest request
) {
    return learningLabService.createNote(request);
}

public record LearningNoteRequest(
        @NotBlank String learnerName,
        @NotBlank String feature,
        @NotBlank String question
) {}`,
    flowCode: `使用者輸入表單
  -> React onChange 更新 form state
  -> submit 時 fetch POST /api/learning/notes
  -> Spring Controller 接收 JSON
  -> Service 建立新筆記
  -> 回傳 JSON 給 React
  -> setNotes 更新列表`,
  },
  api: {
    title: 'API 資料流',
    goal: '觀察 React 與 Spring Boot 如何交換 JSON 並更新畫面。',
    firstConcepts: [
      'React 需要資料時會主動呼叫 API，不是後端自己把資料推過來。',
      '後端回傳 JSON 後，前端會把資料放進 state，再渲染到畫面上。',
    ],
    practiceSteps: [
      '按下重新載入 API，查看最新 JSON 回應。',
      '觀察「事件紀錄」與「最新 API 回應」兩個區塊。',
      '對照右側程式碼，理解 useEffect 與 @GetMapping 的關係。',
    ],
    practiceChallenges: [
      {
        title: '挑戰 1：比較兩個 endpoint',
        action: '在 API playground 中把 endpoint 在 `overview` 與 `notes` 之間切換。',
        verify: '你知道一個回物件，一個回陣列。',
      },
      {
        title: '挑戰 2：追蹤非同步流程',
        action: '從 `handleRefresh` / `loadOverview` 出發，說出 `fetch -> response.json() -> setState` 的順序。',
        verify: '你知道 JSON 不是直接進畫面，而是先進 state。',
      },
      {
        title: '挑戰 3：觀察 fallback 策略',
        action: '想像後端沒有啟動時，這個頁面為什麼仍能顯示教材內容？',
        verify: '你能回答：因為前端有 `learningContent.js` 的 fallback 教材。',
      },
    ],
    commonPitfalls: [
      '以為 fetch 一呼叫就立刻有資料，但其實要等待 Promise 完成。',
      '看不懂 JSON 與畫面關係，其實就是先轉成 JavaScript 物件，再丟進 state。',
    ],
    mistakeClinic: [
      {
        title: '以為 fetch 完畫面會自動變',
        wrongThought: '我都拿到 response 了，為什麼畫面沒變？',
        correction: '因為還要把資料放進 state，React 畫面通常是讀 state，不是直接讀 response。',
      },
      {
        title: '看見 JSON 就開始慌',
        wrongThought: '這些看起來很長，我是不是看不懂 API？',
        correction: '先只找你要的欄位，例如 title、lessons、data；不用一次看完整份 JSON。',
      },
    ],
    syntaxPoints: [
      'useEffect(() => { ... }, []) 會在元件第一次渲染後執行。',
      'await response.json() 會把後端回應轉成 JavaScript 物件。',
      'Spring Boot 會把 Java record 自動序列化成 JSON。',
    ],
    syntaxWalkthrough: [
      'useEffect 讓元件一載入就先抓 overview 與 notes。',
      'loadOverview / loadNotes 會 await API 回應，並把 JSON 存進 state。',
      '畫面不是直接讀 API，而是讀 React state，所以 state 一更新畫面就同步改變。',
    ],
    codeNavigation: {
      mission: '目標是串起「React 何時發請求」與「Spring Boot 由誰回傳 JSON」。',
      beforeYouRead: [
        '先找 useEffect，確認畫面一載入時會做哪些事。',
        '再找 loadOverview / loadNotes，確認 fetch 的 endpoint。',
        '最後去後端找同名路徑的 @GetMapping。',
      ],
      filePointers: [
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'useEffect + loadOverview + loadNotes',
          purpose: '這裡決定什麼時候要向後端拿資料。',
          lookFor: '搜尋 useEffect(() => 或 loadOverview。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningLabController.java',
          symbol: 'getOverview / getNotes',
          purpose: '這裡定義 GET API 路徑。',
          lookFor: '搜尋 @GetMapping("/overview") 與 @GetMapping("/notes")。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningLabService.java',
          symbol: 'getOverview / getNotes',
          purpose: '這裡可以看到後端實際回傳哪些資料。',
          lookFor: '搜尋 new LearningOverviewResponse 或 getNotes。',
        },
      ],
      searchKeywords: ['loadOverview', 'loadNotes', '@GetMapping("/overview")', 'LearningOverviewResponse'],
    },
    playground: {
      title: '可編輯 API 實驗室',
      description: '你可以改 fetch 的 endpoint 與按鈕文案，套用後直接測試目前 API 會回什麼 JSON。',
      instructions: [
        '先把 endpoint 在 overview 與 notes 之間切換。',
        '再修改按鈕文案，確認預覽也一起更新。',
        '套用後按下按鈕，觀察右側 API 結果與事件紀錄。',
      ],
      supportedEdits: ["const endpoint = '/api/learning/overview'", '<button type="button">按鈕文字</button>'],
      emptyHint: '建議先在 overview 與 notes 之間切換，感受同一段 fetch 換 endpoint 後結果會如何改變。',
    },
    confidenceTasks: [
      '我知道 `useEffect` 常用來在畫面載入後抓資料。',
      '我知道 `response.json()` 之後拿到的是 JavaScript 物件。',
      '我可以從 `fetch` 追到 `@GetMapping`。',
    ],
    quizQuestions: [
      {
        id: 'api-q1',
        prompt: '哪一段負責把後端回應轉成前端可用的物件？',
        options: ['response.json()', 'setLoading(true)', 'appendLog(...)'],
        answer: 'response.json()',
        explanation: '`await response.json()` 會把 HTTP 回應內容解析成 JavaScript 物件。',
      },
      {
        id: 'api-q2',
        prompt: 'Spring Boot 的哪個地方通常負責定義 API 路徑？',
        options: ['Controller 的 @GetMapping / @PostMapping', 'CSS 檔案', 'Vite config 的 plugins'],
        answer: 'Controller 的 @GetMapping / @PostMapping',
        explanation: '像 `LearningLabController` 會用 `@GetMapping`、`@PostMapping` 宣告 API。',
      },
      {
        id: 'api-q3',
        prompt: '為什麼 React 這邊要把 API 回應先放進 state？',
        options: ['因為 state 更新後畫面才知道要重新渲染', '因為 fetch 只能在 CSS 裡用', '因為 Spring Boot 規定一定要這樣'],
        answer: '因為 state 更新後畫面才知道要重新渲染',
        explanation: 'React 的畫面通常是根據 state render，所以 API 資料也會先進 state。',
      },
    ],
    scenarioChallenge: {
      title: '情境題：你成功拿到 API response，但畫面還是空白',
      situation: 'console 裡看得到資料，代表 fetch 已經成功。下一步最應該檢查什麼？',
      options: [
        {
          id: 'api-scenario-a',
          label: '檢查資料有沒有被 `setState` 到 React state',
          isCorrect: true,
          explanation: '對，畫面通常吃的是 state，不是直接吃 fetch 當下的 response。',
        },
        {
          id: 'api-scenario-b',
          label: '先改 favicon',
          isCorrect: false,
          explanation: '這跟資料流無關。',
        },
      ],
    },
    reactCode: `const endpoint = '/api/learning/overview'

useEffect(() => {
  loadOverview()
  loadNotes()
}, [])

async function loadOverview() {
  const response = await fetch(endpoint)
  const data = await response.json()
  setOverview(data)
  setResponsePreview({ endpoint: 'GET /api/learning/overview', body: data })
}

<button type="button">重新抓取 overview</button>`,
    springCode: `@GetMapping("/overview")
public LearningOverviewResponse getOverview() {
    return learningLabService.getOverview();
}

public LearningOverviewResponse getOverview() {
    return new LearningOverviewResponse(
            "React + Spring Boot Learning Lab",
            "用互動頁面直接觀察完整資料流",
            architectureSteps,
            lessons,
            tips
    );
}`,
    flowCode: `React 啟動
  -> useEffect 呼叫 loadOverview / loadNotes
  -> fetch 向 Spring Boot 要資料
  -> Controller 呼叫 Service
  -> Service 回傳 Java 物件
  -> Spring Boot 轉成 JSON
  -> React setState 後更新畫面`,
  },
  backendCrud: {
    title: '後端 CRUD 與資料同步',
    goal: '理解 GET / POST / PUT / DELETE 如何讓前後端資料保持一致。',
    firstConcepts: [
      'CRUD 代表 Create、Read、Update、Delete，是後端最常見的基本能力。',
      '前端除了送出資料，還要處理更新後的畫面同步與錯誤狀態。',
    ],
    practiceSteps: [
      '先在下方選一筆 note，觀察目前內容。',
      '再操作搜尋、feature filter 與分頁，觀察列表 API 如何只回一小頁資料。',
      '修改問題文字後送出更新，觀察列表與預覽 JSON。',
      '再試著刪除一筆 note，理解為什麼 delete 後清單需要同步刷新。',
    ],
    practiceChallenges: [
      {
        title: '挑戰 1：完整走一次 CRUD',
        action: '依序做 GET 單筆、PUT 更新、DELETE 刪除。',
        verify: '你能說出每個 HTTP method 在做什麼。',
      },
      {
        title: '挑戰 2：解釋為什麼要帶 id',
        action: '思考為什麼 update / delete 都需要 note id。',
        verify: '你知道後端要靠 id 才知道要修改哪一筆資料。',
      },
      {
        title: '挑戰 3：觀察前端同步方式',
        action: '更新成功後，找出前端是重新抓資料還是直接改 state。',
        verify: '你能指出畫面同步的策略。',
      },
    ],
    commonPitfalls: [
      '只寫後端 API，卻忘了前端也要同步更新畫面。',
      '更新或刪除時忘了處理找不到 id 的情況。',
    ],
    mistakeClinic: [
      {
        title: '只顧著寫 CRUD，不知道為什麼列表沒變',
        wrongThought: '後端成功了，前端應該會自己更新吧？',
        correction: '前端還是要重新抓資料或更新 state，畫面不會自己同步。',
      },
      {
        title: '看到分頁回應就不敢讀',
        wrongThought: '為什麼不是直接回陣列？這樣好複雜。',
        correction: '真實專案常需要 totalCount、totalPages、hasNext，這些資訊能幫助前端做列表操作。',
      },
    ],
    syntaxPoints: [
      '`@PutMapping` 常用來更新既有資料。',
      '`@DeleteMapping` 常用來刪除既有資料。',
      '前端可以用 `fetch(..., { method: "PUT" | "DELETE" })` 呼叫對應 API。',
      '真實專案的列表 API 常會回傳 `totalCount`、`totalPages`、`hasNext` 這類分頁資訊。',
    ],
    syntaxWalkthrough: [
      '先用 `GET /api/learning/notes/{id}` 讀單筆資料。',
      '修改表單內容後，用 `PUT /api/learning/notes/{id}` 更新。',
      '刪除時呼叫 `DELETE /api/learning/notes/{id}`，再同步清單。',
    ],
    codeNavigation: {
      mission: '目標是把單筆查詢、更新、刪除三條路線從前端追到後端。',
      beforeYouRead: [
        '先找前端 CRUD handler。',
        '再找 `loadNotes` 如何把 page / size / query / feature 組成 query string。',
        '再找 Controller 裡的 `@GetMapping("/{id}")`、`@PutMapping`、`@DeleteMapping`。',
        '最後去 Service 看資料是怎麼被找出、替換或刪除。',
      ],
      filePointers: [
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'loadNotes + noteQuery + notePagination',
          purpose: '這裡負責把搜尋、filter、分頁條件送到後端。',
          lookFor: '搜尋 loadNotes 或 notePagination。',
        },
        {
          filePath: 'react_learning_example/src/App.jsx',
          symbol: 'handleLoadSingleNote / handleUpdateNote / handleDeleteNote',
          purpose: '這裡負責呼叫 CRUD API 並同步前端 state。',
          lookFor: '搜尋 handleUpdateNote 或 handleDeleteNote。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningLabController.java',
          symbol: 'getNote / updateNote / deleteNote',
          purpose: '這裡定義 CRUD endpoint。',
          lookFor: '搜尋 @PutMapping、@DeleteMapping。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningLabService.java',
          symbol: 'updateNote / deleteNote',
          purpose: '這裡有真正修改資料清單的邏輯。',
          lookFor: '搜尋 updateNote 或 deleteNote。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningNoteRepository.java',
          symbol: 'LearningNoteRepository',
          purpose: '這裡是資料層抽象，讓 Service 不直接綁死儲存細節。',
          lookFor: '搜尋 LearningNoteRepository。',
        },
        {
          filePath: 'src/main/java/com/example/react_learning/learning/LearningNoteMapper.java',
          symbol: 'LearningNoteMapper',
          purpose: '這裡把 request / entity / response 的轉換集中處理。',
          lookFor: '搜尋 LearningNoteMapper。',
        },
      ],
      searchKeywords: ['loadNotes', 'notePagination', 'PUT /api/learning/notes', 'DELETE /api/learning/notes', 'LearningNoteRepository', 'LearningNoteMapper'],
    },
    playground: {
      title: '可編輯 CRUD 實驗室',
      description: '試著改 API 路徑與按鈕文案，理解 CRUD endpoint 是如何被組出來的。',
      instructions: [
        '把 endpoint 改成你想測試的 note id。',
        '修改更新按鈕文字。',
        '套用後回到 CRUD 區，對照目前操作流程。',
      ],
      supportedEdits: ["const endpoint = '/api/learning/notes/1'", '<button type="button">更新按鈕文字</button>'],
      emptyHint: '這個實驗室幫你熟悉 CRUD endpoint 與文案，不直接改動真實資料。',
    },
    confidenceTasks: [
      '我知道 CRUD 各自對應 Create / Read / Update / Delete。',
      '我知道更新與刪除通常都要帶 id。',
      '我能從前端 handler 追到後端 CRUD endpoint。',
    ],
    quizQuestions: [
      {
        id: 'crud-q1',
        prompt: '哪個 HTTP method 最常用來更新一筆既有資料？',
        options: ['PUT', 'DELETE', 'PATCH CSS'],
        answer: 'PUT',
        explanation: '在這個專案中，我們用 PUT 來示範更新 note。',
      },
      {
        id: 'crud-q2',
        prompt: '為什麼刪除 note 時要知道 id？',
        options: ['因為要知道刪哪一筆', '因為 React 規定', '因為 JSON 不能沒有 id'],
        answer: '因為要知道刪哪一筆',
        explanation: '後端需要一個明確的識別值，才知道要操作哪一筆資料。',
      },
      {
        id: 'crud-q3',
        prompt: '哪個地方通常負責真正改動後端資料集合？',
        options: ['Service', 'CSS', 'Vite build'],
        answer: 'Service',
        explanation: 'Controller 通常接請求，實際資料處理則放在 Service。',
      },
    ],
    scenarioChallenge: {
      title: '情境題：你刪掉一筆 note 後，列表還停在舊資料',
      situation: '後端已回 204 No Content，但畫面上的資料沒有變。這時你最應該做什麼？',
      options: [
        {
          id: 'crud-scenario-a',
          label: '重新抓 notes，或同步把 notes state 裡那筆資料移掉',
          isCorrect: true,
          explanation: '對，重點是讓前端 state 跟後端結果一致。',
        },
        {
          id: 'crud-scenario-b',
          label: '先改 README',
          isCorrect: false,
          explanation: '這不是畫面同步問題的根因。',
        },
      ],
    },
    reactCode: `const endpoint = '/api/learning/notes/1'

<button type="button">讀取單筆 note</button>

async function handleUpdateNote(id) {
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editForm),
  })

  const updated = await response.json()
  setNotes((current) => current.map((note) => (note.id === updated.id ? updated : note)))
}`,
    springCode: `@PutMapping("/notes/{id}")
public LearningNoteResponse updateNote(
        @PathVariable long id,
        @Valid @RequestBody LearningNoteRequest request
) {
    return learningLabService.updateNote(id, request);
}

@DeleteMapping("/notes/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)
public void deleteNote(@PathVariable long id) {
    learningLabService.deleteNote(id);
}`,
    flowCode: `使用者選到某筆 note
  -> 前端用 id 呼叫 GET /notes/{id}
  -> 修改後送 PUT /notes/{id}
  -> Service 找到並更新資料
  -> 回傳最新 JSON
  -> 前端同步更新 notes state
  -> 若刪除則呼叫 DELETE /notes/{id}`,
  },
}

export const capstoneProject = {
  id: 'capstone-taskboard',
  title: '全端小專案實戰：自己做一個 TaskBoard',
  subtitle: '從 Java record 到 React 元件，每一行都自己寫，平台會真的打你的 API 驗收',
  goal: '在這個專案裡新增一個全新的 /api/tasks 功能：後端四個檔案 + 前端一個元件，做出可以新增、勾選完成、刪除的任務清單。',
  apiContract: [
    'GET    /api/tasks           -> 200，回傳任務陣列',
    'POST   /api/tasks           -> 201，建立任務（title 不能空白）',
    'PUT    /api/tasks/{id}/toggle -> 200，切換 done 狀態',
    'DELETE /api/tasks/{id}      -> 204，刪除任務',
  ],
  rules: [
    '照著 Stage 順序做，每完成一步就勾起來，進度會自動保存。',
    '先自己寫，卡住超過 10 分鐘再打開「參考解答」。',
    'Stage 3 與 Stage 4 完成後，按「自動驗收」讓平台真的打你的 API 檢查。',
    '改完 Java 檔案要重啟 Spring Boot（mvnw spring-boot:run）才會生效。',
  ],
  stages: [
    {
      id: 'stage-model',
      phase: 'backend',
      title: 'Stage 1：定義資料模型（record）',
      intro: '先決定一筆 task 長什麼樣子。建立新的 package 和兩個 record：內部資料 Task、前端送進來的 TaskRequest。',
      steps: [
        {
          id: 'model-package',
          title: '建立 task package 與 Task record',
          instruction: '在 src/main/java/com/example/react_learning/ 底下建立新資料夾 task，並新增 Task.java：一筆任務要有 id（long）、title（String）、done（boolean）、createdAt（Instant）。',
          checkpoint: '檔案可以編譯，欄位順序是 id、title、done、createdAt。',
          hint: `package com.example.react_learning.task;

import java.time.Instant;

public record Task(
        long id,
        String title,
        boolean done,
        Instant createdAt
) {
}`,
        },
        {
          id: 'model-request',
          title: '建立 TaskRequest record（含驗證）',
          instruction: '新增 TaskRequest.java，只需要一個 title 欄位。加上 @NotBlank 與 @Size(max = 60)，這就是之後 POST 會回 400 的關鍵。',
          checkpoint: '你能說出為什麼 Request 和內部的 Task 要分成兩個 record。',
          hint: `package com.example.react_learning.task;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record TaskRequest(
        @NotBlank(message = "請輸入任務內容")
        @Size(max = 60, message = "任務內容最多 60 個字")
        String title
) {
}`,
        },
      ],
    },
    {
      id: 'stage-repository',
      phase: 'backend',
      title: 'Stage 2：Repository（記憶體儲存）',
      intro: '模仿 InMemoryLearningNoteRepository 的做法，做一個存 task 的 repository。',
      steps: [
        {
          id: 'repo-class',
          title: '建立 TaskRepository',
          instruction: '新增 TaskRepository.java，加上 @Repository。用 CopyOnWriteArrayList 存資料、AtomicLong 產生 id。需要五個方法：findAll、findById、save、deleteById、nextId。',
          checkpoint: 'findById 回傳 Optional<Task>，deleteById 回傳 boolean。',
          hint: `package com.example.react_learning.task;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class TaskRepository {

    private final CopyOnWriteArrayList<Task> tasks = new CopyOnWriteArrayList<>();
    private final AtomicLong idGenerator = new AtomicLong(0);

    public List<Task> findAll() {
        return List.copyOf(tasks);
    }

    public Optional<Task> findById(long id) {
        return tasks.stream().filter(task -> task.id() == id).findFirst();
    }

    public Task save(Task task) {
        tasks.add(0, task);
        return task;
    }

    public Task replace(Task updated) {
        tasks.replaceAll(task -> task.id() == updated.id() ? updated : task);
        return updated;
    }

    public boolean deleteById(long id) {
        return tasks.removeIf(task -> task.id() == id);
    }

    public long nextId() {
        return idGenerator.incrementAndGet();
    }
}`,
        },
        {
          id: 'repo-compare',
          title: '對照筆記功能的 repository',
          instruction: '打開 InMemoryLearningNoteRepository.java，逐一比對你的版本：哪些方法一樣？replace 跟 update 差在哪？',
          checkpoint: '你能解釋 CopyOnWriteArrayList 跟一般 ArrayList 的差別（多執行緒安全）。',
          hint: `// 對照重點：
// 1. notes 版把介面(LearningNoteRepository)和實作分開，
//    task 版直接寫一個 class，兩種都可以，介面版更好測試。
// 2. removeIf(condition) 會回傳「有沒有刪到東西」，
//    這個 boolean 之後會決定要不要丟 404。
// 3. AtomicLong.incrementAndGet() 保證 id 不重複。`,
        },
      ],
    },
    {
      id: 'stage-read-api',
      phase: 'backend',
      title: 'Stage 3：Service + Controller（先做 GET / POST）',
      intro: '把資料接上 HTTP。先做最簡單的兩個 endpoint：查列表、新增任務。做完就可以按自動驗收。',
      verify: {
        id: 'verify-tasks-read',
        label: '自動驗收：GET + POST',
        description: '平台會打 GET /api/tasks 確認回 200 陣列，再 POST 一筆確認回 201 且拿得到 id。',
      },
      steps: [
        {
          id: 'read-service',
          title: '建立 TaskService',
          instruction: '新增 TaskService.java，加上 @Service，用建構子注入 TaskRepository。先寫兩個方法：getTasks() 回傳全部、createTask(TaskRequest) 建立新任務（done 預設 false、createdAt 用 Instant.now()）。',
          checkpoint: 'createTask 裡有 repository.nextId() 和 Instant.now()。',
          hint: `package com.example.react_learning.task;

import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(TaskRequest request) {
        Task task = new Task(
                taskRepository.nextId(),
                request.title().trim(),
                false,
                Instant.now()
        );
        return taskRepository.save(task);
    }
}`,
        },
        {
          id: 'read-controller',
          title: '建立 TaskController',
          instruction: '新增 TaskController.java：@RestController + @RequestMapping("/api/tasks")。GET 對應 getTasks，POST 對應 createTask，記得加 @Valid 和 @ResponseStatus(HttpStatus.CREATED)。',
          checkpoint: 'POST 成功時 status 是 201 而不是 200。',
          hint: `package com.example.react_learning.task;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task createTask(@Valid @RequestBody TaskRequest request) {
        return taskService.createTask(request);
    }
}`,
        },
        {
          id: 'read-restart',
          title: '重啟後端並手動測一次',
          instruction: '重啟 Spring Boot，然後在瀏覽器打開 http://localhost:8080/api/tasks，應該看到 []。再按下面的「自動驗收」按鈕。',
          checkpoint: '瀏覽器看得到 []，自動驗收顯示通過。',
          hint: `# 重啟指令（專案根目錄）
.\\mvnw.cmd spring-boot:run

# 或先跑測試確認沒編譯錯誤
.\\mvnw.cmd test`,
        },
      ],
    },
    {
      id: 'stage-write-api',
      phase: 'backend',
      title: 'Stage 4：完成 toggle 與 delete',
      intro: '補上切換完成狀態與刪除。這關會用到 404 處理，跟筆記功能的 findNoteOrThrow 是同一個模式。',
      verify: {
        id: 'verify-tasks-crud',
        label: '自動驗收：完整 CRUD',
        description: '平台會建立一筆任務 → toggle 確認 done 變 true → 刪除確認 204 → 空白 title 確認回 400。',
      },
      steps: [
        {
          id: 'write-service',
          title: 'Service 加上 toggleTask 與 deleteTask',
          instruction: 'toggleTask(id)：先 findById，找不到就丟 ResponseStatusException(NOT_FOUND)，找到就用 replace 存一個 done 相反的新 Task。deleteTask(id)：deleteById 回 false 就丟 404。',
          checkpoint: 'record 是不可變的，所以 toggle 是「建立新物件」而不是改舊物件。',
          hint: `// 加進 TaskService（記得 import ResponseStatusException 與 NOT_FOUND）
public Task toggleTask(long id) {
    Task current = taskRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                    NOT_FOUND, "找不到任務: " + id));
    Task toggled = new Task(
            current.id(),
            current.title(),
            !current.done(),
            current.createdAt()
    );
    return taskRepository.replace(toggled);
}

public void deleteTask(long id) {
    if (!taskRepository.deleteById(id)) {
        throw new ResponseStatusException(NOT_FOUND, "找不到要刪除的任務: " + id);
    }
}`,
        },
        {
          id: 'write-controller',
          title: 'Controller 加上 PUT 與 DELETE',
          instruction: 'PUT /api/tasks/{id}/toggle 對應 toggleTask，DELETE /api/tasks/{id} 對應 deleteTask（記得 @ResponseStatus(HttpStatus.NO_CONTENT)）。',
          checkpoint: 'DELETE 成功回 204，刪不存在的 id 回 404。',
          hint: `// 加進 TaskController
@PutMapping("/{id}/toggle")
public Task toggleTask(@PathVariable long id) {
    return taskService.toggleTask(id);
}

@DeleteMapping("/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)
public void deleteTask(@PathVariable long id) {
    taskService.deleteTask(id);
}`,
        },
        {
          id: 'write-verify',
          title: '重啟後端並跑完整驗收',
          instruction: '重啟 Spring Boot 後按「自動驗收」。四個檢查都要過：POST 201、toggle 後 done=true、DELETE 204、空白 title 回 400。',
          checkpoint: '自動驗收四項全過。400 那項能通過，是因為 GlobalExceptionHandler 對整個專案生效。',
          hint: `# 如果 400 那項沒過，檢查：
# 1. TaskRequest 的 title 有沒有 @NotBlank
# 2. Controller 的 @RequestBody 前有沒有 @Valid
# 這兩個少一個，空白 title 就會變成直接存進去。`,
        },
      ],
    },
    {
      id: 'stage-frontend-read',
      phase: 'frontend',
      title: 'Stage 5：React 元件（載入 + 新增）',
      intro: '換前端。建立你自己的 MyTaskBoard 元件：用 useEffect 載入列表、用表單新增任務。',
      steps: [
        {
          id: 'fe-create-file',
          title: '建立 MyTaskBoard.jsx',
          instruction: '在 react_learning_example/src/components/ 新增 MyTaskBoard.jsx。需要兩個 state：tasks（陣列）、title（輸入框文字）。先把畫面骨架寫出來。',
          checkpoint: '元件能 export default，畫面有一個輸入框、一個新增按鈕、一個清單區。',
          hint: `import { useEffect, useState } from 'react'

export default function MyTaskBoard() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  return (
    <div className="info-card">
      <h3>我的 TaskBoard</h3>
      <form>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="今天要做什麼？"
        />
        <button type="submit">新增</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}`,
        },
        {
          id: 'fe-load',
          title: '用 useEffect 載入任務',
          instruction: '寫一個 loadTasks 函式打 GET /api/tasks，用 setTasks 存結果。在 useEffect(() => { loadTasks() }, []) 裡呼叫一次，讓元件掛載時自動載入。',
          checkpoint: '你能說出依賴陣列 [] 的意思：只在第一次 render 後執行一次。',
          hint: `async function loadTasks() {
  const response = await fetch('/api/tasks')
  const data = await response.json()
  setTasks(data)
}

useEffect(() => {
  loadTasks()
}, [])`,
        },
        {
          id: 'fe-create',
          title: '表單送出新任務',
          instruction: 'handleSubmit 裡先 event.preventDefault()，POST title 到 /api/tasks，成功後清空輸入框並重新載入列表。',
          checkpoint: '新增後清單立刻多一筆，重新整理頁面資料還在（存在後端）。',
          hint: `async function handleSubmit(event) {
  event.preventDefault()
  if (!title.trim()) {
    return
  }

  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  })
  setTitle('')
  await loadTasks()
}

// 記得掛到 form 上：<form onSubmit={handleSubmit}>`,
        },
      ],
    },
    {
      id: 'stage-frontend-write',
      phase: 'frontend',
      title: 'Stage 6：完成互動並展示成果',
      intro: '補上勾選完成與刪除，最後把你的元件掛到頁面上的成果展示區。',
      steps: [
        {
          id: 'fe-toggle',
          title: '勾選切換完成狀態',
          instruction: '每個 li 加一個 checkbox，checked={task.done}，onChange 時 PUT /api/tasks/{id}/toggle 然後重新載入。完成的任務加上刪除線樣式。',
          checkpoint: '勾選後重新整理頁面，勾選狀態還在。',
          hint: `async function handleToggle(id) {
  await fetch(\`/api/tasks/\${id}/toggle\`, { method: 'PUT' })
  await loadTasks()
}

// li 裡面：
<label style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
  <input
    type="checkbox"
    checked={task.done}
    onChange={() => handleToggle(task.id)}
  />
  {task.title}
</label>`,
        },
        {
          id: 'fe-delete',
          title: '刪除任務',
          instruction: '每個 li 加一個刪除按鈕，DELETE /api/tasks/{id} 後重新載入列表。',
          checkpoint: '刪掉的任務不會再出現，連後端資料也刪了（可以按 Stage 3 驗收再確認一次）。',
          hint: `async function handleDelete(id) {
  await fetch(\`/api/tasks/\${id}\`, { method: 'DELETE' })
  await loadTasks()
}

// li 裡面：
<button type="button" onClick={() => handleDelete(task.id)}>
  刪除
</button>`,
        },
        {
          id: 'fe-mount',
          title: '把 MyTaskBoard 掛上頁面',
          instruction: '打開 App.jsx，搜尋「你的 TaskBoard 放這裡」，照註解把 import 加到最上面、把成果展示區的註解打開。',
          checkpoint: '這個區塊下方的「成果展示區」出現你自己寫的 TaskBoard，而且可以正常操作。',
          hint: `// App.jsx 最上面加：
// import MyTaskBoard from './components/MyTaskBoard'

// 然後找到成果展示區，把 {/* <MyTaskBoard /> */} 的註解拿掉。`,
        },
      ],
    },
  ],
}

export const javaBasicsGuides = [
  {
    id: 'class-object',
    title: '類別與物件',
    summary: 'Java 的程式碼都住在 class 裡，物件是 class 做出來的實體。',
    whyItMatters: '打開任何一個後端檔案，第一眼看到的就是 class。先懂它，其他內容才有掛勾的地方。',
    javaExample: 'public class LearningLabService {\n    // 欄位與方法都寫在 class 裡\n}\n\n// 用 new 做出一個物件\nLearningNoteMapper mapper = new LearningNoteMapper();',
    jsComparison: '// JS 也有 class，只是平常比較常直接寫函式\nclass LearningLabService {\n  // ...\n}\nconst mapper = new LearningNoteMapper()',
    projectPointer: 'LearningLabService.java 整個檔案就是一個 class',
    lookFor: ['public class', 'new '],
  },
  {
    id: 'method-signature',
    title: '方法簽名：回傳型別寫在前面',
    summary: 'Java 方法要先寫「會回傳什麼型別」，沒有回傳就寫 void。',
    whyItMatters: '看懂方法簽名，你就能不看內容先知道這個方法「吃什麼、吐什麼」。',
    javaExample: '// 回傳 LearningNoteResponse，參數是 long id\npublic LearningNoteResponse getNote(long id) {\n    return ...;\n}\n\n// 沒有回傳值\npublic void deleteNote(long id) { ... }',
    jsComparison: '// JS 不用寫型別，但意思一樣\nfunction getNote(id) {\n  return ...\n}\nfunction deleteNote(id) { ... }',
    projectPointer: 'LearningLabService.java 的每一個 public 方法',
    lookFor: ['public LearningNoteResponse', 'public void'],
  },
  {
    id: 'record-dto',
    title: 'record：一行定義資料格式',
    summary: 'record 是專門拿來裝資料的類別，欄位寫在括號裡就完成了。',
    whyItMatters: '這個專案所有 Request / Response 都是 record，它就是前後端的資料契約。',
    javaExample: 'public record LearningNoteResponse(\n        long id,\n        String learnerName,\n        String feature,\n        String question,\n        String createdAt\n) {\n}\n\n// 讀取欄位：note.learnerName()',
    jsComparison: '// 概念上就像一個固定形狀的物件\nconst response = {\n  id: 1,\n  learnerName: \'小美\',\n  feature: \'...\',\n}\n// 差別：record 建立後欄位不能改（不可變）',
    projectPointer: 'LearningNoteResponse.java、LearningNoteRequest.java',
    lookFor: ['public record', 'note.learnerName()'],
  },
  {
    id: 'annotation',
    title: '註解 (Annotation)：@ 開頭的標籤',
    summary: '@RestController、@Valid 這些不是註釋，而是告訴 Spring「這段程式要怎麼被使用」。',
    whyItMatters: 'Spring Boot 幾乎都靠 annotation 運作，看不懂它就看不懂 Controller。',
    javaExample: '@RestController            // 這個 class 負責接 API\n@RequestMapping("/api/learning")\npublic class LearningLabController {\n\n    @PostMapping("/notes")  // 對應 POST /api/learning/notes\n    public LearningNoteResponse createNote(\n            @Valid @RequestBody LearningNoteRequest request) {\n        ...\n    }\n}',
    jsComparison: '// JS 沒有直接對應，比較像「設定 + 掛勾」\n// 概念上等於：\nrouter.post(\'/api/learning/notes\', validate(schema), createNote)',
    projectPointer: 'LearningLabController.java 的 class 與方法上方',
    lookFor: ['@RestController', '@PostMapping', '@Valid'],
  },
  {
    id: 'access-modifier',
    title: 'public / private / final',
    summary: 'public 是別人可以用，private 是只有自己 class 內能用，final 是指定後不能再改。',
    whyItMatters: '這是 Java 控制「誰能碰什麼」的方式，讀程式時能幫你快速判斷邊界。',
    javaExample: 'public class LearningLabService {\n    // 只有這個 class 內能使用，而且不能被換掉\n    private final LearningNoteRepository learningNoteRepository;\n\n    // 任何人都可以呼叫\n    public LearningNotesPageResponse getNotes(...) { ... }\n}',
    jsComparison: '// JS 用 # 表示私有欄位，const 表示不能重新指定\nclass LearningLabService {\n  #repository\n}\nconst repository = ...',
    projectPointer: 'LearningLabService.java 最上面的欄位宣告',
    lookFor: ['private final', 'public '],
  },
  {
    id: 'collections',
    title: 'List 與集合',
    summary: 'List 就是 Java 的陣列清單，List.of(...) 可以直接做出一個固定內容的清單。',
    whyItMatters: '後端回傳的教材清單、步驟、能力列表全都是 List。',
    javaExample: '// 固定內容的 List\nList<String> steps = List.of(\n        "Controller 接請求",\n        "Service 處理邏輯"\n);\n\n// 泛型 <LearningNote> 表示「裝的是 LearningNote」\nList<LearningNote> notes = learningNoteRepository.findAll();',
    jsComparison: '// 就是陣列\nconst steps = [\n  \'Controller 接請求\',\n  \'Service 處理邏輯\',\n]\n// JS 陣列不限制內容型別，Java 的 List<T> 會限制',
    projectPointer: 'LearningLabService.java 的 getBackendLabs()、getOverview()',
    lookFor: ['List.of(', 'List<LearningNote>'],
  },
  {
    id: 'stream',
    title: 'Stream：過濾與轉換資料',
    summary: 'stream().filter().map().toList() 是 Java 處理清單的一條龍寫法。',
    whyItMatters: '筆記列表的搜尋、篩選、轉成 response，都是用 stream 完成的。',
    javaExample: 'List<LearningNoteResponse> data = notes.stream()\n        .filter(note -> note.feature().contains(keyword))\n        .map(learningNoteMapper::toResponse)\n        .toList();',
    jsComparison: '// 幾乎一模一樣\nconst data = notes\n  .filter((note) => note.feature.includes(keyword))\n  .map((note) => toResponse(note))',
    projectPointer: 'LearningLabService.java 的 getNotes() 搜尋與分頁',
    lookFor: ['.stream()', '.filter(', '.map('],
  },
  {
    id: 'exception',
    title: '例外 (Exception)：用丟錯誤來處理找不到',
    summary: '找不到資料時，Java 會 throw 一個例外，讓統一的錯誤處理器接手。',
    whyItMatters: '這就是為什麼你查不存在的筆記會拿到乾淨的 404 JSON，而不是程式直接掛掉。',
    javaExample: 'return learningNoteRepository.findById(id)\n        .orElseThrow(() -> new ResponseStatusException(\n                HttpStatus.NOT_FOUND,\n                "找不到指定的學習筆記: " + id\n        ));',
    jsComparison: '// 概念上像 throw + try/catch\nconst note = notes.find((item) => item.id === id)\nif (!note) {\n  throw new Error(\'找不到指定的學習筆記\')\n}',
    projectPointer: 'LearningLabService.java 的 findNoteOrThrow、GlobalExceptionHandler.java',
    lookFor: ['orElseThrow', 'ResponseStatusException'],
  },
  {
    id: 'constructor-injection',
    title: '建構子注入：class 需要的工具從外面給',
    summary: 'Service 需要 repository 與 mapper，不是自己 new，而是建構子收進來。',
    whyItMatters: '這是 Spring 的核心習慣（依賴注入），也讓測試時可以換成假的實作。',
    javaExample: 'public LearningLabService(\n        LearningNoteRepository learningNoteRepository,\n        LearningNoteMapper learningNoteMapper\n) {\n    this.learningNoteRepository = learningNoteRepository;\n    this.learningNoteMapper = learningNoteMapper;\n}',
    jsComparison: '// 就像 function 的參數，或元件的 props\nfunction createService(repository, mapper) {\n  return { ... }\n}\n// React 的 props 傳入概念也很類似',
    projectPointer: 'LearningLabService.java 的建構子、測試檔的 new LearningLabService(...)',
    lookFor: ['this.learningNoteRepository =', 'public LearningLabService('],
  },
]

export const interviewProjects = [
  {
    id: 'project-shortlink',
    title: '短網址服務（URL Shortener）',
    subtitle: '面試最常見的系統設計入門題，從 JPA Entity 到 302 轉址一次做完',
    goal: '做出一個可以「貼長網址 → 產生短代碼 → 轉址並統計點擊次數」的服務。後端用 JPA 存進真正的資料庫，前端做建立表單與點擊排行。',
    interviewValue: [
      '幾乎每間公司的面試題庫都有它：能自然帶出資料庫設計、唯一索引、轉址狀態碼等話題。',
      '用到 JPA 衍生查詢（findByCode）與唯一約束（unique = true），展示你懂 ORM 不只會 CRUD。',
      '302 轉址 + 點擊統計是「副作用要放在哪一層」的絕佳討論題。',
    ],
    apiContract: [
      'POST   /api/links          -> 201，建立短網址（targetUrl 必須 http/https 開頭）',
      'GET    /api/links          -> 200，回傳所有短網址（含點擊數）',
      'GET    /api/links/{code}   -> 200，查詢單一短網址；不存在回 404',
      'GET    /s/{code}           -> 302，轉址到原網址並累加點擊數；不存在回 404',
    ],
    stages: [
      {
        id: 'sl-stage-entity',
        phase: 'backend',
        title: 'Stage 1：Entity 與 Repository（JPA）',
        intro: '模仿 task 功能的 TaskEntity + TaskRepository，建立 shortlink package。重點是 code 欄位要加唯一約束，以及第一次自己寫「衍生查詢」。',
        steps: [
          {
            id: 'sl-entity',
            title: '建立 ShortLinkEntity',
            instruction: '新增 package shortlink，建立 ShortLinkEntity.java（@Entity，資料表 short_links）。欄位：id（@Id @GeneratedValue）、code（String，@Column(unique = true)）、targetUrl（String）、clicks（long）、createdAt（Instant）。記得無參數建構子 + getter/setter。',
            checkpoint: '你能說出為什麼 code 要加 unique = true（兩個不同網址拿到同一個短代碼會發生什麼事）。',
            hint: `package com.example.react_learning.shortlink;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "short_links")
public class ShortLinkEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // unique = true：資料庫層保證短代碼不重複，
    // 就算程式有 bug 產生撞號，INSERT 也會直接失敗，不會存進髒資料。
    @Column(nullable = false, unique = true, length = 16)
    private String code;

    @Column(nullable = false, length = 2048)
    private String targetUrl;

    @Column(nullable = false)
    private long clicks;

    @Column(nullable = false)
    private Instant createdAt;

    protected ShortLinkEntity() {
    }

    public ShortLinkEntity(String code, String targetUrl, Instant createdAt) {
        this.code = code;
        this.targetUrl = targetUrl;
        this.clicks = 0;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public String getCode() { return code; }
    public String getTargetUrl() { return targetUrl; }
    public long getClicks() { return clicks; }
    public Instant getCreatedAt() { return createdAt; }

    public void setCode(String code) { this.code = code; }
    public void incrementClicks() { this.clicks++; }
}`,
          },
          {
            id: 'sl-repo',
            title: 'Repository 加上衍生查詢 findByCode',
            instruction: '建立 ShortLinkRepository 介面 extends JpaRepository。多宣告一個方法：Optional<ShortLinkEntity> findByCode(String code)。不用寫任何實作——Spring 會解析方法名稱自動產生 SQL。',
            checkpoint: '你能說出 findByCode 會產生什麼 SQL（SELECT ... WHERE code = ?）。',
            hint: `package com.example.react_learning.shortlink;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ShortLinkRepository extends JpaRepository<ShortLinkEntity, Long> {

    // 「衍生查詢」：Spring 讀方法名 findByCode，
    // 自動產生 SELECT * FROM short_links WHERE code = ?
    // 命名規則：findBy + 欄位名（駝峰）。面試很愛問這個機制。
    Optional<ShortLinkEntity> findByCode(String code);
}`,
          },
        ],
      },
      {
        id: 'sl-stage-service',
        phase: 'backend',
        title: 'Stage 2：DTO 與 Service（短代碼怎麼生）',
        intro: '定義 API 模型與請求驗證，然後寫核心邏輯：怎麼產生一個不重複的短代碼。這是面試官最愛追問的部分。',
        steps: [
          {
            id: 'sl-dto',
            title: '建立 ShortLink record 與 ShortLinkRequest',
            instruction: 'ShortLink（API 回傳模型）：id、code、targetUrl、clicks、createdAt。ShortLinkRequest：只有 targetUrl，加 @NotBlank 與 @Pattern(regexp = "https?://.+") 確保是網址。',
            checkpoint: '空字串與 "abc123" 都會被 400 擋下，只有 http/https 開頭能過。',
            hint: `// ShortLink.java（API 回傳模型）
package com.example.react_learning.shortlink;

import java.time.Instant;

public record ShortLink(
        long id,
        String code,
        String targetUrl,
        long clicks,
        Instant createdAt
) {
}

// ShortLinkRequest.java（輸入 + 驗證）
package com.example.react_learning.shortlink;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ShortLinkRequest(
        @NotBlank(message = "請輸入網址")
        @Pattern(regexp = "https?://.+", message = "網址必須以 http:// 或 https:// 開頭")
        @Size(max = 2048, message = "網址太長了")
        String targetUrl
) {
}`,
          },
          {
            id: 'sl-service',
            title: '建立 ShortLinkService（含短代碼產生器）',
            instruction: '寫 createLink（隨機產生 6 碼英數字，撞號就重生）、getLinks、getLink(code)（找不到丟 404）。Entity 與 record 的轉換寫成一個私有方法 toShortLink。',
            checkpoint: '你能回答面試延伸題：「如果每天一億筆，隨機重試會有什麼問題？」（提示：改用 id 做 Base62 編碼）。',
            hint: `package com.example.react_learning.shortlink;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.security.SecureRandom;
import java.time.Instant;
import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ShortLinkService {

    private static final String ALPHABET =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private final SecureRandom random = new SecureRandom();
    private final ShortLinkRepository repository;

    public ShortLinkService(ShortLinkRepository repository) {
        this.repository = repository;
    }

    public List<ShortLink> getLinks() {
        return repository.findAll().stream().map(this::toShortLink).toList();
    }

    public ShortLink createLink(ShortLinkRequest request) {
        String code = generateUniqueCode();
        ShortLinkEntity saved = repository.save(
                new ShortLinkEntity(code, request.targetUrl().trim(), Instant.now()));
        return toShortLink(saved);
    }

    public ShortLink getLink(String code) {
        return toShortLink(findByCodeOrThrow(code));
    }

    ShortLinkEntity findByCodeOrThrow(String code) {
        return repository.findByCode(code)
                .orElseThrow(() -> new ResponseStatusException(
                        NOT_FOUND, "找不到短網址: " + code));
    }

    // 隨機 6 碼；撞號（機率極低）就重生。
    // 面試加分回答：大流量下改用「資料庫 id 做 Base62 編碼」，保證不撞號也不用重試。
    private String generateUniqueCode() {
        while (true) {
            StringBuilder sb = new StringBuilder(6);
            for (int i = 0; i < 6; i++) {
                sb.append(ALPHABET.charAt(random.nextInt(ALPHABET.length())));
            }
            String code = sb.toString();
            if (repository.findByCode(code).isEmpty()) {
                return code;
            }
        }
    }

    private ShortLink toShortLink(ShortLinkEntity entity) {
        return new ShortLink(entity.getId(), entity.getCode(),
                entity.getTargetUrl(), entity.getClicks(), entity.getCreatedAt());
    }
}`,
          },
        ],
      },
      {
        id: 'sl-stage-api',
        phase: 'backend',
        title: 'Stage 3：Controller（建立與查詢 API）',
        intro: '把 Service 接上 HTTP：POST 建立、GET 列表、GET 單筆。做完重啟後端就可以按自動驗收。',
        verify: {
          id: 'verify-links-api',
          label: '自動驗收：短網址 API',
          description: '平台會 POST 一筆合法網址確認 201 + code、GET 列表確認 200 陣列、GET 單筆確認資料正確、不合法網址確認 400、不存在的 code 確認 404。',
        },
        steps: [
          {
            id: 'sl-controller',
            title: '建立 ShortLinkController',
            instruction: '@RestController + @RequestMapping("/api/links")。POST 回 201（記得 @Valid），GET 列表、GET /{code} 單筆。',
            checkpoint: '瀏覽器開 http://localhost:8080/api/links 看得到 JSON 陣列。',
            hint: `package com.example.react_learning.shortlink;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/links")
public class ShortLinkController {

    private final ShortLinkService shortLinkService;

    public ShortLinkController(ShortLinkService shortLinkService) {
        this.shortLinkService = shortLinkService;
    }

    @GetMapping
    public List<ShortLink> getLinks() {
        return shortLinkService.getLinks();
    }

    @GetMapping("/{code}")
    public ShortLink getLink(@PathVariable String code) {
        return shortLinkService.getLink(code);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ShortLink createLink(@Valid @RequestBody ShortLinkRequest request) {
        return shortLinkService.createLink(request);
    }
}`,
          },
          {
            id: 'sl-api-verify',
            title: '重啟後端並跑自動驗收',
            instruction: '重啟 Spring Boot（mvnw spring-boot:run），觀察 console 印出的 CREATE TABLE short_links，然後按「自動驗收」。',
            checkpoint: '五項檢查全過，H2 Console 裡查得到 SHORT_LINKS 資料表。',
            hint: `# 重啟指令（專案根目錄）
.\\mvnw.cmd spring-boot:run

# 驗證資料真的進了資料庫：
# 開 http://localhost:8080/h2-console
# SELECT * FROM SHORT_LINKS;`,
          },
        ],
      },
      {
        id: 'sl-stage-redirect',
        phase: 'backend',
        title: 'Stage 4：302 轉址與點擊統計',
        intro: '短網址的靈魂：GET /s/{code} 回 302 讓瀏覽器跳到原網址，同時累加點擊數。這關會學到 ResponseEntity 與 Location header。',
        verify: {
          id: 'verify-links-redirect',
          label: '自動驗收：轉址與點擊數',
          description: '平台會建立短網址 → 打 /s/{code} 確認轉址 → 查詢確認 clicks 有累加 → 打不存在的 code 確認 404。',
        },
        steps: [
          {
            id: 'sl-redirect-service',
            title: 'Service 加上 resolveAndCount',
            instruction: '新方法 resolveAndCount(code)：findByCodeOrThrow 找到後呼叫 entity.incrementClicks()，save 回資料庫，回傳 targetUrl。',
            checkpoint: '每打一次 /s/{code}，資料庫的 clicks 就 +1（可用 H2 Console 驗證）。',
            hint: `// 加進 ShortLinkService
public String resolveAndCount(String code) {
    ShortLinkEntity entity = findByCodeOrThrow(code);
    entity.incrementClicks();          // 可變 Entity：直接改欄位
    repository.save(entity);           // 有 id -> 下 UPDATE
    return entity.getTargetUrl();
}`,
          },
          {
            id: 'sl-redirect-controller',
            title: '建立轉址 Controller（回 302）',
            instruction: '另開一個 RedirectController（不掛在 /api 底下）：GET /s/{code} 回 ResponseEntity，狀態 302、Location header 填原網址。',
            checkpoint: '瀏覽器輸入 http://localhost:8080/s/你的code 會真的跳到原網站。',
            hint: `package com.example.react_learning.shortlink;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
public class RedirectController {

    private final ShortLinkService shortLinkService;

    public RedirectController(ShortLinkService shortLinkService) {
        this.shortLinkService = shortLinkService;
    }

    // 302 Found：告訴瀏覽器「去 Location 指的地方」。
    // 面試考點：301 是永久轉址（瀏覽器會快取，之後不再打你的伺服器，
    // 點擊數就統計不到了），所以要統計點擊必須用 302。
    @GetMapping("/s/{code}")
    public ResponseEntity<Void> redirect(@PathVariable String code) {
        String targetUrl = shortLinkService.resolveAndCount(code);
        return ResponseEntity.status(HttpStatus.FOUND)
                .location(URI.create(targetUrl))
                .build();
    }
}`,
          },
        ],
      },
      {
        id: 'sl-stage-frontend',
        phase: 'frontend',
        title: 'Stage 5：React 前端（建立表單 + 點擊排行）',
        intro: '做一個 MyShortLinks 元件：輸入長網址產生短網址、列表顯示點擊數、一鍵複製短網址。',
        steps: [
          {
            id: 'sl-fe-form',
            title: '建立 MyShortLinks.jsx（載入 + 建立）',
            instruction: '兩個 state：links、url。useEffect 掛載時 GET /api/links；表單送出 POST 後清空輸入框並重新載入。記得處理 400（顯示後端的錯誤訊息）。',
            checkpoint: '貼一個不合法的字串會看到錯誤提示，而不是默默沒反應。',
            hint: `import { useEffect, useState } from 'react'

export default function MyShortLinks() {
  const [links, setLinks] = useState([])
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  async function loadLinks() {
    const response = await fetch('/api/links')
    setLinks(await response.json())
  }

  useEffect(() => {
    loadLinks()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    const response = await fetch('/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetUrl: url }),
    })
    if (!response.ok) {
      const body = await response.json()
      setError(body.fieldErrors?.[0]?.message ?? '建立失敗')
      return
    }
    setUrl('')
    await loadLinks()
  }

  return (
    <div className="info-card">
      <h3>我的短網址服務</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="貼上長網址（http:// 或 https:// 開頭）"
        />
        <button type="submit">縮短</button>
      </form>
      {error ? <p style={{ color: 'crimson' }}>{error}</p> : null}
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <code>/s/{link.code}</code> → {link.targetUrl}（點擊 {link.clicks} 次）
          </li>
        ))}
      </ul>
    </div>
  )
}`,
          },
          {
            id: 'sl-fe-copy',
            title: '一鍵複製 + 依點擊數排序',
            instruction: '每列加「複製」按鈕（navigator.clipboard.writeText 組出完整短網址），列表用 [...links].sort() 依 clicks 由高到低排序。',
            checkpoint: '你能解釋為什麼要先展開 [...links] 再 sort（不可以直接改 state 陣列）。',
            hint: `// 排序：sort 會「就地修改」陣列，
// 直接 links.sort() 等於偷改 state -> 先複製一份
const sorted = [...links].sort((a, b) => b.clicks - a.clicks)

// 複製按鈕
<button
  type="button"
  onClick={() => navigator.clipboard.writeText(
    \`\${window.location.origin}/s/\${link.code}\`,
  )}
>
  複製
</button>`,
          },
          {
            id: 'sl-fe-mount',
            title: '掛上頁面展示',
            instruction: '在 App.jsx 搜尋「面試專案成果展示」，照註解 import MyShortLinks 並打開對應的註解。',
            checkpoint: '這個區塊下方的成果展示區出現你的短網址服務，轉址與點擊數都正常。',
            hint: `// App.jsx 最上面加：
// import MyShortLinks from './components/MyShortLinks'
// 然後把展示區的 {/* <MyShortLinks /> */} 註解打開。`,
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        question: '為什麼轉址用 302 而不是 301？',
        answerHint: '301 是永久轉址，瀏覽器會快取結果、之後直接跳過你的伺服器，點擊統計就失效了；302 每次都會回來問，才能累加 clicks。',
      },
      {
        question: '短代碼撞號怎麼辦？大流量下隨機重試有什麼問題？',
        answerHint: '目前做法是資料庫 unique 約束 + 撞號重生。資料量大時撞號率上升、重試次數變多，可改用「id 做 Base62 編碼」：id 保證唯一，編碼結果也唯一，完全不用重試。',
      },
      {
        question: '點擊數累加放在 Controller 還是 Service？為什麼？',
        answerHint: '放 Service：這是商業規則（查詢的副作用），Controller 只翻譯 HTTP。而且之後要加「同 IP 一分鐘只算一次」這種規則，只改 Service 一處。',
      },
      {
        question: '兩個人同時點同一個短網址，clicks 會少算嗎？',
        answerHint: '會有機率發生（讀到同值、各自 +1、後寫覆蓋先寫）。解法：SQL 原子更新（UPDATE ... SET clicks = clicks + 1）、@Version 樂觀鎖、或悲觀鎖。能主動講出這點是大加分。',
      },
      {
        question: 'targetUrl 的驗證為什麼前後端都要做？',
        answerHint: '前端驗證是為了體驗（即時提示），後端驗證是為了安全（任何人都能繞過前端直接打 API）。後端是最後防線，@Pattern + @Valid 一定要有。',
      },
    ],
  },
  {
    id: 'project-expense',
    title: '記帳小幫手（Expense Tracker）',
    subtitle: '練習查詢參數、彙總統計與資料分組——後台系統面試的基本功',
    goal: '做出可以記帳、依分類篩選、看總支出與分類統計的小系統。重點是「查詢參數怎麼設計」與「統計要在哪一層算」。',
    interviewValue: [
      '幾乎所有後台/內部系統都是這個形狀：列表 + 篩選 + 彙總，面試作品集有它非常對口。',
      'Stream 的 groupingBy 分組統計是 Java 面試高頻考點，這裡直接實戰。',
      '@RequestParam（查詢參數）vs @PathVariable（路徑變數）的選擇是必考題。',
    ],
    apiContract: [
      'POST   /api/expenses                 -> 201，新增一筆支出（金額必須 >= 1）',
      'GET    /api/expenses                 -> 200，全部支出',
      'GET    /api/expenses?category=food   -> 200，只回傳該分類',
      'GET    /api/expenses/summary         -> 200，{ total, byCategory }',
      'DELETE /api/expenses/{id}            -> 204，刪除；不存在回 404',
    ],
    stages: [
      {
        id: 'ex-stage-entity',
        phase: 'backend',
        title: 'Stage 1：Entity、Repository 與 DTO',
        intro: '建立 expense package。這次你已經做過兩輪了，先自己寫再對答案。',
        steps: [
          {
            id: 'ex-entity',
            title: 'ExpenseEntity + Repository（含 findByCategory）',
            instruction: 'ExpenseEntity：id、title、amount（int）、category、createdAt，對應資料表 expenses。Repository 加衍生查詢 List<ExpenseEntity> findByCategory(String category)。',
            checkpoint: '不看提示能自己寫出 @Entity 骨架與衍生查詢。',
            hint: `// ExpenseEntity.java
package com.example.react_learning.expense;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "expenses")
public class ExpenseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false)
    private int amount;

    @Column(nullable = false, length = 20)
    private String category;

    @Column(nullable = false)
    private Instant createdAt;

    protected ExpenseEntity() {
    }

    public ExpenseEntity(String title, int amount, String category, Instant createdAt) {
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public int getAmount() { return amount; }
    public String getCategory() { return category; }
    public Instant getCreatedAt() { return createdAt; }
}

// ExpenseRepository.java
package com.example.react_learning.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
    // SELECT * FROM expenses WHERE category = ?
    List<ExpenseEntity> findByCategory(String category);
}`,
          },
          {
            id: 'ex-dto',
            title: 'Expense、ExpenseRequest、ExpenseSummary 三個 record',
            instruction: 'Expense（回傳模型）。ExpenseRequest：title（@NotBlank）、amount（@Min(1)）、category（@NotBlank）。ExpenseSummary：long total、Map<String, Long> byCategory。',
            checkpoint: 'amount 用 @Min(1) 而不是自己在 Service 寫 if——你能說出好處（統一由 @Valid + 例外處理器回 400）。',
            hint: `// Expense.java
package com.example.react_learning.expense;

import java.time.Instant;

public record Expense(long id, String title, int amount, String category, Instant createdAt) {
}

// ExpenseRequest.java
package com.example.react_learning.expense;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ExpenseRequest(
        @NotBlank(message = "請輸入項目名稱")
        @Size(max = 50, message = "名稱最多 50 個字")
        String title,
        @Min(value = 1, message = "金額至少要 1 元")
        int amount,
        @NotBlank(message = "請選擇分類")
        String category
) {
}

// ExpenseSummary.java
package com.example.react_learning.expense;

import java.util.Map;

public record ExpenseSummary(long total, Map<String, Long> byCategory) {
}`,
          },
        ],
      },
      {
        id: 'ex-stage-service',
        phase: 'backend',
        title: 'Stage 2：Service（篩選與 groupingBy 統計）',
        intro: '這關是本專案的面試精華：可選的分類篩選 + Stream groupingBy 分組加總。',
        steps: [
          {
            id: 'ex-service',
            title: 'ExpenseService：create、list（可選篩選）、delete',
            instruction: 'getExpenses(String category)：category 是 null 或空白就 findAll，否則 findByCategory。createExpense 由後端決定 createdAt。deleteExpense 不存在丟 404。',
            checkpoint: '篩選邏輯寫在 Service 而不是 Controller。',
            hint: `package com.example.react_learning.expense;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public List<Expense> getExpenses(String category) {
        List<ExpenseEntity> entities =
                (category == null || category.isBlank())
                        ? repository.findAll()
                        : repository.findByCategory(category);
        return entities.stream().map(this::toExpense).toList();
    }

    public Expense createExpense(ExpenseRequest request) {
        ExpenseEntity saved = repository.save(new ExpenseEntity(
                request.title().trim(), request.amount(),
                request.category().trim(), Instant.now()));
        return toExpense(saved);
    }

    public void deleteExpense(long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(NOT_FOUND, "找不到支出紀錄: " + id);
        }
        repository.deleteById(id);
    }

    private Expense toExpense(ExpenseEntity entity) {
        return new Expense(entity.getId(), entity.getTitle(),
                entity.getAmount(), entity.getCategory(), entity.getCreatedAt());
    }
}`,
          },
          {
            id: 'ex-summary',
            title: 'getSummary：groupingBy + summingLong',
            instruction: '新方法 getSummary()：total 是全部金額加總，byCategory 用 Collectors.groupingBy(category, summingLong(amount)) 分組加總。',
            checkpoint: '你能口頭解釋 groupingBy 的運作：像 JS 的 reduce 把陣列變成 { food: 180, transport: 60 }。',
            hint: `// 加進 ExpenseService（import java.util.stream.Collectors; import java.util.Map;）
public ExpenseSummary getSummary() {
    List<ExpenseEntity> all = repository.findAll();

    long total = all.stream()
            .mapToLong(ExpenseEntity::getAmount)
            .sum();

    // groupingBy：依 category 分組；summingLong：組內金額加總
    // 結果形狀：{ "food": 180, "transport": 60 }
    Map<String, Long> byCategory = all.stream()
            .collect(Collectors.groupingBy(
                    ExpenseEntity::getCategory,
                    Collectors.summingLong(ExpenseEntity::getAmount)));

    return new ExpenseSummary(total, byCategory);
}

// 面試延伸：資料量大時不該把整張表撈回來算，
// 應該讓資料庫算：SELECT category, SUM(amount) FROM expenses GROUP BY category
// （JPA 可以用 @Query 寫這條，講得出來就是加分）`,
          },
        ],
      },
      {
        id: 'ex-stage-api',
        phase: 'backend',
        title: 'Stage 3：Controller（@RequestParam 登場）',
        intro: '注意 summary 路由要放在 /{id} 之前的設計陷阱，以及查詢參數的寫法。做完按自動驗收。',
        verify: {
          id: 'verify-expenses-crud',
          label: '自動驗收：記帳完整流程',
          description: '平台會記兩筆不同分類 → 檢查分類篩選 → 檢查 summary 總額與分組 → 負數金額確認 400 → 刪除確認 204。',
        },
        steps: [
          {
            id: 'ex-controller',
            title: '建立 ExpenseController',
            instruction: 'GET 用 @RequestParam(required = false) String category 接查詢參數；GET /summary 回統計；POST 201；DELETE 204。',
            checkpoint: '你能說出 ?category=food 用 @RequestParam、/expenses/3 用 @PathVariable 的規則。',
            hint: `package com.example.react_learning.expense;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    // ?category=food 這種「篩選條件」用 @RequestParam，
    // required = false 表示不帶參數就回全部。
    @GetMapping
    public List<Expense> getExpenses(
            @RequestParam(required = false) String category) {
        return expenseService.getExpenses(category);
    }

    // 注意：/summary 是固定字，如果之後加了 GET /{id}，
    // Spring 會優先比對固定路徑，但初學者常把順序搞混——
    // 面試可以主動提「路由設計要避免 /summary 被 /{id} 吃掉」。
    @GetMapping("/summary")
    public ExpenseSummary getSummary() {
        return expenseService.getSummary();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Expense createExpense(@Valid @RequestBody ExpenseRequest request) {
        return expenseService.createExpense(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteExpense(@PathVariable long id) {
        expenseService.deleteExpense(id);
    }
}`,
          },
          {
            id: 'ex-api-verify',
            title: '重啟後端並跑自動驗收',
            instruction: '重啟 Spring Boot 後按「自動驗收」，五項全過才算完成。',
            checkpoint: '驗收全過，且 H2 Console 查得到 EXPENSES 資料表。',
            hint: `# 常見失敗排查：
# 1. 400 沒過 -> ExpenseRequest 的 @Min(1) 或 Controller 的 @Valid 少了
# 2. 篩選沒過 -> Service 忘了處理 category 為 null 的情況
# 3. summary 沒過 -> byCategory 的 key 是分類名、value 是加總金額`,
          },
        ],
      },
      {
        id: 'ex-stage-frontend',
        phase: 'frontend',
        title: 'Stage 4：React 前端（表單 + 篩選 + 統計卡片）',
        intro: '做 MyExpenseTracker 元件：記帳表單、分類下拉篩選、總支出與分類統計。',
        steps: [
          {
            id: 'ex-fe-main',
            title: '建立 MyExpenseTracker.jsx',
            instruction: 'state：expenses、summary、filter、表單（title/amount/category）。載入時同時抓列表與 summary（Promise.all）。新增與刪除後兩者都要重新載入。',
            checkpoint: '你能說出為什麼用 Promise.all 而不是兩個 await 串著跑（並行比較快）。',
            hint: `import { useEffect, useState } from 'react'

const CATEGORIES = ['food', 'transport', 'fun', 'other']

export default function MyExpenseTracker() {
  const [expenses, setExpenses] = useState([])
  const [summary, setSummary] = useState(null)
  const [filter, setFilter] = useState('')
  const [form, setForm] = useState({ title: '', amount: '', category: 'food' })

  async function loadAll(activeFilter = filter) {
    const query = activeFilter ? \`?category=\${activeFilter}\` : ''
    const [listRes, summaryRes] = await Promise.all([
      fetch(\`/api/expenses\${query}\`),
      fetch('/api/expenses/summary'),
    ])
    setExpenses(await listRes.json())
    setSummary(await summaryRes.json())
  }

  useEffect(() => {
    loadAll()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount: Number(form.amount) }),
    })
    if (response.ok) {
      setForm({ title: '', amount: '', category: 'food' })
      await loadAll()
    }
  }

  async function handleDelete(id) {
    await fetch(\`/api/expenses/\${id}\`, { method: 'DELETE' })
    await loadAll()
  }

  async function handleFilterChange(value) {
    setFilter(value)
    await loadAll(value)
  }

  return (
    <div className="info-card">
      <h3>我的記帳小幫手</h3>
      {summary ? <p>總支出：{summary.total} 元</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="項目"
        />
        <input
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          placeholder="金額"
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <button type="submit">記一筆</button>
      </form>
      <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">全部分類</option>
        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <ul>
        {expenses.map((item) => (
          <li key={item.id}>
            [{item.category}] {item.title}：{item.amount} 元
            <button type="button" onClick={() => handleDelete(item.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
          },
          {
            id: 'ex-fe-summary',
            title: '分類統計卡片',
            instruction: '用 Object.entries(summary.byCategory) 把 {food: 180} 轉成陣列後 map 出每個分類的金額與佔比（percent = 金額 / total）。',
            checkpoint: '每個分類顯示金額與百分比，加總等於 100%（四捨五入誤差可接受）。',
            hint: `{summary ? (
  <ul>
    {Object.entries(summary.byCategory).map(([category, amount]) => (
      <li key={category}>
        {category}：{amount} 元（
        {summary.total > 0 ? Math.round((amount / summary.total) * 100) : 0}%）
      </li>
    ))}
  </ul>
) : null}`,
          },
          {
            id: 'ex-fe-mount',
            title: '掛上頁面展示',
            instruction: '在 App.jsx 搜尋「面試專案成果展示」，import MyExpenseTracker 並打開對應的註解。',
            checkpoint: '成果展示區同時看得到你的兩個面試專案，功能都正常。',
            hint: `// App.jsx 最上面加：
// import MyExpenseTracker from './components/MyExpenseTracker'
// 然後把展示區的 {/* <MyExpenseTracker /> */} 註解打開。`,
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        question: '@RequestParam 和 @PathVariable 什麼時候用哪個？',
        answerHint: '路徑變數指「資源本身」（/expenses/3 = 第 3 筆），查詢參數是「對列表的篩選/排序/分頁」（?category=food&page=2）。這是 REST 設計的基本語感。',
      },
      {
        question: 'summary 統計在 Java 算和在資料庫算，差在哪？',
        answerHint: '目前是 findAll 撈回來用 Stream 算，資料量小沒問題；資料量大會把整張表搬進記憶體。改善：用 SQL 的 GROUP BY + SUM 讓資料庫算（JPA @Query），只回傳統計結果。',
      },
      {
        question: '金額為什麼用整數（分/元）而不是 double？',
        answerHint: '浮點數有精度誤差（0.1 + 0.2 != 0.3），金錢運算絕對不能用 double。實務用「最小單位的整數」（分）或 BigDecimal。這題答錯很扣分。',
      },
      {
        question: 'GET /api/expenses/summary 和 GET /api/expenses/{id} 同時存在會有什麼問題？',
        answerHint: 'Spring 會優先比對固定路徑 /summary，所以沒問題；但若把 {id} 宣告成 String 且順序設計不良，"summary" 可能被當成 id。好習慣：統計類路由放到 /summary 這種明確前綴，並保持 {id} 是數字型別。',
      },
      {
        question: '前端為什麼新增後要重新 fetch，而不是直接把新資料 push 進 state？',
        answerHint: '兩種都可以：重新 fetch 簡單且保證與後端一致（summary 也會同步更新）；直接改 state 省一次請求但要自己同步所有衍生資料。答出取捨就是好答案。',
      },
    ],
  },
  {
    id: 'project-auth',
    title: '會員登入系統（JWT 驗證）',
    subtitle: '幾乎每個後端職缺都會考的認證機制，從密碼加密到保護 API 一次搞懂',
    goal: '做出「註冊 → 登入拿 token → 帶 token 呼叫受保護 API」的完整流程，體會 Spring Security 怎麼攔截請求做身分驗證。',
    interviewValue: [
      '認證/授權幾乎是後端面試必考主題，能講清楚「無狀態 token」跟「session」的差異就是加分題。',
      '密碼用 BCrypt 雜湊示範最基本的資安常識：資料庫裡絕對不能出現明文密碼。',
      'Spring Security 的 Filter Chain 是「請求怎麼被攔截檢查」的經典追問題，做過一次印象會很深。',
    ],
    apiContract: [
      'POST /api/auth/register -> 201，註冊（username 不可重複，密碼會被雜湊後存）；重複 username 回 400',
      'POST /api/auth/login    -> 200，登入成功回傳 { token }；帳密錯誤回 401',
      'GET  /api/auth/me       -> 200，帶有效 token 查詢目前登入者資訊；沒帶或 token 無效回 401',
    ],
    conceptExplanation: [
      '先用生活比喻理解，再看程式碼會輕鬆很多：JWT token 就像一張「有防偽簽章的識別證」。你去警衛室（login）證明身分後，警衛（後端）發給你一張識別證（token），上面寫著你的名字，還蓋了一個只有警衛室才做得出來的防偽章（簽章）。之後你想進任何房間（受保護的 API），只要出示這張識別證，警衛掃一下防偽章確認沒被偽造、也還沒過期，就放行——警衛完全不需要記得「誰進來過」，這就是「無狀態（stateless）」的意思。',
      '整個練習其實只有 3 個角色在合作：AuthController/AuthService（負責「核發識別證」：註冊、登入）、JwtUtil（負責「做出防偽章」與「驗證防偽章」：產生/解析 token）、JwtAuthFilter + SecurityConfig（負責「站在每個房間門口的警衛」：每個請求進來前先檢查有沒有帶識別證，帶了就放行）。新手常卡住的地方，就是分不清楚這三者各自的職責邊界，下面用流程圖把「誰在什麼時間點做什麼事」畫出來。',
      '特別提醒 Stage 3 的兩個常見地雷：① JwtAuthFilter 沒有加 @Component，Spring 就不會把它當成 Bean，SecurityConfig 會直接啟動失敗（報錯 required a bean of type JwtAuthFilter that could not be found）。② 沒有自訂 AuthenticationEntryPoint 的話，「沒帶 token / token 失效」預設會回 403，而不是 apiContract 要求的 401——因為 Spring Security 在沒有 httpBasic()/formLogin() 的情況下，找不到「該怎麼引導使用者登入」，只好用最保守的 403 打發，所以要自己指定一個 entry point 直接回 401。',
      '常見誤解澄清：「/api/auth/me 到底有沒有經過 Controller？」——答案是：有，而且跟 /register、/login 一樣，最後都是由 AuthController 裡的一個方法處理。真正不一樣的地方，是「在抵達 Controller 之前，多繞了一圈」。/register、/login 是 permitAll()，請求幾乎是直接從瀏覽器走到 Controller；但 /me 被標記成 authenticated()，所以請求會先經過 JwtAuthFilter 這個「警衛」——警衛檢查 Authorization header 裡的 token，驗證成功就在 SecurityContext 貼上「已驗證」標籤，然後呼叫 filterChain.doFilter(...) 把請求「放行」繼續往下走，最終還是會進到 AuthController 的 me() 方法；如果 token 沒帶對或沒帶，SecurityConfig 設定的規則會攔下來，呼叫自訂的 AuthenticationEntryPoint 直接回 401，這時候請求才真的「沒有進到 Controller」。所以精確的說法不是「/me 不透過 Controller」，而是「/me 多了一層 Filter 做身分檢查，檢查沒過才會在半路被擋下來；檢查通過的話，走的流程跟其他 API 完全一樣」。這也是為什麼 me() 方法的參數可以直接寫 Authentication authentication——因為 Filter 已經把「這個人是誰」準備好放進 SecurityContext，Controller 只是去讀出來而已，完全不用自己重新解析 token。',
    ],
    flowDiagram: `【流程 1】註冊 — 使用者第一次建立帳號
瀏覽器                AuthController         AuthService              資料庫
  │  POST /register        │                      │                     │
  │  {username,password}   │                      │                     │
  ├────────────────────────▶                      │                     │
  │                        │  authService.register()                    │
  │                        ├─────────────────────▶│                     │
  │                        │                      │ 1. 查 username 是否已存在
  │                        │                      ├────────────────────▶│
  │                        │                      │◀────────────────────┤
  │                        │                      │ 2. 用 BCrypt 把明文密碼加密
  │                        │                      │    （資料庫永遠不存明文密碼）
  │                        │                      │ 3. 存進 app_users 表
  │                        │                      ├────────────────────▶│
  │◀───────────── 201 Created ───────────────────┤                     │

【流程 2】登入 — 拿到那張「識別證」(JWT token)
瀏覽器                AuthController         AuthService     JwtUtil
  │  POST /login            │                      │           │
  │  {username,password}    │                      │           │
  ├─────────────────────────▶                      │           │
  │                         ├─────────────────────▶│           │
  │                         │             1. 依 username 撈出使用者
  │                         │             2. encoder.matches(明文, 資料庫雜湊值)
  │                         │                比對成功才繼續，否則丟 401
  │                         │             3. jwtUtil.generateToken(username)
  │                         │                      ├──────────▶│
  │                         │                      │  簽出 token（帶 username
  │                         │                      │  + 簽發時間 + 過期時間 +
  │                         │                      │  只有伺服器知道的密鑰簽章）
  │                         │                      │◀──────────┤
  │◀──────── 200 { token: "xxx.yyy.zzz" } ─────────┤           │
  │  （前端把 token 存進 state / localStorage，下次請求要自己帶著）

【流程 3】帶著 token 呼叫受保護的 API（/me）— 警衛怎麼檢查
瀏覽器                JwtAuthFilter                      JwtUtil        SecurityConfig 規則      AuthController
  │  GET /me                  │                              │                 │                     │
  │  Header:                  │                               │                │                     │
  │  Authorization:            │                              │                │                     │
  │  Bearer xxx.yyy.zzz        │                              │                │                     │
  ├───────────────────────────▶                              │                │                     │
  │                            │ 1. 取出 "Bearer " 後面的 token │                │                     │
  │                            │ 2. jwtUtil.extractUsername(token)             │                     │
  │                            ├─────────────────────────────▶│                │                     │
  │                            │        驗簽章 + 驗有沒有過期     │                │                     │
  │                            │◀─────────────────────────────┤                │                     │
  │                            │ 3a. 成功 → 把 username 放進     │                │                     │
  │                            │     SecurityContext（等於在   │                │                     │
  │                            │     這次請求上貼「已驗證」標籤） │                │                     │
  │                            │ 3b. 失敗 → 不貼標籤，直接放行   │                │                     │
  │                            │     （讓下一關的規則來擋）      │                │                     │
  │                            ├───────────────────────────────────────────────▶│                     │
  │                            │           4. 檢查這條路徑的規則：                 │                     │
  │                            │              /api/auth/** 要求 authenticated()  │                     │
  │                            │           5a. 有「已驗證」標籤 → 放行 ─────────────────────────────────▶│
  │                            │                                                │        執行 me()，回 200
  │                            │           5b. 沒有標籤 → 呼叫 AuthenticationEntryPoint         │
  │◀──────────────────────────────────────── 直接回 401（不會進到 Controller）──┤                     │

一句話總結三個角色：
  AuthService  = 發識別證的「櫃檯」（只在 register / login 時工作一次）
  JwtUtil      = 做防偽章 + 驗防偽章的「印刷機」（產生 token、解析 token）
  JwtAuthFilter + SecurityConfig = 站在每道門口的「警衛」（每一個請求都會先經過這裡檢查）`,
    stages: [
      {
        id: 'auth-stage-setup',
        phase: 'backend',
        title: 'Stage 1：加入套件、建立 User Entity',
        intro: '這關要先幫專案加兩組新工具：Spring Security（身分驗證框架）與 JJWT（產生/解析 JWT 的套件），再建立存使用者的資料表。',
        steps: [
          {
            id: 'auth-pom',
            title: '在 pom.xml 加入 Security 與 JWT 依賴',
            instruction: '在 <dependencies> 裡加入 spring-boot-starter-security，以及 io.jsonwebtoken 的 jjwt-api / jjwt-impl / jjwt-jackson 三個套件（版本用 0.12.6；這個版本的 API 跟 0.11.x 不同，後面的 JwtUtil 範例會用 0.12.x 的寫法）。',
            checkpoint: '你能說出這兩組依賴各自負責什麼（Security 負責「攔截檢查」，JJWT 負責「產生與解析 token 字串」）。',
            hint: `<!-- pom.xml：加進 <dependencies> 裡 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- JJWT：純粹負責「做出 token 字串」與「驗證/解析 token」，
     跟 Spring Security 是兩件事：Security 負責攔截請求，
     JJWT 負責 token 本身的加密簽章。
     這裡用 0.12.6（0.12.x 系列），三個 artifact 版本號務必一致，
     否則執行期會出現 NoSuchMethodError 這種相容性錯誤。
     0.12.x 跟舊版 0.11.x 的 API 寫法不同，務必跟你 pom.xml 裡實際的版本一致，
     不然編譯會報找不到方法（下面 JwtUtil 範例會示範兩版差異）。 -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.6</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>`,
          },
          {
            id: 'auth-entity',
            title: '建立 UserEntity + UserRepository',
            instruction: '新增 package auth。UserEntity：id、username（@Column(unique = true)）、password（存雜湊後的字串，欄位名建議 passwordHash）。Repository 加衍生查詢 Optional<UserEntity> findByUsername(String username)。',
            checkpoint: '你能解釋為什麼欄位要叫 passwordHash 而不是 password（提醒自己「這裡存的不是明文」）。',
            hint: `package com.example.react_learning.auth;

import jakarta.persistence.*;

@Entity
@Table(name = "app_users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    // 存的是 BCrypt 雜湊後的結果（一長串亂碼），不是使用者輸入的原始密碼。
    @Column(nullable = false)
    private String passwordHash;

    protected UserEntity() {
    }

    public UserEntity(String username, String passwordHash) {
        this.username = username;
        this.passwordHash = passwordHash;
    }

    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getPasswordHash() { return passwordHash; }
}

// UserRepository.java
package com.example.react_learning.auth;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);
}`,
          },
        ],
      },
      {
        id: 'auth-stage-service',
        phase: 'backend',
        title: 'Stage 2：註冊 / 登入邏輯與 JWT 產生',
        intro: '這關是這個專案的核心：密碼怎麼加密存、登入成功怎麼發一張「通行證」（JWT token）。',
        steps: [
          {
            id: 'auth-dto',
            title: '建立 AuthRequest / AuthResponse DTO',
            instruction: 'AuthRequest(username, password) 用 @NotBlank 驗證兩個欄位。AuthResponse(token) 是登入成功要回傳的格式。',
            checkpoint: '你能說出為什麼不能直接把 UserEntity 當回傳格式（會把 passwordHash 洩漏給前端）。',
            hint: `public record AuthRequest(
        @NotBlank(message = "帳號不可為空") String username,
        @NotBlank(message = "密碼不可為空") String password
) {}

public record AuthResponse(String token) {}`,
          },
          {
            id: 'auth-jwt-util',
            title: '建立 JwtUtil：產生與解析 token',
            instruction: '寫一個 JwtUtil 類別：generateToken(username) 用 JJWT 簽出一張帶 username 與過期時間的 token；extractUsername(token) 反過來解析 token 拿回 username（token 壞掉或過期就丟例外）。⚠️ 這裡用的是 jjwt 0.12.6（0.12.x 系列）的 API，寫法是 subject/issuedAt/expiration 與 parser().verifyWith(...).build().parseSignedClaims(...)；這跟 0.11.x 的 setSubject()/setIssuedAt()/setSigningKey()/parseClaimsJws() 不一樣，如果你的 pom.xml 版本是 0.12.x，一定要照下面這個寫法，不然會編譯不過。',
            checkpoint: '你能解釋 JWT 為什麼是「無狀態」的（伺服器不用存 session，靠簽章驗證 token 沒被竄改）。',
            hint: `package com.example.react_learning.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {
    // 正式環境要把這組金鑰放到環境變數，不能寫死在程式碼裡。
    private final SecretKey key = Keys.hmacShaKeyFor(
            "this-is-a-32-byte-long-secret-key-for-demo".getBytes());
    private final long expirationMillis = 1000 * 60 * 60; // 1 小時

    // 0.12.x 的 builder API：方法名不再有 set 前綴（subject 取代 setSubject）。
    public String generateToken(String username) {
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationMillis))
                .signWith(key) // 0.12.x 一樣可以只丟 key，會依 key 型別自動挑演算法
                .compact();
    }

    // 解析成功代表：簽章正確（沒被竄改）且沒過期，回傳裡面存的 username。
    // 只要有一項不對，這裡就會直接丟例外，由 Filter 接住轉成 401。
    // 0.12.x 的解析 API：parser().verifyWith(key).build().parseSignedClaims(token)，
    // 拿到的是 Jws<Claims>，要透過 getPayload() 取出 Claims 再讀 getSubject()。
    public String extractUsername(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}

// 小提醒：如果你的 pom.xml 實際版本是舊的 0.11.x（例如 0.11.5），
// 上面兩個方法要改成 0.11.x 的寫法：
// generateToken： Jwts.builder().setSubject(username).setIssuedAt(new Date())
//                 .setExpiration(expiry).signWith(key).compact();
// extractUsername：Jwts.parser().setSigningKey(key).parseClaimsJws(token)
//                 .getBody().getSubject();
// 兩套 API 混用會編譯失敗，務必跟 pom.xml 的版本對齊
// （最簡單的判斷方式：0.12.x 方法名沒有 set 前綴，0.11.x 都有）。`,
          },
          {
            id: 'auth-service-controller',
            title: 'AuthService + AuthController（register / login）',
            instruction: 'register：檢查 username 是否已存在（存在就丟 400），用 BCryptPasswordEncoder 把密碼加密後存進去。login：找到使用者、用 encoder.matches 比對密碼，正確就用 JwtUtil 發一張 token。',
            checkpoint: '你能說出 BCryptPasswordEncoder.matches(rawPassword, hash) 內部在做什麼（把 rawPassword 用同樣演算法雜湊，再跟資料庫的 hash 比對，而不是反解密）。',
            hint: `@Service
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public void register(AuthRequest request) {
        if (userRepository.findByUsername(request.username()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "帳號已被使用");
        }
        String hash = passwordEncoder.encode(request.password());
        userRepository.save(new UserEntity(request.username(), hash));
    }

    public AuthResponse login(AuthRequest request) {
        UserEntity user = userRepository.findByUsername(request.username())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "帳號或密碼錯誤"));
        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "帳號或密碼錯誤");
        }
        return new AuthResponse(jwtUtil.generateToken(user.getUsername()));
    }
}

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) { this.authService = authService; }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@Valid @RequestBody AuthRequest request) {
        authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody AuthRequest request) {
        return authService.login(request);
    }

    // 這個端點必須通過 JwtAuthFilter 檢查才能進來，
    // 所以能執行到這裡，代表 SecurityContext 裡一定有已驗證的使用者。
    @GetMapping("/me")
    public Map<String, String> me(Authentication authentication) {
        return Map.of("username", authentication.getName());
    }
}`,
          },
        ],
      },
      {
        id: 'auth-stage-security',
        phase: 'backend',
        title: 'Stage 3：JwtAuthFilter + SecurityConfig（保護 API）',
        intro: '這關要接上 Spring Security：寫一個 Filter，每個請求進來時先檢查有沒有帶合法 token，再決定放不放行。',
        verify: {
          id: 'verify-auth-flow',
          label: '自動驗收：註冊 / 登入 / 保護 API',
          description: '平台會註冊一個新帳號 → 登入拿 token → 帶 token 打 /me → 不帶 token 打 /me 確認 401 → 重複註冊確認 400。',
        },
        steps: [
          {
            id: 'auth-filter',
            title: '建立 JwtAuthFilter',
            instruction: '繼承 OncePerRequestFilter：從 Authorization header 取出 Bearer token，用 JwtUtil 解析出 username，成功就把使用者塞進 SecurityContext；解析失敗就直接放行讓後面的規則擋下來（不要在這裡直接丟 401，交給 SecurityConfig 統一處理）。⚠️ 記得加 @Component，否則 Spring 不會把它註冊成 Bean，SecurityConfig 會啟動失敗。',
            checkpoint: '你能解釋為什麼 header 格式要求是 "Bearer xxx" 而不是直接放 token 字串（這是 HTTP 標準的授權格式，一看就知道用的是哪種驗證方案）。',
            hint: `// @Component 是這個 class 能被 SecurityConfig 注入的關鍵，漏掉會報錯：
// "required a bean of type 'JwtAuthFilter' that could not be found"
@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    private final JwtUtil jwtUtil;

    public JwtAuthFilter(JwtUtil jwtUtil) { this.jwtUtil = jwtUtil; }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                     FilterChain filterChain) throws ServletException, IOException {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            try {
                String username = jwtUtil.extractUsername(token);
                var auth = new UsernamePasswordAuthenticationToken(username, null, List.of());
                SecurityContextHolder.getContext().setAuthentication(auth);
            } catch (Exception ignored) {
                // token 壞掉或過期：不設定 authentication，讓後面規則判斷這個請求「未登入」。
            }
        }
        filterChain.doFilter(request, response);
    }
}`,
          },
          {
            id: 'auth-security-config',
            title: '建立 SecurityConfig',
            instruction: '設定：/api/auth/register 與 /api/auth/login 允許任何人（permitAll），其餘 /api/auth/** 一定要驗證身分（authenticated）。停用 CSRF（因為是無狀態 API，不用瀏覽器 cookie 機制）。把 JwtAuthFilter 加在 UsernamePasswordAuthenticationFilter 之前。⚠️ 別忘了自訂 AuthenticationEntryPoint：Spring Security 預設在沒有 httpBasic()/formLogin() 時，未認證請求會回 403，但我們要的是 401，一定要自己指定。',
            checkpoint: '沒帶 token 打 /api/auth/me 會收到 401（不是 403！）；帶對的 token 會收到 200。',
            hint: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, JwtAuthFilter jwtAuthFilter) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // 無狀態 API 不靠 cookie，不需要 CSRF 保護
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // 不建立 HttpSession
            // 關鍵：沒有這段，未認證請求預設回 403（Http403ForbiddenEntryPoint），
            // 因為 Spring 找不到「該怎麼引導使用者登入」的機制（沒設 httpBasic/formLogin），
            // 但我們的 API 規格是「沒帶 token / token 無效 -> 401」，所以要自訂 entry point。
            .exceptionHandling(ex -> ex.authenticationEntryPoint(
                (request, response, authException) ->
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED)))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()
                .requestMatchers("/api/auth/**").authenticated()
                .anyRequest().permitAll() // 其他既有的 /api/** 維持不受影響
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}

// 401 (Unauthorized) = 「你根本沒登入 / token 無效」
// 403 (Forbidden)    = 「你登入了，但沒有權限」
// 這裡的情境屬於前者，千萬別讓它預設變成 403。`,
          },
        ],
      },
      {
        id: 'auth-stage-frontend',
        phase: 'frontend',
        title: 'Stage 4：React 前端（註冊 / 登入 / 顯示登入者）',
        intro: `做一個 MyAuthPanel 元件。畫面其實只有「兩種狀態」互相切換，不是三個表單同時出現：

【狀態 A：還沒登入（me 是 null）】
┌─────────────────────────────┐
│ 我的會員系統                  │
│ （如果剛登出/登入失敗會有一行紅字提示）│
│                               │
│ 註冊                          │
│ [帳號____] [密碼____] [註冊]   │
│                               │
│ 登入                          │
│ [帳號____] [密碼____] [登入]   │
└─────────────────────────────┘

【狀態 B：已登入（me 有值，例如 {username:"alice"}）】
┌─────────────────────────────┐
│ 我的會員系統                  │
│ 👋 歡迎，alice！（token 驗證成功） │
│ [登出]                        │
└─────────────────────────────┘

切換的關鍵只有一個：token 這個 state 有沒有值、以及它是否能成功打 /api/auth/me。
不用使用者自己按「查詢我是誰」的按鈕——元件一偵測到 token 改變（剛登入成功，或是重新整理頁面時從 localStorage 讀到舊 token），
就自動用 useEffect 打一次 /me：成功就把 me 設好、畫面切到狀態 B；失敗（token 過期/被竄改）就把 token 清掉、退回狀態 A 並顯示提示。`,
        steps: [
          {
            id: 'auth-fe-forms',
            title: '建立 MyAuthPanel.jsx（註冊 + 登入 + 自動驗證 + 登出）',
            instruction: '兩組 state 分別給註冊表單與登入表單；token 存進 state 同時寫進 localStorage（重新整理頁面不會登出）。重點是用一個 useEffect 監聽 token 變化，自動打 /api/auth/me 換回 me（登入者資訊），用 me 是否有值來決定畫面要顯示「表單」還是「歡迎詞 + 登出」，不要只顯示 token 字串給人看。',
            checkpoint: '① 登入成功後畫面自動切成「歡迎，{username}」而不是顯示一串 token。② 重新整理頁面，只要 token 還沒過期，會自動維持登入狀態。③ 按登出後，畫面立刻退回註冊/登入表單，localStorage 的 token 也被清掉。',
            hint: `import { useEffect, useState } from 'react'

export default function MyAuthPanel() {
  const [registerForm, setRegisterForm] = useState({ username: '', password: '' })
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  // 初始值直接從 localStorage 讀：重新整理頁面不會瞬間跳回「未登入」畫面。
  const [token, setToken] = useState(() => localStorage.getItem('demo-jwt-token') ?? '')
  // me 是「後端驗證過 token 之後回傳的登入者資訊」，不是前端自己猜的。
  // me 有值 = 真的登入成功；me 是 null = 未登入（不管 token 欄位有沒有值）。
  const [me, setMe] = useState(null)
  const [message, setMessage] = useState('')

  // 核心流程：只要 token 變了（剛登入成功 / 頁面剛載入時從 localStorage 讀到舊 token），
  // 就自動打一次 /api/auth/me 去跟後端確認「這張 token 到底還有沒有效、是誰的」。
  // 這一步做完，畫面才會真的切換成「歡迎，xxx」，不是前端自己假裝登入成功。
  useEffect(() => {
    let cancelled = false
    async function verifyToken() {
      if (!token) {
        setMe(null)
        return
      }
      const response = await fetch('/api/auth/me', {
        headers: { Authorization: \`Bearer \${token}\` },
      })
      if (cancelled) return
      if (response.ok) {
        setMe(await response.json())
      } else {
        // token 失效（過期、格式被改過）：清掉 token，退回登入畫面並提示使用者。
        setMe(null)
        setToken('')
        localStorage.removeItem('demo-jwt-token')
        setMessage('登入已過期，請重新登入')
      }
    }
    verifyToken()
    return () => {
      cancelled = true
    }
  }, [token])

  async function handleRegister(event) {
    event.preventDefault()
    setMessage('')
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerForm),
    })
    if (response.ok) {
      setMessage('註冊成功，可以登入了！')
      setRegisterForm({ username: '', password: '' })
    } else {
      setMessage('註冊失敗：帳號可能已被使用')
    }
  }

  async function handleLogin(event) {
    event.preventDefault()
    setMessage('')
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginForm),
    })
    if (!response.ok) {
      setMessage('登入失敗：帳號或密碼錯誤')
      return
    }
    const body = await response.json()
    // 這裡只負責存 token；真正「確認有效、拿到 username」交給上面的 useEffect
    // （它監聽 token 變化，token 一改變就自動驗證一次）。
    setToken(body.token)
    localStorage.setItem('demo-jwt-token', body.token)
    setLoginForm({ username: '', password: '' })
  }

  function handleLogout() {
    setToken('')
    setMe(null)
    localStorage.removeItem('demo-jwt-token')
    setMessage('已登出')
  }

  // 畫面只有兩種狀態：me 有值 = 已登入 → 顯示歡迎詞 + 登出；
  // me 是 null = 未登入 → 顯示註冊表單 + 登入表單。
  if (me) {
    return (
      <div className="info-card">
        <h3>我的會員系統</h3>
        <p>
          👋 歡迎，<strong>{me.username}</strong>！（token 驗證成功）
        </p>
        <button type="button" onClick={handleLogout}>
          登出
        </button>
      </div>
    )
  }

  return (
    <div className="info-card">
      <h3>我的會員系統</h3>
      {message ? <p style={{ color: '#b00020' }}>{message}</p> : null}

      <h4>註冊</h4>
      <form onSubmit={handleRegister}>
        <input
          placeholder="帳號"
          value={registerForm.username}
          onChange={(event) => setRegisterForm({ ...registerForm, username: event.target.value })}
        />
        <input
          type="password"
          placeholder="密碼"
          value={registerForm.password}
          onChange={(event) => setRegisterForm({ ...registerForm, password: event.target.value })}
        />
        <button type="submit">註冊</button>
      </form>

      <h4>登入</h4>
      <form onSubmit={handleLogin}>
        <input
          placeholder="帳號"
          value={loginForm.username}
          onChange={(event) => setLoginForm({ ...loginForm, username: event.target.value })}
        />
        <input
          type="password"
          placeholder="密碼"
          value={loginForm.password}
          onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
        />
        <button type="submit">登入</button>
      </form>
    </div>
  )
}

// 常見地雷提醒：
// 1. body: JSON.stringify(...)——注意是 stringify 不是 stringfy，打錯字編譯不會錯，
//    但 fetch 會把整個物件轉成 "[object Object]" 送出去，後端收到的 username/password 會是 undefined。
// 2. 不要只靠「存了 token」就當作登入成功——一定要實際打一次 /me 驗證過，
//    不然 token 被竄改或過期時，畫面還是會錯誤地顯示登入成功。`,
          },
          {
            id: 'auth-fe-mount',
            title: '掛上頁面展示',
            instruction: '在 App.jsx 最上面 import MyAuthPanel，並在 InterviewProjectsSection 的 showcases 陣列裡，新增一筆 { id: \'project-auth\', component: <MyAuthPanel /> }（跟 project-shortlink / project-expense 那兩筆並排即可）。',
            checkpoint: '切換到「會員登入系統」這個面試專案分頁時，成果展示區能看到你的登入系統，註冊、登入、讀取 /me 都正常運作。',
            hint: `// App.jsx 最上面加：
import MyAuthPanel from './components/MyAuthPanel'

// 找到 <InterviewProjectsSection ... showcases={[ ... ]} />，
// 在陣列裡多加一筆（元件本身放在 component 欄位，id 要對上 learningContent.js 的 project id）：
showcases={[
  { id: 'project-shortlink', component: <MyShortLinks /> },
  { id: 'project-expense', component: <MyExpenseTracker /> },
  { id: 'project-auth', component: <MyAuthPanel /> },
]}`,
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        question: '/api/auth/me 的運作為什麼跟 /register、/login 不一樣？別的 API 都是直接透過 Controller 接 request，為什麼 /me 感覺不是？',
        answerHint: '其實 /me 最後一樣是由 AuthController 的 me() 方法處理，差別在於它前面多了一道關卡：因為 SecurityConfig 把 /api/auth/** 設成 authenticated()（只有 register/login 例外被設成 permitAll），所以請求會先經過 JwtAuthFilter 驗證 Authorization header 裡的 token。驗證成功，Filter 會把使用者資訊放進 SecurityContext 再放行，請求照樣送進 AuthController；驗證失敗，會被 SecurityConfig 的規則攔下來、由自訂的 AuthenticationEntryPoint 直接回 401，這時候才真的沒有進到 Controller。所以正確理解是「/me 多了一層 Filter 做前置身分檢查」，而不是「/me 不透過 Controller」。',
      },
      {
        question: 'Session 與 JWT（token-based）驗證的差異是什麼？',
        answerHint: 'Session 是「伺服器記住你」，資料存在伺服器（要跨機器就得共享 session）。JWT 是「伺服器什麼都不記，token 自己帶著身分資訊 + 簽章」，適合分散式/多台伺服器，缺點是 token 發出去前很難提前撤銷。',
      },
      {
        question: '密碼為什麼要用 BCrypt，不能直接用 MD5 或 SHA-256？',
        answerHint: 'MD5/SHA-256 是「快速雜湊」，設計目的是驗證資料完整性，容易被暴力破解或查表（rainbow table）反推。BCrypt 刻意設計得「很慢」且自動加鹽（salt），大幅提高破解成本，是密碼儲存的業界標準。',
      },
      {
        question: 'JWT token 該存在 localStorage 還是 httpOnly cookie？',
        answerHint: 'localStorage 簡單但怕 XSS（惡意 script 可以直接讀走）；httpOnly cookie 讓 JS 讀不到 token，更安全，但要多處理 CSRF 防護。教學版用 localStorage 圖方便，正式產品建議 httpOnly cookie。',
      },
      {
        question: 'JWT 是無狀態的，那要怎麼讓使用者「登出」或讓 token 提前失效？',
        answerHint: '純 JWT 沒有內建撤銷機制，常見做法：(1) 縮短過期時間 + refresh token 換新，(2) 維護一個「已撤銷 token 黑名單」（要額外存狀態，等於部分犧牲無狀態特性）。這題答出取捨就是加分。',
      },
      {
        question: '為什麼 AuthResponse 只回傳 token，不直接把 UserEntity 回傳給前端？',
        answerHint: 'UserEntity 裡有 passwordHash，就算是雜湊後的值也不該離開後端——這是資安基本原則「最小揭露」。DTO 的存在就是為了控制「這個 API 到底要曝光哪些欄位」。',
      },
    ],
  },
  {
    id: 'project-inventory',
    title: '商品庫存管理（分頁 + 排序 + 併發扣庫存）',
    subtitle: '電商後台最常見的功能組合：清單分頁排序，以及「搶購」時的併發扣庫存問題',
    goal: '做出商品清單（可分頁、可依價格排序）與購買扣庫存 API，並體會兩人同時搶最後一件商品時，資料庫怎麼幫你擋下衝突。',
    interviewValue: [
      'Pageable + Sort 是 Spring Data JPA「怎麼做分頁排序」的標準答案，後台系統幾乎都要用到。',
      '樂觀鎖（@Version）是面試「兩人同時搶最後一件商品，庫存會不會被多扣」的經典追問題。',
      '409 Conflict 狀態碼 + 重試策略，展示你懂併發控制不是只會背名詞。',
    ],
    apiContract: [
      'POST /api/products                          -> 201，建立商品（price >= 1、stock >= 0）',
      'GET  /api/products?page=0&size=5&sort=price,asc -> 200，分頁 + 排序結果（{ content, totalElements, ... }）',
      'POST /api/products/{id}/purchase             -> 200，扣 1 件庫存並回傳最新商品；庫存不足回 409；商品不存在回 404',
    ],
    conceptExplanation: [
      'Pageable 的運作，拆成 4 步看：① Spring MVC 發現 Controller 方法的參數型別是 Pageable，就會自動啟用內建的 PageableHandlerMethodArgumentResolver，把 query string 裡的 page/size/sort 解析組成一個 Pageable 物件，完全不用自己寫 @RequestParam int page, int size...。② Pageable 本身只是「查詢條件」，裡面存著 getPageNumber()（第幾頁，從 0 開始）、getPageSize()（每頁幾筆）、getSort()（排序規則），還能換算出 getOffset()。③ 因為 ProductRepository extends JpaRepository，免費繼承了 findAll(Pageable) 方法，Spring Data JPA 在底層會先下一次 COUNT(*) 查出符合條件的總筆數，再下一次帶 ORDER BY ... LIMIT ... OFFSET ... 的真正查詢——排序和分頁都是資料庫做的，不是把全部資料撈進 Java 再用 List.sort() + subList() 切。④ 回傳的 Page<ProductEntity> 會自動序列化成 { content, totalElements, totalPages, number, size, first, last } 這種固定格式，前端不用自己算總頁數。',
      'page/size/sort 這三個參數名字是 Spring Data Web 的「預設值」，不是語言層級寫死的規定：可以在 application.properties 用 spring.data.web.pageable.page-parameter=xxx（把 page 改名）、size-parameter=xxx、default-page-size=10 等設定全域覆蓋；也可以在單一方法上用 @PageableDefault(size = 10, sort = "price") 只改「沒帶參數時的預設值」（不改名字）。這個專案沒有做任何覆蓋，所以就是用 page/size/sort 這組內建預設名稱——這也是 Spring 框架很常見的「convention over configuration」哲學：先給一套合理預設，不想要才自己改。',
      '想排序多個欄位時，一個常見誤解是寫成 sort=price,name,asc，以為 price 跟 name 可以各自對應不同方向。但 Spring 的解析規則是：一個 sort= 參數裡，最後一個 token（asc/desc）會套用到「這個參數列出的所有欄位」，所以 sort=price,name,asc 其實是 ORDER BY price ASC, name ASC（兩欄位方向相同，name 只是 price 相同時的 tie-breaker）。想要「不同欄位各自指定方向」，必須分開寫兩個 sort= 參數，疊加起來，例如 ?sort=price,desc&sort=name,asc，才會變成 ORDER BY price DESC, name ASC。一句話記憶：方向是綁在單一個 sort= 參數尾巴，每個欄位要各自的方向，就要各自開一個 sort=。',
    ],
    stages: [
      {
        id: 'inv-stage-entity',
        phase: 'backend',
        title: 'Stage 1：ProductEntity（含 @Version 樂觀鎖欄位）',
        intro: '這次 Entity 多一個新角色：@Version。它是 Hibernate 用來偵測「這筆資料在我讀它之後，有沒有被別人改過」的機關。',
        steps: [
          {
            id: 'inv-entity',
            title: '建立 ProductEntity + ProductRepository',
            instruction: '新增 package inventory。欄位：id、name、price（int）、stock（int）、version（@Version，Long）。Repository 直接 extends JpaRepository（分頁排序功能它已經內建，不用自己寫）。',
            checkpoint: '你能解釋 @Version 欄位平常長什麼樣（每次 UPDATE 成功就自動 +1，你完全不用手動維護它）。',
            hint: `package com.example.react_learning.inventory;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int stock;

    // 樂觀鎖版本號：Hibernate 自動管理，UPDATE 時會下
    // "UPDATE products SET ..., version = version + 1 WHERE id = ? AND version = ?"
    // 如果 WHERE 條件對不上（代表資料被別人先改走了），
    // 這次 UPDATE 影響 0 筆，Hibernate 就會丟出 OptimisticLockingFailureException。
    @Version
    private Long version;

    protected ProductEntity() {
    }

    public ProductEntity(String name, int price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public int getPrice() { return price; }
    public int getStock() { return stock; }
    public void decreaseStock() { this.stock -= 1; }
}

// ProductRepository.java
package com.example.react_learning.inventory;

import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository 已經內建分頁/排序能力（findAll(Pageable pageable)），
// 這次不用額外宣告衍生查詢就能做出分頁排序 API。
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}`,
          },
        ],
      },
      {
        id: 'inv-stage-listing',
        phase: 'backend',
        title: 'Stage 2：分頁排序 API',
        intro: '學會怎麼讓前端用 ?page=&size=&sort= 控制列表，而不用自己手刻 LIMIT/OFFSET 邏輯。',
        steps: [
          {
            id: 'inv-controller-list',
            title: 'Controller：GET /api/products 支援 Pageable',
            instruction: '方法參數直接寫 Pageable pageable，Spring 會自動從 query string（page、size、sort）組成分頁物件。回傳型別用 Page<ProductEntity>（或轉成你自己的 DTO）。',
            checkpoint: '打 /api/products?page=0&size=2&sort=price,desc 會看到價格由高到低、每頁 2 筆的結果。',
            hint: `@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Pageable 是 Spring 幫你組好的物件：page（第幾頁，從 0 開始）、
    // size（每頁幾筆）、sort（依哪個欄位排序）都會自動從 query string 解析進來。
    @GetMapping
    public Page<ProductEntity> getProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductEntity createProduct(@Valid @RequestBody ProductRequest request) {
        return productRepository.save(
                new ProductEntity(request.name(), request.price(), request.stock()));
    }
}

// ProductRequest.java
public record ProductRequest(
        @NotBlank String name,
        @Min(value = 1, message = "price 至少要 1") int price,
        @Min(value = 0, message = "stock 不能是負數") int stock
) {}`,
          },
        ],
      },
      {
        id: 'inv-stage-purchase',
        phase: 'backend',
        title: 'Stage 3：購買扣庫存 + 處理併發衝突',
        intro: '這關是整個專案的靈魂：庫存不足要擋下來，兩人同時搶最後一件也要正確處理，不能讓庫存變成負數。',
        verify: {
          id: 'verify-inventory-purchase',
          label: '自動驗收：分頁排序與扣庫存',
          description: '平台會建立一件庫存 1 的商品 → 購買一次確認扣成 0 → 再買一次確認 409 → 檢查分頁排序 → 檢查 price 驗證。',
        },
        steps: [
          {
            id: 'inv-service-purchase',
            title: 'Service：purchase(id) 扣庫存邏輯',
            instruction: '找到商品，庫存 <= 0 就丟 409（用 ResponseStatusException(HttpStatus.CONFLICT, ...)）；否則呼叫 entity.decreaseStock() 並 save。找不到商品丟 404。',
            checkpoint: '你能解釋「庫存不足」跟「版本衝突」雖然都回 409，但代表完全不同的原因（一個是業務規則，一個是併發競爭）。',
            hint: `@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductEntity purchase(Long id) {
        ProductEntity product = productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "找不到商品"));

        if (product.getStock() <= 0) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "庫存不足，手慢了");
        }

        product.decreaseStock();
        // save 的當下，Hibernate 會用 @Version 檢查：
        // 如果別人在我讀取之後、我 save 之前，已經搶先改過這筆資料，
        // 這裡就會丟 ObjectOptimisticLockingFailureException，被下面的 Controller 接住轉成 409。
        return productRepository.save(product);
    }
}`,
          },
          {
            id: 'inv-controller-purchase',
            title: 'Controller：接住樂觀鎖例外，轉成 409',
            instruction: '在 Controller（或 GlobalExceptionHandler）加一個 @ExceptionHandler(ObjectOptimisticLockingFailureException.class)，回 409 並附上「請重新整理再試一次」的訊息。',
            checkpoint: '兩個瀏覽器分頁同時對「庫存只剩 1」的商品按購買，其中一個會成功、另一個會收到 409，庫存不會變成 -1。',
            hint: `@PostMapping("/{id}/purchase")
public ProductEntity purchase(@PathVariable Long id) {
    return productService.purchase(id);
}

// 建議加在 GlobalExceptionHandler 裡，跟其他例外處理放在一起：
@ExceptionHandler(ObjectOptimisticLockingFailureException.class)
public ResponseEntity<ApiErrorResponse> handleOptimisticLock(ObjectOptimisticLockingFailureException ex) {
    ApiErrorResponse body = new ApiErrorResponse(
            409, "STOCK_CONFLICT", "商品剛被搶購，請重新整理再試一次。", null, Instant.now(), List.of());
    return ResponseEntity.status(HttpStatus.CONFLICT).body(body);
}`,
          },
        ],
      },
      {
        id: 'inv-stage-frontend',
        phase: 'frontend',
        title: 'Stage 4：React 前端（分頁列表 + 排序 + 購買按鈕）',
        intro: '做一個 MyInventory 元件：列表可以換頁、換排序方式，購買按鈕要能處理 409（庫存不足/版本衝突）並提示使用者重新整理。',
        steps: [
          {
            id: 'inv-fe-list',
            title: '建立 MyInventory.jsx（分頁 + 排序 + 購買）',
            instruction: 'state：page、sort、products。useEffect 依 page/sort 變化重新 fetch。購買按鈕呼叫 POST /purchase，若回 409 就跳出提示文字，並重新整理列表確認最新庫存。',
            checkpoint: '切換排序方式或換頁時，畫面會重新抓對應的資料；庫存為 0 時按購買會看到清楚的錯誤提示，而不是沒反應。',
            hint: `import { useEffect, useState } from 'react'

export default function MyInventory() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [sort, setSort] = useState('price,asc')
  const [message, setMessage] = useState('')

  async function loadProducts() {
    const response = await fetch(\`/api/products?page=\${page}&size=5&sort=\${sort}\`)
    const body = await response.json()
    setProducts(body.content)
  }

  useEffect(() => {
    let cancelled = false
    async function run() {
      const response = await fetch(\`/api/products?page=\${page}&size=5&sort=\${sort}\`)
      const body = await response.json()
      if (!cancelled) setProducts(body.content)
    }
    run()
    return () => { cancelled = true }
  }, [page, sort])

  async function handlePurchase(id) {
    const response = await fetch(\`/api/products/\${id}/purchase\`, { method: 'POST' })
    if (response.status === 409) {
      setMessage('手慢了，庫存被搶光了或剛被其他人買走，畫面已重新整理。')
      await loadProducts()
      return
    }
    setMessage('購買成功！')
    await loadProducts()
  }

  // ...JSX：排序下拉、分頁按鈕、商品列表 + 購買按鈕、message 提示
}`,
          },
          {
            id: 'inv-fe-mount',
            title: '掛上頁面展示',
            instruction: '在 App.jsx 最上面 import MyInventory，並在 InterviewProjectsSection 的 showcases 陣列裡，新增一筆 { id: \'project-inventory\', component: <MyInventory /> }。',
            checkpoint: '切換到「商品庫存管理」這個面試專案分頁時，成果展示區能看到你的庫存系統，分頁、排序、購買都正常運作，庫存歸零後會看到清楚的錯誤提示。',
            hint: `// App.jsx 最上面加：
import MyInventory from './components/MyInventory'

// 找到 <InterviewProjectsSection ... showcases={[ ... ]} />，
// 在陣列裡多加一筆：
showcases={[
  { id: 'project-shortlink', component: <MyShortLinks /> },
  { id: 'project-expense', component: <MyExpenseTracker /> },
  { id: 'project-auth', component: <MyAuthPanel /> },
  { id: 'project-inventory', component: <MyInventory /> },
]}`,
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        question: 'Pageable 的 page/size/sort 參數，Spring 底層怎麼變成 SQL？',
        answerHint: 'Spring Data JPA 會組出帶 LIMIT/OFFSET（或資料庫對應語法）與 ORDER BY 的查詢，page*size 算出 OFFSET，size 是 LIMIT，sort 直接接到 ORDER BY 後面。這些你完全不用手寫。',
      },
      {
        question: 'page/size/sort 這幾個參數名是固定的嗎？可以改嗎？',
        answerHint: '這是 Spring Data Web 的「預設值」，不是寫死規定：可以用 application.properties 的 spring.data.web.pageable.page-parameter / size-parameter 全域改名，或用 @PageableDefault(size = 10, sort = "price") 只改單一方法的預設值（不改名字）。這題能答出「預設值可被覆蓋」就展現了對 convention over configuration 的理解。',
      },
      {
        question: '想依多個欄位排序、每個欄位方向不同，sort 要怎麼寫？寫成 sort=price,name,asc 對嗎？',
        answerHint: '不對，那樣寫會讓 price 跟 name 都套用同一個方向（asc），因為一個 sort= 參數裡最後一個 token 會套用到這個參數列出的所有欄位。要讓不同欄位各自指定方向，必須分開寫兩個 sort= 疊加，例如 ?sort=price,desc&sort=name,asc，才會變成 ORDER BY price DESC, name ASC。',
      },
      {
        question: '@Version 樂觀鎖的原理是什麼？',
        answerHint: '每次 UPDATE 時，SQL 會多加 "AND version = ?" 這個條件；如果沒人搶先改過，條件成立、version +1；如果被搶先改過，WHERE 條件對不上，影響 0 筆，Hibernate 判斷這是衝突，丟出例外。',
      },
      {
        question: '樂觀鎖跟悲觀鎖怎麼選？',
        answerHint: '樂觀鎖假設「衝突機率低」，先做完再檢查，衝突時重試成本低（適合這種秒殺場景）。悲觀鎖是「先鎖住再做」（SELECT ... FOR UPDATE），適合衝突機率高、或衝突後代價很高的場景，但會犧牲併發效能。',
      },
      {
        question: '為什麼不能寫成「前端先 GET 拿庫存，判斷夠不夠，再 POST 扣庫存」？',
        answerHint: '這是經典的 TOCTOU（Time-Of-Check to Time-Of-Use）問題：兩個請求都在「檢查」的當下看到庫存還有 1，都判斷可以買，結果都送出扣庫存，庫存變成 -1。扣庫存的檢查與動作必須在同一次資料庫操作裡原子化完成。',
      },
      {
        question: '這種 OFFSET 分頁在資料量很大時會有什麼效能問題？',
        answerHint: 'OFFSET 越大，資料庫要先掃過並丟棄前面所有列才能拿到目標頁，越後面的頁越慢。解法是「keyset / cursor 分頁」：用上一頁最後一筆的 id 或排序欄位當作查詢條件（WHERE id > ?），不管翻到第幾頁效能都一樣。',
      },
    ],
  },
  {
    id: 'project-comments',
    title: '留言板 / 評論系統（接 MySQL）',
    subtitle: '最常見的「一對多內容」系統雛形，練習排序查詢與驗證，並示範接上真正的外部 MySQL',
    goal: '做出一個可以張貼留言、依時間新到舊排序、刪除留言的 API。預設用 H2 就能完整開發與驗收；接著照著 16. 串接外部資料庫 的步驟，改用 --spring.profiles.active=mysql 接到 Docker 裡的 MySQL，體會同一支程式換資料庫的過程。',
    interviewValue: [
      '留言板/評論系統幾乎是所有內容型產品（部落格、電商評價、社群）的共同基礎元件，面試常被當作「簡化版」考題。',
      '核心練習是「依建立時間排序」這個最常見的查詢需求——用 JPA 衍生查詢 findAllByOrderByCreatedAtDesc 不用寫任何 SQL 就能做到。',
      '刻意串接外部 MySQL：能具體聊「開發機用 H2、正式環境接 MySQL」這種分層架構的實務經驗，而不是紙上談兵。',
    ],
    apiContract: [
      'POST   /api/comments       -> 201，建立留言（author、content 都不能空白，content 長度上限 500）',
      'GET    /api/comments       -> 200，回傳所有留言，依建立時間「新到舊」排序',
      'DELETE /api/comments/{id}  -> 204，刪除留言；不存在回 404',
    ],
    conceptExplanation: [
      '細心的話你會發現：這個練習的 CommentController 直接注入 CommentRepository，完全沒有 CommentService——這是刻意的設計，不是偷懶。對照一下其他專案就看得出規則：ShortLinkService 要處理「產生不重複短碼」的重試邏輯、AuthService 要處理密碼雜湊與發 JWT、ProductService 要處理樂觀鎖衝突重試，這些都是「不屬於 HTTP 層、也不屬於資料庫存取層」的真正業務邏輯，所以值得獨立成一層。',
      'Comment 的三個 API 剛好相反：GET 就是轉呼叫 findAllByOrderByCreatedAtDesc()，POST 就是 new 一個 Entity 再 save，DELETE 只是多了兩行 existsById 檢查——每一步都已經被 DTO 驗證（@Valid）或 JPA 衍生查詢處理掉了，Controller 裡剩下的就真的只是「轉接」。如果硬是包一層 CommentService 進去，它所有方法會長得跟 Controller 一模一樣，只是多一層沒有意義的轉呼叫，業界把這種東西戲稱為「anemic service / 貧血層」，是會被嫌棄的反模式。',
      '判斷原則就一句話：Controller 方法裡，除了呼叫 Repository 之外，還要不要做別的事？有（組合多個步驟、呼叫外部服務、處理特殊狀態機、重試邏輯……）才需要 Service；沒有的話，Service 層只是樣板噪音。這個專案刻意把「有 Service」（ShortLink/Auth/Inventory）跟「沒 Service」（Comment）放在同一份教材裡，就是要讓你親眼比較兩種情況，體會 Service 層不是規定要加的東西，而是「有沒有東西值得放進去」決定的。',
    ],
    stages: [
      {
        id: 'cm-stage-entity',
        phase: 'backend',
        title: 'Stage 1：Entity + 依時間排序的衍生查詢',
        intro: '這次 Entity 新增一個 @PrePersist：讓 createdAt 在「第一次真正存進資料庫前」自動補上目前時間，不用每次手動設定。',
        steps: [
          {
            id: 'cm-entity',
            title: '建立 CommentEntity + CommentRepository',
            instruction: '新增 package comment。欄位：id、author（String）、content（String）、createdAt（Instant）。用 @PrePersist 方法在 createdAt 還是 null 時自動補上 Instant.now()。Repository 加一個衍生查詢 findAllByOrderByCreatedAtDesc()。',
            checkpoint: '你能解釋為什麼排序要交給 findAllByOrderByCreatedAtDesc() 讓資料庫做，而不是查出全部留言後，在 Java 用 List.sort() 自己排。',
            hint: `package com.example.react_learning.comment;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "comments")
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String author;

    @Column(nullable = false, length = 500)
    private String content;

    @Column(nullable = false)
    private Instant createdAt;

    protected CommentEntity() {
    }

    public CommentEntity(String author, String content) {
        this.author = author;
        this.content = content;
    }

    // JPA 在「真正送進資料庫前」會呼叫這個方法一次，
    // 讓 createdAt 不用每次 new CommentEntity 時手動塞值，也不會忘記設定。
    @PrePersist
    void onCreate() {
        if (createdAt == null) {
            createdAt = Instant.now();
        }
    }

    public Long getId() { return id; }
    public String getAuthor() { return author; }
    public String getContent() { return content; }
    public Instant getCreatedAt() { return createdAt; }
}

// CommentRepository.java
package com.example.react_learning.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
    // 方法名稱本身就是查詢條件：依 createdAt 由新到舊排序。
    // 排序交給資料庫（通常有索引），比撈全部資料回 Java 端自己排快得多，資料量越大差距越明顯。
    List<CommentEntity> findAllByOrderByCreatedAtDesc();
}`,
          },
        ],
      },
      {
        id: 'cm-stage-api',
        phase: 'backend',
        title: 'Stage 2：DTO 驗證 + CRUD API',
        intro: '跟 Task/短網址一樣的套路：DTO 負責驗證輸入，Controller 負責對外契約。',
        verify: {
          id: 'verify-comments-crud',
          label: '自動驗收：留言排序 + 驗證 + 刪除',
          description: '依序建立兩則留言、確認排序正確、確認空白內容被擋下、刪除其中一則後確認真的消失。',
        },
        steps: [
          {
            id: 'cm-dto-controller',
            title: '建立 CommentRequest + CommentController',
            instruction: 'CommentRequest 用 @NotBlank 驗證 author、content，content 另外加 @Size(max = 500)。Controller：POST 建立、GET 回傳 findAllByOrderByCreatedAtDesc() 的結果、DELETE 用 existsById 檢查後再刪，不存在就丟 404。',
            checkpoint: '完成後按下方「執行自動驗收」，五項全部通過。',
            hint: `package com.example.react_learning.comment;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CommentRequest(
        @NotBlank String author,
        @NotBlank @Size(max = 500, message = "留言內容最多 500 字") String content
) {}

// CommentController.java
package com.example.react_learning.comment;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @GetMapping
    public List<CommentEntity> getComments() {
        return commentRepository.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommentEntity createComment(@Valid @RequestBody CommentRequest request) {
        return commentRepository.save(new CommentEntity(request.author(), request.content()));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long id) {
        if (!commentRepository.existsById(id)) {
            throw new NoSuchElementException("留言不存在：" + id);
        }
        commentRepository.deleteById(id);
    }
}`,
          },
        ],
      },
      {
        id: 'cm-stage-mysql',
        phase: 'backend',
        title: 'Stage 3：接上真正的外部 MySQL（選用進階挑戰）',
        intro: '這一步不需要改任何 Java 程式碼，純粹是「換資料庫設定」的練習——這正是前面 16. 串接外部資料庫 教的分層架構價值。如果這台機器不能跑 Docker，可以先跳過，之後在能跑 Docker 的機器上再做這個 Stage。',
        steps: [
          {
            id: 'cm-use-mysql',
            title: '用 MySQL 設定檔重新啟動後端',
            instruction: '參考 16. 串接外部資料庫 的 MySQL 練習：docker compose --profile mysql up -d 啟動 MySQL 容器，pom.xml 打開 mysql-connector-j 註解，再用 --spring.profiles.active=mysql 啟動後端。重新打開前端頁面測試留言功能，行為應該跟剛剛用 H2 時一模一樣。',
            checkpoint: '用 docker exec -it react-learning-mysql mysql -ulearner -plearn123 learning_lab -e "SELECT * FROM comments;" 能看到透過 API 新增的留言，證明資料真的進了 MySQL，而不是 H2。',
            hint: `# 1. 啟動 MySQL 容器
docker compose --profile mysql up -d

# 2. pom.xml 打開 mysql-connector-j 註解（參考 16. 串接外部資料庫）

# 3. 用 mysql profile 啟動後端
mvn spring-boot:run -Dspring-boot.run.profiles=mysql

# 4. 驗證資料真的進了 MySQL
docker exec -it react-learning-mysql mysql -ulearner -plearn123 learning_lab -e "SELECT * FROM comments;"`,
          },
        ],
      },
      {
        id: 'cm-stage-frontend',
        phase: 'frontend',
        title: 'Stage 4：React 前端（張貼 + 列表 + 刪除）',
        intro: '做一個 MyCommentBoard 元件：上面是張貼表單，下面是留言列表（新到舊），每則留言旁邊有刪除按鈕。',
        steps: [
          {
            id: 'cm-fe',
            title: '建立 MyCommentBoard.jsx',
            instruction: '一組 state 存表單（author、content），一組 state 存留言陣列。送出表單後呼叫 POST，成功後重新 GET 一次更新列表；點刪除呼叫 DELETE 後也重新 GET 一次。',
            checkpoint: '新增留言後，畫面最上面會立刻看到新留言（因為後端已經幫你排序好），刪除後該則留言立刻從畫面消失。',
            hint: `import { useEffect, useState } from 'react'

export default function MyCommentBoard() {
  const [comments, setComments] = useState([])
  const [form, setForm] = useState({ author: '', content: '' })
  const [error, setError] = useState('')

  async function loadComments() {
    const response = await fetch('/api/comments')
    setComments(await response.json())
  }

  useEffect(() => {
    let cancelled = false
    async function initialLoad() {
      const response = await fetch('/api/comments')
      const data = await response.json()
      if (!cancelled) setComments(data)
    }
    initialLoad()
    return () => { cancelled = true }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!response.ok) {
      setError('留言失敗：author 和 content 都要填寫')
      return
    }
    setForm({ author: '', content: '' })
    await loadComments()
  }

  async function handleDelete(id) {
    await fetch(\`/api/comments/\${id}\`, { method: 'DELETE' })
    await loadComments()
  }

  return (
    <div className="info-card">
      <h3>我的留言板</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="你的名字"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <input
          placeholder="留言內容"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">送出留言</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>：{comment.content}
            <button type="button" onClick={() => handleDelete(comment.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
          },
          {
            id: 'cm-fe-mount',
            title: '掛上頁面展示',
            instruction: '在 App.jsx 最上面 import MyCommentBoard，並在 InterviewProjectsSection 的 showcases 陣列裡，新增一筆 { id: \'project-comments\', component: <MyCommentBoard /> }。',
            checkpoint: '切換到「留言板 / 評論系統」這個面試專案分頁時，成果展示區能看到留言板，張貼與刪除都正常運作。',
            hint: `// App.jsx 最上面加：
import MyCommentBoard from './components/MyCommentBoard'

// showcases 陣列裡多加一筆：
showcases={[
  { id: 'project-shortlink', component: <MyShortLinks /> },
  { id: 'project-expense', component: <MyExpenseTracker /> },
  { id: 'project-auth', component: <MyAuthPanel /> },
  { id: 'project-inventory', component: <MyInventory /> },
  { id: 'project-comments', component: <MyCommentBoard /> },
]}`,
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        question: 'CommentController 直接注入 CommentRepository，為什麼不像 ShortLink/Auth/Inventory 一樣包一層 Service？',
        answerHint: '判斷原則是「Controller 方法裡，除了呼叫 Repository 之外，還要不要做別的事」。ShortLink 要重試產生不重複短碼、Auth 要雜湊密碼與發 JWT、Inventory 要處理樂觀鎖重試，這些都是真正的業務邏輯，值得獨立成 Service。Comment 的三個 API 每一步都已經被 DTO 驗證或 JPA 衍生查詢處理掉了，硬加一層 Service 只會變成跟 Controller 一模一樣的轉呼叫（anemic service 反模式），所以直接讓 Controller 打 Repository 更乾淨。',
      },
      {
        question: '為什麼排序要用 findAllByOrderByCreatedAtDesc()，不要查全部資料回 Java 再用 Comparator 排？',
        answerHint: '資料庫對排序欄位（尤其有索引時）做排序，效率遠高於把所有資料搬到應用程式記憶體裡再排。而且資料庫端排序可以搭配分頁（只搬需要的那幾筆），Java 端排序通常得先撈出全部資料，資料量一大就會變成效能瓶頸與記憶體壓力。',
      },
      {
        question: '@PrePersist 是什麼時機點執行？跟在建構子裡直接塞 Instant.now() 有什麼差別？',
        answerHint: '@PrePersist 是 JPA 生命週期回呼，在「這個物件第一次真正要被寫進資料庫」前觸發。如果在建構子裡塞時間，那只要 new 出物件但還沒存檔前時間就定住了；@PrePersist 確保記錄的是「真正落地存檔」那一刻的時間，對這個情境差異不大，但對「物件 new 出來後可能隔一段時間才存檔」的情境才是正確時間點。',
      },
      {
        question: '這個練習和 Task 功能都用 H2，為什麼還要特地改接 MySQL？',
        answerHint: '這就是展示「分層架構」最直接的方式：Controller/Service/Repository 完全不用改一行，只靠換 pom.xml 依賴跟 application-{profile}.properties，就能把同一支程式接到不同資料庫。面試被問「你有沒有接過正式資料庫」時，這個經驗比空口說懂 JPA 更有說服力。',
      },
      {
        question: '留言內容長度限制為什麼要同時在前端和後端都做？',
        answerHint: '前端限制是為了「使用者體驗」（即時提示，不用等後端回應才知道錯）；後端限制（@Size）才是「真正的防線」，因為前端驗證可以被繞過（直接打 API、改瀏覽器開發者工具），後端驗證才能保證資料庫裡的資料永遠符合規則。',
      },
      {
        question: 'DELETE /api/comments/{id} 為什麼要先 existsById 檢查，不要直接呼叫 deleteById？',
        answerHint: 'Spring Data JPA 的 deleteById 在 id 不存在時會丟出 EmptyResultDataAccessException，屬於例外狀況不容易精準轉換成你想要的 404 語意。先用 existsById 檢查、不存在就主動丟自訂例外（由 GlobalExceptionHandler 轉成 404），讓 API 的錯誤回應更可控、訊息更清楚。',
      },
    ],
  },
  {
    id: 'project-blog',
    title: '個人部落格文章管理（接 PostgreSQL）',
    subtitle: '帶草稿/發布狀態的內容管理系統雛形，練習條件查詢，並示範接上真正的外部 PostgreSQL',
    goal: '做出文章的建立、「只看已發布」查詢、發布切換、刪除 API。預設用 H2 完整開發與驗收；接著照 16. 串接外部資料庫 的步驟，改用 --spring.profiles.active=postgres 接到 Docker 裡的 PostgreSQL。',
    interviewValue: [
      '「草稿 / 已發布」狀態機幾乎是所有內容管理系統（CMS、部落格、電商商品上架）的共同需求，練的是條件查詢而不是全撈再用程式篩選。',
      '衍生查詢 findByPublishedTrue 示範 JPA 怎麼依布林欄位查詢，搭配 @RequestParam 的可選條件查詢是後台系統的標配寫法。',
      '刻意串接外部 PostgreSQL + pgAdmin：能具體聊「用 GUI 工具檢查資料庫實際狀態」這種除錯實務，而不只是會寫程式。',
    ],
    apiContract: [
      'POST  /api/posts                 -> 201，建立文章（title、body 不能空白），預設 published=false（草稿）',
      'GET   /api/posts?published=true  -> 200，只回傳已發布文章；不帶這個參數回傳全部文章',
      'PATCH /api/posts/{id}/publish    -> 200，把文章切換為已發布；不存在回 404',
      'DELETE /api/posts/{id}           -> 204，刪除文章；不存在回 404',
    ],
    stages: [
      {
        id: 'blog-stage-entity',
        phase: 'backend',
        title: 'Stage 1：Entity + 依發布狀態查詢',
        intro: 'published 這個布林欄位就是這個練習的核心：它決定一篇文章「外部看不看得到」。',
        steps: [
          {
            id: 'blog-entity',
            title: '建立 PostEntity + PostRepository',
            instruction: '新增 package blog。欄位：id、title（String）、body（String）、published（boolean，預設 false）、createdAt（Instant，用 @PrePersist 補值，做法跟留言板那題一樣）。Repository 加衍生查詢 findByPublishedTrueOrderByCreatedAtDesc()。',
            checkpoint: '你能解釋為什麼新文章預設是草稿（published=false），而不是一建立就直接公開。',
            hint: `package com.example.react_learning.blog;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "posts")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    @Column(nullable = false)
    private boolean published = false;

    @Column(nullable = false)
    private Instant createdAt;

    protected PostEntity() {
    }

    public PostEntity(String title, String body) {
        this.title = title;
        this.body = body;
    }

    @PrePersist
    void onCreate() {
        if (createdAt == null) {
            createdAt = Instant.now();
        }
    }

    public void publish() {
        this.published = true;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getBody() { return body; }
    public boolean isPublished() { return published; }
    public Instant getCreatedAt() { return createdAt; }
}

// PostRepository.java
package com.example.react_learning.blog;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRepository extends JpaRepository<PostEntity, Long> {
    // 衍生查詢：只找 published = true 的文章，依建立時間新到舊排序。
    List<PostEntity> findByPublishedTrueOrderByCreatedAtDesc();
}`,
          },
        ],
      },
      {
        id: 'blog-stage-api',
        phase: 'backend',
        title: 'Stage 2：條件查詢 + 發布切換 API',
        intro: '這次 GET 要支援「可選參數」：帶 published=true 就篩選，不帶就回傳全部，這是後台系統很常見的寫法。',
        verify: {
          id: 'verify-blog-crud',
          label: '自動驗收：草稿/發布流程 + 驗證 + 刪除',
          description: '建立一篇草稿，確認已發布列表看不到它；呼叫發布 API 後，確認它出現在已發布列表；確認空白標題被擋下；刪除後確認真的消失。',
        },
        steps: [
          {
            id: 'blog-dto-controller',
            title: '建立 PostRequest + PostController',
            instruction: 'PostRequest 用 @NotBlank 驗證 title、body。Controller：GET 用 @RequestParam(required = false) Boolean published 決定要不要篩選；PATCH /{id}/publish 讀出 entity、呼叫 publish()、save 回去（JPA 的 dirty checking 其實存不存都可以，但顯式 save 更清楚）；DELETE 跟留言板一樣用 existsById 檢查。',
            checkpoint: '完成後按下方「執行自動驗收」，全部項目通過。',
            hint: `package com.example.react_learning.blog;

import jakarta.validation.constraints.NotBlank;

public record PostRequest(
        @NotBlank String title,
        @NotBlank String body
) {}

// PostController.java
package com.example.react_learning.blog;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<PostEntity> getPosts(@RequestParam(required = false) Boolean published) {
        // published=true 時只回傳已發布文章；沒帶這個參數（null）就回傳全部，方便後台管理畫面看草稿。
        if (Boolean.TRUE.equals(published)) {
            return postRepository.findByPublishedTrueOrderByCreatedAtDesc();
        }
        return postRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PostEntity createPost(@Valid @RequestBody PostRequest request) {
        return postRepository.save(new PostEntity(request.title(), request.body()));
    }

    @PatchMapping("/{id}/publish")
    public PostEntity publishPost(@PathVariable Long id) {
        PostEntity post = postRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("文章不存在：" + id));
        post.publish();
        return postRepository.save(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id) {
        if (!postRepository.existsById(id)) {
            throw new NoSuchElementException("文章不存在：" + id);
        }
        postRepository.deleteById(id);
    }
}`,
          },
        ],
      },
      {
        id: 'blog-stage-postgres',
        phase: 'backend',
        title: 'Stage 3：接上真正的外部 PostgreSQL（選用進階挑戰）',
        intro: '跟留言板那題接 MySQL 的道理完全一樣，只是這次換 PostgreSQL，而且多了 pgAdmin 這個網頁 GUI 可以直接看資料表。如果這台機器不能跑 Docker，可以先跳過，之後在能跑 Docker 的機器上再做這個 Stage。',
        steps: [
          {
            id: 'blog-use-postgres',
            title: '用 PostgreSQL 設定檔重新啟動後端',
            instruction: '參考 16. 串接外部資料庫 的 PostgreSQL 練習：docker compose --profile postgres up -d 啟動 postgres 跟 pgadmin 容器，pom.xml 打開 postgresql 驅動註解，再用 --spring.profiles.active=postgres 啟動後端。',
            checkpoint: '在 pgAdmin（http://localhost:5050）的 Query Tool 對 learning_lab 資料庫下 SELECT * FROM posts; 能看到透過 API 新增的文章，published 欄位的 true/false 也能在 GUI 上直接看到。',
            hint: `# 1. 啟動 PostgreSQL + pgAdmin
docker compose --profile postgres up -d

# 2. pom.xml 打開 postgresql 驅動註解（參考 16. 串接外部資料庫）

# 3. 用 postgres profile 啟動後端
mvn spring-boot:run -Dspring-boot.run.profiles=postgres

# 4. pgAdmin（http://localhost:5050）開 Query Tool 驗證：
SELECT * FROM posts;`,
          },
        ],
      },
      {
        id: 'blog-stage-frontend',
        phase: 'frontend',
        title: 'Stage 4：React 前端（列表 + 發布切換 + 刪除）',
        intro: '做一個 MyBlogManager 元件，模擬後台管理頁面：看得到全部文章（含草稿），草稿有「發布」按鈕，已發布的文章顯示「已發布」標籤。',
        steps: [
          {
            id: 'blog-fe',
            title: '建立 MyBlogManager.jsx',
            instruction: '一組 state 存文章陣列（用 GET /api/posts，不帶 published 參數，後台要看到全部含草稿）。每篇文章依 published 顯示不同狀態與按鈕：草稿顯示「發布」按鈕，已發布顯示「已發布」標籤跟「刪除」按鈕。',
            checkpoint: '新增文章後預設顯示「草稿」，按下發布後畫面立即變成「已發布」，不用重新整理頁面。',
            hint: `import { useEffect, useState } from 'react'

export default function MyBlogManager() {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: '', body: '' })
  const [error, setError] = useState('')

  async function loadPosts() {
    const response = await fetch('/api/posts')
    setPosts(await response.json())
  }

  useEffect(() => {
    let cancelled = false
    async function initialLoad() {
      const response = await fetch('/api/posts')
      const data = await response.json()
      if (!cancelled) setPosts(data)
    }
    initialLoad()
    return () => { cancelled = true }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!response.ok) {
      setError('建立失敗：title 和 body 都要填寫')
      return
    }
    setForm({ title: '', body: '' })
    await loadPosts()
  }

  async function handlePublish(id) {
    await fetch(\`/api/posts/\${id}/publish\`, { method: 'PATCH' })
    await loadPosts()
  }

  async function handleDelete(id) {
    await fetch(\`/api/posts/\${id}\`, { method: 'DELETE' })
    await loadPosts()
  }

  return (
    <div className="info-card">
      <h3>我的部落格後台</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="文章標題"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="文章內容"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        <button type="submit">新增草稿</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            {post.published ? (
              <span> ✅ 已發布</span>
            ) : (
              <button type="button" onClick={() => handlePublish(post.id)}>發布</button>
            )}
            <button type="button" onClick={() => handleDelete(post.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
          },
          {
            id: 'blog-fe-mount',
            title: '掛上頁面展示',
            instruction: '在 App.jsx 最上面 import MyBlogManager，並在 InterviewProjectsSection 的 showcases 陣列裡，新增一筆 { id: \'project-blog\', component: <MyBlogManager /> }。',
            checkpoint: '切換到「個人部落格文章管理」這個面試專案分頁時，成果展示區能看到部落格後台，新增、發布、刪除都正常運作。',
            hint: `// App.jsx 最上面加：
import MyBlogManager from './components/MyBlogManager'

// showcases 陣列裡多加一筆：
showcases={[
  { id: 'project-shortlink', component: <MyShortLinks /> },
  { id: 'project-expense', component: <MyExpenseTracker /> },
  { id: 'project-auth', component: <MyAuthPanel /> },
  { id: 'project-inventory', component: <MyInventory /> },
  { id: 'project-comments', component: <MyCommentBoard /> },
  { id: 'project-blog', component: <MyBlogManager /> },
]}`,
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        question: '為什麼 GET /api/posts 要用 @RequestParam(required = false) Boolean published，而不是拆成兩個不同的 endpoint？',
        answerHint: '這是「同一種資源、不同篩選條件」的標準做法：GET /api/posts 搭配可選的 query string，比起 /api/posts/all 和 /api/posts/published 兩個 endpoint 更符合 RESTful 風格（resource 是 posts，published 只是篩選條件，不應該變成路徑的一部分）。',
      },
      {
        question: '為什麼用 Boolean（包裝類別）而不是 boolean（基本型別）接這個參數？',
        answerHint: 'boolean 基本型別沒有「沒有值」這個狀態，只能是 true 或 false；Boolean 包裝類別多了 null，剛好對應「使用者沒有帶這個 query 參數」的情況，讓程式可以區分「沒篩選」跟「篩選為 false」。',
      },
      {
        question: 'PATCH 和 PUT 有什麼差異？為什麼發布文章用 PATCH 不是 PUT？',
        answerHint: 'PUT 語意是「用送過去的內容整個覆蓋這個資源」；PATCH 語意是「只更新其中一部分欄位」。發布文章只是把 published 從 false 改成 true，並不是要整篇文章的 title/body 全部重新覆蓋一次，用 PATCH 更符合語意。',
      },
      {
        question: 'PostgreSQL 的 columnDefinition = "TEXT" 是做什麼的？H2 也需要特別處理嗎？',
        answerHint: 'PostgreSQL 的 VARCHAR 預設有長度限制考量，文章內文這種長度不固定且可能很長的欄位，用 TEXT 型別更合適，不用事先猜一個長度上限。H2 為了相容多種資料庫語法，大多時候可以直接沿用同樣的 columnDefinition 設定，不太需要特別處理，這也是 H2 方便在地開發的原因之一。',
      },
      {
        question: '這個練習跟留言板那題都用了「分層架構、換資料庫不改程式碼」，這個觀念在實務上還能用在哪裡？',
        answerHint: '最常見的延伸是「測試用假的實作、正式環境用真的實作」：例如測試時用記憶體內的假 Repository 或 H2，正式環境換成真的資料庫；或是「開發用本地檔案、正式環境用雲端物件儲存（S3）」，只要都面向同一組介面寫程式，底層實作就可以自由替換，這是依賴反轉原則（Dependency Inversion）在實務上最常見的體現。',
      },
    ],
  },
]

export const dockerGuide = {
  title: 'Docker 容器化實戰：把整個專案打包帶走',
  subtitle: '專案根目錄已備好 Dockerfile、.dockerignore、docker-compose.yml（都有詳細註解），照 Stage 做完，你的全端專案就能一個指令在任何機器上跑起來',
  whyDocker: [
    '「在我電腦上可以跑」的終結者：把 Java、Node、設定、程式全部打包成一個映像檔，任何裝了 Docker 的機器都能原樣執行。',
    '這個專案正好覆蓋 Docker 三大核心：多階段建置（前端 build + 後端打包）、Port 映射（8080）、Volume 持久化（H2 資料庫檔案）。',
    '履歷上「有 Docker 化自己的專案」是後端/全端職缺的基本加分項，面試常直接追問細節。',
  ],
  concepts: [
    {
      term: 'Image（映像檔）',
      analogy: '像「安裝光碟」或 class：唯讀的打包成品，包含程式 + 執行環境。',
      command: 'docker images　　# 列出本機所有映像檔',
    },
    {
      term: 'Container（容器）',
      analogy: '像「用光碟裝出來的電腦」或 new 出來的物件：映像檔的執行實例，可以開很多個。',
      command: 'docker ps -a　　 # 列出所有容器（含停止的）',
    },
    {
      term: 'Dockerfile',
      analogy: '映像檔的「食譜」：一行一個步驟，寫清楚怎麼從無到有做出映像檔。',
      command: 'docker build -t 名字 .　# 照食譜做出映像檔',
    },
    {
      term: 'Port 映射',
      analogy: '容器是隔離的小世界，-p 8080:8080 像「在牆上開一扇門」，把主機的 8080 接到容器的 8080。',
      command: 'docker run -p 8080:8080 名字',
    },
    {
      term: 'Volume（資料卷）',
      analogy: '容器刪掉，裡面的檔案就消失；Volume 像「外接硬碟」，資料放外面，容器怎麼換都不丟。',
      command: 'docker volume ls　# 列出所有 volume',
    },
    {
      term: 'docker compose',
      analogy: '多容器的「總開關」：把 build、port、volume 全寫進 yml，一個指令起整套服務。',
      command: 'docker compose up -d',
    },
  ],
  stages: [
    {
      id: 'dk-stage-install',
      title: 'Stage 1：安裝 Docker Desktop（Windows）',
      intro: '這台開發機還沒有 Docker，先把環境裝起來。Windows 上 Docker 需要 WSL2（Windows 內建的 Linux 子系統）當引擎。',
      steps: [
        {
          id: 'dk-install-wsl',
          title: '啟用 WSL2',
          instruction: '用「系統管理員」身分開 PowerShell，執行 wsl --install，跑完重開機。已經裝過 WSL 的話執行 wsl --update 即可。',
          checkpoint: '執行 wsl --status 看得到「預設版本: 2」。',
          hint: `# 系統管理員 PowerShell
wsl --install
# 重開機後確認
wsl --status`,
        },
        {
          id: 'dk-install-desktop',
          title: '安裝 Docker Desktop',
          instruction: '到 docker.com 下載 Docker Desktop for Windows 並安裝，安裝時勾選「Use WSL 2 instead of Hyper-V」。裝完啟動 Docker Desktop，等左下角變成綠色（Engine running）。',
          checkpoint: '新開一個終端機，docker --version 印得出版本號。',
          hint: `# 下載位置：https://www.docker.com/products/docker-desktop/
# 安裝完成後驗證：
docker --version
# 例如：Docker version 27.x.x

# 跑官方測試容器（會自動下載一個小映像檔並執行）
docker run hello-world
# 看到 "Hello from Docker!" 就代表整條鏈路都通了`,
        },
        {
          id: 'dk-install-troubleshoot',
          title: '疑難排解：Virtualization support not detected',
          instruction:
            '如果 Docker Desktop 啟動時跳出「Virtualization support not detected」，先確認你是不是在「虛擬機（VM/VDI）」裡開發——公司電腦很常是 VMware/Citrix 虛擬桌面。WSL2 本身就是一台虛擬機，要在 VM 裡再開 VM 需要「巢狀虛擬化（Nested Virtualization）」，這必須由 VM 管理端開啟，Windows 裡怎麼設定都沒用。',
          checkpoint:
            '執行 Get-CimInstance Win32_ComputerSystem 看 Manufacturer：出現 VMware, Inc. / Microsoft Corporation（Hyper-V）/ Xen 就代表你在 VM 裡，需要請 IT 開巢狀虛擬化。',
          hint: `# 1. 判斷自己是不是在 VM 裡（PowerShell）
Get-CimInstance Win32_ComputerSystem | Select-Object Manufacturer, Model
#    Manufacturer: VMware, Inc.  ← 就是 VMware 虛擬機

# 2. 看 Docker 日誌確認錯誤碼（最後一段是關鍵）
#    %LOCALAPPDATA%\\Docker\\log\\host\\com.docker.backend.exe.log
#    HCS_E_HYPERV_NOT_INSTALLED ← WSL2 建不出 VM，就是巢狀虛擬化沒開

# 3. 解法：請 IT / VM 管理者開啟巢狀虛擬化（VM 要先關機）
#    - vSphere/ESXi：VM 設定 → CPU → 勾選
#      「向客體作業系統公開硬體輔助的虛擬化」(Expose hardware assisted virtualization)
#    - VMware Workstation：VM Settings → Processors →
#      勾選 Virtualize Intel VT-x/EPT or AMD-V/RVI
#    - Hyper-V 主機：Set-VMProcessor -VMName <名稱> -ExposeVirtualizationExtensions $true

# 4. 開不了的替代方案：
#    - 在另一台實體機（或雲端 VM）裝 Docker，本機用 docker context 遠端操作
#    - 免安裝線上練習場：https://labs.play-with-docker.com/`,
        },
      ],
    },
    {
      id: 'dk-stage-dockerfile',
      title: 'Stage 2：看懂專案的 Dockerfile（多階段建置）',
      intro: '專案根目錄的 Dockerfile 已經寫好而且每段都有註解。先別急著 build，花 10 分鐘把它讀懂——多階段建置是 Docker 面試最愛問的主題。',
      steps: [
        {
          id: 'dk-read-stages',
          title: '讀懂三個階段的分工',
          instruction: '打開專案根目錄的 Dockerfile，找出三個 FROM，說出每個階段做什麼：frontend（Node build React）、backend（Maven 打包 jar + 塞入前端成果）、runtime（只留 JRE + jar）。',
          checkpoint: '你能回答：為什麼最終映像檔裡「沒有」Node 和 Maven？（只有最後一個階段會留下來）',
          hint: `# Dockerfile 的骨架（完整版在專案根目錄，含詳細註解）
FROM node:22-alpine AS frontend     # 階段1：build React
FROM maven:3.9-... AS backend       # 階段2：打包 jar
FROM eclipse-temurin:17-jre-alpine  # 階段3：只留執行環境

# 關鍵指令：跨階段接力
COPY --from=frontend /build/dist ./src/main/resources/static
COPY --from=backend /build/target/*.jar app.jar`,
        },
        {
          id: 'dk-read-cache',
          title: '理解「先 COPY package.json 再 COPY 全部」的快取技巧',
          instruction: '觀察 Dockerfile 裡 npm ci 和 COPY 的順序。Docker 每行指令會產生一層快取，只要該層輸入沒變就直接重用——所以把「很少變的裝套件」和「常常變的程式碼」拆開。',
          checkpoint: '你能解釋：改了一行 App.jsx 之後重新 build，為什麼 npm ci 不會重跑。',
          hint: `# 慢的寫法（每次改程式碼都重裝所有套件）：
COPY react_learning_example/ ./
RUN npm ci && npm run build

# 快的寫法（package.json 沒變 -> npm ci 直接吃快取）：
COPY react_learning_example/package*.json ./
RUN npm ci                    # <- 這層通常直接命中快取
COPY react_learning_example/ ./
RUN npm run build`,
        },
        {
          id: 'dk-read-ignore',
          title: '看懂 .dockerignore',
          instruction: '打開 .dockerignore，說出為什麼 node_modules、target、data 都不送進 build：容器裡會重新產生（前兩者）、資料靠 volume 而不是打包（後者）。',
          checkpoint: '你能說出 .dockerignore 和 .gitignore 目的的差異。',
          hint: `# .dockerignore 三個目的：
# 1. 加速：node_modules 幾萬個檔案不用複製進 build context
# 2. 乾淨：本機的 target/、data/ 不該混進映像檔
# 3. 安全：機密檔案不會被打包進去外流`,
        },
      ],
    },
    {
      id: 'dk-stage-build-run',
      title: 'Stage 3：Build 映像檔並啟動容器',
      intro: '動手時間：把整個專案做成映像檔，然後跑起來。注意先把本機的 Spring Boot 關掉，不然 8080 會被占用。',
      steps: [
        {
          id: 'dk-build',
          title: 'docker build：做出映像檔',
          instruction: '在專案根目錄執行 docker build -t react-learning .（最後的「.」代表 build context 是目前資料夾）。第一次會下載基底映像檔，需要幾分鐘。',
          checkpoint: 'docker images 看得到 react-learning，大小約 300~400MB。',
          hint: `# 專案根目錄執行（注意最後有一個點）
docker build -t react-learning .

# -t react-learning：幫映像檔取名字（tag）
# 過程會看到三個階段依序執行：
#   [frontend 1/5] FROM node:22-alpine ...
#   [backend 2/5]  FROM maven ...
#   [stage-2 1/2]  FROM eclipse-temurin:17-jre-alpine ...

# 完成後確認：
docker images
# REPOSITORY       TAG      SIZE
# react-learning   latest   ~350MB`,
        },
        {
          id: 'dk-run',
          title: 'docker run：啟動容器',
          instruction: '先停掉本機的 Spring Boot（8080 只能一個人用），然後 docker run -d -p 8080:8080 --name learning-app react-learning。開瀏覽器確認 localhost:8080 整個學習平台都正常。',
          checkpoint: '瀏覽器看得到頁面，而且 API（例如 11 區的筆記列表）也正常——代表前後端都在容器裡運作。',
          hint: `# -d：在背景執行（detached）
# -p 8080:8080：主機 port 8080 -> 容器 port 8080
# --name learning-app：幫容器取名，之後好操作
docker run -d -p 8080:8080 --name learning-app react-learning

# 常用觀察指令
docker ps                    # 看執行中的容器
docker logs -f learning-app  # 看 Spring Boot 的啟動 log（Ctrl+C 離開）

# 停止與刪除
docker stop learning-app     # 停止
docker start learning-app    # 再啟動（資料還在）
docker rm -f learning-app    # 停止並刪除容器`,
        },
      ],
    },
    {
      id: 'dk-stage-volume',
      title: 'Stage 4：Volume——讓資料庫活過容器刪除',
      intro: '重點觀念：容器是「用完即丟」的，但資料不是。H2 資料庫檔案存在容器的 /app/data，要用 volume 把它接到外面。',
      steps: [
        {
          id: 'dk-volume-problem',
          title: '先體驗「資料消失」的痛',
          instruction: '在容器版網站新增幾筆任務（13 區 TaskBoard），然後 docker rm -f learning-app 刪掉容器、再 docker run 一個新的——資料不見了！因為資料庫檔案跟著舊容器一起被刪了。',
          checkpoint: '你親眼看到：沒有 volume 的容器，刪掉 = 資料歸零。',
          hint: `# 1. 在網站上新增幾筆任務
# 2. 刪掉容器
docker rm -f learning-app
# 3. 開一個新的（沒掛 volume）
docker run -d -p 8080:8080 --name learning-app react-learning
# 4. 重新整理網頁 -> 任務全部消失`,
        },
        {
          id: 'dk-volume-fix',
          title: '掛上 volume 解決',
          instruction: '刪掉容器，重新用 -v learning-data:/app/data 啟動。再做一次「新增資料 → 刪容器 → 開新容器」的實驗，這次資料會活下來。',
          checkpoint: '刪掉容器再重開，之前新增的任務還在——資料存在 volume，不在容器裡。',
          hint: `docker rm -f learning-app

# -v learning-data:/app/data
#    learning-data：volume 名字（Docker 幫你管理實際存放位置）
#    /app/data    ：接到容器裡的這個路徑（H2 檔案就存這）
docker run -d -p 8080:8080 \\
  -v learning-data:/app/data \\
  --name learning-app react-learning

# 驗證流程：新增任務 -> docker rm -f learning-app
# -> 再 run（一樣掛 learning-data）-> 資料還在！

docker volume ls             # 看得到 learning-data
docker volume inspect learning-data  # 看實際存放位置`,
        },
      ],
    },
    {
      id: 'dk-stage-compose',
      title: 'Stage 5：docker compose——一個指令起整套',
      intro: '把 build、port、volume 全部寫進 docker-compose.yml（專案根目錄已備好），從此不用背又長又臭的 docker run 指令。',
      steps: [
        {
          id: 'dk-compose-up',
          title: 'compose up 一鍵啟動',
          instruction: '先把之前手動開的容器清掉（docker rm -f learning-app），然後在專案根目錄執行 docker compose up -d。讀一遍 docker-compose.yml 的註解，對照每個設定就是 Stage 3、4 手打的參數。',
          checkpoint: 'localhost:8080 正常，docker compose ps 看得到 react-learning 在跑，而且資料持久化還有效。',
          hint: `docker rm -f learning-app   # 清掉手動版

docker compose up -d        # 建置 + 啟動，一次到位
docker compose ps           # 看服務狀態
docker compose logs -f app  # 看 log

# 改了程式碼想更新：
docker compose up -d --build

# 停止（資料保留）：
docker compose down
# 停止並刪除 volume（資料庫歸零，慎用）：
docker compose down -v`,
        },
        {
          id: 'dk-compose-postgres',
          title: '進階挑戰：把 H2 換成 PostgreSQL',
          instruction: 'docker-compose.yml 裡有一段註解掉的 db 服務（postgres:16-alpine）。照檔案裡的三步驟說明：換 pom 依賴、改 datasource 設定、打開註解——體驗「程式碼一行不改就換資料庫」。',
          checkpoint: '你能說出容器互連的關鍵：app 連 db 的主機名是「db」（服務名稱），不是 localhost。',
          hint: `# docker-compose.yml 裡已寫好註解版的 db 服務，三步驟：
# 1. pom.xml：h2 依賴換成
#    <groupId>org.postgresql</groupId><artifactId>postgresql</artifactId>
# 2. application.properties：
#    spring.datasource.url=jdbc:postgresql://db:5432/learning_lab
#    spring.datasource.username=learner
#    spring.datasource.password=learn123
#    spring.datasource.driver-class-name=org.postgresql.Driver
# 3. 打開 compose 裡 db 服務與 pg-data volume 的註解
#    docker compose up -d --build

# 最常踩的坑：連線字串寫 localhost:5432 會連不到！
# 容器裡的 localhost 是「容器自己」，要用服務名稱 db 當主機名。`,
        },
      ],
    },
  ],
  commonCommands: [
    { command: 'docker build -t 名字 .', description: '照 Dockerfile 建置映像檔' },
    { command: 'docker run -d -p 8080:8080 名字', description: '背景啟動容器並映射 port' },
    { command: 'docker ps / docker ps -a', description: '看執行中 / 全部容器' },
    { command: 'docker logs -f 容器名', description: '追蹤容器的輸出（看 Spring Boot log）' },
    { command: 'docker exec -it 容器名 sh', description: '鑽進容器裡開一個 shell（除錯神器）' },
    { command: 'docker stop / start / rm -f 容器名', description: '停止 / 啟動 / 強制刪除容器' },
    { command: 'docker compose up -d --build', description: '重新建置並啟動整套服務' },
    { command: 'docker system prune', description: '清掉沒在用的容器與快取（定期釋放空間）' },
  ],
  interviewQuestions: [
    {
      question: 'Image 和 Container 差在哪？',
      answerHint: 'Image 是唯讀模板（像 class / 安裝光碟），Container 是它的執行實例（像 new 出來的物件）。一個 image 可以跑出多個彼此隔離的 container。',
    },
    {
      question: '為什麼要用多階段建置？',
      answerHint: '建置工具（Node、Maven）只有 build 需要，執行不需要。多階段建置只保留最後的 runtime 階段（JRE + jar），映像檔從 1GB+ 縮到 ~350MB，攻擊面也更小。',
    },
    {
      question: '容器刪掉資料就沒了，怎麼辦？',
      answerHint: '用 volume 把資料目錄掛到容器外（-v learning-data:/app/data）。容器是無狀態、用完即丟的；狀態（資料庫檔案）永遠放 volume 或外部資料庫。',
    },
    {
      question: 'EXPOSE 8080 就能從瀏覽器連進容器嗎？',
      answerHint: '不能。EXPOSE 只是文件性宣告，實際打通要靠 docker run -p 8080:8080（主機 port 映射到容器 port）。這是常見的觀念陷阱題。',
    },
    {
      question: 'compose 裡 app 要連資料庫，主機名寫什麼？',
      answerHint: '寫「服務名稱」（例如 db），不是 localhost。compose 會把所有服務放進同一個虛擬網路，用服務名互相解析；容器裡的 localhost 指的是容器自己。',
    },
    {
      question: 'Dockerfile 的指令順序為什麼會影響 build 速度？',
      answerHint: '每行指令產生一層快取，某層輸入變了、它之後的所有層都要重做。所以把「少變的」（裝套件）放前面、「常變的」（COPY 程式碼）放後面，改程式碼時前面的層全部吃快取。',
    },
  ],
}

// ============================================================================
// 16. 串接外部資料庫：把 H2 換成業界最常用的 MySQL / PostgreSQL
//
// 整個教學平台到現在都用 H2 檔案資料庫，優點是零安裝、新手友善；
// 但正式產品幾乎不會真的用 H2——實務上資料庫是「獨立的一台伺服器」
// （公司機房、雲端代管服務如 AWS RDS，或像這裡一樣用 Docker 容器模擬）。
// 這裡用同一套 Task/Entity/Repository 程式碼，示範怎麼「不改一行 Java 程式碼」，
// 只靠換依賴 + 換設定檔，就能把後端接到兩種最常見的資料庫：MySQL、PostgreSQL。
// 專案根目錄已經準備好對應檔案：
//   pom.xml（兩組驅動依賴，預設註解）
//   application-mysql.properties / application-postgres.properties
//   docker-compose.yml（mysql / postgres / pgadmin 服務，用 profiles 隔開，預設不會啟動）
// ============================================================================
export const externalDbGuide = {
  title: '串接外部資料庫：MySQL / PostgreSQL 實戰',
  subtitle: '同一套 Entity/Repository 程式碼，分別接上兩種業界最常用的資料庫，體會「資料庫實作被 JPA 隔離」的威力',
  whyExternalDb: [
    'H2 是教學用的「單機小抄」；MySQL／PostgreSQL 才是公司真實環境會用的資料庫，面試被問到「你怎麼串資料庫」時，H2 幾乎不會是答案。',
    '整個練習的重點不是學兩種 SQL 方言，而是體會分層架構的價值：Controller/Service/Repository 完全不用改，只靠換 pom.xml 依賴 + 換 application-*.properties，就能切換資料庫——這正是「針對介面寫程式，不要針對實作寫程式」的具體展現。',
    '同時練到 Docker Compose 的「多服務編排」與「profiles 條件啟動」，以及最常被新手搞混的容器網路觀念（localhost vs 服務名稱）。',
  ],
  comparisonTable: [
    { aspect: '安裝方式', h2: '不用裝，內嵌在 jar 裡', mysql: '需要獨立伺服器／容器（docker compose --profile mysql up -d）', postgres: '需要獨立伺服器／容器（docker compose --profile postgres up -d）' },
    { aspect: '典型用途', h2: '開發、學習、單元測試', mysql: '中小型網站、電商、CMS，生態系（主機商、教學資源）最成熟', postgres: '需要複雜查詢、JSON 欄位、嚴謹資料型別的系統，近年新創/資料工程首選' },
    { aspect: 'GUI 管理介面', h2: '內建 /h2-console', mysql: '需另裝 MySQL Workbench / DBeaver / phpMyAdmin', postgres: '需另裝 pgAdmin（已含在 docker-compose）/ DBeaver' },
    { aspect: '型別嚴謹度', h2: '寬鬆（接近 MySQL）', mysql: '較寬鬆，型別不符有時會自動轉型', postgres: '嚴格，型別不符直接報錯，較少「隱性 bug」' },
    { aspect: 'Spring Boot 設定差異', h2: 'driver=org.h2.Driver，url=jdbc:h2:file:...', mysql: 'driver=com.mysql.cj.jdbc.Driver，url=jdbc:mysql://host:3306/db', postgres: 'driver=org.postgresql.Driver，url=jdbc:postgresql://host:5432/db' },
  ],
  stacks: [
    {
      id: 'extdb-mysql',
      title: 'MySQL',
      subtitle: '世界上最多網站在用的開源關聯式資料庫',
      goal: '把 Task 功能的資料庫從 H2 換成 MySQL，體會「同一份程式碼，接不同資料庫」的分層價值。',
      stages: [
        {
          id: 'extdb-mysql-stage-run',
          title: 'Stage 1：用 Docker 啟動一台 MySQL',
          intro: 'docker-compose.yml 已經寫好 mysql 服務，用 profiles 隔開避免跟 H2 預設行為衝突，練習時才手動啟動。這個 Stage 的重點是：容器「跑起來」不等於「準備好能接受連線」，一定要照著下面的步驟一層一層確認，不要容器一啟動就馬上切下一步。',
          steps: [
            {
              id: 'extdb-mysql-start',
              title: '啟動 MySQL 容器',
              instruction: '在專案根目錄打 docker compose --profile mysql up -d，只會啟動 mysql 服務（不影響預設的 app 服務）。打開 docker-compose.yml 看 mysql 那段：MYSQL_DATABASE/MYSQL_USER/MYSQL_PASSWORD 這三個環境變數，容器「第一次」啟動時會自動幫你建好這個資料庫跟帳號，不用手動下 CREATE DATABASE。注意：這個自動建帳號的動作只會在 volume 是全新、空的時候發生——如果你之前練過又砍掉重建過容器，但 mysql-data 這個 volume 沒有一起刪掉，MySQL 會沿用舊資料，環境變數不會重新套用。',
              checkpoint: '執行 docker ps 看得到 react-learning-mysql 容器，STATUS 是 Up（不是 Restarting 或 Exited）。',
              hint: `docker compose --profile mysql up -d
docker ps
# 如果想砍掉重練（連帳號密碼問題一起重置），連 volume 一起刪：
docker compose --profile mysql down -v
docker compose --profile mysql up -d`,
              troubleshooting: [
                {
                  issue: 'docker ps 看不到 react-learning-mysql，或 STATUS 一直是 Restarting',
                  fix: '先用 docker compose --profile mysql logs mysql 看錯誤訊息。最常見原因是 port 3306 已經被你電腦上「本機安裝」的 MySQL／別的容器佔用，docker-compose.yml 的 ports 是 "3306:3306"，主機這邊的 3306 被佔用就會啟動失敗。確認方式：Windows 執行 netstat -ano | findstr 3306，看有沒有其他程式在用；有的話先停掉本機 MySQL 服務，或把 docker-compose.yml 改成 "3307:3306" 這種不同的主機 port（記得 application-mysql.properties 的 url 也要跟著改 port）。',
                },
                {
                  issue: 'docker ps 看得到容器，但 STATUS 顯示 (health: starting) 很久都不會變成 healthy／Up',
                  fix: 'MySQL 容器「剛啟動」跟「初始化完成、可以接受連線」是兩件事，第一次啟動要建資料庫、建帳號，通常需要 10~30 秒。耐心用 docker compose --profile mysql logs -f mysql 盯著看，看到一行 [Server] /usr/sbin/mysqld: ready for connections. 才算真正準備好，太早去啟動 Spring Boot 會連線失敗。',
                },
              ],
            },
            {
              id: 'extdb-mysql-verify-container',
              title: '進容器內部，直接確認資料庫跟帳號都建好了',
              instruction: '在啟動 Spring Boot 之前，先獨立驗證「MySQL 本身」是通的，排除掉「到底是 MySQL 沒設定好，還是 Spring Boot 設定錯」這種混淆。用 docker exec 直接進容器下 mysql client，用 docker-compose.yml 裡設定的帳密（learner / learn123）登入，確認 learning_lab 這個資料庫存在。',
              checkpoint: 'docker exec 指令成功登入（沒有 Access denied），下 SHOW DATABASES; 看得到 learning_lab，下 SELECT CURRENT_USER(); 顯示 learner@%，代表帳號密碼都正確、資料庫也建好了——這一步做完，之後如果 Spring Boot 連不上，問題就一定出在設定檔或網路，不會是 MySQL 本身的問題。',
              hint: `# 進容器內部的 mysql client（帳密來自 docker-compose.yml 的 MYSQL_USER/MYSQL_PASSWORD）
docker exec -it react-learning-mysql mysql -ulearner -plearn123 learning_lab -e "SHOW DATABASES; SELECT CURRENT_USER();"

# 如果想用「主機上」自己裝的 mysql client 連（而不是進容器），驗證 port 映射有沒有通：
mysql -h 127.0.0.1 -P 3306 -ulearner -plearn123 learning_lab -e "SELECT 1;"

# 沒裝 mysql client 的話，用 PowerShell 測 port 有沒有通也可以（先驗證網路層）：
Test-NetConnection -ComputerName 127.0.0.1 -Port 3306`,
              troubleshooting: [
                {
                  issue: 'ERROR 1045 (28000): Access denied for user \'learner\'@\'...\'',
                  fix: '密碼打錯，或是容器沿用了「舊的」volume（之前練習時密碼設定不同）。先確認指令打的帳密跟 docker-compose.yml 裡 MYSQL_USER/MYSQL_PASSWORD 完全一致；如果確定一致還是失敗，大機率是舊 volume 殘留，執行 docker compose --profile mysql down -v 把 volume 一起刪掉再重新 up -d（這會清空 MySQL 裡所有資料，練習階段可以放心清）。',
                },
                {
                  issue: 'Test-NetConnection 顯示 TcpTestSucceeded: False',
                  fix: '代表主機的 3306 根本連不到容器，先確認 docker ps 裡 PORTS 欄位有沒有 0.0.0.0:3306->3306/tcp；沒有的話表示 docker-compose.yml 的 ports 設定沒生效或容器還沒 healthy，回到上一步重新確認。如果你是在公司電腦、防火牆比較嚴，也可能是防火牆擋掉本機對 3306 的連線。',
                },
              ],
            },
          ],
        },
        {
          id: 'extdb-mysql-stage-driver',
          title: 'Stage 2：加上 MySQL 驅動依賴',
          intro: 'JPA/Hibernate 本身不知道怎麼跟 MySQL 溝通，需要靠「JDBC 驅動」這塊翻譯機。這一步最容易出的錯不是改錯程式碼，而是「改了但沒讓 IDE/Maven 真的吃到新設定」。',
          steps: [
            {
              id: 'extdb-mysql-dep',
              title: '打開 pom.xml 的 mysql-connector-j 註解',
              instruction: '打開專案根目錄的 pom.xml，找到「16. 串接外部資料庫練習」那一區塊，把 mysql-connector-j 那組 <dependency> 的註解拿掉（postgresql 那組維持註解，兩個資料庫驅動不用同時啟用）。這個依賴 scope 是 runtime：編譯期用不到它（程式只 import JPA 的介面），執行期 Spring Boot 才需要真正連線用的驅動類別。改完存檔後，一定要讓 IDE 重新載入 Maven 依賴（IntelliJ：右上角小象圖示「Reload All Maven Projects」，或 Maven 工具視窗按重新整理），不然 IDE 還是用舊的 classpath 執行，會在啟動時找不到驅動類別。',
              checkpoint: '你能解釋：為什麼 TaskRepository.java 完全不用改，就能從 H2 換成 MySQL？（答案：它只依賴 Spring Data JPA 的介面，實際上誰去执行 SQL 是驅動 + 設定檔決定的，Repository 程式碼完全不知道底層是哪種資料庫）同時也能在 IntelliJ 的 Maven 面板 / External Libraries 裡實際看到 mysql-connector-j 這個 jar，代表依賴真的生效了。',
              hint: `<!-- pom.xml：取消這段註解 -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>

# 命令列也可以直接確認依賴有沒有真的進到 classpath：
# 如果這台機器沒有另外裝 Maven（沒有 mvn 指令），改用專案自帶的 Maven Wrapper 即可，
# 它會在第一次執行時自動下載正確版本的 Maven，不用額外安裝：
.\\mvnw.cmd dependency:tree | Select-String mysql   # Windows
# ./mvnw dependency:tree | grep mysql                # Linux / macOS`,
              troubleshooting: [
                {
                  issue: '啟動時噴錯 Cannot load driver class: com.mysql.cj.jdbc.Driver',
                  fix: '90% 是忘了拿掉 pom.xml 裡的註解，或是拿掉了但 IDE/Maven 沒有 reload，還在用舊的 classpath 跑。先用 .\\mvnw.cmd dependency:tree | Select-String mysql 確認依賴真的存在；如果存在但 IDE 跑出來的還是報錯，試試「Reload Maven Project」或直接關掉重開 IDE 的 Run 設定再跑一次。',
                },
                {
                  issue: 'pom.xml 改完存檔，IDE 左下角或編輯器沒有跳出「匯入變更」的提示',
                  fix: 'IntelliJ 預設有些版本不會自動偵測，養成改完 pom.xml 就手動點一次 Maven 工具視窗的「重新整理」圖示（兩個箭頭循環的那個）的習慣，比較保險。',
                },
                {
                  issue: '這台機器打 mvn ... 出現「mvn 不是內部或外部命令」',
                  fix: '代表這台機器沒有安裝 Maven、或是裝了但沒加進系統 PATH。不用另外安裝 Maven——這個專案根目錄本來就帶著 mvnw.cmd（Windows）/ mvnw（Linux/macOS）這個「Maven Wrapper」，把所有指令開頭的 mvn 換成 .\\mvnw.cmd（第一次執行會自動下載對應版本的 Maven，之後都會用同一份，不會每台機器版本不一樣）。',
                },
              ],
            },
          ],
        },
        {
          id: 'extdb-mysql-stage-config',
          title: 'Stage 3：用 Spring Profile 切換設定檔，並「親眼」驗證真的連上 MySQL',
          intro: 'application-mysql.properties 已經寫好連線設定，用 profile 機制讓它「疊加」在原本的 application.properties 上。這個 Stage 的核心問題就是題目問的：「怎麼樣才能驗證自己成功地連上 MySQL？」下面給四種由淺到深、互相印證的驗證方式，建議全部都做一遍。',
          steps: [
            {
              id: 'extdb-mysql-profile',
              title: '用 mysql profile 啟動後端',
              instruction:
                '打開 src/main/resources/application-mysql.properties 看連線字串怎麼寫（url/driver-class-name/username/password 都跟 H2 版的對應，只是值換掉）。接著在專案根目錄執行 .\\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=mysql"（這是實測可行、建議直接複製貼上的完整指令；引號把整個 -D 參數包起來，避免 PowerShell 把它拆成兩截）。\n\n' +
                '⚠️ 重點澄清：這個練習「不需要」也「不應該」另外執行 docker compose up -d 去啟動 react-learning（app）這個容器。app 容器裡包著的，其實就是你現在要用 Spring Boot 直接跑在本機的同一套程式——兩者是「二選一」的關係：要嘛讓 Spring Boot 整包被打進 app 容器裡用 Docker 跑，要嘛像現在這樣直接在本機（或用 mvnw）跑 Spring Boot、只讓 MySQL 單獨用 Docker 跑。這次練習要做的，是用 Docker 跑「資料庫」，Spring Boot 本身維持用 mvnw 在本機直接執行，這樣你才能用 localhost:3306 連到 MySQL（如果 Spring Boot 也包進 app 容器一起用 compose 啟動，連線字串才需要改成服務名稱 mysql:3306，那是另一種進階玩法，這個 Stage 不需要）。\n\n' +
                '如果你是在 IntelliJ 裡用綠色三角形 Run，要另外去 Run/Debug Configurations 把 Active profiles 欄位填 mysql（或在 Program arguments 加 --spring.profiles.active=mysql）——直接按 IDE 的 Run 鍵「不會」自動套用 Maven 指令列的 -D 參數，這是新手最常忽略的一步，結果變成還是連著 H2 卻一直疑惑「設定明明是對的為什麼沒連到 MySQL」。',
              checkpoint: '啟動 log 從頭到尾捲過一遍，確定沒有紅色的 Exception／Caused by；同時要親眼看到下面「驗證連線成功」那一步列出的證據，而不是「沒報錯就當作成功」。',
              hint: `# 只需要啟動 MySQL 容器（不用啟動 app / react-learning 容器）：
docker compose --profile mysql up -d

# 方式一：用專案自帶的 Maven Wrapper 啟動並指定 profile（實測可行，建議整行複製貼上）
.\\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=mysql"     # Windows
# ./mvnw spring-boot:run -Dspring-boot.run.profiles=mysql           # Linux / macOS

# 方式二：如果這台機器本來就有裝 Maven 且已加進 PATH，也可以用 mvn（效果相同）
mvn spring-boot:run "-Dspring-boot.run.profiles=mysql"

# 方式三：打包後用 jar 啟動
.\\mvnw.cmd clean package -DskipTests
java -jar target/*.jar --spring.profiles.active=mysql

# IntelliJ Run 設定（Run/Debug Configurations）：
#   Active profiles: mysql
#   或 Program arguments: --spring.profiles.active=mysql`,
              troubleshooting: [
                {
                  issue: '啟動 log 完全沒提到 mysql，看起來還是連著 H2（例如看到 jdbc:h2:file 字樣）',
                  fix: 'profile 沒有真的生效。確認三件事：① 指令/IDE 設定裡的 profile 名稱拼字是 mysql（不是 Mysql 或 MYSQL，Spring 對 profile 名稱大小寫敏感）；② 如果是用 IDE 綠色箭頭跑，Active profiles 欄位要填，不能只改 Program arguments 卻忘了填 Active profiles（兩個欄位效果一樣，填其中一個即可，但常見錯誤是兩邊都沒填）；③ 啟動 log 往前捲，Spring Boot 啟動時第一行附近會印 "The following 1 profile is active: \\"mysql\\""，這行沒出現就代表 profile 根本沒套用。',
                },
                {
                  issue: 'unknown lifecycle phase ".run.profiless=mysql"（或類似拆開、拼錯的錯誤訊息）',
                  fix: '這是 PowerShell 參數解析踩坑，不是程式邏輯錯誤。兩個最常見原因：① -Dspring-boot.run.profiles=mysql 這段字串中間被意外打進一個空格，導致 Maven 把它拆成兩截參數；② 打字打成 profiless（多一個 s）之類的拼字錯誤。解法：直接複製貼上本頁給的完整指令 .\\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=mysql"，整個 -D 參數要用雙引號包起來，不要自己重新手打一次，最保險。',
                },
                {
                  issue: '\'mvn\' 不是內部或外部命令，也不是可執行的程式',
                  fix: '這台機器沒有安裝 Maven，或裝了但沒加進 PATH。不用額外安裝，改用專案自帶的 Maven Wrapper：把指令開頭的 mvn 換成 .\\mvnw.cmd（Windows）即可，第一次執行會自動下載對應版本的 Maven。',
                },
                {
                  issue: 'The JAVA_HOME environment variable is not defined correctly',
                  fix: '代表這台機器沒裝 JDK，或裝了但 JAVA_HOME 沒設定／設定錯誤（例如指到 JRE 而不是 JDK，或路徑打錯）。步驟：① java -version 確認有裝 JDK 17；② 找到 JDK 安裝路徑（內含 bin\\java.exe 的那個資料夾，例如 C:\\Program Files\\Eclipse Adoptium\\jdk-17.x.x-hotspot）；③ 在「系統環境變數」裡新增 JAVA_HOME 指向這個路徑，並把 %JAVA_HOME%\\bin 加進 Path；④ 一定要開一個全新的終端機視窗，設定才會生效，原本開著的視窗不會自動套用。',
                },
                {
                  issue: 'com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure',
                  fix: '代表程式有連去 MySQL，但連不上。依序排查：① docker ps 確認 react-learning-mysql 還活著、STATUS 是 Up；② 回到 Stage 1 用 Test-NetConnection -ComputerName 127.0.0.1 -Port 3306 確認 port 真的通；③ 檢查 application-mysql.properties 的 url 裡主機名是不是誤寫成服務名稱 mysql（這個寫法只有在 Spring Boot 本身也是容器、跟 MySQL 容器在同一個 docker network 時才有效；這個 Stage 用 mvnw 在本機直接跑 Spring Boot，主機名必須是 localhost 或 127.0.0.1，不要用服務名稱）。',
                },
                {
                  issue: 'java.sql.SQLException: Access denied for user \'learner\'@\'...\' (using password: YES)',
                  fix: 'Spring Boot 這邊的帳密跟 MySQL 容器裡實際的帳密對不上。先用 Stage 1 教的 docker exec 方式確認帳密本身沒問題，再回來對照 application-mysql.properties 裡 username/password 是不是跟 docker-compose.yml 一致（兩邊任何一邊改過帳密但沒同步更新，就會發生這個錯）。',
                },
                {
                  issue: 'Unknown database \'learning_lab\'',
                  fix: '代表連上 MySQL 伺服器了，但找不到指定的資料庫，通常是因為容器沿用了「舊的」volume、而舊 volume 建立時資料庫名稱不同，或是 docker-compose.yml 的 MYSQL_DATABASE 後來才改過。解法同樣是 docker compose --profile mysql down -v 清掉 volume 重新啟動一次（全新環境一定會依照目前的 docker-compose.yml 建好 learning_lab）。',
                },
                {
                  issue: 'Public Key Retrieval is not allowed',
                  fix: 'MySQL 8 預設的 caching_sha2_password 認證方式，在「沒有啟用 SSL（useSSL=false）」的情況下，驅動預設不敢自己跟伺服器要公鑰（怕被竊聽），直接擋下來。application-mysql.properties 這份教材「已經預設」把 url 寫成 ...useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=...，正常照抄這份設定不會遇到這個錯誤。如果你還是遇到，最常見原因是：① 這台機器上的檔案是舊版、還沒同步到最新的 application-mysql.properties（用 git pull 或重新複製專案檔案）；② 自己手動改過連線字串但漏加了 allowPublicKeyRetrieval=true。確認 url 完整長這樣：jdbc:mysql://localhost:3306/learning_lab?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Taipei&characterEncoding=utf8（這只是方便本機練習的做法，正式環境應該改用真正的 SSL 連線，而不是永遠靠這個參數繞過安全機制）。',
                },
              ],
            },
            {
              id: 'extdb-mysql-verify-connection',
              title: '驗證「連線成功」：四種互相印證的方法',
              instruction: `啟動後不要只看「沒有紅字」就覺得成功，請依序做完下面四件事，任何一件做不到都代表還沒真正連上：

① 看啟動 log 裡的關鍵字：往上捲一定會看到 HikariPool-1 - Starting... 接著 HikariPool-1 - Start completed.（Hikari 是 Spring Boot 預設的連線池，這行代表「真的」跟資料庫建立起連線了，不是只是設定檔寫對而已）。再往下找 Hibernate 印出的 SQL（因為 spring.jpa.show-sql=true），啟動時應該會看到類似 create table tasks (...) 或 alter table 的語句——這就是 ddl-auto=update 自動幫你在 MySQL 建表的證據。

② 進容器直接下 SQL 看表：確認 Spring Boot 啟動「之後」，MySQL 裡真的多出一張 tasks 表。

③ 呼叫一次真正的 API，新增一筆資料，再回頭用 SQL 查，確認資料真的寫進 MySQL（而不是你以為切換了，其實還在用 H2）。

④（最推薦、最直覺）打開 IntelliJ 右側的 Database 工具視窗，用 + 新增一個 MySQL 資料來源（Host: localhost，Port: 3306，Database: learning_lab，User: learner，Password: learn123），測試連線（Test Connection）成功後，展開 tasks 表用表格形式直接看資料——這是最接近「GUI 工具檢視資料庫」的日常開發習慣，練完這個練習以後接其他資料庫也是同一套流程。`,
              checkpoint: '四件事都做過一輪：log 看到 HikariPool Start completed、docker exec 下 SHOW TABLES 看到 tasks、呼叫 POST /api/tasks 新增後能在 MySQL 裡查到同一筆資料、IntelliJ Database 工具視窗「Test Connection」顯示成功。做到這裡才算是真的、徹底驗證了「程式已經連上 MySQL」，而不是「設定檔看起來對」。',
              hint: `# ① 啟動 log 往前找這兩行（代表連線池真的建立起連線）：
#   HikariPool-1 - Starting...
#   HikariPool-1 - Start completed.

# ② 進容器直接看資料表結構
docker exec -it react-learning-mysql mysql -ulearner -plearn123 learning_lab -e "SHOW TABLES; DESCRIBE tasks;"

# ③ 呼叫 API 新增一筆資料，再用 SQL 確認資料真的進了 MySQL
curl -X POST http://localhost:8080/api/tasks -H "Content-Type: application/json" -d "{\\"title\\":\\"驗證MySQL連線\\"}"
docker exec -it react-learning-mysql mysql -ulearner -plearn123 learning_lab -e "SELECT * FROM tasks;"

# ④ IntelliJ：右側 Database 工具視窗 → + → Data Source → MySQL
#    Host: localhost  Port: 3306  Database: learning_lab
#    User: learner     Password: learn123
#    按 Test Connection，出現綠色勾勾才算成功（第一次可能會跳出缺 driver 的提示，
#    照提示按 Download Driver Files 讓 IntelliJ 自動抓 MySQL 的 JDBC driver 即可，
#    這跟 pom.xml 裡的驅動是兩回事：IntelliJ 的 Database 工具是獨立於你的 Spring Boot 專案運作的）`,
              troubleshooting: [
                {
                  issue: 'log 裡看不到 HikariPool 的字樣，直接跳到別的訊息',
                  fix: '代表連線池根本沒建立起來，應用程式大概率啟動失敗了（往下找真正的 Exception 堆疊，通常第一個 Caused by: 才是真正原因，不要只看最上面那行籠統的錯誤）。',
                },
                {
                  issue: '呼叫 API 回 200，但 MySQL 裡查不到資料',
                  fix: '代表 Spring Boot 其實還是連著 H2（或連到別的 MySQL 實例）。回頭檢查 profile 有沒有真的套用（參考上一步 troubleshooting），或是不是不小心開了兩個 Spring Boot 進程（一個沒加 profile 的舊的還開著，占用了 8080 port，新的其實啟動失敗但你沒注意到）。',
                },
                {
                  issue: 'IntelliJ Database 工具視窗 Test Connection 失敗，但 docker exec 進去可以查資料',
                  fix: '代表「MySQL 本身沒問題」，問題出在 IntelliJ 這邊：常見是還沒下載對應的 JDBC driver 檔案（跳出提示時要點 Download），或是帳密／Database 名稱打錯。這個工具視窗的連線設定跟 Spring Boot 的 application-mysql.properties 是完全獨立的兩組設定，彼此不會互相影響。',
                },
              ],
            },
          ],
        },
      ],
      interviewQuestions: [
        {
          question: '同一份 TaskRepository.java，為什麼接 H2 跟接 MySQL 都不用改程式碼？',
          answerHint: 'Spring Data JPA 的 Repository 是對「介面」寫程式：Controller/Service 只呼叫 save()/findAll() 這些方法，實際上要翻成什麼 SQL、怎麼連線，是由 Hibernate + JDBC 驅動 + application.properties 決定的。這就是「依賴反轉 / 面向介面編程」帶來的好處：換資料庫只是換設定，不是改商業邏輯。',
        },
        {
          question: 'spring.profiles.active 是做什麼的？',
          answerHint: '讓同一包程式碼可以用不同設定檔啟動（dev/test/prod 常見三態）。Spring Boot 會先讀 application.properties 當基礎設定，再疊加 application-{profile}.properties 蓋掉同名的 key，沒提到的 key 維持基礎設定值。',
        },
        {
          question: 'MYSQL_ROOT_PASSWORD 跟 MYSQL_USER/MYSQL_PASSWORD 有什麼差別？',
          answerHint: 'root 是 MySQL 的超級管理員帳號，什麼都能做；MYSQL_USER/MYSQL_PASSWORD 是官方 image 幫你自動建立的「一般帳號」，只被授權存取 MYSQL_DATABASE 指定的那個資料庫。應用程式連線應該用一般帳號，不要讓 Spring Boot 直接用 root 連線（最小權限原則）。',
        },
        {
          question: '容器間要怎麼讓 Spring Boot 連到 MySQL 容器？為什麼不能寫 localhost？',
          answerHint: '如果 Spring Boot 是在「你的電腦本機」跑（不是也包成容器），因為 docker-compose 的 port 映射（3306:3306），用 localhost:3306 連得到。但如果 Spring Boot 本身也被包成容器一起用 compose 啟動，容器裡的 localhost 指的是容器自己，這時要改用「服務名稱」當主機名（例如 jdbc:mysql://mysql:3306/...），因為 compose 會把所有服務放進同一個虛擬網路，用服務名互相解析。',
        },
        {
          question: 'ddl-auto=update 在正式環境為什麼不建議用？',
          answerHint: 'update 是 Hibernate 自動比對 Entity 跟資料表結構幫你加欄位/建表，方便但不可控：改錯 Entity、漏寫欄位都可能悄悄改壞正式資料庫結構，而且無法回溯歷史變更。正式環境通常改用 ddl-auto=validate（只檢查不動手）+ Flyway/Liquibase 這類「資料庫遷移工具」，每次結構變更都寫成一支有版本編號的 SQL script，可追蹤、可回滾。',
        },
        {
          question: '把 Entity 欄位改名稱（或改型別、刪欄位），ddl-auto=update 會幫我把既有資料庫也跟著改嗎？',
          answerHint:
            'update 模式只會做「加法」：新增 Entity 會自動 CREATE TABLE、新增欄位會自動 ALTER TABLE ADD COLUMN。但「改名稱」「改型別」「刪欄位」它完全不會動手——因為 Hibernate 只比對「Entity 有、資料表沒有」的欄位，沒辦法分辨你是「把 name 改名成 productName」還是「新增一個叫 productName、跟 name 無關的全新欄位」，兩者在資料庫結構上長得一模一樣。所以改名稱的結果是：舊欄位 name 還留在資料表裡（資料也還在），同時多出一個空的新欄位 productName，而不是真的被改名。型別變更、刪欄位也是同樣道理：風險太高，Hibernate 選擇什麼都不做，寧可留著不用的舊結構，也不要貿然替你執行有破壞性的 ALTER/DROP。想要真正做到改名、改型別、刪欄位，要靠 Flyway/Liquibase 手寫遷移腳本（例如 RENAME COLUMN），或是重新建立資料庫/開發環境直接砍掉重建。',
        },
      ],
    },
    {
      id: 'extdb-postgres',
      title: 'PostgreSQL',
      subtitle: '型別嚴謹、功能豐富，近年新創與資料工程團隊的熱門選擇',
      goal: '把同一套 Task 功能接到 PostgreSQL，並用 pgAdmin 這個網頁 GUI 實際看一眼資料表。',
      stages: [
        {
          id: 'extdb-pg-stage-run',
          title: 'Stage 1：用 Docker 啟動 PostgreSQL + pgAdmin',
          intro: 'docker-compose.yml 的 postgres 服務跟上面 mysql 是同樣的 profiles 隔離寫法，額外多了一個 pgadmin 服務方便用瀏覽器看資料。',
          steps: [
            {
              id: 'extdb-pg-start',
              title: '啟動 PostgreSQL 容器（連同 pgAdmin）',
              instruction: '打 docker compose --profile postgres up -d，會一次啟動 postgres 跟 pgadmin 兩個服務（pgadmin 的 docker-compose 設定裡有 depends_on: postgres，確保資料庫先起來）。打開瀏覽器連 http://localhost:5050，用 PGADMIN_DEFAULT_EMAIL/PASSWORD（learner@example.com / learn123）登入。',
              checkpoint: '在 pgAdmin 裡新增一個 Server 連線（Host 填 postgres，因為 pgAdmin 本身也是容器，要用服務名稱才連得到資料庫；帳密是 learner/learn123），能看到 learning_lab 這個資料庫。',
              hint: `docker compose --profile postgres up -d
docker ps
# pgAdmin: http://localhost:5050 （帳號 learner@example.com / 密碼 learn123）
# 新增 Server 時：
#   Host name/address: postgres   ← 用服務名稱，不是 localhost！
#   Port: 5432
#   Username: learner / Password: learn123`,
              troubleshooting: [
                {
                  issue:
                    'Error response from daemon: ports are not available: exposing port TCP 0.0.0.0:5432 -> 127.0.0.1:0 ... bind: An attempt was made to access a socket in a way forbidden by its access permissions.',
                  fix: '這是 Windows 層級的 port 綁定被拒絕，不是 PostgreSQL 或 Docker 本身壞掉。最常見原因是 Windows 把 5432 劃進了 Hyper-V/WSL2 的「動態排除 port 範圍」。排查步驟：① 用系統管理員身分打開 PowerShell，執行 netsh interface ipv4 show excludedportrange protocol=tcp，看輸出裡有沒有一段範圍剛好包含 5432；② 如果有，執行 net stop winnat 再 net start winnat 讓 Windows 重新配置排除範圍（這組指令需要系統管理員權限），完成後重跑 docker compose --profile postgres up -d；③ 也要順便確認你電腦是不是本來就裝了一套「本機安裝版」的 PostgreSQL 服務佔用了 5432（執行 Get-Service | Where-Object {$_.DisplayName -like "*postgresql*"}），有的話先停用該服務。如果以上都排查過還是不行，最快的繞過方式是把 docker-compose.yml 裡 postgres 服務的 ports 改成不同的主機 port（例如 "5433:5432"，容器內部仍是 5432 不用動），同時要把 application-postgres.properties 的連線字串從 jdbc:postgresql://localhost:5432/learning_lab 改成 jdbc:postgresql://localhost:5433/learning_lab，兩邊同步改掉即可正常使用。',
                },
                {
                  issue: 'docker ps 看不到 react-learning-postgres，或 STATUS 一直是 Restarting',
                  fix: '跟 MySQL 練習一樣，先用 docker compose --profile postgres logs postgres 看實際錯誤訊息；多半也是 port 被佔用（5432 或 5050 其中之一），用 netstat -ano | findstr 5432 / findstr 5050 確認。',
                },
              ],
            },
          ],
        },
        {
          id: 'extdb-pg-stage-driver',
          title: 'Stage 2：加上 PostgreSQL 驅動依賴',
          intro: '跟 MySQL 一樣的道理，只是換一組驅動。',
          steps: [
            {
              id: 'extdb-pg-dep',
              title: '打開 pom.xml 的 postgresql 驅動註解',
              instruction: '打開 pom.xml，把 postgresql 那組 <dependency> 的註解拿掉（如果剛剛為了練 MySQL 打開了 mysql-connector-j，記得先改回註解，同一次只啟用一組驅動，避免混淆）。',
              checkpoint: '能說出這個依賴 scope=runtime 的原因（跟 MySQL 練習的 Stage 2 是一樣的道理：程式碼只面對 JPA 介面，不會直接 import 驅動類別）。',
              hint: `<!-- pom.xml：取消這段註解 -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>`,
            },
          ],
        },
        {
          id: 'extdb-pg-stage-config',
          title: 'Stage 3：用 postgres profile 啟動並驗證',
          intro: '一樣是疊加設定檔的機制，只是這次疊加 application-postgres.properties。',
          steps: [
            {
              id: 'extdb-pg-profile',
              title: '用 postgres profile 啟動後端',
              instruction: '打開 application-postgres.properties 看連線設定（driver 是 org.postgresql.Driver，url 是 jdbc:postgresql://...）。用 mvn spring-boot:run -Dspring-boot.run.profiles=postgres 啟動，然後呼叫幾次 Task 的 API（新增/查詢），回到 pgAdmin 展開 learning_lab → Schemas → public → Tables，應該看得到 tasks 這張表跟剛剛新增的資料。',
              checkpoint: '在 pgAdmin 的 Query Tool 下 SELECT * FROM tasks; 看得到剛剛透過 API 新增的資料。',
              hint: `mvn spring-boot:run -Dspring-boot.run.profiles=postgres

# 驗證：pgAdmin 裡對 learning_lab 資料庫開 Query Tool，執行：
SELECT * FROM tasks;`,
            },
          ],
        },
      ],
      interviewQuestions: [
        {
          question: 'PostgreSQL 跟 MySQL 最常被拿出來比較的差異是什麼？',
          answerHint: 'PostgreSQL 型別檢查較嚴格、對 SQL 標準遵循度較高，內建更豐富的資料型別（如 JSONB、陣列）與進階功能（視窗函式、CTE、擴充套件如 PostGIS）；MySQL 的優勢是生態系成熟、幾乎所有主機商都原生支援、簡單場景效能調校資源多。沒有絕對的好壞，看團隊需求與既有生態系。',
        },
        {
          question: 'pgAdmin 連線時 Host 要填 postgres 而不是 localhost，這是為什麼？',
          answerHint: 'pgAdmin 本身也是 docker-compose 裡的一個容器（服務名 pgadmin），它跟 postgres 容器在同一個 compose 網路裡，彼此用「服務名稱」當主機名解析。容器裡的 localhost 永遠指向容器自己，不會指到旁邊的另一個容器，這是新手接容器化服務時最常踩的坑。',
        },
        {
          question: '這個練習沒有自動驗收按鈕，要怎麼確認自己真的做對了？',
          answerHint: '外部資料庫需要本機真的跑著 Docker 容器，平台在瀏覽器端沒辦法連進你的容器驗證，所以這類基礎設施題改用「checkpoint 自行確認」：用 pgAdmin/MySQL client 實際下 SQL 查詢，親眼看到資料真的進了對應的資料庫，比任何自動化勾勾都更有說服力——這也是實務上「設定對不對」常見的排查方式。',
        },
        {
          question: '如果 MySQL 跟 PostgreSQL 的驅動依賴同時打開在 pom.xml 裡，會發生什麼事？',
          answerHint: '不會編譯錯誤（兩個都是 runtime 的 JDBC 驅動，可以共存），但容易造成混淆、增加不必要的映像檔大小。正式專案應該只保留真正會用到的那一種驅動，而不是「全部都裝著以防萬一」。',
        },
        {
          question: '為什麼 docker-compose.yml 要用 profiles 把 mysql/postgres 服務隔開，而不是讓它們跟 app 服務一起無條件啟動？',
          answerHint: '這個專案預設是用 H2（檔案資料庫，打包在 app 容器內），平常 docker compose up -d 不需要也不應該順便啟動兩個額外的資料庫容器（浪費資源、佔用 port）。用 profiles 讓這些服務變成「選用」，只有明確下 --profile mysql/postgres 才會啟動，這是 compose 管理「多環境、多種可選服務」的標準做法。',
        },
      ],
    },
  ],
}

// ============================================================================
// 17. 自動化測試
// 用這個專案裡已經真實存在的程式碼（CommentController / CommentRepository /
// ShortLinkService）當教材，示範三種最常見的 Spring Boot 測試切片，
// 以及一個「進階選學」的 Testcontainers 整合測試。
// ============================================================================
export const testingGuide = {
  title: '自動化測試：從單元測試到 Testcontainers',
  subtitle: '履歷上寫「有寫測試」之前，先搞懂這幾種測試到底在測什麼、為什麼要分層',
  whyTesting: [
    '面試幾乎必問「這個專案有寫測試嗎？」——有真正跑得過的測試，說服力遠大於口頭說「我知道 TDD」。',
    '測試能在「改程式碼的當下」就抓到壞掉的地方，不用等到手動點網頁或上線後使用者回報才發現。這份教材寫測試時，就真的抓到一個 CommentController 刪除不存在留言會誤回 500（應該是 404）的 bug。',
    '不同層級的測試，目的不一樣：單元測試測「商業邏輯本身」、Controller 切片測試測「HTTP 層接口」、Repository 切片測試測「查詢邏輯」、整合測試測「接起來是不是真的動」——分層能讓測試又快又準，不用每次都整個應用程式整套啟動。',
  ],
  concepts: [
    {
      term: '純 Mockito 單元測試',
      analogy: '完全不開 Spring，只用假物件（Mock）換掉 Repository，測 Service 裡的 if/while/計算邏輯本身，跑起來是毫秒等級。',
      command: '@ExtendWith(MockitoExtension.class) + @Mock + @InjectMocks',
    },
    {
      term: '@WebMvcTest（Controller 層切片）',
      analogy: '只載入 Web 層（Controller + 例外處理），Repository 用 @MockitoBean 假物件取代，測「HTTP 狀態碼對不對、Controller 呼叫 Repository 的方式對不對」。',
      command: '@WebMvcTest(CommentController.class)',
    },
    {
      term: '@DataJpaTest（Repository 層切片）',
      analogy: '只載入 JPA 相關元件，自動換成記憶體版 H2，測「衍生查詢、@PrePersist 這些跟真正資料庫打交道的邏輯」，每個測試結束自動 rollback。',
      command: '@DataJpaTest',
    },
    {
      term: 'Testcontainers（進階選學，需要 Docker）',
      analogy: '測試開始時真的用 Docker 啟動一個全新 MySQL 容器，整個 HTTP → Controller → Repository → 真實資料庫都跑過一遍，測完容器自動銷毀。跟你「這台不能跑 Docker」的情境完全對應：這份測試只能在你另一台能跑 Docker 的機器上執行。',
      command: '@Testcontainers + @Container MySQLContainer',
    },
  ],
  stages: [
    {
      id: 'testing-stage-unit',
      title: 'Stage 1：純 Mockito 單元測試（ShortLinkService）',
      intro:
        'ShortLinkService.generateUniqueCode() 有一個「產生碰撞就重試」的 while 迴圈，這是這個專案裡少數「有商業邏輯值得單獨測」的地方。這個 Stage 會把「怎麼從 0 開始寫出一個會動的單元測試」拆成很細的步驟，包含檔案要放哪裡、每個 annotation 實際在做什麼、怎麼執行、怎麼看懂結果。',
      steps: [
        {
          id: 'testing-unit-concept',
          title: '第 0 步：先搞懂「單元測試」跟你之前看過的驗收測試差在哪',
          instruction:
            '你在「14. 面試級全端專案」裡看過的 verify-comments-crud 那種驗證，是在瀏覽器裡用 fetch 打真正的 API，要先把後端整個啟動起來才能測，測的是「前端打 API 到後端整條路通不通」。單元測試完全不一樣：它不透過瀏覽器、不透過 HTTP、甚至不啟動 Spring，而是直接在 Java 程式碼裡 new 一個物件、呼叫它的方法、檢查回傳值對不對。目標是「只測一小塊程式碼本身的邏輯」，排除資料庫、網路、框架這些會讓測試變慢、變不穩定的因素。ShortLinkService.generateUniqueCode() 這段「如果代碼重複就重新產生」的 while 迴圈，就是一段「邏輯」，適合單獨拉出來測。',
          checkpoint: '你能說出「單元測試」跟「打 API 驗收」這兩種測試，各自測的是哪一層、為什麼要分開做。',
          hint: `對照表：
- 驗收測試（之前的 verify-xxx-crud）：瀏覽器 → fetch → HTTP → Controller → Repository → 資料庫
  整條路都要是真的，測「系統接起來動不動」。
- 單元測試（這個 Stage）：Java 測試方法 → new/呼叫 Service 的方法
  Repository 用假的替換掉，測「這段邏輯本身對不對」，不需要資料庫、不需要啟動網頁伺服器。`,
        },
        {
          id: 'testing-unit-file-location',
          title: '第 1 步：測試檔案要建立在哪裡、檔名怎麼取',
          instruction:
            '這個專案的主程式碼放在 src/main/java/com/example/react_learning/，測試程式碼要放在「鏡像」的路徑 src/test/java/com/example/react_learning/，而且套件（package）要跟你要測的類別一模一樣。因為 ShortLinkService 在 src/main/java/com/example/react_learning/shortlink/ShortLinkService.java，所以測試檔案要建立在 src/test/java/com/example/react_learning/shortlink/ShortLinkServiceTest.java。檔名規則是「被測類別名稱 + Test」，Maven 的測試執行工具（Surefire）預設只會自動尋找並執行檔名符合 *Test.java / Test*.java / *Tests.java 這幾種命名規則的檔案，取別的名字不會被自動執行到。',
          checkpoint: '在檔案總管裡能找到 src/test/java/com/example/react_learning/shortlink/ 這個資料夾（如果還沒有就新建），並確認裡面要放的檔名是 ShortLinkServiceTest.java。',
          hint: `src/
  main/java/com/example/react_learning/shortlink/ShortLinkService.java   ← 被測的程式碼
  test/java/com/example/react_learning/shortlink/ShortLinkServiceTest.java ← 測試程式碼，package 要跟上面一致

package com.example.react_learning.shortlink; // 跟 ShortLinkService 同一個 package

class ShortLinkServiceTest {
    // 測試方法會寫在這裡面
}`,
        },
        {
          id: 'testing-unit-dependencies',
          title: '第 2 步：確認專案已經有 JUnit 5 + Mockito（不用額外安裝）',
          instruction:
            '打開 pom.xml，找到 spring-boot-starter-test 這個依賴（本來就有，是 Spring Initializr 預設加的）。這一個依賴其實背後打包了一整組測試工具：JUnit 5（寫測試方法、跑測試、判斷成功失敗的框架）、Mockito（製造假物件的工具）、AssertJ（讓斷言可以寫成 assertThat(x).isEqualTo(y) 這種好讀的語法）。也就是說，你不用額外在 pom.xml 加任何東西，就可以直接開始寫 Mockito 的測試——這也是為什麼它的 scope 是 test：只有跑測試的時候才會用到，正式執行 jar 檔不會包含這些工具。',
          checkpoint: '在 pom.xml 裡找到 <artifactId>spring-boot-starter-test</artifactId> 這段，確認 <scope>test</scope>。',
          hint: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
<!-- 這一個依賴 = JUnit 5 + Mockito + AssertJ，三個工具包一起來 -->`,
        },
        {
          id: 'testing-unit-first-test',
          title: '第 3 步：寫一個「什麼都還沒測」的最小測試，先確認環境是通的',
          instruction:
            '在真正寫複雜邏輯之前，先寫一個最簡單、一定會過的測試方法，目的是確認「檔案位置對、package 對、JUnit 認得到這個測試」。一個測試方法的三個規則：1) 要加 @Test 這個 annotation（告訴 JUnit「這個方法是一個測試，不是普通方法」）；2) 方法不能有回傳值（必須是 void）；3) 方法不能有參數。寫完存檔後，在 IDE 裡這個方法左邊通常會出現一個綠色的執行箭頭（▶），點下去就能單獨執行這一個測試方法。',
          checkpoint: '點擊綠色箭頭執行後，IDE 下方的測試結果面板顯示綠色勾勾（通過），而不是紅色叉叉。',
          hint: `package com.example.react_learning.shortlink;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class ShortLinkServiceTest {

    @Test
    void sanityCheck_environmentIsWorking() {
        // 這個測試不測任何真正的邏輯，只是先確認「測試環境真的有跑起來」
        assertThat(1 + 1).isEqualTo(2);
    }
}`,
        },
        {
          id: 'testing-unit-setup',
          title: '第 4 步：逐一拆解 @ExtendWith / @Mock / @InjectMocks 分別在做什麼',
          instruction:
            '這三個 annotation 一定要一起理解，缺一個都會出問題：\n\n' +
            '① @ExtendWith(MockitoExtension.class) 寫在「class 上面」：告訴 JUnit 5「這個測試類別需要讓 Mockito 介入處理」，沒有這一行，下面的 @Mock / @InjectMocks 完全不會生效（欄位會是 null）。\n\n' +
            '② @Mock private ShortLinkRepository shortLinkRepository：請 Mockito 「憑空生出」一個 ShortLinkRepository 的假物件（不需要 ShortLinkRepository 有任何實作，因為它本來就只是一個 interface）。這個假物件所有方法預設回傳 null（物件）或空集合（List）或 false（boolean），要自己用 when(...).thenReturn(...) 指定遇到什麼輸入要回傳什麼。\n\n' +
            '③ @InjectMocks private ShortLinkService shortLinkService：請 Mockito 建立一個「真正的」ShortLinkService 物件（這個不是假的，所有邏輯程式碼都會真的執行），並自動把上面標記 @Mock 的假物件，塞進 ShortLinkService 建構子需要的參數裡。你完全不用自己寫 new ShortLinkService(shortLinkRepository)，Mockito 會在每個測試方法執行前自動幫你組好。',
          checkpoint: '你能解釋：如果只有 @Mock 沒有 @InjectMocks，會發生什麼事（答案：你會有一個假的 Repository，但沒有「被測的本尊」ShortLinkService 可以呼叫）。',
          hint: `package com.example.react_learning.shortlink;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class) // ① 啟用 Mockito
class ShortLinkServiceTest {

    @Mock
    private ShortLinkRepository shortLinkRepository; // ② 假的 Repository

    @InjectMocks
    private ShortLinkService shortLinkService; // ③ 真的 Service，自動裝好假 Repository
}`,
        },
        {
          id: 'testing-unit-arrange-act-assert',
          title: '第 5 步：用 AAA（Arrange-Act-Assert）三段式寫出第一個「正常情況」測試',
          instruction:
            '每一個測試方法建議都照這三段寫，看久了會很習慣：\n\n' +
            '【Arrange 準備】告訴假的 Repository「如果有人呼叫 findByCode 不管傳什麼字串，都回傳 Optional.empty()」（代表這個代碼沒有被佔用），這樣 while 迴圈第一次就會成功結束，不會進入重試。\n\n' +
            '【Act 執行】真的呼叫 shortLinkService.createLink(...)，這一行會真的跑 ShortLinkService.java 裡的程式碼（包含那個 while 迴圈），只是迴圈裡呼叫 shortLinkRepository.findByCode(...) 時，呼叫到的是假物件，不會真的查資料庫。\n\n' +
            '【Assert 驗證】檢查回傳的 ShortLink 物件，它的 targetUrl 欄位是不是等於你傳進去的網址。',
          checkpoint: '這個測試會過，且你能分別指出程式碼裡哪幾行是 Arrange、哪一行是 Act、哪一行是 Assert。',
          hint: `import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@Test
void createLink_whenCodeIsFree_savesAndReturnsShortLink() {
    // Arrange：假的 Repository 不管收到什麼代碼都說「沒人用過」
    when(shortLinkRepository.findByCode(anyString())).thenReturn(Optional.empty());

    // Act：真的呼叫 Service 的方法
    ShortLink result = shortLinkService.createLink(new ShortLinkRequest("https://example.com"));

    // Assert：檢查結果
    assertThat(result.targetUrl()).isEqualTo("https://example.com");
}`,
        },
        {
          id: 'testing-unit-verify',
          title: '第 6 步：用 verify() 檢查「假物件有沒有被正確呼叫」，而不只是看回傳值',
          instruction:
            'assertThat(...) 只能檢查「回傳的結果對不對」，但有時候你更在意的是「過程中到底呼叫了哪些方法、呼叫了幾次」——這時候要用 Mockito 的 verify()。接續第 5 步的測試，加上一行 verify(shortLinkRepository).save(any(ShortLinkEntity.class))，這行的意思是「驗證 save() 這個方法剛好被呼叫了 1 次（預設檢查 1 次），參數是任何一個 ShortLinkEntity 物件」。如果 Service 裡忘記呼叫 save()（忘記存進資料庫），這個 verify 就會讓測試失敗，即使回傳值看起來是對的。',
          checkpoint: '故意把 ShortLinkService.createLink() 裡的 shortLinkRepository.save(entity) 那一行註解掉，重新跑測試，確認測試會失敗並顯示類似「Wanted but not invoked」的訊息；跑完記得把註解拿掉還原。',
          hint: `import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;

@Test
void createLink_whenCodeIsFree_savesAndReturnsShortLink() {
    when(shortLinkRepository.findByCode(anyString())).thenReturn(Optional.empty());

    ShortLink result = shortLinkService.createLink(new ShortLinkRequest("https://example.com"));

    assertThat(result.targetUrl()).isEqualTo("https://example.com");
    verify(shortLinkRepository).save(any(ShortLinkEntity.class)); // 驗證真的有存
}`,
        },
        {
          id: 'testing-unit-retry',
          title: '第 7 步：進階情境——模擬「第一次產生的代碼剛好撞號」，驗證重試邏輯',
          instruction:
            '這是這個 Stage 真正的重點，也是為什麼要挑 ShortLinkService 來練習：它的 generateUniqueCode() 裡有一個 while(true) 迴圈，邏輯是「產生一組隨機代碼 → 問 Repository 這組代碼存不存在 → 存在就重新產生、不存在就使用」。但隨機產生的代碼在測試裡沒辦法控制它「剛好」撞號，所以改用另一招：讓假的 Repository 連續兩次被呼叫時，回傳不同的結果。when(...).thenReturn(A, B) 這種「串接寫法」的意思是：第 1 次呼叫 findByCode 回傳 A（模擬「這組代碼已經有人用了」），第 2 次（含之後）呼叫都回傳 B（模擬「這組代碼沒人用」）。因為迴圈第一次會因為「代碼已存在」而繼續跑，第二次才會成功跳出迴圈，等於間接驗證了「真的有重試這件事發生」。',
          checkpoint: '能解釋 verify(shortLinkRepository, times(2)).findByCode(anyString()) 這一行：如果迴圈只跑一次就直接用撞號的代碼存進去（邏輯寫錯），這裡會抓到「實際呼叫次數不是 2 次」而測試失敗。',
          hint: `import static org.mockito.Mockito.times;

@Test
void createLink_retriesGeneratingCode_whenFirstAttemptCollides() {
    // Arrange：前一組代碼「已經存在」，逼迫迴圈重試一次；後一組代碼「沒人用」，讓迴圈能結束
    when(shortLinkRepository.findByCode(anyString()))
            .thenReturn(Optional.of(new ShortLinkEntity("existing", "https://taken.example", Instant.now())))
            .thenReturn(Optional.empty());

    // Act
    ShortLink result = shortLinkService.createLink(new ShortLinkRequest("https://example.com"));

    // Assert：結果本身沒問題
    assertThat(result.targetUrl()).isEqualTo("https://example.com");
    // Assert：而且「真的有重試」——findByCode 被呼叫了 2 次，不是只呼叫 1 次就直接用撞號的代碼
    verify(shortLinkRepository, times(2)).findByCode(anyString());
    verify(shortLinkRepository, times(1)).save(any(ShortLinkEntity.class));
}`,
        },
        {
          id: 'testing-unit-run-all',
          title: '第 8 步：執行整個測試類別、看懂終端機裡的結果',
          instruction:
            '寫完所有測試方法後，不用一個一個點，可以在終端機下指令一次跑完這個類別所有測試：mvn test -Dtest=ShortLinkServiceTest。看輸出結果時注意這一行：Tests run: 4, Failures: 0, Errors: 0, Skipped: 0——Tests run 是總共跑了幾個 @Test 方法，Failures 是「斷言失敗」（例如 assertThat 或 verify 沒通過），Errors 是「程式碼本身丟了例外」（例如 NullPointerException），兩者都是 0 才算全部通過。如果看到 BUILD SUCCESS 就代表這次執行完全沒問題；看到 BUILD FAILURE 就要往上捲找第一個出現 FAILED 或 ERROR 的測試方法名稱，從那裡開始排查。',
          checkpoint: '終端機顯示 BUILD SUCCESS，且 Tests run 的數字等於你這個檔案裡 @Test 方法的總數。',
          hint: `mvn test -Dtest=ShortLinkServiceTest

# 預期看到類似：
# [INFO] Tests run: 4, Failures: 0, Errors: 0, Skipped: 0
# [INFO] BUILD SUCCESS

# 只想跑其中一個測試方法（精準定位問題時很好用）：
mvn test -Dtest=ShortLinkServiceTest#createLink_retriesGeneratingCode_whenFirstAttemptCollides`,
        },
      ],
    },
    {
      id: 'testing-stage-webmvc',
      title: 'Stage 2：@WebMvcTest 測 Controller 層（CommentController）',
      intro:
        '這一關會踩到一個很真實的坑：這個專案全域啟用了 Spring Security（JwtAuthFilter），@WebMvcTest 預設不會排除自訂的 Filter，所以就算你只指定測 CommentController，JwtAuthFilter 還是會被建立，連帶需要它的建構子依賴 JwtUtil——解法是額外用 @MockitoBean 補上 JwtUtil 的假物件。',
      steps: [

        {
          id: 'testing-webmvc-setup',
          title: '用 MockMvc 模擬 HTTP 請求',
          instruction:
            '@WebMvcTest(CommentController.class) 只載入 Web 層，MockMvc 讓你不用真的啟動 Tomcat、不用真的發 HTTP 封包，就能模擬 GET/POST/DELETE 請求並檢查回傳的狀態碼、JSON 內容。',
          checkpoint: '能解釋為什麼要額外加 @MockitoBean private JwtUtil jwtUtil（不是因為 CommentController 用到它，而是 Spring Security 的 Filter 鏈需要它）。',
          hint: `@WebMvcTest(CommentController.class)
class CommentControllerTest {
    @Autowired private MockMvc mockMvc;
    @MockitoBean private CommentRepository commentRepository;
    @MockitoBean private JwtUtil jwtUtil; // 補上 Security Filter 需要的依賴
}`,
        },
        {
          id: 'testing-webmvc-validation',
          title: '驗證「空白內容被擋下回 400」且「Repository 完全沒被呼叫」',
          instruction:
            '送出 author/content 都是空字串的請求，驗證：1) HTTP 狀態碼是 400；2) commentRepository.save() 從頭到尾沒被呼叫過（因為驗證失敗在進到 Controller 方法「之前」就被 @Valid 擋下來了）。',
          checkpoint: '用 verify(commentRepository, never()).save(any()) 驗證通過。',
          hint: `mockMvc.perform(post("/api/comments")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CommentRequest("", ""))))
        .andExpect(status().isBadRequest());

verify(commentRepository, never()).save(any(CommentEntity.class));`,
        },
        {
          id: 'testing-webmvc-bugfix',
          title: '抓到真正的 bug：刪除不存在的留言，原本回 500 不是 404',
          instruction:
            '寫 deleteComment_whenNotExists_returns404 這個測試時會發現：CommentController 丟出 NoSuchElementException，但 GlobalExceptionHandler 原本只有處理 MethodArgumentNotValidException / ResponseStatusException / 通用 Exception，NoSuchElementException 掉進「通用 Exception」那個 catch-all handler，誤回 500。修法：在 GlobalExceptionHandler 新增一個專門處理 NoSuchElementException 的 @ExceptionHandler，回 404。',
          checkpoint: '補上 handler 後，測試從失敗變成通過——這就是「寫測試的當下抓到真實 bug」的具體例子。',
          hint: `@ExceptionHandler(NoSuchElementException.class)
public ResponseEntity<ApiErrorResponse> handleNotFound(
        NoSuchElementException exception, HttpServletRequest request) {
    ApiErrorResponse response = new ApiErrorResponse(
            HttpStatus.NOT_FOUND.value(), "NOT_FOUND",
            exception.getMessage(), request.getRequestURI(), Instant.now(), List.of());
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
}`,
        },
      ],
    },
    {
      id: 'testing-stage-datajpa',
      title: 'Stage 3：@DataJpaTest 測 Repository 層（CommentRepository）',
      intro:
        'findAllByOrderByCreatedAtDesc() 是 Spring Data JPA 依方法名稱「自動生成」的查詢，拼字打錯、排序方向寫反，編譯期完全不會報錯，只有真的跑一次資料庫查詢才測得出來。',
      steps: [
        {
          id: 'testing-datajpa-sort',
          title: '驗證排序衍生查詢真的「新到舊」',
          instruction:
            '存兩筆留言（中間 sleep 一下確保時間不同），呼叫 findAllByOrderByCreatedAtDesc()，驗證回傳陣列第一筆是「比較晚存入」的那筆。',
          checkpoint: '斷言 result.get(0).getId() 等於後存入那筆的 id。',
          hint: `@DataJpaTest
class CommentRepositoryTest {
    @Autowired private CommentRepository commentRepository;

    @Test
    void findAllByOrderByCreatedAtDesc_returnsNewestFirst() throws InterruptedException {
        CommentEntity older = commentRepository.save(new CommentEntity("A", "比較舊的留言"));
        Thread.sleep(5);
        CommentEntity newer = commentRepository.save(new CommentEntity("B", "比較新的留言"));

        List<CommentEntity> result = commentRepository.findAllByOrderByCreatedAtDesc();

        assertThat(result.get(0).getId()).isEqualTo(newer.getId());
    }
}`,
        },
        {
          id: 'testing-datajpa-prepersist',
          title: '驗證 @PrePersist 真的有自動補上 createdAt',
          instruction:
            '建立一個全新的 CommentEntity（還沒存進資料庫），先斷言 getCreatedAt() 是 null；呼叫 save() 之後再斷言它「不是 null」——這樣才是真正驗證到 @PrePersist 有在「存進資料庫的那一刻」被觸發，而不是建構子就設好值。',
          checkpoint: '兩個斷言都通過：存之前是 null，存之後不是 null。',
          hint: `CommentEntity comment = new CommentEntity("Mike", "測試 @PrePersist");
assertThat(comment.getCreatedAt()).isNull();

CommentEntity saved = commentRepository.save(comment);
assertThat(saved.getCreatedAt()).isNotNull();`,
        },
      ],
    },
    {
      id: 'testing-stage-testcontainers',
      title: 'Stage 4（進階選學）：Testcontainers 真連 MySQL 整合測試',
      intro:
        '這一關「必須要有 Docker 在跑」才能執行——跟你串接外部資料庫、cross-machine 開發的情境完全一致。請把程式碼推上 GitHub，到你另一台能跑 Docker 的機器上 git pull，再執行這份測試。',
      steps: [
        {
          id: 'testing-tc-container',
          title: '用 @Container 宣告一次性 MySQL 容器',
          instruction:
            '@Container static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.4")...，JUnit 的 Testcontainers 擴充套件會在測試類別開始前自動 docker run 起這個容器，測試結束後自動刪除——不是你 docker-compose.yml 裡那個常駐的 mysql 服務，是完全獨立、用完即丟的。',
          checkpoint: '能說出這跟 docker-compose.yml 裡 mysql 服務的差異（一次性 vs 常駐）。',
          hint: `@Testcontainers
class CommentTestcontainersIntegrationTest {
    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.4")
            .withDatabaseName("learning_lab_test")
            .withUsername("learner")
            .withPassword("learn123");
}`,
        },
        {
          id: 'testing-tc-dynamicprops',
          title: '用 @DynamicPropertySource 把連線資訊動態塞進 Spring',
          instruction:
            'MySQLContainer 啟動後，port 是隨機分配的，沒辦法事先寫死在 application.properties 裡。@DynamicPropertySource 讓你在 Spring 啟動「之前」用程式動態讀出容器實際的連線字串、帳號密碼，蓋掉設定值。',
          checkpoint: '完整跑一次 CRUD（建立→查詢→刪除），確認資料真的進了這個臨時 MySQL 容器，而不是預設的 H2。',
          hint: `@DynamicPropertySource
static void overrideDatasourceProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", mysql::getJdbcUrl);
    registry.add("spring.datasource.username", mysql::getUsername);
    registry.add("spring.datasource.password", mysql::getPassword);
}

// 在沒有 Docker 的機器上想跳過這份測試：
// mvn test -Dtest='!CommentTestcontainersIntegrationTest'`,
        },
      ],
    },
  ],
  commonCommands: [
    { command: 'mvn test', description: '跑整個專案所有測試（包含需要 Docker 的 Testcontainers 測試）。' },
    {
      command: "mvn test -Dtest='!CommentTestcontainersIntegrationTest'",
      description: '排除某一個測試類別，適合在沒有 Docker 的機器上先跑其他測試。',
    },
    { command: 'mvn test -Dtest=CommentRepositoryTest', description: '只跑單一個測試類別，開發時快速驗證。' },
    { command: 'mvn test -Dtest=CommentRepositoryTest#findAllByOrderByCreatedAtDesc_returnsNewestFirst', description: '只跑單一個測試方法，精準定位問題。' },
  ],
  interviewQuestions: [
    {
      question: '單元測試、@WebMvcTest、@DataJpaTest、Testcontainers 整合測試，實務上要怎麼分配比例？',
      answerHint:
        '常見比喻是「測試金字塔」：底層是大量、快速的單元測試（商業邏輯），中層是適量的切片測試（@WebMvcTest/@DataJpaTest，驗證跟框架的接線正不正確），頂層是少量、較慢的整合測試（Testcontainers，驗證整條流程真的通）。越底層的測試數量應該越多，因為跑得快、失敗時容易定位問題；越頂層的測試數量要越少，因為慢、環境依賴重，只留給最關鍵的端到端流程。',
    },
    {
      question: '@WebMvcTest(CommentController.class) 明明只指定測一個 Controller，為什麼 JwtAuthFilter 還是被建立了？',
      answerHint:
        '@WebMvcTest 的切片規則是「保留跟 Web 層相關的元件」，而 Servlet Filter（包括自訂的 OncePerRequestFilter）被認定跟 Web 層相關，所以不會被排除，依然會被建立。JwtAuthFilter 的建構子需要 JwtUtil，而 JwtUtil 是 @Component（被切片排除），所以測試必須額外用 @MockitoBean 補上 JwtUtil 的假物件，否則整個 Spring 測試情境會因為「找不到 JwtUtil」組裝失敗。',
    },
    {
      question: '@DataJpaTest 預設用記憶體版 H2，而不是接正式用的 jdbc:h2:file:./data/learning-lab，這樣測試結果可信嗎？',
      answerHint:
        '可信，因為測的是「JPA/Hibernate 查詢邏輯對不對」，H2 跟正式的 H2 檔案資料庫行為是一致的——真正要注意的是「換成 MySQL/PostgreSQL 之後行為會不會不一樣」，這種跨資料庫的風險才需要靠 Testcontainers 整合測試來補足（@DataJpaTest 測不出 MySQL 專屬的型別轉換或 SQL 方言差異）。',
    },
    {
      question: '這次寫測試抓到 CommentController 刪除不存在的留言會回 500 而不是 404，這件事給你什麼啟發？',
      answerHint:
        '例外處理要「夠精確」：GlobalExceptionHandler 原本只有兜底的 Exception handler，任何沒被明確攔截的例外都會被當成「未預期的系統錯誤」回 500。但「資源不存在」在語意上應該是客戶端可以預期、可以處理的 404，不是系統出錯。這也說明了為什麼測試要覆蓋「失敗路徑」（找不到、驗證失敗），不能只測「成功路徑」，很多 bug 都藏在錯誤處理的細節裡。',
    },
    {
      question: 'Testcontainers 整合測試需要本機有 Docker，這跟你「這台機器不能跑 Docker」的限制要怎麼共存？',
      answerHint:
        '用 Maven 的 -Dtest 排除語法（mvn test -Dtest=\'!CommentTestcontainersIntegrationTest\'）在沒有 Docker 的機器上跳過這份測試，其餘不需要 Docker 的測試（單元測試、@WebMvcTest、@DataJpaTest）正常執行；真正需要驗證「跟真實 MySQL 行為一致」時，再把程式碼推上 GitHub，到有 Docker 的那台機器上 git pull 後完整跑一次 mvn test。這正好也是 CI/CD 流程的雛形：不同測試可以依賴不同的執行環境。',
    },
  ],
}

// ============================================================================
// 18. 綜合實戰總複習：JSX + Spring Boot + Docker + 單元測試
// 不重新教新語法，而是把 13~17 章節已經分開練過的四個面向，
// 用同一個「已經存在」的功能（ShortLink 短網址服務）串成一條完整的主線，
// 模擬面試現場最常見的題型：「請帶我導覽一次你這個專案的架構」。
// ============================================================================
export const finalCapstoneGuide = {
  title: '綜合實戰總複習：用短網址服務串起 JSX / Spring Boot / Docker / 單元測試',
  subtitle: '面試官通常不會分開問「你 React 寫得好嗎」「你後端寫得好嗎」，而是指著一個功能問「這支從前端到資料庫整條路，講給我聽」——這個章節就是在練這件事。',
  goal: '不寫新功能，而是回頭用「架構師視角」重新檢視 MyShortLinks.jsx + ShortLinkController/Service/Repository + docker-compose.yml + ShortLinkServiceTest 這四份已經存在的程式碼，確保你能在面試現場流暢地從任一層講到任一層，並能現場回答追問。',
  whyThis: [
    '面試最怕的不是「不會寫」，而是「寫得出來但講不出為什麼這樣設計」——這一章刻意不教新東西，逼你把舊知識講清楚。',
    '很多人 JSX、Spring Boot、Docker、測試是分開學的，腦中是四個獨立的知識點；這一章的目的是把它們「焊」在同一條故事線上：使用者點擊 → React 事件 → fetch → Controller → Service 商業邏輯 → Repository → 資料庫 → Docker 容器 → 單元測試保護這條邏輯。',
    '刻意選短網址服務當教材，因為它四層都「剛好」有東西可以講：JSX 有 list rendering／conditional rendering／controlled input；Spring Boot 有驗證／分層／REST 設計；Docker 有 profiles／volume／網路；測試有「碰撞重試」這種真正值得單獨測的邏輯。',
  ],
  stages: [
    {
      id: 'final-stage-jsx',
      phase: 'jsx',
      title: 'Stage 1：重新解讀 MyShortLinks.jsx 的 JSX 設計',
      intro: '打開 src/components/MyShortLinks.jsx，這次不是照抄，而是練習「指著程式碼講設計理由」。面試官常常直接把你自己的程式碼叫出來問「這行為什麼這樣寫」。',
      steps: [
        {
          id: 'final-jsx-list-rendering',
          title: '找出 list rendering，解釋 key 的作用',
          instruction: '找到用 .map() 畫出短網址列表的那一段。準備好回答：為什麼每個項目要給 key？如果 key 用 index（陣列索引）而不是 code（短網址代碼），刪除中間一筆資料時畫面會發生什麼事？',
          checkpoint: '你能現場畫出「用 index 當 key，刪除中間一筆」會讓 React 錯誤地複用 DOM 節點、導致畫面對應錯亂的示意圖或口頭說明。',
          hint: `// 錯誤示範（面試常考的地雷）：
{links.map((link, index) => <LinkRow key={index} link={link} />)}
// 刪除第 2 筆後，React 會把「第 3 筆的資料」套用到「第 2 個 DOM 節點」上，
// 因為 index 本身沒有跟著資料走，React 誤以為只是內容變了，而不是少了一筆。

// 正確示範：
{links.map((link) => <LinkRow key={link.code} link={link} />)}
// code 是後端給的唯一值，跟著資料本身走，刪除/排序都不會認錯節點。`,
        },
        {
          id: 'final-jsx-conditional',
          title: '找出 conditional rendering，解釋「載入中／空清單／有資料」三態',
          instruction: '一個寫得完整的列表元件，通常要處理三種畫面狀態：資料還沒回來（loading）、資料回來但是空陣列（empty state）、資料回來且有內容（正常渲染）。在 MyShortLinks.jsx 裡找這三種分支，如果目前沒有處理空清單，想一下要怎麼加。',
          checkpoint: '你能講出為什麼「沒處理 loading 狀態」在面試作品集裡常被扣分：使用者會看到一閃而過的空白或錯誤的空清單提示，體驗很差。',
          hint: `{loading ? (
  <p>載入中...</p>
) : links.length === 0 ? (
  <p>目前還沒有任何短網址，建立第一筆看看吧！</p>
) : (
  <ul>{links.map((link) => <LinkRow key={link.code} link={link} />)}</ul>
)}`,
        },
        {
          id: 'final-jsx-controlled-form',
          title: '找出 controlled input，解釋「受控元件」跟「不受控」的差異',
          instruction: '找到建立短網址的表單輸入框，確認它是不是「值完全由 state 控制」（value={xxx} + onChange={...}）。練習口頭說明：如果拿掉 value 這個 prop 只留 onChange，會發生什麼事（變成不受控元件，React 不再掌控畫面上顯示的文字）。',
          checkpoint: '你能解釋「受控元件」的核心概念：畫面上看到的文字，永遠是 state 的「反映」，不是使用者打字直接造成的——使用者打字觸發 onChange，onChange 呼叫 setState，state 改變才讓 React 重新渲染出新的文字。',
          hint: `const [targetUrl, setTargetUrl] = useState('')

<input
  value={targetUrl}                                  // 畫面顯示的值 = state
  onChange={(event) => setTargetUrl(event.target.value)} // 使用者打字 → 更新 state
/>
// 這一來一回，就是「受控元件」的完整迴路。`,
        },
      ],
    },
    {
      id: 'final-stage-springboot',
      phase: 'springboot',
      title: 'Stage 2：重新解讀 ShortLinkController / Service / Repository 的分層設計',
      intro: '打開 ShortLinkController.java、ShortLinkService.java、ShortLinkRepository.java、ShortLinkRequest.java，練習講清楚「請求進來後，依序經過誰、每一層負責什麼」。',
      steps: [
        {
          id: 'final-spring-layers',
          title: '畫出一次 POST /api/links 的完整分層路徑',
          instruction: '口頭或畫圖描述：瀏覽器 → Controller（接收 HTTP、做 @Valid 驗證）→ Service（真正的商業邏輯：產生唯一代碼、重試機制）→ Repository（存進資料庫）→ 回傳 201 + 短網址物件。練習時specifically 指出「Controller 完全不知道資料存在哪種資料庫」這件事。',
          checkpoint: '你能講出「分層」帶來的具體好處：Controller 換一種驗證規則不用動 Service；Service 換一種資料庫（H2→MySQL）不用動 Controller；Repository 介面不變，底層實作可以隨便換。',
          hint: `瀏覽器
  │ POST /api/links { targetUrl }
  ▼
ShortLinkController          ← 只管 HTTP：收請求、@Valid 擋格式錯、回正確的狀態碼
  │ shortLinkService.create(request)
  ▼
ShortLinkService              ← 商業邏輯：產生唯一代碼、碰撞就重試、組裝 Entity
  │ shortLinkRepository.save(entity)
  ▼
ShortLinkRepository (JPA)     ← 完全不知道底層是 H2 還是 MySQL
  │
  ▼
資料庫`,
        },
        {
          id: 'final-spring-validation',
          title: '解釋 ShortLinkRequest 的驗證規則怎麼跟 Controller 搭配',
          instruction: '打開 ShortLinkRequest.java（應該是個 record），找到上面的驗證 annotation（例如 @NotBlank、@Pattern）。解釋：這些 annotation 什麼時候會被觸發檢查？如果驗證失敗，是誰負責把它轉成 400 回應（通常是 GlobalExceptionHandler 攔截 MethodArgumentNotValidException）。',
          checkpoint: '你能講出完整鏈路：Controller 方法參數上的 @Valid → Spring 自動呼叫驗證 → 驗證失敗丟出 MethodArgumentNotValidException → GlobalExceptionHandler 攔截，轉成統一格式的 400 錯誤回應（fieldErrors 陣列），Controller 本身完全不用寫任何 if 去檢查格式。',
          hint: `public record ShortLinkRequest(
    @NotBlank @Pattern(regexp = "https?://.+") String targetUrl
) {}

@PostMapping
public ResponseEntity<ShortLink> create(@Valid @RequestBody ShortLinkRequest request) {
    // 執行到這一行，代表 targetUrl 一定不是空字串、且一定是 http/https 開頭的網址，
    // 驗證失敗的情況已經在到這裡之前，就被攔截轉成 400 了。
    ...
}`,
        },
      ],
    },
    {
      id: 'final-stage-docker',
      phase: 'docker',
      title: 'Stage 3：把短網址服務完整 Docker 化跑一次',
      intro: '結合 15. Docker 容器化實戰 跟 16. 串接外部資料庫 的知識，這次目標是：用 docker compose，讓短網址服務真的連到 MySQL 容器跑起來，並能講出完整的容器網路拓樸。',
      steps: [
        {
          id: 'final-docker-full-stack',
          title: '同時啟動 app（或本機 mvnw）+ mysql，完整走一次短網址 CRUD',
          instruction: '用 docker compose --profile mysql up -d 啟動 MySQL；打開 pom.xml 的 mysql-connector-j 驅動；用 .\\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=mysql" 啟動後端；打開瀏覽器用 MyShortLinks 畫面建立一筆短網址，再用 docker exec 進 MySQL 容器直接下 SQL 確認資料真的寫進去了。',
          checkpoint: '能完整講出資料流動路徑：瀏覽器 JSX 事件 → fetch POST → Controller → Service → Repository → Hibernate 產生 INSERT SQL → MySQL 容器裡的 learning_lab 資料庫 → 你用 docker exec 查到這筆資料。',
          hint: `docker compose --profile mysql up -d
.\\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=mysql"

# 瀏覽器操作完後，直接進容器驗證：
docker exec -it react-learning-mysql mysql -ularner -plearn123 learning_lab -e "SELECT * FROM short_link;"`,
        },
        {
          id: 'final-docker-architecture-question',
          title: '練習回答：「如果要把這個服務真的上線，Docker 部分你會怎麼調整？」',
          instruction: '這是面試常見的延伸問題，練習組織一個有層次的答案，至少包含：① ddl-auto 應該從 update 改成 validate + Flyway/Liquibase 做版本控管的 migration；② 資料庫密碼不應該明寫在 docker-compose.yml，應該用 Docker Secrets 或環境變數注入；③ 應該要有健康檢查（healthcheck）讓編排工具知道容器真的準備好了，不是「process 有在跑」就算；④ volume 的備份機制要另外規劃，不能只靠 docker volume 本身。',
          checkpoint: '你能不看提示，自己講出至少 3 點「學習環境」跟「正式環境」在 Docker 設定上的差異。',
          hint: `學習環境 vs 正式環境常見差異：
1. ddl-auto: update  →  validate + Flyway/Liquibase migration script
2. 帳密寫在 docker-compose.yml →  Docker Secrets / 外部 Vault / CI 注入環境變數
3. 沒有 healthcheck        →  幫 mysql/app 服務都加上 healthcheck，搭配 depends_on.condition: service_healthy
4. 單一台機器跑 docker compose →  正式環境通常是 Kubernetes / ECS 等編排平台做多節點部署與自動擴縮`,
        },
      ],
    },
    {
      id: 'final-stage-testing',
      phase: 'testing',
      title: 'Stage 4：重新審視 ShortLinkServiceTest，並練習補一個 Controller 層測試',
      intro: '17. 自動化測試 已經帶你寫過 ShortLinkServiceTest（純 Mockito 單元測試）。這個 Stage 補齊「分層測試」的另外兩塊拼圖：Controller 層的 @WebMvcTest，以及回頭講清楚三種測試的分工。',
      steps: [
        {
          id: 'final-testing-recap',
          title: '口頭複習：ShortLinkServiceTest 到底在保護哪一段邏輯',
          instruction: '不看程式碼，試著自己講出 generateUniqueCode() 的「碰撞就重試」邏輯是什麼、為什麼這段值得被單獨測試（它是少數有 if/while 判斷的商業邏輯，而不是單純的資料存取）。',
          checkpoint: '你能講出：如果沒有這個單元測試，之後有人「好心」把 while 迴圈改成 if（只重試一次），這個單元測試會立刻抓到測試失敗，而不用等到正式環境真的發生代碼碰撞才發現 bug。',
        },
        {
          id: 'final-testing-webmvc',
          title: '練習寫一個 @WebMvcTest(ShortLinkController.class)',
          instruction: '仿照 17. 自動化測試 教材裡 CommentController 的 @WebMvcTest 寫法，幫 ShortLinkController 補一個切片測試：驗證 POST /api/links 帶不合法網址時回 400，GET /api/links/{code} 查不存在的代碼回 404。這個測試層級跟 Stage 1 寫的單元測試不一樣：這裡要連 HTTP 狀態碼、JSON 回應格式都測到，但 Service 用 @MockitoBean 假物件取代，不會真的碰資料庫。',
          checkpoint: '測試檔案能透過 mvn test -Dtest=ShortLinkControllerTest 執行成功，且至少包含「驗證失敗回 400」跟「找不到資源回 404」兩個案例。',
          hint: `@WebMvcTest(ShortLinkController.class)
class ShortLinkControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ShortLinkService shortLinkService;

    @Test
    void create_withInvalidUrl_returns400() throws Exception {
        mockMvc.perform(post("/api/links")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\\"targetUrl\\":\\"不是網址\\"}"))
            .andExpect(status().isBadRequest());
    }

    @Test
    void getByCode_whenNotFound_returns404() throws Exception {
        when(shortLinkService.findByCode("no-such-code")).thenThrow(new NoSuchElementException());

        mockMvc.perform(get("/api/links/no-such-code"))
            .andExpect(status().isNotFound());
    }
}`,
        },
        {
          id: 'final-testing-pyramid',
          title: '用「測試金字塔」總結這四層測試的分工',
          instruction: '練習畫出或口頭描述測試金字塔：最底層（數量最多、最快）是純 Mockito 單元測試；中間層是 @WebMvcTest / @DataJpaTest 這種切片測試；最上層（數量最少、最慢、最接近真實）是 Testcontainers 整合測試 / 瀏覽器端的 verify-xxx-crud 驗收測試。',
          checkpoint: '你能講出為什麼金字塔要「底寬頂窄」：單元測試快、便宜、該多寫；整合測試慢、貴（真的要啟動容器），只在真正需要驗證「跨元件真的兜得起來」時才寫，不然每次改一行程式碼都要等好幾分鐘才能知道測試過不過，開發體驗會很差。',
          hint: `        ▲  少量：Testcontainers / 瀏覽器端 verify-xxx-crud
       ╱ ╲    （慢、真實、涵蓋整條路徑）
      ╱   ╲
     ╱─────╲  中量：@WebMvcTest / @DataJpaTest
    ╱       ╲   （中等速度，只載入一層）
   ╱─────────╲
  ╱           ╲ 大量：純 Mockito 單元測試
 ╱─────────────╲  （毫秒等級，測邏輯本身）`,
        },
      ],
    },
  ],
  interviewQuestions: [
    {
      question: '請帶我導覽一次：使用者在畫面上點擊「建立短網址」之後，到資料真的存進資料庫，中間經過哪些元件？',
      answerHint:
        '這題就是在考「你是否真的理解自己寫的系統」，標準答案要依序提到：① React 的 onClick/onSubmit 觸發 state 更新與 fetch(POST)；② Controller 接收請求並做 @Valid 驗證；③ Service 執行商業邏輯（產生唯一代碼、處理碰撞重試）；④ Repository 透過 Spring Data JPA 把 Entity 存進資料庫；⑤ Hibernate 依照目前的 Profile 設定，產生對應方言（H2/MySQL/PostgreSQL）的 SQL；⑥ Controller 回傳 201 跟新建立的物件；⑦ React 收到回應後更新前端的 state，畫面重新渲染出新的一筆。',
    },
    {
      question: '如果我現在把後端的資料庫從 H2 換成 MySQL，你前端的程式碼需要改嗎？為什麼？',
      answerHint:
        '完全不用改。因為前端只透過固定的 REST API 合約（固定的 URL、固定的 JSON 格式）跟後端溝通，根本不知道後端背後接的是哪種資料庫。這正是分層架構「關注點分離」的價值：前端只依賴「API 合約」這個穩定的介面，後端內部實作（換資料庫、換驗證規則細節）的變動，不會波及前端。',
    },
    {
      question: '你怎麼確保這支短網址服務「重構」的時候不會壞掉？',
      answerHint:
        '靠分層測試金字塔：改 Service 裡的邏輯，跑 ShortLinkServiceTest（毫秒等級，立刻知道商業邏輯有沒有壞）；改 Controller 的 HTTP 處理，跑 @WebMvcTest；真的要確認整條路徑在正式資料庫上行為一致，才跑 Testcontainers 整合測試。平常開發時只需要跑最快的那一層，省下大量等待時間，又能保有信心。',
    },
    {
      question: '這整套（JSX + Spring Boot + Docker + 測試）如果要接上 CI/CD，你會怎麼設計 Pipeline？',
      answerHint:
        '典型流程：① 開發者 push 程式碼到 Git；② CI 先跑 mvn test（排除需要 Docker 的 Testcontainers 測試，用 -Dtest=\'!*IntegrationTest\' 這類排除語法）確保基本邏輯沒壞；③ 如果 CI 環境本身支援 Docker-in-Docker，可以再跑一輪包含 Testcontainers 的完整測試；④ 測試通過後用 Dockerfile 建置映像檔，推到映像檔倉庫（Docker Hub / 私有 Registry）；⑤ CD 階段把新映像檔部署到正式環境（可能搭配 docker compose pull && up -d，或更進階的 Kubernetes rolling update）。這一題的重點是展現「測試金字塔」跟「容器化」怎麼在真實流程裡銜接在一起，而不是各自獨立的知識點。',
    },
    {
      question: '如果你只有 15 分鐘準備這個系統的面試導覽，你會優先講哪三件事？',
      answerHint:
        '沒有標準答案，但建議的順序通常是：① 先講「為什麼分層」（展現架構思維，而不是只會寫 CRUD）；② 挑一個「有值得講的商業邏輯」的地方深入（例如代碼碰撞重試），展現你不是只會照抄範例；③ 主動提「如果要上線還缺什麼」（migration 工具、healthcheck、CI/CD），展現你知道教材範例跟正式環境的差距在哪裡——這通常比單純「把所有功能都講過一遍」更容易讓面試官留下深刻印象。',
    },
  ],
}


