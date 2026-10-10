import { useState, useEffect} from 'react'

export default function MyCommentBoard() {
  const [comments, setComments] = useState([])
  const [form,setForm] = useState({
    author: '',
    content: ''
  })
  const [message, setMessage] = useState('')

  async function getComments() {
      const response = await fetch('/api/comments')
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    }

  useEffect(() => {
    let cancelled = false
    async function fetchComments() {
      const response = await fetch('/api/comments')
      if (cancelled) return
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    }
    fetchComments()
    return () => {
      cancelled = true
    }

  },[])

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    if (!response.ok) {
      const errorData = await response.json()
      setMessage('提交失敗: ' + errorData.message)
      return
    }
    setForm({
      author: '',
      content: ''
    })
    setMessage('提交成功!')
    await getComments()
  }

  async function handleDelete(id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      setMessage('刪除失敗!')
      return
    }
    setMessage('刪除成功!')
    await getComments()
  }

  return (
    <div className="info-card">
      <h3>我的留言板</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <div>
          <label>
          作者：
          </label>
          <input
            type="text"
            value={form.author}
            placeholder="姓名"
            maxLength={50}
            onChange={(e) => (setForm({...form, author:e.target.value}))}
          />
        </div>
        <div>
          <label>
            留言內容：
          </label>
          <button type="submit">提交</button>
        </div>
        <textarea
          value={form.content}
          placeholder="最多500字"
          maxLength={500}
          onChange={(e) => (setForm({...form, content:e.target.value}))}
          rows={4}
          style={{width:"50%"}}
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>作者</th>
            <th>內容</th>
            <th>留言時間</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.author}</td>
              <td>{comment.content}</td>
              <td>{new Date(comment.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(comment.id)}>刪除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}