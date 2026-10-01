import { useEffect, useState } from 'react'

export default function MyCommentBoard() {
  const [comments, setComments] = useState([])
  const [form, setForm] = useState({ author: '', content: '' })
  const [error, setError] = useState('')

  async function loadComments() {
    const response = await fetch('/api/comments')
    setComments(await response.json())
  }

  useEffect(() => {
    // 跟短網址/支出追蹤器一樣的寫法：effect 內自己定義 async 流程，
    // 用 cancelled 旗標避免元件卸載後還去 setState。
    let cancelled = false
    async function initialLoad() {
      const response = await fetch('/api/comments')
      const data = await response.json()
      if (!cancelled) {
        setComments(data)
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
    await fetch(`/api/comments/${id}`, { method: 'DELETE' })
    await loadComments()
  }

  return (
    <div className="info-card">
      <h3>我的留言板</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          placeholder="你的名字"
          value={form.author}
          onChange={(event) => setForm({ ...form, author: event.target.value })}
        />
        <input
          placeholder="留言內容"
          value={form.content}
          onChange={(event) => setForm({ ...form, content: event.target.value })}
        />
        <button type="submit">送出留言</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>：{comment.content}
            <button type="button" onClick={() => handleDelete(comment.id)} style={{ marginLeft: '8px' }}>
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

