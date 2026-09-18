import { useEffect, useState } from 'react'
import {FaTrash} from 'react-icons/fa';

const CATEGORIES = ['food', 'transport', 'fun', 'other']

export default function MyExpenseTracker() {
    const [expenses, setExpenses] = useState([])
    const [summary, setSummary] = useState(null)
    const [filter, setFilter] = useState('')
    const [form, setForm] = useState({
        title: '',
        amount: '',
        category: ''
    })

    async function loadAll(activeFilter = filter) {
        const query = activeFilter ? `?category=${activeFilter}` : ''
        const [listRes, summaryRes] = await Promise.all([
            fetch(`/api/expenses${query}`),
            fetch('/api/expenses/summary')
        ])
        setExpenses(await listRes.json())
        setSummary(await summaryRes.json())
    }

    useEffect(() => {
        async function initLoadAll(activeFilter = filter) {
            const query = activeFilter ? `?category=${activeFilter}` : ''
            const [listRes, summaryRes] = await Promise.all([
                fetch(`/api/expenses${query}`),
                fetch('/api/expenses/summary')
            ])
            setExpenses(await listRes.json())
            setSummary(await summaryRes.json())
        }
        initLoadAll()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if(isNaN(form.amount)){
        //     alert('請輸入有效的金額!')
        //     return
        // }
        const response = await fetch('/api/expenses', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...form, amount: Number(form.amount) })
        })
        if(!response.ok){
            const data = await response.json()
            let err = data.fieldErrors?.map(fe => `${fe.message}`).join('\n')
            alert('新增失敗!' + (err ? '\n' + err : ''))
            return
        } 
        loadAll()
        setForm({
            title: '',
            amount: '',
            category: ''
        })
    }

    const handleDelete = async (id) => {
        const response = await fetch(`/api/expenses/delete/${id}`, {
            method: 'delete'
        })
        if(!response.ok){
            alert('刪除失敗!')
            return
        }
        await loadAll()
    }

    const handleFilterChange = async (value) => {
        setFilter(value)
        await loadAll(value)
    }

    return (
        <div className="info-card">
            <h3>我的支出追蹤器</h3>
            {summary ? 
                <>
                    <p>Total Expense: {summary.total} 元</p>
                    <ol>
                        {Object.entries(summary.byCategory).map(([category, amount]) => (
                            <li key={category}>
                                {category} 花費 {amount} 元，佔比 {((amount / summary.total) * 100).toFixed(2)}%
                            </li>
                        ))}
                    </ol>
                </>
             : null}
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
                <input 
                    type="text"
                    placeholder="請輸入標題"
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                />
                <input 
                    type="number"
                    placeholder="請輸入金額"
                    value={form.amount}
                    onChange={e => setForm({...form, amount: e.target.value})}
                />
                <select
                    value={form.category}
                    onChange={e => setForm({...form, category: e.target.value})}
                >
                    <option value="">請選擇類別</option>
                    {CATEGORIES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <button type="submit">新增支出</button>
            </form>
            <p>篩選類別：
                <select
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                >
                    <option value="">全部類別</option>
                    {CATEGORIES.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </p>
            <table>
                <thead>
                    <tr>
                        <th className="col-id"><strong>標題</strong></th>
                        <th><strong>金額</strong></th>
                        <th><strong>類別</strong></th>
                        <th><strong>操作</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>
                                <button type="button" onClick={() => handleDelete(item.id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}