import { useEffect, useRef, useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'

export default function MyShortLinks() {
  const [links, setLinks] = useState([])
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  // 記錄「剛剛複製成功的是哪一個 code」，用來讓對應那顆按鈕顯示「已複製」。
  // 用 code 而不是 true/false，是因為列表有很多列，我們只想讓「被點的那一列」變化，
  // 不能只用一個 boolean（不然會全部列一起顯示已複製）。
  const [copiedCode, setCopiedCode] = useState(null)
  // 用 ref 存 setTimeout 的 id，這樣重複點擊、或元件被卸載時可以清掉舊的計時器，
  // 避免「上一個提示還沒消失，又被下一次點擊蓋掉」的顯示錯亂。
  const copiedTimeoutRef = useRef(null)

  // 元件卸載時清掉還沒觸發的 timeout，避免對已經不存在的元件呼叫 setState 而跳警告。
  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current)
      }
    }
  }, [])

  async function loadLinks() {
    const response = await fetch('/api/links')
    setLinks(await response.json())
  }

  useEffect(() => {
    // 新版 eslint 規則不允許在 effect 裡「同步地」呼叫會 setState 的函式，
    // 改成 effect 內自己定義 async 流程：fetch 完才 setState（非同步），
    // 並用 cancelled 旗標避免元件卸載後還去 setState。
    let cancelled = false
    async function initialLoad() {
      const response = await fetch('/api/links')
      const data = await response.json()
      if (!cancelled) {
        setLinks(data)
      }
    }
    initialLoad()
    return () => {
      cancelled = true
    }
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
      console.error(body)
      setError(body.fieldErrors?.[0]?.message ?? '建立失敗')
      return
    }
    setUrl('')
    await loadLinks()
  }

  const sortedLinks = [...links].sort((a, b) => b.clicks - a.clicks)

  // 複製成功後：記錄是哪個 code、1.5 秒後自動恢復成原本的圖示。
  async function handleCopy(code) {
    await navigator.clipboard.writeText(`${window.location.origin}/s/${code}`)
    setCopiedCode(code)
    if (copiedTimeoutRef.current) {
      clearTimeout(copiedTimeoutRef.current)
    }
    copiedTimeoutRef.current = setTimeout(() => {
      setCopiedCode(null)
    }, 1500)
  }

  return (
    <div className="info-card">
      <h3>我的短網址服務</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="貼上長網址（http:// 或 https:// 開頭）"
          style={{width:"50%"}}
        />
        <button type="submit">縮短</button>
      </form>
      {error ? <p style={{ color: 'red' , backgroundColor: 'pink' , width: '50%' }}>{error}</p> : null}
      <ol>
        {sortedLinks.map((link) => (
          <li key={link.id}>
            <code>/s/{link.code}</code> → {link.targetUrl}（點擊 {link.clicks} 次）
            <button
              type="button"
              onClick={() => handleCopy(link.code)}
              // aria-label：滑鼠使用者看得到文字提示，螢幕報讀器使用者也聽得到，
              // 不會因為圖示切換就失去「這顆按鈕是做什麼的」這個資訊。
              aria-label={copiedCode === link.code ? '已複製到剪貼簿' : '複製短網址'}
            >
              {copiedCode === link.code ? (
                <>
                  <FaCheck style={{ color: 'green' }} /> 已複製
                </>
              ) : (
                <>
                  <FaCopy /> 複製
                </>
              )}
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}