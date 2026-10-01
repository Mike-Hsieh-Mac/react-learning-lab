import { useEffect, useState } from 'react'

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
      if (!cancelled) {
        setPosts(data)
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
    await fetch(`/api/posts/${id}/publish`, { method: 'PATCH' })
    await loadPosts()
  }

  async function handleDelete(id) {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    await loadPosts()
  }

  return (
    <div className="info-card">
      <h3>我的部落格後台</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          placeholder="文章標題"
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
        />
        <input
          placeholder="文章內容"
          value={form.body}
          onChange={(event) => setForm({ ...form, body: event.target.value })}
        />
        <button type="submit">新增草稿</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            {post.published ? (
              <span style={{ marginLeft: '8px', color: 'green' }}>✅ 已發布</span>
            ) : (
              <button type="button" onClick={() => handlePublish(post.id)} style={{ marginLeft: '8px' }}>
                發布
              </button>
            )}
            <button type="button" onClick={() => handleDelete(post.id)} style={{ marginLeft: '8px' }}>
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

