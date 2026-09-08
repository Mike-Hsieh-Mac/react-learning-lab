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


