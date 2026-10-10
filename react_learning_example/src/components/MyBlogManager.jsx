import { useState, useEffect} from 'react'

export default function MyBlogManager() {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({
    title: '',
    body: ''
  })
  const [message, setMessage] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  const getPosts = async () => {
    const response = await fetch('/api/posts')
    if (response.ok) {
      const data = await response.json()
      setPosts(data)
    }
  }

  useEffect(() => {
    let cancelled = false
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      if (cancelled) return
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    }
    fetchPosts()
    return () => {
      cancelled = true
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (response.ok) {
      setMessage('新增成功!')
      setForm({ title: '', body: '' })
      await getPosts()
    }else{
      setMessage('新增失敗!')
    }
  }

  const handlePublish = async (id) => {
    const response = await fetch(`/api/posts/${id}/publish`, {
      method: 'PATCH'
    })
    if(!response.ok) {
      setMessage('發布失敗!')
      return
    }
    setMessage('發布成功!')
    await getPosts()
  }

  const handleDelete = async (id) => {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    })
    if(!response.ok) {
      setMessage('刪除失敗!')
      return
    }
    setMessage('刪除成功!')
    await getPosts()
  }

  const handleTabClick = (tab) => {
    const tabButtons = document.querySelectorAll('.tab-btn')
    const tabContents = document.querySelectorAll('.tab-content')
    tabButtons.forEach((btn, index) => {
      if (index === tab) {
        btn.classList.add('active')
        tabContents[index].classList.add('active')
      } else {
        btn.classList.remove('active')
        tabContents[index].classList.remove('active')
      }
    })
  }

  const handleToggleExpand = (id) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <div className="info-card">
      <h3>我的部落格管理</h3>
      <div className="tab">
        <button className="tab-btn active" onClick={() => handleTabClick(0)}>新增文章</button>
        <button className="tab-btn" onClick={() => handleTabClick(1)}>文章列表</button>
      </div>
      <div className="tab-content active">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <input 
              type="text"
              value={form.title}
              placeholder="請輸入標題"
              onChange={(e) => (setForm({...form, title: e.target.value}))}
            />
          </div>
          <div>
            <textarea
              value={form.body}
              placeholder="請輸入內容"
              rows={4}
              onChange={(e) => (setForm({...form, body: e.target.value}))}
              style={{ width:"70%" }}
            />
          </div>
          <div>
            <button type="submit">新增文章</button>
          </div>
        </form>
      </div>
      <div className="tab-content">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong 
                className="widenRight"
                style={{ cursor: 'pointer' }}
                onClick={() => handleToggleExpand(post.id)}
                >{post.title}
              </strong>
              {post.published ? <span className="widenRight">✅已發布</span> : <button onClick={() => handlePublish(post.id)} className="widenRight">發布</button>}
              <button onClick={() => handleDelete(post.id)} className="widenRight">刪除</button>
              {expandedId === post.id && (
                <div>
                  <p style={{ whiteSpace: 'pre-wrap' }}>內容：{post.body}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}