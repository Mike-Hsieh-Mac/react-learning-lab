import { useEffect, useState } from 'react'

export default function MyAuthPanel() {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: ''
  })
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })
  const [token, setToken] = useState(() => localStorage.getItem('demo-jwt-token') ?? '')
  // me 是「後端驗證過 token 之後回傳的登入者資訊」。
  // me 有值 = 真的登入成功；me 是 null = 未登入（不管 token 欄位有沒有值）。
  const [me, setMe] = useState(null)
  const [message, setMessage] = useState('')

  // 只要 token 變了（剛登入成功 / 頁面剛載入時從 localStorage 讀到舊 token），
  // 就自動打一次 /api/auth/me 跟後端確認這張 token 還有沒有效、是誰的。
  useEffect(() => {
    let cancelled = false
    async function verifyToken() {
      if (!token) {
        setMe(null)
        return
      }
      const response = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (cancelled) return
      if (response.ok) {
        setMe(await response.json())
      } else {
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerForm)
    })
    if (response.ok) {
      setMessage('註冊成功，可以登入了!')
      setRegisterForm({ username: '', password: '' })
    } else {
      setMessage('註冊失敗，該帳號已被使用!')
    }
  }

  async function handleLogin(event) {
    event.preventDefault()
    setMessage('')
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
    })

    if(!response.ok) {
        setMessage('登入失敗，請檢查帳號密碼!')
        return
    }

    const data = await response.json()
    // 這裡只負責存 token；真正「確認有效、拿到 username」交給上面的 useEffect。
    setToken(data.token)
    localStorage.setItem('demo-jwt-token', data.token)
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
    <div className='info-card'>
      <h3>我的會員系統</h3>
      {message ? <p style={{ color: '#f00933' }}>{message}</p> : null}

      <h4>註冊</h4>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={registerForm.username}
          onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={registerForm.password}
          onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>

      <h4>登入</h4>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={loginForm.username}
          onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}