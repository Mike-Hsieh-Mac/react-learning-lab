import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import LessonPracticePanel from './components/LessonPracticePanel'
import PropsLessonDemo from './components/PropsLessonDemo'
import BackendLabSection from './components/BackendLabSection'
import CapstoneProjectSection from './components/CapstoneProjectSection'
import InterviewProjectsSection from './components/InterviewProjectsSection'
import DockerSection from './components/DockerSection'
import ExternalDbSection from './components/ExternalDbSection'
import HooksToolboxSection from './components/HooksToolboxSection'
import JavaBasicsSection from './components/JavaBasicsSection'
import RenderFlowSection from './components/RenderFlowSection'
import MyTaskBoard from './components/MyTaskBoard'
import MyShortLinks from './components/MyShortLinks'
import MyExpenseTracker from './components/MyExpenseTracker'
import MyAuthPanel from './components/MyAuthPanel'
import MyInventory from './components/MyInventory'
import { javaConceptQuizzes } from './javaPractice'
import {
  brokenCodeExercises,
  fallbackArchitectureSteps,
  fallbackBackendLabs,
  fallbackBackendStats,
  fallbackComponentGuides,
  fallbackGettingStartedSteps,
  fallbackGlossaryTerms,
  fallbackTips,
  javaBasicsGuides,
  lessonContent,
  quickWinTasks,
  reactHookGuides,
  reactRenderFlowGuide,
} from './learningContent'

const LEARNING_PROGRESS_STORAGE_KEY = 'react-learning-lab-progress-v1'
const defaultLessonVisits = { state: true }
const SECTION_LABELS = {
  hero: '頁首總覽',
  starter: '01. 新手快速上手地圖',
  glossary: '02. 名詞字典',
  components: '03. 常用組件練習區',
  quickwin: '03A. 5 分鐘立即練習',
  sandbox: '03B. 破碎代碼救援區',
  repair: '03C. 真實模擬錯誤 Playground',
  renderFlow: '03D. React Render 流程與依賴陣列',
  hooks: '04. React 常用 Hooks 工具箱',
  backendLab: '05. Spring Boot 後端應用實作',
  javaBasics: '05B. Java 新手基礎導讀',
  architecture: '06. 資料流導覽',
  practice: '07. 完整 lesson 練習',
  code: '08. 程式碼對照',
  quiz: '09. 新手練習題',
  playground: '10. 可編輯程式碼實驗室',
  notes: '11. 後端資料結果',
  insights: '12. 觀察與除錯',
  capstone: '13. 全端小專案實戰',
  interview: '14. 面試級全端專案',
  docker: '15. Docker 容器化實戰',
  externalDb: '16. 串接外部資料庫',
}

function readSavedLearningProgress() {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const raw = window.localStorage.getItem(LEARNING_PROGRESS_STORAGE_KEY)
    if (!raw) {
      return {}
    }

    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function createRepairExerciseDrafts() {
  return Object.fromEntries(brokenCodeExercises.map((exercise) => [exercise.id, exercise.brokenCode]))
}

const savedLearningProgress = readSavedLearningProgress()

const lessonOrder = ['state', 'props', 'form', 'hooks', 'api', 'backendCrud']

const defaultLessons = lessonOrder.map((id) => ({
  id,
  ...lessonContent[id],
  title: lessonContent[id].title,
  goal: lessonContent[id].goal,
  reactFocus: lessonContent[id].syntaxPoints[0],
  springFocus: lessonContent[id].syntaxPoints[1] ?? '搭配右側程式碼說明閱讀',
}))

const initialForm = {
  learnerName: '',
  feature: '表單控制與資料送出',
  question: '',
}

const playgroundDefaults = {
  hooks: lessonContent.hooks.reactCode,
  state: lessonContent.state.reactCode,
  props: lessonContent.props.playgroundCode ?? lessonContent.props.reactCode,
  form: lessonContent.form.reactCode,
  api: lessonContent.api.reactCode,
  backendCrud: lessonContent.backendCrud.reactCode,
}

function extractStatePreview(source) {
  const initialMatch = source.match(/useState\(([-\d]+)\)/)
  const deltaMatch = source.match(/current\s*([+-])\s*(\d+)/)
  const labelMatch = source.match(/<button[^>]*>\s*([^<]+?)\s*<\/button>/)

  const initialCount = initialMatch ? Number(initialMatch[1]) : 0
  const deltaMagnitude = deltaMatch ? Number(deltaMatch[2]) : 1
  const delta = deltaMatch ? (deltaMatch[1] === '-' ? -deltaMagnitude : deltaMagnitude) : 1
  const buttonLabel = labelMatch ? labelMatch[1].trim() : 'Count +1'

  return { initialCount, delta, buttonLabel }
}

function extractFormPreview(source) {
  const featureMatch = source.match(/feature:\s*'([^']+)'/)
  const placeholderMatch = source.match(/placeholder="([^"]+)"/)
  const buttonMatch = source.match(/<button[^>]*>\s*([^<]+?)\s*<\/button>/)

  return {
    defaultFeature: featureMatch ? featureMatch[1] : '表單控制與資料送出',
    namePlaceholder: placeholderMatch ? placeholderMatch[1] : '例如：小美',
    submitLabel: buttonMatch ? buttonMatch[1].trim() : '送出到 Spring Boot',
  }
}

function extractApiPreview(source) {
  const endpointMatch = source.match(/const endpoint = '([^']+)'/)
  const buttonMatch = source.match(/<button[^>]*>\s*([^<]+?)\s*<\/button>/)

  return {
    endpoint: endpointMatch ? endpointMatch[1] : '/api/learning/overview',
    buttonLabel: buttonMatch ? buttonMatch[1].trim() : '重新抓取 overview',
  }
}

function extractHooksPreview(source) {
  const placeholderMatch = source.match(/placeholder="([^"]+)"/)
  const buttonMatch = source.match(/<button[^>]*>\s*([^<]+?)\s*<\/button>/)

  return {
    placeholder: placeholderMatch ? placeholderMatch[1] : '搜尋 hook，例如：effect、memo、ref',
    buttonLabel: buttonMatch ? buttonMatch[1].trim() : '聚焦 hooks 搜尋框',
  }
}

function extractPropsPreview(source) {
  const learnerNameMatch = source.match(/const\s+learnerName\s*=\s*'([^']+)'/)
  const topicMatch = source.match(/const\s+topic\s*=\s*'([^']+)'/)
  const highlightMatch = source.match(/const\s+highlight\s*=\s*(true|false)/)

  return {
    learnerName: learnerNameMatch ? learnerNameMatch[1] : '小美',
    topic: topicMatch ? topicMatch[1] : 'Props 傳值',
    highlight: highlightMatch ? highlightMatch[1] === 'true' : false,
  }
}

function extractCrudPreview(source) {
  const endpointMatch = source.match(/\/api\/learning\/notes\/\d+/)
  const buttonMatch = source.match(/<button[^>]*>\s*([^<]+?)\s*<\/button>/)

  return {
    endpoint: endpointMatch ? endpointMatch[0] : '/api/learning/notes/1',
    buttonLabel: buttonMatch ? buttonMatch[1].trim() : '讀取單筆 note',
  }
}

function buildPlaygroundPreview(lessonId, source) {
  if (lessonId === 'hooks') {
    return extractHooksPreview(source)
  }

  if (lessonId === 'state') {
    return extractStatePreview(source)
  }

  if (lessonId === 'form') {
    return extractFormPreview(source)
  }

  if (lessonId === 'props') {
    return extractPropsPreview(source)
  }

  if (lessonId === 'backendCrud') {
    return extractCrudPreview(source)
  }

  return extractApiPreview(source)
}

async function parseApiError(response, fallbackMessage) {
  try {
    const payload = await response.clone().json()
    if (Array.isArray(payload.fieldErrors) && payload.fieldErrors.length) {
      const details = payload.fieldErrors.map((item) => `${item.field}：${item.message}`).join('；')
      return {
        message: `${payload.message ?? fallbackMessage} ${details}`.trim(),
        payload,
      }
    }

    return {
      message: payload.message ?? fallbackMessage,
      payload,
    }
  } catch {
    try {
      const text = await response.clone().text()
      return {
        message: text || fallbackMessage,
        payload: { message: text || fallbackMessage },
      }
    } catch {
      return {
        message: fallbackMessage,
        payload: { message: fallbackMessage },
      }
    }
  }
}

function evaluateRepairExercise(exerciseId, source) {
  if (exerciseId === 'broken-state-setter') {
    if (/setCount\s*\(/.test(source) && !/count\s*=\s*count\s*\+\s*1/.test(source) && !/count\+\+/.test(source)) {
      return {
        isCorrect: true,
        message: '修正成功：你已經改成用 setCount 通知 React 重新渲染。',
      }
    }

    return {
      isCorrect: false,
      message: '還沒修好：這題關鍵是要出現 setCount(...)，而不是直接改 count。',
    }
  }

  if (exerciseId === 'broken-input-onchange') {
    if (/onChange=\{handleInputChange\}/.test(source)) {
      return {
        isCorrect: true,
        message: '修正成功：現在 input 有 value，也有 onChange，可以正確做 controlled component。',
      }
    }

    return {
      isCorrect: false,
      message: '還沒修好：這題至少要補上 onChange={handleInputChange}。',
    }
  }

  if (exerciseId === 'broken-form-submit') {
    if (/event\.preventDefault\s*\(\s*\)/.test(source)) {
      return {
        isCorrect: true,
        message: '修正成功：你已經阻止瀏覽器預設送出，頁面不會先刷新。',
      }
    }

    return {
      isCorrect: false,
      message: '還沒修好：這題的核心是要在 handleSubmit 一開始呼叫 event.preventDefault()。',
    }
  }

  if (exerciseId === 'broken-props-passing') {
    if (/<WelcomeCard\s+[^>]*learnerName=\{learnerName\}[^>]*\/?>(?:\s*<\/WelcomeCard>)?/.test(source)) {
      return {
        isCorrect: true,
        message: '修正成功：父元件已經把 learnerName 當作 props 傳給 WelcomeCard。',
      }
    }

    return {
      isCorrect: false,
      message: '還沒修好：請在 <WelcomeCard /> 上補上 learnerName={learnerName}，子元件才接得到資料。',
    }
  }

  if (exerciseId === 'broken-api-path') {
    if (/\/api\/learning\/notes/.test(source) && !/\/api\/learn\/notes/.test(source)) {
      return {
        isCorrect: true,
        message: '修正成功：現在 fetch path 已經對上後端的 /api/learning/notes。',
      }
    }

    return {
      isCorrect: false,
      message: '還沒修好：請把錯的 /api/learn/notes 修正成真正存在的 /api/learning/notes。',
    }
  }

  return {
    isCorrect: false,
    message: '目前無法判斷這題的修正結果。',
  }
}

function App() {
  const [overview, setOverview] = useState(null)
  const [notes, setNotes] = useState([])
  const [selectedLessonId, setSelectedLessonId] = useState(() => savedLearningProgress.selectedLessonId ?? 'state')
  const [activeCodeTab, setActiveCodeTab] = useState('react')
  const [count, setCount] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [apiStatus, setApiStatus] = useState('準備連線 Spring Boot API...')
  const [responsePreview, setResponsePreview] = useState(null)
  const [noteQuery, setNoteQuery] = useState({
    page: 0,
    size: 5,
    query: '',
    feature: 'all',
  })
  const [notePagination, setNotePagination] = useState({
    pageNumber: 0,
    pageSize: 5,
    totalCount: 0,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
    availableFeatures: [],
  })
  const [hookKeyword, setHookKeyword] = useState('')
  const [selectedRenderFlowModeId, setSelectedRenderFlowModeId] = useState(
    () => savedLearningProgress.selectedRenderFlowModeId ?? reactRenderFlowGuide.dependencyModes[0].id,
  )
  const [renderFlowDependencyValue, setRenderFlowDependencyValue] = useState('keyword')
  const [previewName, setPreviewName] = useState('')
  const [listDraft, setListDraft] = useState('')
  const [listItems, setListItems] = useState(['React state', 'Spring Boot API', '資料流'])
  const [showHelperCard, setShowHelperCard] = useState(true)
  const [buttonDemoMessage, setButtonDemoMessage] = useState('先按一次按鈕，觀察事件紀錄會多出一筆訊息。')
  const [backendLabs, setBackendLabs] = useState([])
  const [backendStats, setBackendStats] = useState(null)
  const [selectedBackendLabId, setSelectedBackendLabId] = useState('validation')
  const [selectedJavaGuideId, setSelectedJavaGuideId] = useState('class-object')
  const [javaQuizSelections, setJavaQuizSelections] = useState({})
  const [javaQuizResults, setJavaQuizResults] = useState(() => savedLearningProgress.javaQuizResults ?? {})
  const [javaReadingSelections, setJavaReadingSelections] = useState({})
  const [javaReadingResults, setJavaReadingResults] = useState(() => savedLearningProgress.javaReadingResults ?? {})
  const [selectedCrudNoteId, setSelectedCrudNoteId] = useState('')
  const [crudForm, setCrudForm] = useState(initialForm)
  const [crudStatus, setCrudStatus] = useState('先選一筆 note，再試單筆查詢 / 更新 / 刪除。')
  const [crudLoading, setCrudLoading] = useState(false)
  const [singleNotePreview, setSingleNotePreview] = useState(null)
  const [lessonVisits, setLessonVisits] = useState(() => savedLearningProgress.lessonVisits ?? defaultLessonVisits)
  const [quickWinChecks, setQuickWinChecks] = useState(() => savedLearningProgress.quickWinChecks ?? {})
  const [backendMissionResults, setBackendMissionResults] = useState(() => savedLearningProgress.backendMissionResults ?? {})
  const [backendMissionResponses, setBackendMissionResponses] = useState({})
  const [capstoneChecks, setCapstoneChecks] = useState(() => savedLearningProgress.capstoneChecks ?? {})
  const [capstoneVerifyResults, setCapstoneVerifyResults] = useState(() => savedLearningProgress.capstoneVerifyResults ?? {})
  const [interviewChecks, setInterviewChecks] = useState(() => savedLearningProgress.interviewChecks ?? {})
  const [interviewVerifyResults, setInterviewVerifyResults] = useState(() => savedLearningProgress.interviewVerifyResults ?? {})
  const [dockerChecks, setDockerChecks] = useState(() => savedLearningProgress.dockerChecks ?? {})
  const [externalDbChecks, setExternalDbChecks] = useState(() => savedLearningProgress.externalDbChecks ?? {})
  const [selectedExternalDbStackId, setSelectedExternalDbStackId] = useState('extdb-mysql')
  const [scenarioSelections, setScenarioSelections] = useState({})
  const [scenarioFeedback, setScenarioFeedback] = useState({})
  const [brokenCodeSelections, setBrokenCodeSelections] = useState({})
  const [brokenCodeFeedback, setBrokenCodeFeedback] = useState(() => savedLearningProgress.brokenCodeFeedback ?? {})
  const [brokenCodeHintProgress, setBrokenCodeHintProgress] = useState({})
  const [selectedRepairExerciseId, setSelectedRepairExerciseId] = useState(brokenCodeExercises[0].id)
  const [repairExerciseDrafts, setRepairExerciseDrafts] = useState(() => savedLearningProgress.repairExerciseDrafts ?? createRepairExerciseDrafts())
  const [repairExerciseFeedback, setRepairExerciseFeedback] = useState(() => savedLearningProgress.repairExerciseFeedback ?? {})
  const [codePlayground, setCodePlayground] = useState(playgroundDefaults)
  const [playgroundPreview, setPlaygroundPreview] = useState(() =>
    Object.fromEntries(
      Object.entries(playgroundDefaults).map(([lessonId, source]) => [lessonId, buildPlaygroundPreview(lessonId, source)]),
    ),
  )
  const [playgroundDraftForm, setPlaygroundDraftForm] = useState({
    learnerName: '',
    feature: '表單控制與資料送出',
    question: '',
  })
  const [playgroundDraftApiResponse, setPlaygroundDraftApiResponse] = useState(null)
  const [playgroundFeedback, setPlaygroundFeedback] = useState({
    hooks: '你可以先改搜尋提示與聚焦按鈕文案，再觀察 hooks 區的引導語。',
    state: '先改一小段程式碼，再把它套用到預覽。',
    form: '你可以自由改 placeholder、預設主題與按鈕文字。',
    api: '先試著在 overview 與 notes endpoint 之間切換。',
    backendCrud: '先觀察 CRUD endpoint 長什麼樣，再回 lesson 練習單筆查詢、更新與刪除。',
  })
  const [quizSelections, setQuizSelections] = useState({})
  const [quizFeedback, setQuizFeedback] = useState({})
  const [quizCorrectMap, setQuizCorrectMap] = useState(() => savedLearningProgress.quizCorrectMap ?? {})
  const [, setActivityStats] = useState({
    componentInteraction: false,
    hooksInteraction: false,
    stateInteraction: false,
    formInteraction: false,
    apiInteraction: false,
    backendInteraction: false,
  })
  const hookSearchInputRef = useRef(null)
  const sectionRefs = useRef({})
  const noteQueryRef = useRef({
    page: 0,
    size: 5,
    query: '',
    feature: 'all',
  })
  const [eventLog, setEventLog] = useState([
    {
      id: 1,
      type: 'system',
      message: 'Learning Lab 已初始化，等待載入後端教學資料。',
    },
  ])
  // Mike新增
  const [selectedInterviewProjectId, setSelectedInterviewProjectId] = useState('project-shortlink')
  const [visible, setVisible] = useState(false)
  const [ctrTmp, setCtrTmp] = useState(0)
  const [formTmp, setFormTmp] = useState({
    userName: '',
    topic: '',
    description: '',
  })
  const topics = ['A主題', 'B主題', 'C主題', 'D主題', 'E主題']
  const handleChange = () => {
    const {name, value} = event.target
    setFormTmp(curr => ({...curr, [name]:value}))
  }
  const appendLog = useCallback((type, message) => {
    setEventLog((current) => [
      {
        id: Date.now() + Math.random(),
        type,
        message,
      },
      ...current,
    ].slice(0, 12))
  }, [])

  // ------------------------------------------------------------------
  // 區塊註冊、捲動與學習進度保存
  // ------------------------------------------------------------------
  const registerSectionRef = useCallback(
    (sectionKey) => (node) => {
      if (node) {
        sectionRefs.current[sectionKey] = node
      }
    },
    [],
  )

  const scrollToSection = useCallback((sectionKey, afterScroll) => {
    if (typeof window === 'undefined') {
      return
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target = sectionRefs.current[sectionKey]
        if (!target) {
          return
        }

        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        afterScroll?.(target)
      })
    })
  }, [])

  useEffect(() => {
    noteQueryRef.current = noteQuery
  }, [noteQuery])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const payload = {
      selectedLessonId,
      lessonVisits,
      selectedRenderFlowModeId,
      quickWinChecks,
      backendMissionResults,
      capstoneChecks,
      capstoneVerifyResults,
      interviewChecks,
      interviewVerifyResults,
      dockerChecks,
      externalDbChecks,
      javaQuizResults,
      javaReadingResults,
      quizCorrectMap,
      brokenCodeFeedback,
      repairExerciseDrafts,
      repairExerciseFeedback,
    }

    try {
      window.localStorage.setItem(LEARNING_PROGRESS_STORAGE_KEY, JSON.stringify(payload))
    } catch {
      // Ignore storage errors so learning flow still works even when saving is unavailable.
    }
  }, [
    backendMissionResults,
    capstoneChecks,
    capstoneVerifyResults,
    interviewChecks,
    interviewVerifyResults,
    dockerChecks,
    externalDbChecks,
    javaQuizResults,
    javaReadingResults,
    brokenCodeFeedback,
    lessonVisits,
    quickWinChecks,
    quizCorrectMap,
    repairExerciseDrafts,
    repairExerciseFeedback,
    selectedRenderFlowModeId,
    selectedLessonId,
  ])

  // ------------------------------------------------------------------
  // 後端 API 資料載入
  // ------------------------------------------------------------------
  const loadOverview = useCallback(async ({ silent = false } = {}) => {
    const response = await fetch('/api/learning/overview')

    if (!response.ok) {
      throw new Error(`overview request failed: ${response.status}`)
    }

    const data = await response.json()
    setOverview(data)
    setResponsePreview({ endpoint: 'GET /api/learning/overview', body: data })
    setApiStatus('已連上 Spring Boot API')

    if (!silent) {
      appendLog('api', '成功取得學習總覽、新手導覽、名詞字典與 lesson 摘要。')
    }

    return data
  }, [appendLog])

  const loadNotes = useCallback(async ({ silent = false, ...overrides } = {}) => {
    const currentQuery = noteQueryRef.current
    const nextQuery = {
      page: overrides.page ?? currentQuery.page,
      size: overrides.size ?? currentQuery.size,
      query: overrides.query ?? currentQuery.query,
      feature: overrides.feature ?? currentQuery.feature,
    }
    const params = new URLSearchParams({
      page: String(nextQuery.page),
      size: String(nextQuery.size),
      query: nextQuery.query,
      feature: nextQuery.feature,
    })
    const response = await fetch(`/api/learning/notes?${params.toString()}`)

    if (!response.ok) {
      const apiError = await parseApiError(response, `notes request failed: ${response.status}`)
      throw new Error(apiError.message)
    }

    const data = await response.json()
    setNotes(data.data)
    setNoteQuery({
      page: data.pageNumber,
      size: data.pageSize,
      query: nextQuery.query,
      feature: nextQuery.feature,
    })
    setNotePagination({
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalCount: data.totalCount,
      totalPages: data.totalPages,
      hasNext: data.hasNext,
      hasPrevious: data.hasPrevious,
      availableFeatures: data.availableFeatures ?? [],
    })
    setSelectedCrudNoteId((current) => {
      if (!data.data.length) {
        return ''
      }

      const hasCurrent = data.data.some((note) => String(note.id) === String(current))
      return current && hasCurrent ? current : String(data.data[0].id)
    })
    setResponsePreview({ endpoint: `GET /api/learning/notes?${params.toString()}`, body: data })

    if (!silent) {
      appendLog('api', `成功讀取第 ${data.pageNumber + 1} 頁，共 ${data.totalCount} 筆學習筆記。`)
    }

    return data
  }, [appendLog])

  const loadBackendLabs = useCallback(async ({ silent = false } = {}) => {
    const response = await fetch('/api/learning/backend-labs')

    if (!response.ok) {
      throw new Error(`backend-labs request failed: ${response.status}`)
    }

    const data = await response.json()
    setBackendLabs(data)

    if (!silent) {
      setResponsePreview({ endpoint: 'GET /api/learning/backend-labs', body: data })
      appendLog('backend', `成功取得 ${data.length} 個後端實作案例。`)
    }

    return data
  }, [appendLog])

  const loadLearningStats = useCallback(async ({ silent = false } = {}) => {
    const response = await fetch('/api/learning/stats')

    if (!response.ok) {
      throw new Error(`stats request failed: ${response.status}`)
    }

    const data = await response.json()
    setBackendStats(data)

    if (!silent) {
      setResponsePreview({ endpoint: 'GET /api/learning/stats', body: data })
      appendLog('backend', '成功取得後端整理出的學習統計摘要。')
    }

    return data
  }, [appendLog])

  useEffect(() => {
    let active = true

    const bootstrap = async () => {
      try {
        setLoading(true)
        setError('')
        await Promise.all([loadOverview({ silent: true }), loadNotes({ silent: true })])
        const optionalResults = await Promise.allSettled([
          loadBackendLabs({ silent: true }),
          loadLearningStats({ silent: true }),
        ])
        if (active) {
          appendLog('success', '前後端資料載入完成，可以開始互動學習。')
          if (optionalResults.some((result) => result.status === 'rejected')) {
            appendLog('error', '部分進階後端教材尚未載入，已自動改用前端 fallback 內容。')
          }
        }
      } catch {
        if (active) {
          setApiStatus('尚未連上後端，先用本地教學內容學習也可以。')
          setError('目前無法連上 Spring Boot API。請先啟動後端，再重新整理頁面。')
          appendLog('error', '載入 API 失敗，目前以前端 fallback 教材內容顯示。')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    bootstrap()

    return () => {
      active = false
    }
  }, [appendLog, loadBackendLabs, loadLearningStats, loadNotes, loadOverview])

  const lessons = useMemo(() => {
    const source = overview?.lessons?.length ? overview.lessons : defaultLessons
    const mergedLessons = new Map(
      source.map((lesson) => [
        lesson.id,
        {
          ...lesson,
          ...lessonContent[lesson.id],
        },
      ]),
    )

    lessonOrder.forEach((lessonId) => {
      if (!mergedLessons.has(lessonId) && lessonContent[lessonId]) {
        mergedLessons.set(lessonId, {
          ...defaultLessons.find((lesson) => lesson.id === lessonId),
          ...lessonContent[lessonId],
        })
      }
    })

    return lessonOrder.map((lessonId) => mergedLessons.get(lessonId)).filter(Boolean)
  }, [overview])

  const selectedLesson =
    lessons.find((lesson) => lesson.id === selectedLessonId) ?? lessons[0] ?? defaultLessons[0]

  const architectureSteps = overview?.architectureSteps ?? fallbackArchitectureSteps
  const tips = overview?.tips ?? fallbackTips
  const gettingStartedSteps = overview?.gettingStartedSteps?.length
    ? overview.gettingStartedSteps
    : fallbackGettingStartedSteps
  const glossaryTerms = overview?.glossaryTerms?.length ? overview.glossaryTerms : fallbackGlossaryTerms
  const componentGuides = overview?.componentGuides?.length
    ? overview.componentGuides
    : fallbackComponentGuides
  const filteredHookGuides = useMemo(() => {
    const keyword = hookKeyword.trim().toLowerCase()

    if (!keyword) {
      return reactHookGuides
    }

    return reactHookGuides.filter((guide) =>
      [guide.hook, guide.summary, guide.useCase, guide.projectExample, guide.searchHint]
        .join(' ')
        .toLowerCase()
        .includes(keyword),
    )
  }, [hookKeyword])
  const selectedRenderFlowMode =
    reactRenderFlowGuide.dependencyModes.find((mode) => mode.id === selectedRenderFlowModeId) ?? reactRenderFlowGuide.dependencyModes[0]
  const renderFlowNeedsDependencyInput = ['effect-keyword', 'memo-keyword', 'callback-deps'].includes(selectedRenderFlowMode.id)
  const renderFlowDependencyStory = useMemo(() => {
    const dependencyValue = renderFlowDependencyValue.trim() || 'keyword'

    if (selectedRenderFlowMode.id === 'effect-no-array') {
      return [
        '你按下按鈕或輸入文字，某個 state 改變。',
        'React 重新執行元件，整理新的 JSX。',
        '畫面 commit 完後，因為沒有 dependency array，這個 effect 直接再跑一次。',
      ]
    }

    if (selectedRenderFlowMode.id === 'effect-empty-array') {
      return [
        '第一次進頁面時，React 先 render 與 commit 畫面。',
        '因為這是 mount，而且 dependency array 是 `[]`，所以 effect 跑一次。',
        '之後就算同一個元件再次 render，這個 effect 也不會因為 render 本身重跑。',
      ]
    }

    if (selectedRenderFlowMode.id === 'effect-keyword') {
      return [
        `假設你把依賴值從上一輪改成「${dependencyValue}」。`,
        '元件仍然會先重新 render，再由 React commit 畫面。',
        'React 檢查 dependency array，發現 `[keyword]` 裡追蹤的值變了，所以 effect 這時才重跑。',
      ]
    }

    if (selectedRenderFlowMode.id === 'memo-keyword') {
      return [
        `你把搜尋條件改成「${dependencyValue}」，元件會重新 render。`,
        'React 在 render 過程中遇到 useMemo。',
        '只有當 dependency array 裡的值變了，useMemo 才重算新結果；否則重用舊結果。',
      ]
    }

    return [
      `你可以把依賴想成「${dependencyValue}」這個外部值或函式。`,
      '元件重新 render 時，React 仍然會重新遇到 useCallback。',
      '只有依賴真的改變時，React 才換新的函式參照；不然沿用上一輪的函式。',
    ]
  }, [renderFlowDependencyValue, selectedRenderFlowMode.id])
  const availableBackendLabs = backendLabs.length ? backendLabs : fallbackBackendLabs
  const selectedBackendLab =
    availableBackendLabs.find((lab) => lab.id === selectedBackendLabId) ?? availableBackendLabs[0]
  const learningStats = backendStats ?? fallbackBackendStats
  const selectedJavaGuide = javaBasicsGuides.find((guide) => guide.id === selectedJavaGuideId) ?? javaBasicsGuides[0]
  const selectedJavaQuiz = javaConceptQuizzes[selectedJavaGuide.id]
  let unlockedJavaGuideCount = 1
  while (
    unlockedJavaGuideCount < javaBasicsGuides.length &&
    javaQuizResults[javaBasicsGuides[unlockedJavaGuideCount - 1].id]?.passed
  ) {
    unlockedJavaGuideCount += 1
  }
  const brokenCodeSolvedCount = Object.values(brokenCodeFeedback).filter((item) => item?.isCorrect).length
  const completedBackendMissionCount = Object.values(backendMissionResults).filter((item) => item?.passed).length
  const unlockedBrokenCodeExercises = brokenCodeExercises.filter((exercise) => lessonVisits[exercise.unlockLessonId])
  const selectedRepairExercise =
    brokenCodeExercises.find((exercise) => exercise.id === selectedRepairExerciseId) ?? brokenCodeExercises[0]

  const selectedLessonDraft = codePlayground[selectedLesson.id]
  const selectedLessonPlayground = playgroundPreview[selectedLesson.id]

  // ------------------------------------------------------------------
  // Lesson 切換與跨區導航
  // ------------------------------------------------------------------
  const handleSelectLesson = useCallback(
    (lessonId, { sectionKey, logMessage } = {}) => {
      setSelectedLessonId(lessonId)
      setLessonVisits((current) => ({
        ...current,
        [lessonId]: true,
      }))
      appendLog('system', logMessage ?? `切換 lesson：${lessonContent[lessonId]?.title ?? lessonId}`)

      if (sectionKey) {
        scrollToSection(sectionKey)
      }
    },
    [appendLog, scrollToSection],
  )

  const handleNavigateToTarget = useCallback(
    (target) => {
      if (!target) {
        return
      }

      if (target.lessonId) {
        setSelectedLessonId(target.lessonId)
        setLessonVisits((current) => ({
          ...current,
          [target.lessonId]: true,
        }))
      }

      if (target.codeTab) {
        setActiveCodeTab(target.codeTab)
      }

      if (target.repairExerciseId) {
        setSelectedRepairExerciseId(target.repairExerciseId)
      }

      if (target.backendLabId) {
        setSelectedBackendLabId(target.backendLabId)
      }

      const lessonTitle = target.lessonId ? lessonContent[target.lessonId]?.title ?? target.lessonId : ''
      const sectionTitle = target.sectionKey ? SECTION_LABELS[target.sectionKey] ?? target.sectionKey : ''
      appendLog(
        'system',
        target.logMessage ?? [lessonTitle ? `已切換到 ${lessonTitle}` : '', sectionTitle ? `已定位到 ${sectionTitle}` : '']
          .filter(Boolean)
          .join('，'),
      )

      if (target.sectionKey) {
        scrollToSection(target.sectionKey, () => {
          if (target.focusHookSearch) {
            hookSearchInputRef.current?.focus()
          }
        })
      } else if (target.focusHookSearch) {
        hookSearchInputRef.current?.focus()
      }
    },
    [appendLog, scrollToSection],
  )

  const quickWinJumpTargets = useMemo(
    () => ({
      'quick-counter': {
        label: '前往 state lesson',
        target: {
          lessonId: 'state',
          syncMvpLesson: true,
          sectionKey: 'practice',
          logMessage: '已前往 state lesson，直接操作 Count +1 與 Reset。',
        },
      },
      'quick-hook-focus': {
        label: '前往 hooks 工具箱',
        target: {
          sectionKey: 'hooks',
          focusHookSearch: true,
          logMessage: '已定位到 hooks 工具箱，並聚焦搜尋框。',
        },
      },
      'quick-post-note': {
        label: '前往表單 lesson',
        target: {
          lessonId: 'form',
          syncMvpLesson: true,
          sectionKey: 'practice',
          logMessage: '已前往 form lesson，可直接練習送出 learning note。',
        },
      },
      'quick-filter': {
        label: '前往 notes 區',
        target: {
          sectionKey: 'notes',
          logMessage: '已定位到 notes 區，可以直接操作搜尋、filter 與分頁。',
        },
      },
    }),
    [],
  )

  // ------------------------------------------------------------------
  // 快速練習、練習題、破碎代碼修復 (03A-03C / 09)
  // ------------------------------------------------------------------
  const handleQuickWinToggle = (taskId) => {
    setQuickWinChecks((current) => ({
      ...current,
      [taskId]: !current[taskId],
    }))
    appendLog('success', `快速練習 ${taskId} 完成狀態已切換。`)
  }

  const handleUnlockLessonFocus = (lessonId) => {
    handleSelectLesson(lessonId, {
      syncMvp: true,
      sectionKey: 'practice',
      logMessage: `已前往 lesson：${lessonContent[lessonId]?.title ?? lessonId}，對應修錯題已解鎖。`,
    })
  }

  const handleQuizSelect = (questionId, option) => {
    setQuizSelections((current) => ({
      ...current,
      [questionId]: option,
    }))
    setQuizFeedback((current) => ({
      ...current,
      [questionId]: '',
    }))
  }

  const handleQuizSubmit = (question) => {
    const selected = quizSelections[question.id]

    if (!selected) {
      setQuizFeedback((current) => ({
        ...current,
        [question.id]: '請先選一個答案，再查看解說。',
      }))
      appendLog('error', `練習題 ${question.id} 尚未作答。`)
      return
    }

    const isCorrect = selected === question.answer
    setQuizCorrectMap((current) => ({
      ...current,
      [question.id]: isCorrect,
    }))
    setQuizFeedback((current) => ({
      ...current,
      [question.id]: `${isCorrect ? '答對了！' : '這題先別急，重新看一下。'} ${question.explanation}`,
    }))
    appendLog(isCorrect ? 'success' : 'error', `練習題 ${question.id} ${isCorrect ? '回答正確' : '回答錯誤'}。`)
  }

  const handleScenarioSelect = (lessonId, option) => {
    setScenarioSelections((current) => ({
      ...current,
      [lessonId]: option.id,
    }))
    setScenarioFeedback((current) => ({
      ...current,
      [lessonId]: `${option.isCorrect ? '答對了！' : '再想一下。'} ${option.explanation}`,
    }))
    appendLog(option.isCorrect ? 'success' : 'error', `情境題 ${lessonId} ${option.isCorrect ? '回答正確' : '回答錯誤'}。`)
  }

  const handleBrokenCodeSelect = (exercise, fix) => {
    setBrokenCodeSelections((current) => ({
      ...current,
      [exercise.id]: fix.id,
    }))
    setBrokenCodeFeedback((current) => ({
      ...current,
      [exercise.id]: {
        isCorrect: fix.isCorrect,
        message: `${fix.isCorrect ? '修正成功！' : '這個修法不對。'} ${fix.explanation}`,
      },
    }))
    appendLog(fix.isCorrect ? 'success' : 'error', `破碎代碼 ${exercise.title} ${fix.isCorrect ? '修正成功' : '修正錯誤'}。`)
  }

  const handleRevealBrokenCodeHint = (exerciseId, totalHints) => {
    setBrokenCodeHintProgress((current) => ({
      ...current,
      [exerciseId]: Math.min((current[exerciseId] ?? 0) + 1, totalHints),
    }))
    appendLog('system', `破碎代碼提示 ${exerciseId} 已展開下一步。`)
  }

  const handleRepairDraftChange = (exerciseId, value) => {
    setRepairExerciseDrafts((current) => ({
      ...current,
      [exerciseId]: value,
    }))
  }

  const handleCheckRepairExercise = (exercise) => {
    const result = evaluateRepairExercise(exercise.id, repairExerciseDrafts[exercise.id])
    setRepairExerciseFeedback((current) => ({
      ...current,
      [exercise.id]: result,
    }))
    appendLog(result.isCorrect ? 'success' : 'sandbox', `修錯 playground：${exercise.title} ${result.isCorrect ? '修正成功' : '尚未修好'}。`)
  }

  const handleResetRepairExercise = (exercise) => {
    setRepairExerciseDrafts((current) => ({
      ...current,
      [exercise.id]: exercise.brokenCode,
    }))
    setRepairExerciseFeedback((current) => ({
      ...current,
      [exercise.id]: null,
    }))
    appendLog('system', `已重設修錯 playground：${exercise.title}。`)
  }

  const handleRefresh = useCallback(async () => {
    try {
      setLoading(true)
      setError('')
      setActivityStats((current) => ({ ...current, apiInteraction: true }))
      appendLog('api', '手動重新整理 API 資料。')
      await Promise.all([loadOverview(), loadNotes()])
      const optionalResults = await Promise.allSettled([
        loadBackendLabs({ silent: true }),
        loadLearningStats({ silent: true }),
      ])
      if (optionalResults.some((result) => result.status === 'rejected')) {
        appendLog('error', '進階後端案例或統計暫時無法更新，目前維持 fallback 顯示。')
      }
    } catch {
      setError('重新整理失敗，請確認 Spring Boot 是否已啟動。')
      setApiStatus('重新整理失敗')
      appendLog('error', '重新整理 API 失敗。')
    } finally {
      setLoading(false)
    }
  }, [appendLog, loadBackendLabs, loadLearningStats, loadNotes, loadOverview])

  // ------------------------------------------------------------------
  // Lesson 示範互動：counter / form / 元件展示 (03 / 07)
  // ------------------------------------------------------------------
  const handleIncrement = () => {
    setActivityStats((current) => ({ ...current, stateInteraction: true }))
    setCount((current) => current + 1)
    appendLog('state', 'count state +1，React 重新渲染畫面。')
  }

  const handleResetCounter = () => {
    setCount(0)
    appendLog('state', 'count state 重設為 0。')
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setSaving(true)
      setError('')
      appendLog('form', '送出表單，準備呼叫 POST /api/learning/notes。')

      const response = await fetch('/api/learning/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const apiError = await parseApiError(response, '送出失敗，請確認後端是否正常運作。')
        setError(apiError.message)
        setResponsePreview({ endpoint: 'POST /api/learning/notes', body: apiError.payload })
        appendLog('error', 'POST /api/learning/notes 回傳失敗狀態。')
        return
      }

      const createdNote = await response.json()
      setActivityStats((current) => ({ ...current, formInteraction: true }))
      setResponsePreview({ endpoint: 'POST /api/learning/notes', body: createdNote })
      setForm((current) => ({
        learnerName: current.learnerName,
        feature: current.feature,
        question: '',
      }))
      appendLog('success', `成功建立筆記 #${createdNote.id}，前端列表同步更新。`)
      try {
        await loadLearningStats({ silent: true })
      } catch {
        // ignore optional stats refresh errors
      }
      await loadNotes({ silent: true, page: 0 })
    } catch (submitError) {
      setError('送出失敗，請確認三個欄位都有填寫，且後端已啟動。')
      appendLog('error', `表單送出失敗：${submitError.message}`)
    } finally {
      setSaving(false)
    }
  }

  const handleButtonComponentDemo = () => {
    setActivityStats((current) => ({ ...current, componentInteraction: true }))
    setButtonDemoMessage('你剛剛點擊了按鈕，這就是最基本的事件觸發。')
    appendLog('system', 'Button 範例觸發：onClick 執行成功。')
  }

  const handleAddListItem = () => {
    if (!listDraft.trim()) {
      appendLog('error', 'List 範例：請先輸入要新增的清單文字。')
      return
    }

    setActivityStats((current) => ({ ...current, componentInteraction: true }))
    setListItems((current) => [listDraft.trim(), ...current])
    appendLog('success', `List 範例：已新增「${listDraft.trim()}」。`)
    setListDraft('')
  }

  // ------------------------------------------------------------------
  // Hooks 工具箱與 Render 流程 (03D / 04)
  // ------------------------------------------------------------------
  const handleHookKeywordChange = (event) => {
    setActivityStats((current) => ({ ...current, hooksInteraction: true }))
    setHookKeyword(event.target.value)
    appendLog('hook', `Hooks 搜尋關鍵字更新為「${event.target.value || '全部'}」。`)
  }

  const handleFocusHookSearch = () => {
    setActivityStats((current) => ({ ...current, hooksInteraction: true }))
    hookSearchInputRef.current?.focus()
    appendLog('hook', 'useRef 示範：已把焦點移到 hooks 搜尋框。')
  }

  const handleResetHookSearch = () => {
    setActivityStats((current) => ({ ...current, hooksInteraction: true }))
    setHookKeyword('')
    hookSearchInputRef.current?.focus()
    appendLog('hook', '已清空 hooks 搜尋條件。')
  }

  const handleSelectRenderFlowMode = useCallback(
    (modeId) => {
      const targetMode = reactRenderFlowGuide.dependencyModes.find((mode) => mode.id === modeId)
      setActivityStats((current) => ({ ...current, hooksInteraction: true, stateInteraction: true }))
      setSelectedRenderFlowModeId(modeId)
      appendLog('system', `已切換 React render 流程情境：${targetMode?.title ?? modeId}`)
    },
    [appendLog],
  )

  const handleHighlightHookGuide = useCallback(
    (hookName) => {
      setActivityStats((current) => ({ ...current, hooksInteraction: true }))
      setHookKeyword(hookName)
      hookSearchInputRef.current?.focus()
      appendLog('hook', `已聚焦 ${hookName} 的使用範例。`)
    },
    [appendLog],
  )

  // ------------------------------------------------------------------
  // Spring Boot 後端案例 (05)
  // ------------------------------------------------------------------
  const handleSelectBackendLab = (labId) => {
    setActivityStats((current) => ({ ...current, backendInteraction: true }))
    setSelectedBackendLabId(labId)
    const currentLab = availableBackendLabs.find((lab) => lab.id === labId)
    appendLog('backend', `切換後端實作案例：${currentLab?.title ?? labId}`)
  }

  const handlePreviewBackendLabs = async () => {
    setActivityStats((current) => ({ ...current, backendInteraction: true }))

    try {
      await loadBackendLabs()
    } catch (previewError) {
      setResponsePreview({ endpoint: 'GET /api/learning/backend-labs (fallback)', body: fallbackBackendLabs })
      appendLog('error', `後端案例 API 失敗，改用 fallback 顯示：${previewError.message}`)
    }
  }

  const handlePreviewLearningStats = async () => {
    setActivityStats((current) => ({ ...current, backendInteraction: true }))

    try {
      await loadLearningStats()
    } catch (previewError) {
      setResponsePreview({ endpoint: 'GET /api/learning/stats (fallback)', body: fallbackBackendStats })
      appendLog('error', `後端統計 API 失敗，改用 fallback 顯示：${previewError.message}`)
    }
  }

  // ------------------------------------------------------------------
  // 後端實戰任務：真打 API 並自動驗證 (05A)
  // ------------------------------------------------------------------
  const handleRunBackendMission = async (mission) => {
    setActivityStats((current) => ({ ...current, backendInteraction: true }))

    const record = (passed, summary, endpoint, body) => {
      setBackendMissionResults((current) => ({
        ...current,
        [mission.id]: { passed, summary, checkedAt: new Date().toISOString() },
      }))
      if (endpoint) {
        setBackendMissionResponses((current) => ({
          ...current,
          [mission.id]: { endpoint, body },
        }))
        setResponsePreview({ endpoint, body })
      } else {
        setBackendMissionResponses((current) => {
          const next = { ...current }
          delete next[mission.id]
          return next
        })
      }
      appendLog(passed ? 'backend' : 'error', `${mission.title}：${summary}`)
    }

    try {
      if (mission.id === 'mission-create-note') {
        const response = await fetch('/api/learning/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            learnerName: '後端任務練習生',
            feature: 'Spring Boot 練習',
            question: '這筆是後端任務 1 自動送出的筆記。',
          }),
        })
        const body = await response.json()
        const passed = response.status === 201 && typeof body.id === 'number'
        record(passed, passed ? `拿到 201 Created，新筆記 id=${body.id}。` : `預期 201，實際收到 ${response.status}。`, 'POST /api/learning/notes', body)
        if (passed) {
          await loadNotes({ silent: true })
        }
        return
      }

      if (mission.id === 'mission-validation-400') {
        const response = await fetch('/api/learning/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ learnerName: '', feature: '驗證測試', question: '這筆應該被 400 擋下來。' }),
        })
        const body = await response.json()
        const passed = response.status === 400 && body.code === 'VALIDATION_ERROR' && Array.isArray(body.fieldErrors)
        record(passed, passed ? `後端正確回 400，fieldErrors 有 ${body.fieldErrors.length} 個欄位錯誤。` : `預期 400 + VALIDATION_ERROR，實際收到 ${response.status}。`, 'POST /api/learning/notes (invalid)', body)
        return
      }

      if (mission.id === 'mission-search-notes') {
        const response = await fetch('/api/learning/notes?page=0&size=3&query=&feature=all')
        const body = await response.json()
        const passed = response.status === 200 && Array.isArray(body.data) && typeof body.totalCount === 'number'
        record(passed, passed ? `拿到分頁回應：本頁 ${body.data.length} 筆，總共 ${body.totalCount} 筆。` : `預期 200 + 分頁欄位，實際收到 ${response.status}。`, 'GET /api/learning/notes?page=0&size=3', body)
        return
      }

      if (mission.id === 'mission-single-404') {
        const response = await fetch('/api/learning/notes/999999')
        const body = await response.json()
        const passed = response.status === 404 && Boolean(body.message)
        record(passed, passed ? `後端正確回 404：${body.message}` : `預期 404，實際收到 ${response.status}。`, 'GET /api/learning/notes/999999', body)
        return
      }

      if (mission.id === 'mission-stats-change') {
        const firstResponse = await fetch('/api/learning/stats')
        const firstStats = await firstResponse.json()
        await fetch('/api/learning/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            learnerName: '統計觀察員',
            feature: 'Spring Boot 練習',
            question: '這筆是任務 5 用來觀察 noteCount 變化的筆記。',
          }),
        })
        const secondResponse = await fetch('/api/learning/stats')
        const secondStats = await secondResponse.json()
        const passed = secondStats.noteCount === firstStats.noteCount + 1
        record(passed, passed ? `noteCount 從 ${firstStats.noteCount} 變成 ${secondStats.noteCount}，統計是即時計算的。` : `noteCount 從 ${firstStats.noteCount} 變成 ${secondStats.noteCount}，跟預期 +1 不同。`, 'GET /api/learning/stats (before/after)', { before: firstStats, after: secondStats })
        if (passed) {
          await loadNotes({ silent: true })
        }
        return
      }
      if (mission.id === 'mission-update-note') {
        const createResponse = await fetch('/api/learning/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            learnerName: 'PUT 練習生',
            feature: 'Spring Boot 練習',
            question: '這筆是任務 6 建立的，等一下會被 PUT 更新。',
          }),
        })
        const created = await createResponse.json()
        const updatedQuestion = '這筆已經被任務 6 用 PUT 更新過了。'
        const updateResponse = await fetch(`/api/learning/notes/${created.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            learnerName: created.learnerName,
            feature: created.feature,
            question: updatedQuestion,
          }),
        })
        const updated = await updateResponse.json()
        const passed = updateResponse.status === 200 && updated.question === updatedQuestion
        record(passed, passed ? `PUT 成功：note #${created.id} 的 question 已更新。` : `預期 200 + 更新後內容，實際收到 ${updateResponse.status}。`, `PUT /api/learning/notes/${created.id}`, updated)
        if (passed) {
          await loadNotes({ silent: true })
        }
        return
      }

      if (mission.id === 'mission-delete-note') {
        const createResponse = await fetch('/api/learning/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            learnerName: 'DELETE 練習生',
            feature: 'Spring Boot 練習',
            question: '這筆是任務 7 建立的，等一下會被刪除。',
          }),
        })
        const created = await createResponse.json()
        const deleteResponse = await fetch(`/api/learning/notes/${created.id}`, { method: 'DELETE' })
        const checkResponse = await fetch(`/api/learning/notes/${created.id}`)
        const checkBody = await checkResponse.json()
        const passed = deleteResponse.status === 204 && checkResponse.status === 404
        record(passed, passed ? `DELETE 回 204，再查 note #${created.id} 正確回 404。` : `預期 204 + 404，實際收到 ${deleteResponse.status} 與 ${checkResponse.status}。`, `DELETE /api/learning/notes/${created.id}`, checkBody)
        if (passed) {
          await loadNotes({ silent: true })
        }
        return
      }

    } catch (missionError) {
      record(false, `任務執行失敗：${missionError.message}（請確認 Spring Boot 有啟動）`)
    }
  }

  // ------------------------------------------------------------------
  // 全端小專案實戰：驗收學員自己寫的 /api/tasks (13)
  // ------------------------------------------------------------------
  const handleToggleCapstoneStep = (stepId) => {
    setCapstoneChecks((current) => ({ ...current, [stepId]: !current[stepId] }))
  }

  const handleRunCapstoneVerify = async (verifyId) => {
    setActivityStats((current) => ({ ...current, backendInteraction: true }))

    const record = (passed, summary, details) => {
      setCapstoneVerifyResults((current) => ({
        ...current,
        [verifyId]: { passed, summary, details, checkedAt: new Date().toISOString() },
      }))
      appendLog(passed ? 'backend' : 'error', `小專案驗收：${summary}`)
    }

    const safeJson = async (response) => {
      try {
        return await response.json()
      } catch {
        return null
      }
    }

    try {
      if (verifyId === 'verify-tasks-read') {
        const details = []

        const listResponse = await fetch('/api/tasks')
        const listBody = await safeJson(listResponse)
        details.push({
          label: `GET /api/tasks 回 200 且是陣列（實際：${listResponse.status}）`,
          passed: listResponse.status === 200 && Array.isArray(listBody),
        })

        const createResponse = await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '自動驗收任務（Stage 3）' }),
        })
        const created = await safeJson(createResponse)
        details.push({
          label: `POST /api/tasks 回 201 且有 id（實際：${createResponse.status}）`,
          passed: createResponse.status === 201 && typeof created?.id === 'number',
        })

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? 'GET 與 POST 都正確，Stage 3 完成，可以進 Stage 4！' : '還差一點，看下面哪一項是 ❌，回去對照參考解答。',
          details,
        )
        return
      }

      if (verifyId === 'verify-tasks-crud') {
        const details = []

        const createResponse = await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '自動驗收任務（Stage 4）' }),
        })
        const created = await safeJson(createResponse)
        const createdOk = createResponse.status === 201 && typeof created?.id === 'number'
        details.push({
          label: `POST 建立任務回 201（實際：${createResponse.status}）`,
          passed: createdOk,
        })

        if (createdOk) {
          const toggleResponse = await fetch(`/api/tasks/${created.id}/toggle`, { method: 'PUT' })
          const toggled = await safeJson(toggleResponse)
          details.push({
            label: `PUT /toggle 回 200 且 done 變 true（實際：${toggleResponse.status}，done=${toggled?.done}）`,
            passed: toggleResponse.status === 200 && toggled?.done === true,
          })

          const deleteResponse = await fetch(`/api/tasks/${created.id}`, { method: 'DELETE' })
          details.push({
            label: `DELETE 回 204（實際：${deleteResponse.status}）`,
            passed: deleteResponse.status === 204,
          })
        } else {
          details.push({ label: 'PUT /toggle（建立失敗，先跳過）', passed: false })
          details.push({ label: 'DELETE（建立失敗，先跳過）', passed: false })
        }

        const invalidResponse = await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '' }),
        })
        details.push({
          label: `空白 title 被 @Valid 擋下回 400（實際：${invalidResponse.status}）`,
          passed: invalidResponse.status === 400,
        })

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '完整 CRUD 驗收通過！後端部分完成，接下來換 React。' : '有幾項還沒過，對照下面清單修正後再驗一次。',
          details,
        )
        return
      }
    } catch (verifyError) {
      record(false, `驗收執行失敗：${verifyError.message}（請確認 Spring Boot 有啟動，而且改完 Java 有重啟）`, [])
    }
  }

  // ------------------------------------------------------------------
  // 面試級全端專案：驗收短網址與記帳 API (14)
  // ------------------------------------------------------------------
  const handleToggleInterviewStep = (stepId) => {
    setInterviewChecks((current) => ({ ...current, [stepId]: !current[stepId] }))
  }

  const handleRunInterviewVerify = async (verifyId) => {
    setActivityStats((current) => ({ ...current, backendInteraction: true }))

    const record = (passed, summary, details) => {
      setInterviewVerifyResults((current) => ({
        ...current,
        [verifyId]: { passed, summary, details, checkedAt: new Date().toISOString() },
      }))
      appendLog(passed ? 'backend' : 'error', `面試專案驗收：${summary}`)
    }

    const safeJson = async (response) => {
      try {
        return await response.json()
      } catch {
        return null
      }
    }

    try {
      if (verifyId === 'verify-links-api') {
        const details = []

        const listResponse = await fetch('/api/links')
        const listBody = await safeJson(listResponse)
        details.push({
          label: `GET /api/links 回 200 且是陣列（實際：${listResponse.status}）`,
          passed: listResponse.status === 200 && Array.isArray(listBody),
        })

        const createResponse = await fetch('/api/links', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetUrl: 'https://react.dev/learn' }),
        })
        const created = await safeJson(createResponse)
        const createdOk = createResponse.status === 201 && typeof created?.code === 'string' && created.code.length > 0
        details.push({
          label: `POST /api/links 回 201 且有 code（實際：${createResponse.status}）`,
          passed: createdOk,
        })

        if (createdOk) {
          const detailResponse = await fetch(`/api/links/${created.code}`)
          const detailBody = await safeJson(detailResponse)
          details.push({
            label: `GET /api/links/{code} 回 200 且 targetUrl 正確（實際：${detailResponse.status}）`,
            passed: detailResponse.status === 200 && detailBody?.targetUrl === 'https://react.dev/learn',
          })
        } else {
          details.push({ label: 'GET /api/links/{code}（建立失敗，先跳過）', passed: false })
        }

        const invalidResponse = await fetch('/api/links', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetUrl: '不是網址' }),
        })
        details.push({
          label: `不合法網址被 @Pattern 擋下回 400（實際：${invalidResponse.status}）`,
          passed: invalidResponse.status === 400,
        })

        const missingResponse = await fetch('/api/links/no-such-code-000')
        details.push({
          label: `不存在的 code 回 404（實際：${missingResponse.status}）`,
          passed: missingResponse.status === 404,
        })

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '短網址 API 五項全過！接下來做 302 轉址。' : '還差一點，看下面哪一項是 ❌，回去對照參考解答。',
          details,
        )
        return
      }

      if (verifyId === 'verify-links-redirect') {
        const details = []

        const createResponse = await fetch('/api/links', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetUrl: 'https://spring.io/guides' }),
        })
        const created = await safeJson(createResponse)
        const createdOk = createResponse.status === 201 && typeof created?.code === 'string'
        details.push({
          label: `建立測試短網址回 201（實際：${createResponse.status}）`,
          passed: createdOk,
        })

        if (createdOk) {
          // redirect: 'manual'：告訴 fetch「不要自己跟著 302 跳走」，
          // 我們只需要觸發後端的點擊累加，不需要真的載入目標網站。
          await fetch(`/s/${created.code}`, { redirect: 'manual' }).catch(() => null)

          const detailResponse = await fetch(`/api/links/${created.code}`)
          const detailBody = await safeJson(detailResponse)
          details.push({
            label: `打過 /s/{code} 後 clicks >= 1（實際：clicks=${detailBody?.clicks}）`,
            passed: detailResponse.status === 200 && (detailBody?.clicks ?? 0) >= 1,
          })
        } else {
          details.push({ label: '點擊統計（建立失敗，先跳過）', passed: false })
        }

        const missingResponse = await fetch('/s/no-such-code-000', { redirect: 'manual' }).catch(() => null)
        details.push({
          label: `不存在的 code 打 /s/{code} 回 404（實際：${missingResponse?.status ?? '無回應'}）`,
          passed: missingResponse?.status === 404,
        })

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '轉址與點擊統計都正確！後端完成，換 React 前端。' : '有幾項還沒過，對照下面清單修正後再驗一次。',
          details,
        )
        return
      }

      if (verifyId === 'verify-expenses-crud') {
        const details = []

        const summaryBefore = await safeJson(await fetch('/api/expenses/summary'))

        const createFood = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '驗收：午餐', amount: 120, category: 'food' }),
        })
        const foodItem = await safeJson(createFood)
        const createTransport = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '驗收：捷運', amount: 60, category: 'transport' }),
        })
        const transportItem = await safeJson(createTransport)
        const createdOk =
          createFood.status === 201 && typeof foodItem?.id === 'number' &&
          createTransport.status === 201 && typeof transportItem?.id === 'number'
        details.push({
          label: `POST 兩筆支出都回 201（實際：${createFood.status} / ${createTransport.status}）`,
          passed: createdOk,
        })

        const filtered = await safeJson(await fetch('/api/expenses?category=food'))
        const filterOk = Array.isArray(filtered) && filtered.length > 0 && filtered.every((item) => item.category === 'food')
        details.push({
          label: `?category=food 只回傳 food 分類（實際：${Array.isArray(filtered) ? `${filtered.length} 筆` : '不是陣列'}）`,
          passed: filterOk,
        })

        const summaryAfter = await safeJson(await fetch('/api/expenses/summary'))
        const expectedTotal = (summaryBefore?.total ?? 0) + 180
        const summaryOk =
          summaryAfter?.total === expectedTotal &&
          typeof summaryAfter?.byCategory === 'object' &&
          (summaryAfter?.byCategory?.food ?? 0) >= 120
        details.push({
          label: `summary 總額 +180 且 byCategory 有 food（實際：total=${summaryAfter?.total}，預期 ${expectedTotal}）`,
          passed: summaryOk,
        })

        const invalidResponse = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '不合法', amount: -5, category: 'food' }),
        })
        details.push({
          label: `負數金額被 @Min(1) 擋下回 400（實際：${invalidResponse.status}）`,
          passed: invalidResponse.status === 400,
        })

        if (createdOk) {
          const deleteFood = await fetch(`/api/expenses/${foodItem.id}`, { method: 'DELETE' })
          const deleteTransport = await fetch(`/api/expenses/${transportItem.id}`, { method: 'DELETE' })
          details.push({
            label: `DELETE 兩筆驗收資料回 204（實際：${deleteFood.status} / ${deleteTransport.status}）`,
            passed: deleteFood.status === 204 && deleteTransport.status === 204,
          })
        } else {
          details.push({ label: 'DELETE（建立失敗，先跳過）', passed: false })
        }

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '記帳 API 完整流程驗收通過！接下來做 React 前端。' : '有幾項還沒過，對照下面清單修正後再驗一次。',
          details,
        )
        return
      }

      if (verifyId === 'verify-auth-flow') {
        const details = []
        // 每次驗收都用一個新 username，避免「重複註冊」被之前跑過的資料誤判。
        const uniqueUser = `interview_${Date.now()}`

        const registerResponse = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: uniqueUser, password: 'Passw0rd!' }),
        })
        details.push({
          label: `POST /api/auth/register 回 201（實際：${registerResponse.status}）`,
          passed: registerResponse.status === 201,
        })

        const loginResponse = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: uniqueUser, password: 'Passw0rd!' }),
        })
        const loginBody = await safeJson(loginResponse)
        const loginOk = loginResponse.status === 200 && typeof loginBody?.token === 'string' && loginBody.token.length > 0
        details.push({
          label: `POST /api/auth/login 回 200 且有 token（實際：${loginResponse.status}）`,
          passed: loginOk,
        })

        if (loginOk) {
          const meResponse = await fetch('/api/auth/me', {
            headers: { Authorization: `Bearer ${loginBody.token}` },
          })
          const meBody = await safeJson(meResponse)
          details.push({
            label: `帶 token 打 GET /api/auth/me 回 200 且 username 正確（實際：${meResponse.status}）`,
            passed: meResponse.status === 200 && meBody?.username === uniqueUser,
          })
        } else {
          details.push({ label: 'GET /api/auth/me（登入失敗，先跳過）', passed: false })
        }

        const noTokenResponse = await fetch('/api/auth/me')
        details.push({
          label: `沒帶 token 打 /api/auth/me 回 401（實際：${noTokenResponse.status}）`,
          passed: noTokenResponse.status === 401,
        })

        const duplicateResponse = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: uniqueUser, password: 'Passw0rd!' }),
        })
        details.push({
          label: `重複註冊同一個 username 回 400（實際：${duplicateResponse.status}）`,
          passed: duplicateResponse.status === 400,
        })

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? 'JWT 註冊 / 登入 / 保護 API 全部正確！接下來做 React 前端。' : '還差一點，看下面哪一項是 ❌，回去對照參考解答。',
          details,
        )
        return
      }

      if (verifyId === 'verify-inventory-purchase') {
        const details = []

        const createResponse = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: '驗收商品', price: 100, stock: 1 }),
        })
        const created = await safeJson(createResponse)
        const createdOk = createResponse.status === 201 && typeof created?.id === 'number'
        details.push({
          label: `POST /api/products 回 201（實際：${createResponse.status}）`,
          passed: createdOk,
        })

        if (createdOk) {
          const purchaseResponse = await fetch(`/api/products/${created.id}/purchase`, { method: 'POST' })
          const purchaseBody = await safeJson(purchaseResponse)
          details.push({
            label: `第一次購買回 200 且 stock 變 0（實際：${purchaseResponse.status}，stock=${purchaseBody?.stock}）`,
            passed: purchaseResponse.status === 200 && purchaseBody?.stock === 0,
          })

          const secondPurchase = await fetch(`/api/products/${created.id}/purchase`, { method: 'POST' })
          details.push({
            label: `庫存歸零後再買一次回 409（實際：${secondPurchase.status}）`,
            passed: secondPurchase.status === 409,
          })
        } else {
          details.push(
            { label: '購買庫存（建立商品失敗，先跳過）', passed: false },
            { label: '庫存歸零後再買一次（建立商品失敗，先跳過）', passed: false },
          )
        }

        const pageResponse = await fetch('/api/products?page=0&size=5&sort=price,asc')
        const pageBody = await safeJson(pageResponse)
        details.push({
          label: `分頁查詢回 200 且有 content 陣列（實際：${pageResponse.status}）`,
          passed: pageResponse.status === 200 && Array.isArray(pageBody?.content),
        })

        const invalidResponse = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: '不合法商品', price: 0, stock: 1 }),
        })
        details.push({
          label: `price 必須 >= 1 被擋下回 400（實際：${invalidResponse.status}）`,
          passed: invalidResponse.status === 400,
        })

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '分頁排序與樂觀鎖扣庫存都正確！接下來做 React 前端。' : '有幾項還沒過，對照下面清單修正後再驗一次。',
          details,
        )
        return
      }

      if (verifyId === 'verify-comments-crud') {
        const details = []

        const createFirst = await fetch('/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ author: '驗收員A', content: '第一則留言' }),
        })
        const firstItem = await safeJson(createFirst)
        // 兩筆留言之間稍微錯開時間，確保 createdAt 不會剛好一樣，排序才有意義可以驗證。
        await new Promise((resolve) => setTimeout(resolve, 10))
        const createSecond = await fetch('/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ author: '驗收員B', content: '第二則留言（應該排最前面）' }),
        })
        const secondItem = await safeJson(createSecond)
        const createdOk =
          createFirst.status === 201 && typeof firstItem?.id === 'number' &&
          createSecond.status === 201 && typeof secondItem?.id === 'number'
        details.push({
          label: `POST 兩則留言都回 201（實際：${createFirst.status} / ${createSecond.status}）`,
          passed: createdOk,
        })

        if (createdOk) {
          const listResponse = await fetch('/api/comments')
          const listBody = await safeJson(listResponse)
          const sortedOk =
            listResponse.status === 200 && Array.isArray(listBody) && listBody.length >= 2 &&
            listBody[0]?.id === secondItem.id
          details.push({
            label: `GET /api/comments 新到舊排序正確，第一筆是最新留言（實際第一筆 id=${listBody?.[0]?.id}）`,
            passed: sortedOk,
          })
        } else {
          details.push({ label: '留言排序（建立失敗，先跳過）', passed: false })
        }

        const invalidResponse = await fetch('/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ author: '', content: '' }),
        })
        details.push({
          label: `空白 author/content 被 @NotBlank 擋下回 400（實際：${invalidResponse.status}）`,
          passed: invalidResponse.status === 400,
        })

        if (createdOk) {
          const deleteResponse = await fetch(`/api/comments/${firstItem.id}`, { method: 'DELETE' })
          const afterDeleteList = await safeJson(await fetch('/api/comments'))
          const stillThere = Array.isArray(afterDeleteList) && afterDeleteList.some((item) => item.id === firstItem.id)
          details.push({
            label: `DELETE 回 204 且刪除後列表不再出現該留言（實際：${deleteResponse.status}）`,
            passed: deleteResponse.status === 204 && !stillThere,
          })
        } else {
          details.push({ label: '刪除留言（建立失敗，先跳過）', passed: false })
        }

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '留言排序、驗證與刪除都正確！接下來做 React 前端（也可以挑戰接外部 MySQL）。' : '有幾項還沒過，對照下面清單修正後再驗一次。',
          details,
        )
        return
      }

      if (verifyId === 'verify-blog-crud') {
        const details = []

        const createResponse = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '驗收草稿', body: '這篇文章一開始應該是草稿' }),
        })
        const created = await safeJson(createResponse)
        const createdOk = createResponse.status === 201 && typeof created?.id === 'number' && created?.published === false
        details.push({
          label: `POST /api/posts 回 201 且預設 published=false（實際：${createResponse.status}，published=${created?.published}）`,
          passed: createdOk,
        })

        if (createdOk) {
          const publishedList = await safeJson(await fetch('/api/posts?published=true'))
          const notInPublished = Array.isArray(publishedList) && !publishedList.some((item) => item.id === created.id)
          details.push({
            label: `草稿不會出現在 ?published=true 列表（實際：${Array.isArray(publishedList) ? publishedList.length : '非陣列'} 筆已發布文章）`,
            passed: notInPublished,
          })

          const publishResponse = await fetch(`/api/posts/${created.id}/publish`, { method: 'PATCH' })
          const publishBody = await safeJson(publishResponse)
          details.push({
            label: `PATCH /publish 回 200 且 published 變 true（實際：${publishResponse.status}，published=${publishBody?.published}）`,
            passed: publishResponse.status === 200 && publishBody?.published === true,
          })

          const publishedListAfter = await safeJson(await fetch('/api/posts?published=true'))
          const nowInPublished = Array.isArray(publishedListAfter) && publishedListAfter.some((item) => item.id === created.id)
          details.push({
            label: `發布後該文章出現在 ?published=true 列表（實際：${nowInPublished}）`,
            passed: nowInPublished,
          })
        } else {
          details.push(
            { label: '草稿不在已發布列表（建立失敗，先跳過）', passed: false },
            { label: 'PATCH /publish（建立失敗，先跳過）', passed: false },
            { label: '發布後出現在已發布列表（建立失敗，先跳過）', passed: false },
          )
        }

        const invalidResponse = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '', body: '' }),
        })
        details.push({
          label: `空白 title/body 被 @NotBlank 擋下回 400（實際：${invalidResponse.status}）`,
          passed: invalidResponse.status === 400,
        })

        if (createdOk) {
          const deleteResponse = await fetch(`/api/posts/${created.id}`, { method: 'DELETE' })
          details.push({
            label: `DELETE 回 204（實際：${deleteResponse.status}）`,
            passed: deleteResponse.status === 204,
          })
        } else {
          details.push({ label: '刪除文章（建立失敗，先跳過）', passed: false })
        }

        const passed = details.every((item) => item.passed)
        record(
          passed,
          passed ? '草稿/發布流程、驗證與刪除都正確！接下來做 React 前端（也可以挑戰接外部 PostgreSQL）。' : '有幾項還沒過，對照下面清單修正後再驗一次。',
          details,
        )
        return
      }
    } catch (verifyError) {
      record(false, `驗收執行失敗：${verifyError.message}（請確認 Spring Boot 有啟動，而且改完 Java 有重啟）`, [])
    }
  }

  // ------------------------------------------------------------------
  // Docker 容器化實戰：步驟勾選 (15)
  // ------------------------------------------------------------------
  const handleToggleDockerStep = (stepId) => {
    setDockerChecks((current) => ({ ...current, [stepId]: !current[stepId] }))
  }

  const handleToggleExternalDbStep = (stepId) => {
    setExternalDbChecks((current) => ({ ...current, [stepId]: !current[stepId] }))
  }

  // ------------------------------------------------------------------
  // Java 概念測驗與程式碼導讀 (05B / 05C)
  // ------------------------------------------------------------------
  const handleJavaQuizSelect = (guideId, optionId) => {
    setJavaQuizSelections((current) => ({ ...current, [guideId]: optionId }))
  }

  const handleJavaQuizSubmit = (guide) => {
    const quiz = javaConceptQuizzes[guide.id]
    const selectedOptionId = javaQuizSelections[guide.id]
    if (!quiz || !selectedOptionId) {
      appendLog('system', `「${guide.title}」還沒選答案，先選一個選項再送出。`)
      return
    }

    const passed = selectedOptionId === quiz.correctOptionId
    setJavaQuizResults((current) => ({ ...current, [guide.id]: { passed, selectedOptionId } }))
    appendLog(passed ? 'system' : 'error', `Java 概念測驗「${guide.title}」：${passed ? '答對，已解鎖下一個概念。' : '這次沒答對，可以再看一次範例。'}`)
  }

  const handleJavaReadingSelect = (challengeId, lineId, optionId) => {
    setJavaReadingSelections((current) => ({
      ...current,
      [challengeId]: { ...(current[challengeId] ?? {}), [lineId]: optionId },
    }))
  }

  const handleJavaReadingSubmit = (challenge) => {
    const selections = javaReadingSelections[challenge.id] ?? {}
    const lineResults = challenge.codeLines.map((line) => ({
      lineId: line.id,
      correct: selections[line.id] === line.correctOptionId,
    }))
    const correctCount = lineResults.filter((item) => item.correct).length
    const passed = correctCount === challenge.codeLines.length
    setJavaReadingResults((current) => ({
      ...current,
      [challenge.id]: { passed, correctCount, lineResults },
    }))
    appendLog(passed ? 'system' : 'error', `${challenge.title}：答對 ${correctCount} / ${challenge.codeLines.length} 行。`)
  }

  // ------------------------------------------------------------------
  // 筆記列表查詢與分頁 (11)
  // ------------------------------------------------------------------
  const handleNoteQueryChange = (event) => {
    const { name, value } = event.target
    setNoteQuery((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleApplyNoteFilters = async () => {
    try {
      setLoading(true)
      setError('')
      await loadNotes({
        page: 0,
        size: noteQuery.size,
        query: noteQuery.query,
        feature: noteQuery.feature,
      })
    } catch (filterError) {
      setError(filterError.message)
      appendLog('error', `套用筆記篩選失敗：${filterError.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleClearNoteFilters = async () => {
    const clearedQuery = {
      page: 0,
      size: notePagination.pageSize || 5,
      query: '',
      feature: 'all',
    }
    setNoteQuery(clearedQuery)

    try {
      setLoading(true)
      setError('')
      await loadNotes(clearedQuery)
    } catch (clearError) {
      setError(clearError.message)
      appendLog('error', `清空筆記篩選失敗：${clearError.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeNotesPage = async (nextPage) => {
    try {
      setLoading(true)
      setError('')
      await loadNotes({ page: nextPage })
    } catch (pageError) {
      setError(pageError.message)
      appendLog('error', `切換筆記頁數失敗：${pageError.message}`)
    } finally {
      setLoading(false)
    }
  }

  // ------------------------------------------------------------------
  // 後端筆記 CRUD 操作 (11)
  // ------------------------------------------------------------------
  const handleCrudFieldChange = (event) => {
    const { name, value } = event.target
    setCrudForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleLoadSingleNote = async () => {
    if (!selectedCrudNoteId) {
      setCrudStatus('目前沒有可讀取的 note。')
      return
    }

    setActivityStats((current) => ({ ...current, backendInteraction: true }))
    setCrudLoading(true)

    try {
      const response = await fetch(`/api/learning/notes/${selectedCrudNoteId}`)
      if (!response.ok) {
        const apiError = await parseApiError(response, `single note request failed: ${response.status}`)
        throw new Error(apiError.message)
      }

      const data = await response.json()
      setSingleNotePreview(data)
      setCrudForm({
        learnerName: data.learnerName,
        feature: data.feature,
        question: data.question,
      })
      setCrudStatus(`已載入筆記 #${data.id}，你可以開始修改或刪除。`)
      setResponsePreview({ endpoint: `GET /api/learning/notes/${selectedCrudNoteId}`, body: data })
      appendLog('backend', `已讀取單筆 note #${selectedCrudNoteId}。`)
    } catch (loadError) {
      setCrudStatus(`讀取失敗：${loadError.message}`)
      appendLog('error', `單筆 note 讀取失敗：${loadError.message}`)
    } finally {
      setCrudLoading(false)
    }
  }

  const handleUpdateNote = async () => {
    if (!selectedCrudNoteId) {
      setCrudStatus('請先選一筆 note，再進行更新。')
      return
    }

    setActivityStats((current) => ({ ...current, backendInteraction: true }))
    setCrudLoading(true)

    try {
      const response = await fetch(`/api/learning/notes/${selectedCrudNoteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(crudForm),
      })

      if (!response.ok) {
        const apiError = await parseApiError(response, `update request failed: ${response.status}`)
        throw new Error(apiError.message)
      }

      const updated = await response.json()
      setSingleNotePreview(updated)
      setCrudStatus(`已更新筆記 #${updated.id}。`)
      setResponsePreview({ endpoint: `PUT /api/learning/notes/${selectedCrudNoteId}`, body: updated })
      appendLog('backend', `已更新 note #${selectedCrudNoteId}。`)
      await loadNotes({ silent: true })
    } catch (updateError) {
      setCrudStatus(`更新失敗：${updateError.message}`)
      appendLog('error', `更新 note 失敗：${updateError.message}`)
    } finally {
      setCrudLoading(false)
    }
  }

  const handleDeleteNote = async () => {
    if (!selectedCrudNoteId) {
      setCrudStatus('請先選一筆 note，再進行刪除。')
      return
    }

    setActivityStats((current) => ({ ...current, backendInteraction: true }))
    setCrudLoading(true)

    try {
      const response = await fetch(`/api/learning/notes/${selectedCrudNoteId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const apiError = await parseApiError(response, `delete request failed: ${response.status}`)
        throw new Error(apiError.message)
      }

      const nextPage = notes.length === 1 && notePagination.pageNumber > 0 ? notePagination.pageNumber - 1 : notePagination.pageNumber
      setSingleNotePreview(null)
      setCrudForm(initialForm)
      setResponsePreview({
        endpoint: `DELETE /api/learning/notes/${selectedCrudNoteId}`,
        body: { status: 'deleted', id: Number(selectedCrudNoteId) },
      })
      setCrudStatus(`已刪除筆記 #${selectedCrudNoteId}。`)
      appendLog('backend', `已刪除 note #${selectedCrudNoteId}。`)
      try {
        await loadLearningStats({ silent: true })
      } catch {
        // ignore optional stats refresh errors
      }
      await loadNotes({ silent: true, page: nextPage })
    } catch (deleteError) {
      setCrudStatus(`刪除失敗：${deleteError.message}`)
      appendLog('error', `刪除 note 失敗：${deleteError.message}`)
    } finally {
      setCrudLoading(false)
    }
  }

  // ------------------------------------------------------------------
  // Playground 可編輯程式碼實驗室 (10)
  // ------------------------------------------------------------------
  const handlePlaygroundCodeChange = (lessonId, value) => {
    setCodePlayground((current) => ({
      ...current,
      [lessonId]: value,
    }))
  }

  const handleApplyPlayground = () => {
    const lessonId = selectedLesson.id
    const preview = buildPlaygroundPreview(lessonId, codePlayground[lessonId])

    setPlaygroundPreview((current) => ({
      ...current,
      [lessonId]: preview,
    }))

    if (lessonId === 'state') {
      setActivityStats((current) => ({ ...current, stateInteraction: true }))
      setCount(preview.initialCount)
      setPlaygroundDraftApiResponse({ lesson: lessonId, preview })
    }

    if (lessonId === 'form') {
      setActivityStats((current) => ({ ...current, formInteraction: true }))
      setPlaygroundDraftForm({
        learnerName: '',
        feature: preview.defaultFeature,
        question: '',
      })
      setPlaygroundDraftApiResponse({
        endpoint: 'POST /api/learning/notes (preview only)',
        body: {
          learnerName: '',
          feature: preview.defaultFeature,
          question: '',
        },
      })
    }

    if (lessonId === 'api') {
      setActivityStats((current) => ({ ...current, apiInteraction: true }))
      setPlaygroundDraftApiResponse({
        endpoint: `GET ${preview.endpoint}`,
        body: { message: '按下下方按鈕即可測試目前 endpoint。' },
      })
    }

    if (lessonId === 'hooks') {
      setActivityStats((current) => ({ ...current, hooksInteraction: true }))
      setPlaygroundDraftApiResponse({
        lesson: lessonId,
        preview: {
          placeholder: preview.placeholder,
          buttonLabel: preview.buttonLabel,
        },
      })
    }

    if (lessonId === 'backendCrud') {
      setActivityStats((current) => ({ ...current, backendInteraction: true }))
      setPlaygroundDraftApiResponse({
        endpoint: preview.endpoint,
        buttonLabel: preview.buttonLabel,
        body: { message: '回到 CRUD lesson 後，可對照這個 endpoint 練習更新或刪除。' },
      })
    }

    setPlaygroundFeedback((current) => ({
      ...current,
      [lessonId]: `已套用 ${selectedLesson.playground.title} 的改動，現在觀察右側互動區如何反應。`,
    }))
    appendLog('success', `已套用 ${selectedLesson.title} 的可編輯程式碼預覽。`)
  }

  const handleResetPlayground = () => {
    const lessonId = selectedLesson.id

    setCodePlayground((current) => ({
      ...current,
      [lessonId]: playgroundDefaults[lessonId],
    }))
    setPlaygroundPreview((current) => ({
      ...current,
      [lessonId]: buildPlaygroundPreview(lessonId, playgroundDefaults[lessonId]),
    }))

    if (lessonId === 'state') {
      setCount(0)
    }

    if (lessonId === 'form') {
      setPlaygroundDraftForm({
        learnerName: '',
        feature: '表單控制與資料送出',
        question: '',
      })
    }

    if (lessonId === 'backendCrud') {
      setCrudStatus('已還原 CRUD playground 預設範例。')
    }

    setPlaygroundDraftApiResponse(null)
    setPlaygroundFeedback((current) => ({
      ...current,
      [lessonId]: '已還原成預設教材範例。',
    }))
    appendLog('system', `已重設 ${selectedLesson.title} 的 playground。`)
  }

  const handlePlaygroundCounterClick = () => {
    setActivityStats((current) => ({ ...current, stateInteraction: true }))
    const delta = selectedLessonPlayground?.delta ?? 1
    setCount((current) => current + delta)
    appendLog('state', `Playground counter 依據可編輯程式碼變更了 ${delta}。`)
  }

  const handlePlaygroundFormChange = (event) => {
    const { name, value } = event.target
    setPlaygroundDraftForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handlePlaygroundFormPreview = (event) => {
    event.preventDefault()
    setActivityStats((current) => ({ ...current, formInteraction: true }))
    setPlaygroundDraftApiResponse({
      endpoint: 'POST /api/learning/notes (preview only)',
      body: {
        ...playgroundDraftForm,
      },
    })
    appendLog('form', '本地表單 playground 已輸出預覽 JSON。')
  }

  const handlePlaygroundApiPreview = async () => {
    const endpoint = selectedLessonPlayground?.endpoint ?? '/api/learning/overview'
    setActivityStats((current) => ({ ...current, apiInteraction: true }))

    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`preview request failed: ${response.status}`)
      }

      const data = await response.json()
      setPlaygroundDraftApiResponse({
        endpoint: `GET ${endpoint}`,
        body: data,
      })
      appendLog('api', `Playground API 預覽成功：${endpoint}`)
    } catch (previewError) {
      setPlaygroundDraftApiResponse({
        endpoint: `GET ${endpoint}`,
        body: {
          error: previewError.message,
        },
      })
      appendLog('error', `Playground API 預覽失敗：${previewError.message}`)
    }
  }

  const lessonDemo = (() => {
    if (selectedLesson.id === 'state') {
      return (
        <div className="demo-card counter-card">
          <p className="demo-label">State demo</p>
          <h3>Count：{count}</h3>
          <p className="demo-tip">按下按鈕時，事件會呼叫 setter，React 會用新 state 重新 render 畫面。</p>
          <div className="button-row">
            <button type="button" className="primary-button" onClick={handleIncrement}>
              Count +1
            </button>
            <button type="button" className="ghost-button" onClick={handleResetCounter}>
              Reset
            </button>
          </div>
        </div>
      )
    }

    if (selectedLesson.id === 'props') {
      return <PropsLessonDemo appendLog={appendLog} onInteraction={() => setActivityStats((current) => ({ ...current, componentInteraction: true }))} />
    }

    if (selectedLesson.id === 'form') {
      return (
        <form className="demo-card form-card" onSubmit={handleSubmit}>
          <p className="demo-label">Controlled form demo</p>
          <label className="inline-label">
            learnerName
            <input name="learnerName" value={form.learnerName} onChange={handleInputChange} placeholder="例如：小美" />
          </label>
          <label className="inline-label">
            feature
            <select name="feature" value={form.feature} onChange={handleInputChange}>
              <option value="表單控制與資料送出">表單控制與資料送出</option>
              <option value="Props 傳值">Props 傳值</option>
              <option value="useEffect">useEffect</option>
              <option value="React Render">React Render</option>
            </select>
          </label>
          <label className="inline-label">
            question
            <textarea
              name="question"
              rows="4"
              value={form.question}
              onChange={handleInputChange}
              placeholder="描述你目前卡住的點，例如：為什麼 input 要同時有 value 和 onChange？"
            />
          </label>
          <div className="button-row">
            <button type="submit" className="primary-button" disabled={saving}>
              {saving ? '送出中...' : '送出到 Spring Boot'}
            </button>
          </div>
          {error ? <p className="api-warning">{error}</p> : null}
          {responsePreview?.endpoint === 'POST /api/learning/notes' ? (
            <pre className="mini-code-block">
              <code>{JSON.stringify(responsePreview.body, null, 2)}</code>
            </pre>
          ) : null}
        </form>
      )
    }

    if (selectedLesson.id === 'hooks') {
      return (
        <div className="demo-card hooks-card">
          <p className="demo-label">Hooks search demo</p>
          <div className="hook-toolbar">
            <input
              ref={hookSearchInputRef}
              value={hookKeyword}
              onChange={handleHookKeywordChange}
              placeholder="搜尋 hook，例如：effect、memo、ref"
            />
            <div className="toolbar-actions">
              <button type="button" className="primary-button" onClick={handleFocusHookSearch}>
                聚焦搜尋框
              </button>
              <button type="button" className="ghost-button" onClick={handleResetHookSearch}>
                清空搜尋
              </button>
            </div>
          </div>
          <div className="hook-grid">
            {filteredHookGuides.slice(0, 3).map((guide) => (
              <article key={`lesson-hook-${guide.hook}`} className="hook-card info-card">
                <strong>{guide.hook}</strong>
                <p>{guide.summary}</p>
                <small>{guide.useCase}</small>
              </article>
            ))}
          </div>
        </div>
      )
    }

    if (selectedLesson.id === 'api') {
      return (
        <div className="demo-card api-card">
          <p className="demo-label">API preview demo</p>
          <p className="demo-tip">目前 playground 會預設打到：{selectedLessonPlayground?.endpoint ?? '/api/learning/overview'}</p>
          <div className="button-row">
            <button type="button" className="primary-button" onClick={handlePlaygroundApiPreview}>
              試抓一次 API
            </button>
            <button type="button" className="ghost-button" onClick={handleRefresh}>
              重新載入全部 API
            </button>
          </div>
          {playgroundDraftApiResponse ? (
            <pre className="mini-code-block">
              <code>{JSON.stringify(playgroundDraftApiResponse, null, 2)}</code>
            </pre>
          ) : (
            <p className="demo-tip">按下按鈕後，這裡會顯示 API 預覽結果。</p>
          )}
        </div>
      )
    }

    if (selectedLesson.id === 'backendCrud') {
      return (
        <div className="demo-card api-card">
          <p className="demo-label">Backend CRUD demo</p>
          <label className="inline-label">
            先選一筆 note
            <select value={selectedCrudNoteId} onChange={(event) => setSelectedCrudNoteId(event.target.value)}>
              <option value="">請選擇</option>
              {notes.map((note) => (
                <option key={note.id} value={note.id}>
                  #{note.id}｜{note.learnerName}｜{note.feature}
                </option>
              ))}
            </select>
          </label>
          <div className="button-row">
            <button type="button" className="ghost-button" onClick={handleLoadSingleNote} disabled={crudLoading}>
              {crudLoading ? '讀取中...' : '讀取單筆'}
            </button>
          </div>
          <div className="props-followup-grid">
            <div className="props-control-stack">
              <label className="inline-label">
                learnerName
                <input name="learnerName" value={crudForm.learnerName} onChange={handleCrudFieldChange} />
              </label>
              <label className="inline-label">
                feature
                <input name="feature" value={crudForm.feature} onChange={handleCrudFieldChange} />
              </label>
              <label className="inline-label">
                question
                <textarea name="question" rows="4" value={crudForm.question} onChange={handleCrudFieldChange} />
              </label>
              <div className="button-row">
                <button type="button" className="primary-button" onClick={handleUpdateNote} disabled={crudLoading}>
                  更新 note
                </button>
                <button type="button" className="ghost-button" onClick={handleDeleteNote} disabled={crudLoading}>
                  刪除 note
                </button>
              </div>
            </div>
            <div className="props-preview-stack">
              <article className="info-card">
                <strong>CRUD 狀態</strong>
                <p>{crudStatus}</p>
              </article>
              {singleNotePreview ? (
                <article className="info-card">
                  <strong>目前單筆資料預覽</strong>
                  <pre className="mini-code-block">
                    <code>{JSON.stringify(singleNotePreview, null, 2)}</code>
                  </pre>
                </article>
              ) : null}
            </div>
          </div>
        </div>
      )
    }

    return null
  })()

  return (
    <div className="page-shell">
      <header ref={registerSectionRef('hero')} id="section-hero" className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Beginner-friendly fullstack onboarding</span>
          <h1>{overview?.title ?? 'React + Spring Boot Learning Lab'}</h1>
          <p className="hero-description">
            {overview?.description ??
              '這是一個給完全新人的互動式教材：先建立名詞與元件基礎，再透過操作頁面、對照程式碼與觀察 API 回應，理解每個功能是怎麼做出來的。'}
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={handleRefresh}>
              重新載入 API
            </button>
            <span className="status-pill">{loading ? '載入中...' : apiStatus}</span>
          </div>
          <div className="jump-button-row hero-shortcuts" aria-label="快速定位區塊">
            <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'practice' })}>
              前往課程區
            </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'renderFlow' })}>
              前往 Render 流程
            </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'quickwin' })}>
              前往快速練習
            </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'backendLab' })}>
          後端實作
        </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'sandbox' })}>
              前往修錯題
            </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'mvp' })}>
              前往 MVP
            </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'playground' })}>
              前往程式碼實驗室
            </button>
          </div>
        </div>

        <div className="summary-grid">
          <article className="summary-card">
            <p className="summary-label">新手學習順序</p>
            <strong>名詞 → 元件 → Hooks → API / 後端</strong>
            <span>先理解畫面如何動，再理解 hooks、資料流與後端實作。</span>
          </article>
          <article className="summary-card">
            <p className="summary-label">目前 lesson</p>
            <strong>{selectedLesson.title}</strong>
            <span>{selectedLesson.goal}</span>
          </article>
          <article className="summary-card">
            <p className="summary-label">學習筆記</p>
            <strong>{notePagination.totalCount}</strong>
            <span>現在支援搜尋、feature filter 與分頁，更接近真實列表 API。</span>
          </article>
        </div>
      </header>

      {error ? <div className="error-banner">{error}</div> : null}

      <section ref={registerSectionRef('starter')} id="section-starter-map" className="section-card starter-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01. 新手快速上手地圖</p>
            <h2>先知道要先學什麼，再開始看程式碼</h2>
          </div>
          <p className="section-note">這區是給完全沒碰過 React / Spring Boot 的新人看的。</p>
        </div>
        <div className="starter-grid">
          {gettingStartedSteps.map((step, index) => (
            <article key={step.id} className="starter-card">
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.explanation}</p>
              <small>{step.whyItMatters}</small>
            </article>
          ))}
        </div>
      </section>

      <section ref={registerSectionRef('glossary')} id="section-glossary" className="section-card glossary-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02. 名詞字典</p>
            <h2>先把術語翻成白話，再去看實作</h2>
          </div>
          <p className="section-note">每個名詞都附上 React 與 Spring Boot 的對照例子。</p>
        </div>
        <div className="glossary-grid">
          {glossaryTerms.map((term) => (
            <article key={term.term} className="glossary-card">
              <h3>{term.term}</h3>
              <p>{term.plainMeaning}</p>
              <div className="glossary-examples">
                <div>
                  <strong>React 例子</strong>
                  <code>{term.reactExample}</code>
                </div>
                <div>
                  <strong>Spring Boot 例子</strong>
                  <code>{term.springExample}</code>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section ref={registerSectionRef('components')} id="section-components" className="section-card component-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03. 常用組件練習區</p>
            <h2>先玩常用畫面元件，再進 lesson 會比較容易</h2>
          </div>
          <p className="section-note">這些是新人最常先接觸到的 React 基礎組件。</p>
        </div>
        <div className="component-grid">
          {componentGuides.map((guide) => (
            <article key={guide.id} className="component-card">
              <div className="component-card-header">
                <h3>{guide.name}</h3>
                <p>{guide.useCase}</p>
              </div>

              <ul className="mini-list">
                {guide.syntaxPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <pre className="mini-code-block">
                <code>{guide.reactSnippet}</code>
              </pre>

              <div className="demo-card component-demo-box">
                {guide.id === 'button' ? (
                  <>
                    <button type="button" className="primary-button" onClick={handleButtonComponentDemo}>
                      觸發 button demo
                    </button>
                    <p className="demo-tip">{buttonDemoMessage}</p>
                  </>
                ) : null}

                {guide.id === 'input' ? (
                  <>
                    <label className="inline-label">
                      請輸入你的名字
                      <input
                        value={previewName}
                        onChange={(event) => {
                          setActivityStats((current) => ({ ...current, componentInteraction: true }))
                          setPreviewName(event.target.value)
                          appendLog('state', 'Input 範例：文字輸入同步更新 state。')
                        }}
                        placeholder="例如：小明"
                      />
                    </label>
                    <p className="demo-tip">
                      即時預覽：{previewName ? `你好，${previewName}，這就是 controlled input。` : '還沒輸入內容。'}
                    </p>
                  </>
                ) : null}

                {guide.id === 'props' ? (
                  <PropsLessonDemo
                    variant="compact"
                    appendLog={appendLog}
                    onInteraction={() => setActivityStats((current) => ({ ...current, componentInteraction: true }))}
                  />
                ) : null}

                {guide.id === 'list' ? (
                  <>
                    <div className="button-row">
                      <input
                        value={listDraft}
                        onChange={(event) => setListDraft(event.target.value)}
                        placeholder="輸入新的學習項目"
                      />
                      <button type="button" className="ghost-button" onClick={handleAddListItem}>
                        新增到清單
                      </button>
                    </div>
                    <ul className="mini-list compact">
                      {listItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {guide.id === 'conditional' ? (
                  <>
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => {
                        setActivityStats((current) => ({ ...current, componentInteraction: true }))
                        setShowHelperCard((current) => !current)
                        appendLog('system', 'Conditional 範例：切換提示卡片顯示狀態。')
                      }}
                    >
                      {showHelperCard ? '隱藏提示卡' : '顯示提示卡'}
                    </button>
                    {showHelperCard ? (
                      <div className="helper-card">
                        這張卡片現在有顯示，因為條件為 true。這就是條件渲染。
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>

              <p className="component-task">練習提示：{guide.learnerTask}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={registerSectionRef('quickwin')} id="section-quickwin" className="section-card quickwin-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03A. 5 分鐘立即練習</p>
            <h2>先做會立刻有感的小操作，知識會比較容易留下來</h2>
          </div>
          <p className="section-note">每一個都能在幾分鐘內完成，而且會直接對應到後面的 lesson。</p>
        </div>

        <div className="challenge-grid">
          {quickWinTasks.map((task) => {
            const jumpConfig = quickWinJumpTargets[task.id]

            return (
              <article key={task.id} className={quickWinChecks[task.id] ? 'mission-card done' : 'mission-card'}>
                <label className="mission-header-row">
                  <input type="checkbox" checked={Boolean(quickWinChecks[task.id])} onChange={() => handleQuickWinToggle(task.id)} />
                  <strong>{task.title}</strong>
                </label>
                <p>{task.action}</p>
                <small>{task.concept}</small>
                {jumpConfig ? (
                  <div className="jump-button-row">
                    <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget(jumpConfig.target)}>
                      {jumpConfig.label}
                    </button>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </section>

      <section ref={registerSectionRef('sandbox')} id="section-sandbox" className="section-card sandbox-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03B. 破碎代碼救援區</p>
            <h2>先看錯誤版本，再選修法，這樣新手會更快知道為什麼會壞掉</h2>
          </div>
          <p className="section-note">已破解 {brokenCodeSolvedCount} / {brokenCodeExercises.length} 個代碼陷阱</p>
        </div>

        <div className="challenge-grid">
          {brokenCodeExercises.map((exercise) => {
            const revealedHints = brokenCodeHintProgress[exercise.id] ?? 0
            const feedback = brokenCodeFeedback[exercise.id]
            const isUnlocked = Boolean(lessonVisits[exercise.unlockLessonId])

            return (
              <article key={exercise.id} className="challenge-card info-card sandbox-card">
                <p className="demo-label">{exercise.difficulty} · {exercise.category}</p>
                <h3>{exercise.title}</h3>
                {isUnlocked ? (
                  <>
                    <pre className="mini-code-block sandbox-code-block">
                      <code>{exercise.brokenCode}</code>
                    </pre>
                    <p>{exercise.whyItFails}</p>

                    <div className="quiz-options sandbox-fixes">
                      {exercise.fixes.map((fix) => (
                        <button
                          key={fix.id}
                          type="button"
                          className={brokenCodeSelections[exercise.id] === fix.id ? 'lesson-tab active' : 'lesson-tab'}
                          onClick={() => handleBrokenCodeSelect(exercise, fix)}
                        >
                          <span>{fix.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="button-row">
                      <button
                        type="button"
                        className="ghost-button"
                        onClick={() => handleRevealBrokenCodeHint(exercise.id, exercise.hints.length)}
                        disabled={revealedHints >= exercise.hints.length}
                      >
                        {revealedHints >= exercise.hints.length ? '提示已全部展開' : '看下一個提示'}
                      </button>
                    </div>

                    {revealedHints ? (
                      <div className="debugging-hint-stack">
                        {exercise.hints.slice(0, revealedHints).map((hint) => (
                          <div key={hint} className="helper-card debugging-step-hint">
                            {hint}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {feedback ? <p className="quiz-feedback sandbox-feedback">{feedback.message}</p> : null}
                    <small>{exercise.learningPoint}</small>
                  </>
                ) : (
                  <div className="locked-sandbox-card">
                    <p>這題目前鎖定中。</p>
                    <p>
                      先學完或至少先看過 <strong>{exercise.unlockLessonTitle}</strong>，再回來修這題，吸收會比較快。
                    </p>
                    <button type="button" className="ghost-button" onClick={() => handleUnlockLessonFocus(exercise.unlockLessonId)}>
                      前往 {exercise.unlockLessonTitle}
                    </button>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section ref={registerSectionRef('repair')} id="section-repair" className="section-card repair-playground-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03C. 真實模擬錯誤 Playground</p>
            <h2>這次不是選答案，而是真的自己把錯的程式改對</h2>
          </div>
          <p className="section-note">只會顯示你已經解鎖的題目，避免新手一次看到太多資訊。</p>
        </div>

        {unlockedBrokenCodeExercises.length ? (
          <div className="playground-grid">
            <div className="playground-copy">
              <div className="lesson-tabs" role="tablist" aria-label="選擇修錯 playground 題目">
                {unlockedBrokenCodeExercises.map((exercise) => (
                  <button
                    key={exercise.id}
                    type="button"
                    className={exercise.id === selectedRepairExercise.id ? 'lesson-tab active' : 'lesson-tab'}
                    onClick={() => setSelectedRepairExerciseId(exercise.id)}
                  >
                    <span>{exercise.title}</span>
                    <small>{exercise.unlockLessonTitle}</small>
                  </button>
                ))}
              </div>

              <article className="info-card sandbox-card">
                <p className="demo-label">修錯目標</p>
                <h3>{selectedRepairExercise.title}</h3>
                <p>{selectedRepairExercise.repairGoal}</p>
                <small>{selectedRepairExercise.repairSuccessHint}</small>
              </article>

              <div className="button-row">
                <button type="button" className="primary-button" onClick={() => handleCheckRepairExercise(selectedRepairExercise)}>
                  檢查我修得對不對
                </button>
                <button type="button" className="ghost-button" onClick={() => handleResetRepairExercise(selectedRepairExercise)}>
                  還原錯誤版本
                </button>
              </div>

              {repairExerciseFeedback[selectedRepairExercise.id] ? (
                <div className="helper-card sandbox-feedback">
                  {repairExerciseFeedback[selectedRepairExercise.id].message}
                </div>
              ) : null}
            </div>

            <div className="playground-editor-card">
              <textarea
                className="playground-editor"
                value={repairExerciseDrafts[selectedRepairExercise.id]}
                onChange={(event) => handleRepairDraftChange(selectedRepairExercise.id, event.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="empty-state empty-state-with-action">
            <p>先進入至少一個 lesson，對應的修錯 playground 才會解鎖。</p>
            <div className="jump-button-row">
              <button
                type="button"
                className="ghost-button jump-button"
                onClick={() => handleNavigateToTarget({ lessonId: 'state', syncMvpLesson: true, sectionKey: 'practice' })}
              >
                前往第一課 lesson
              </button>
            </div>
          </div>
        )}
      </section>

      <RenderFlowSection
        registerSectionRef={registerSectionRef}
        selectedRenderFlowMode={selectedRenderFlowMode}
        renderFlowNeedsDependencyInput={renderFlowNeedsDependencyInput}
        renderFlowDependencyValue={renderFlowDependencyValue}
        setRenderFlowDependencyValue={setRenderFlowDependencyValue}
        renderFlowDependencyStory={renderFlowDependencyStory}
        handleSelectRenderFlowMode={handleSelectRenderFlowMode}
        handleNavigateToTarget={handleNavigateToTarget}
      />

      <HooksToolboxSection
        registerSectionRef={registerSectionRef}
        filteredHookGuides={filteredHookGuides}
        hookKeyword={hookKeyword}
        hookSearchInputRef={hookSearchInputRef}
        handleHookKeywordChange={handleHookKeywordChange}
        handleFocusHookSearch={handleFocusHookSearch}
        handleResetHookSearch={handleResetHookSearch}
        handleHighlightHookGuide={handleHighlightHookGuide}
        handleNavigateToTarget={handleNavigateToTarget}
      />

      <BackendLabSection
        registerSectionRef={registerSectionRef}
        learningStats={learningStats}
        availableBackendLabs={availableBackendLabs}
        selectedBackendLab={selectedBackendLab}
        handleSelectBackendLab={handleSelectBackendLab}
        handlePreviewBackendLabs={handlePreviewBackendLabs}
        handlePreviewLearningStats={handlePreviewLearningStats}
        completedBackendMissionCount={completedBackendMissionCount}
        backendMissionResults={backendMissionResults}
        backendMissionResponses={backendMissionResponses}
        handleRunBackendMission={handleRunBackendMission}
      />

      <JavaBasicsSection
        registerSectionRef={registerSectionRef}
        unlockedJavaGuideCount={unlockedJavaGuideCount}
        selectedJavaGuide={selectedJavaGuide}
        setSelectedJavaGuideId={setSelectedJavaGuideId}
        selectedJavaQuiz={selectedJavaQuiz}
        javaQuizSelections={javaQuizSelections}
        javaQuizResults={javaQuizResults}
        handleJavaQuizSelect={handleJavaQuizSelect}
        handleJavaQuizSubmit={handleJavaQuizSubmit}
        javaReadingSelections={javaReadingSelections}
        javaReadingResults={javaReadingResults}
        handleJavaReadingSelect={handleJavaReadingSelect}
        handleJavaReadingSubmit={handleJavaReadingSubmit}
      />

      <section ref={registerSectionRef('architecture')} id="section-architecture" className="architecture-panel section-card">
        <div className="section-heading">
          <div>
            <p className="section-kicker">06. 資料流導覽</p>
            <h2>理解這個專案的整體架構</h2>
          </div>
          <p className="section-note">每一步都能對照到實際 React 程式與 Spring Boot API。</p>
        </div>
        <ol className="architecture-list">
          {architectureSteps.map((step, index) => (
            <li key={step}>
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <LessonPracticePanel
        sectionRef={registerSectionRef('practice')}
        lessons={lessons}
        selectedLesson={selectedLesson}
        lessonDemo={lessonDemo}
        onSelectLesson={(lessonId) =>
          handleSelectLesson(lessonId, {
            logMessage: `切換 lesson：${lessonContent[lessonId]?.title ?? lessonId}`,
          })
        }
        onScenarioSelect={handleScenarioSelect}
        onNavigateToTarget={handleNavigateToTarget}
        scenarioSelections={scenarioSelections}
        scenarioFeedback={scenarioFeedback}
      />

      <section className="workspace-grid">
        <article ref={registerSectionRef('code')} id="section-code" className="section-card code-panel">
          <div className="section-heading">
            <div>
              <p className="section-kicker">08. 程式碼對照</p>
              <h2>同一個功能，對照 React 與 Spring Boot 怎麼寫</h2>
            </div>
          </div>

          <div className="code-tab-row" role="tablist" aria-label="切換程式碼內容">
            <button
              type="button"
              className={activeCodeTab === 'react' ? 'code-tab active' : 'code-tab'}
              onClick={() => setActiveCodeTab('react')}
            >
              React
            </button>
            <button
              type="button"
              className={activeCodeTab === 'spring' ? 'code-tab active' : 'code-tab'}
              onClick={() => setActiveCodeTab('spring')}
            >
              Spring Boot
            </button>
            <button
              type="button"
              className={activeCodeTab === 'flow' ? 'code-tab active' : 'code-tab'}
              onClick={() => setActiveCodeTab('flow')}
            >
              資料流
            </button>
          </div>

          <pre className="code-block">
            <code>
              {activeCodeTab === 'react'
                ? selectedLesson.reactCode
                : activeCodeTab === 'spring'
                  ? selectedLesson.springCode
                  : selectedLesson.flowCode}
            </code>
          </pre>

          <div className="concept-stack">
            <div className="syntax-list info-card">
              <h3>這一課的關鍵語法</h3>
              <ul>
                {selectedLesson.syntaxPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="syntax-list info-card">
              <h3>逐步語法解說</h3>
              <ul>
                {selectedLesson.syntaxWalkthrough.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="syntax-list info-card">
              <h3>新手閱讀順序建議</h3>
              <ul>
                <li>先看左邊互動區，知道這個功能「表面上」發生了什麼。</li>
                <li>再看這裡的 React 程式碼，只專注抓事件、state、畫面輸出三件事。</li>
                <li>如果有 API，再去對照 Spring Boot 的 <code>Controller</code> 與 <code>Service</code>。</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section ref={registerSectionRef('quiz')} id="section-quiz" className="section-card quiz-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">09. 新手練習題</p>
            <h2>先自己答一輪，會更知道哪裡還不熟</h2>
          </div>
          <p className="section-note">每一課都配更完整的快速練習，做錯也會直接告訴你原因。</p>
        </div>

        <div className="quiz-grid">
          {selectedLesson.quizQuestions.map((question) => (
            <article key={question.id} className="quiz-card">
              <h3>{question.prompt}</h3>
              <div className="quiz-options">
                {question.options.map((option) => (
                  <label key={option} className={quizSelections[question.id] === option ? 'quiz-option selected' : 'quiz-option'}>
                    <input
                      type="radio"
                      name={question.id}
                      checked={quizSelections[question.id] === option}
                      onChange={() => handleQuizSelect(question.id, option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <button type="button" className="ghost-button" onClick={() => handleQuizSubmit(question)}>
                查看答案與解說
              </button>
              {quizFeedback[question.id] ? <p className="quiz-feedback">{quizFeedback[question.id]}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section ref={registerSectionRef('playground')} id="section-playground" className="section-card playground-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">10. 可編輯程式碼實驗室</p>
            <h2>先小改一段程式，再立即觀察預覽怎麼改變</h2>
          </div>
          <p className="section-note">這裡不是完整 IDE，而是專門給新手練習「改一點點就有感」的互動沙盒。</p>
        </div>

        <div className="playground-grid">
          <article className="playground-editor-card">
            <div className="playground-copy">
              <h3>{selectedLesson.playground.title}</h3>
              <p>{selectedLesson.playground.description}</p>
            </div>

            <ol className="playground-instructions">
              {selectedLesson.playground.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>

            <div className="search-keywords">
              {selectedLesson.playground.supportedEdits.map((item) => (
                <span key={item} className="search-chip">
                  {item}
                </span>
              ))}
            </div>

            <textarea
              className="playground-editor"
              value={selectedLessonDraft}
              onChange={(event) => handlePlaygroundCodeChange(selectedLesson.id, event.target.value)}
              rows="16"
              spellCheck="false"
            />

            <div className="button-row">
              <button type="button" className="primary-button" onClick={handleApplyPlayground}>
                套用到互動預覽
              </button>
              <button type="button" className="ghost-button" onClick={handleResetPlayground}>
                還原預設範例
              </button>
            </div>

            <p className="playground-feedback">{playgroundFeedback[selectedLesson.id]}</p>
            <p className="section-note compact-note">{selectedLesson.playground.emptyHint}</p>
          </article>

          <article className="playground-preview-card">
            <h3>即時互動預覽</h3>

            {selectedLesson.id === 'state' ? (
              <div className="demo-card playground-preview-box">
                <p className="demo-label">Counter playground</p>
                <div className="counter-display">{count}</div>
                <div className="button-row">
                  <button type="button" className="primary-button" onClick={handlePlaygroundCounterClick}>
                    {selectedLessonPlayground?.buttonLabel ?? 'Count +1'}
                  </button>
                  <button type="button" className="ghost-button" onClick={handleResetCounter}>
                    Reset to 0
                  </button>
                </div>
                <ul className="mini-list compact">
                  <li>初始值：{selectedLessonPlayground?.initialCount ?? 0}</li>
                  <li>每次變化：{selectedLessonPlayground?.delta ?? 1}</li>
                </ul>
              </div>
            ) : null}

            {selectedLesson.id === 'form' ? (
              <form className="demo-card form-card playground-preview-box" onSubmit={handlePlaygroundFormPreview}>
                <p className="demo-label">Form playground</p>
                <label>
                  學習者名稱
                  <input
                    name="learnerName"
                    value={playgroundDraftForm.learnerName}
                    onChange={handlePlaygroundFormChange}
                    placeholder={selectedLessonPlayground?.namePlaceholder ?? '例如：小美'}
                  />
                </label>
                <label>
                  正在學的主題
                  <input
                    name="feature"
                    value={playgroundDraftForm.feature}
                    onChange={handlePlaygroundFormChange}
                    placeholder={selectedLessonPlayground?.defaultFeature ?? '表單控制與資料送出'}
                  />
                </label>
                <label>
                  你的問題或觀察
                  <textarea
                    name="question"
                    value={playgroundDraftForm.question}
                    onChange={handlePlaygroundFormChange}
                    rows="4"
                    placeholder="例如：為什麼送出前要先 preventDefault?"
                  />
                </label>
                <button type="submit" className="primary-button">
                  {selectedLessonPlayground?.submitLabel ?? '送出到 Spring Boot'}
                </button>
              </form>
            ) : null}

            {selectedLesson.id === 'api' ? (
              <div className="demo-card playground-preview-box">
                <p className="demo-label">API playground</p>
                <p className="demo-tip">目前 endpoint：{selectedLessonPlayground?.endpoint ?? '/api/learning/overview'}</p>
                <button type="button" className="primary-button" onClick={handlePlaygroundApiPreview}>
                  {selectedLessonPlayground?.buttonLabel ?? '重新抓取 overview'}
                </button>
              </div>
            ) : null}

            {selectedLesson.id === 'hooks' ? (
              <div className="demo-card playground-preview-box">
                <p className="demo-label">Hooks playground</p>
                <p>搜尋提示：{selectedLessonPlayground?.placeholder ?? '搜尋 hook，例如：effect、memo、ref'}</p>
                <button type="button" className="primary-button" onClick={handleFocusHookSearch}>
                  {selectedLessonPlayground?.buttonLabel ?? '聚焦 hooks 搜尋框'}
                </button>
              </div>
            ) : null}

            {selectedLesson.id === 'props' ? (
              <div className="demo-card playground-preview-box">
                <p className="demo-label">Props playground</p>
                <article className={selectedLessonPlayground?.highlight ? 'info-card props-live-card props-live-card-highlight' : 'info-card props-live-card'}>
                  <strong>{selectedLessonPlayground?.learnerName ?? '小美'}</strong>
                  <p>目前練習主題：{selectedLessonPlayground?.topic ?? 'Props 傳值'}</p>
                  <small>
                    {selectedLessonPlayground?.highlight
                      ? 'highlight=true：這代表父元件傳了布林 props，子元件可以拿來改顯示狀態。'
                      : 'highlight=false：子元件現在維持一般顯示狀態。'}
                  </small>
                </article>
              </div>
            ) : null}

            {selectedLesson.id === 'backendCrud' ? (
              <div className="demo-card playground-preview-box">
                <p className="demo-label">CRUD playground</p>
                <p className="demo-tip">目前 endpoint：{selectedLessonPlayground?.endpoint ?? '/api/learning/notes/1'}</p>
                <button type="button" className="primary-button" onClick={handleLoadSingleNote} disabled={!notes.length || crudLoading}>
                  {selectedLessonPlayground?.buttonLabel ?? '讀取單筆 note'}
                </button>
              </div>
            ) : null}

            <div className="response-card">
              <p className="response-endpoint">Playground 預覽結果</p>
              <pre>
                <code>
                  {JSON.stringify(
                    playgroundDraftApiResponse ??
                      selectedLessonPlayground ?? {
                        message: '套用可編輯程式碼後，這裡會顯示對應結果。',
                      },
                    null,
                    2,
                  )}
                </code>
              </pre>
            </div>
          </article>
        </div>
      </section>

      <section className="bottom-grid">
        <article ref={registerSectionRef('notes')} id="section-notes" className="section-card notes-panel">
          <div className="section-heading">
            <div>
              <p className="section-kicker">11. 後端資料結果</p>
              <h2>學習筆記清單</h2>
            </div>
            <p className="section-note">
              這個區塊的資料來自 Spring Boot API，目前第 {notePagination.pageNumber + 1} / {notePagination.totalPages} 頁。
            </p>
          </div>

          <div className="filter-grid note-toolbar">
            <label>
              搜尋 notes
              <input name="query" value={noteQuery.query} onChange={handleNoteQueryChange} placeholder="搜尋學員、主題或問題" />
            </label>
            <label>
              主題 filter
              <select name="feature" value={noteQuery.feature} onChange={handleNoteQueryChange}>
                <option value="all">全部主題</option>
                {notePagination.availableFeatures.map((feature) => (
                  <option key={feature} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="button-row toolbar-actions">
            <button type="button" className="primary-button" onClick={handleApplyNoteFilters}>
              套用搜尋 / filter
            </button>
            <button type="button" className="ghost-button" onClick={handleClearNoteFilters}>
              清空條件
            </button>
            <span className="status-pill">總筆數：{notePagination.totalCount}</span>
          </div>

          <div className="notes-list">
            {notes.length ? (
              notes.map((note) => (
                <article key={note.id} className="note-item">
                  <div className="note-meta">
                    <strong>{note.learnerName}</strong>
                    <span>{note.feature}</span>
                  </div>
                  <p>{note.question}</p>
                  <time>{note.createdAt}</time>
                </article>
              ))
            ) : (
              <div className="empty-state">
                {noteQuery.query || noteQuery.feature !== 'all'
                  ? '目前沒有符合搜尋 / filter 條件的筆記。'
                  : '目前尚未讀到筆記，啟動後端後再重新整理即可。'}
              </div>
            )}
          </div>

          <div className="button-row toolbar-actions">
            <button
              type="button"
              className="ghost-button"
              onClick={() => handleChangeNotesPage(notePagination.pageNumber - 1)}
              disabled={!notePagination.hasPrevious || loading}
            >
              上一頁
            </button>
            <button
              type="button"
              className="ghost-button"
              onClick={() => handleChangeNotesPage(notePagination.pageNumber + 1)}
              disabled={!notePagination.hasNext || loading}
            >
              下一頁
            </button>
          </div>
        </article>

        <article ref={registerSectionRef('insights')} id="section-insights" className="section-card insights-panel">
          <div className="section-heading">
            <div>
              <p className="section-kicker">12. 觀察與除錯</p>
              <h2>事件紀錄 + API 回應</h2>
            </div>
          </div>

          <div className="insights-stack">
            <div>
              <h3>事件紀錄</h3>
              <ul className="event-log">
                {eventLog.map((item) => (
                  <li key={item.id} className={`event-item ${item.type}`}>
                    {item.message}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>最新 API 回應</h3>
              <div className="response-card">
                <p className="response-endpoint">{responsePreview?.endpoint ?? '尚未收到回應'}</p>
                <pre>
                  <code>{JSON.stringify(responsePreview?.body ?? { message: 'No response yet' }, null, 2)}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3>學習提醒</h3>
              <ul className="tips-list">
                {tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <CapstoneProjectSection
        registerSectionRef={registerSectionRef}
        capstoneChecks={capstoneChecks}
        onToggleCapstoneStep={handleToggleCapstoneStep}
        capstoneVerifyResults={capstoneVerifyResults}
        onRunCapstoneVerify={handleRunCapstoneVerify}
      >

        { <MyTaskBoard /> }
      </CapstoneProjectSection>

      <InterviewProjectsSection
        registerSectionRef={registerSectionRef}
        interviewChecks={interviewChecks}
        onToggleInterviewStep={handleToggleInterviewStep}
        interviewVerifyResults={interviewVerifyResults}
        onRunInterviewVerify={handleRunInterviewVerify}
        selectedProjectId={selectedInterviewProjectId}
        onSelectProject={setSelectedInterviewProjectId}
        showcases={[
          //  <MyShortLinks key="shortlinks" />,
          //  <MyExpenseTracker key="expenses" />,
          {
            id: 'project-shortlink',
            component: <MyShortLinks />
          },
          {
            id: 'project-expense',
            component: <MyExpenseTracker />
          },
          {
            id: 'project-auth',
            component: <MyAuthPanel />
          },
          {
            id: 'project-inventory',
            component: <MyInventory />
          }
        ]}
      />

      <DockerSection
        registerSectionRef={registerSectionRef}
        dockerChecks={dockerChecks}
        onToggleDockerStep={handleToggleDockerStep}
      />

      <ExternalDbSection
        registerSectionRef={registerSectionRef}
        externalDbChecks={externalDbChecks}
        onToggleExternalDbStep={handleToggleExternalDbStep}
        selectedStackId={selectedExternalDbStackId}
        onSelectStack={setSelectedExternalDbStackId}
      />

      <nav className="floating-nav" aria-label="快速導覽">
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'hero', logMessage: '已回到頁首總覽。' })}>
          回到頂部
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'renderFlow' })}>
          Render 流程
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'capstone' })}>
          小專案
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'interview' })}>
          面試專案
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'docker' })}>
          Docker
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'practice' })}>
          課程區
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'code' })}>
          程式碼
        </button>
        <button type="button" className="ghost-button jump-button" onClick={() => handleNavigateToTarget({ sectionKey: 'notes' })}>
          Notes
        </button>
      </nav>

      <nav className="testing-nav" aria-label="代碼測試區">
        <button type="button" onClick={() => setVisible((current) => !current)}>
          {visible ? "隱藏測試區" : "顯示測試區"}
        </button>
        {
          visible?
          <>
            <section className="study-counter-card">
              <h3>今天學習了幾次？</h3>
              <h3>{ctrTmp}</h3>
              <div className="button-test">
                <button type="button" onClick={() => setCtrTmp((curr) => curr+1)}>+1</button>
                <button type="button" onClick={() => setCtrTmp((curr) => Math.max(0,curr-1))}>-1</button>
                <button type="button" onClick={() => setCtrTmp(0)}>重設</button>
              </div>
              {ctrTmp >= 3?
                <div>
                  <h3>
                    今天學習次數已達標！
                  </h3>
                </div>:null
              }
              <div>
                <h3>表單測試</h3>
                <form>
                  <span>使用者名稱：</span>
                  <input type="text" name="userName" value={formTmp.userName} onChange={handleChange} style={{width:"100%"}}/>
                  <span>學習主題：</span>
                  <select name="topic" value={formTmp.topic} onChange={handleChange} style={{width:"100%"}}>
                    {topics.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                  <span>學習描述：</span>
                  <input type="text" name="description" value={formTmp.description} onChange={handleChange} style={{width:"100%"}}/>
                </form> 
              </div> 
            </section> 
          </>:null
        }
      </nav>
    </div>
  )
}

export default App
