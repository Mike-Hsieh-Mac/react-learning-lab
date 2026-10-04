import {useState, useEffect} from  'react'

export default function MyInventory() {
    const [page, setPage] = useState(0)
    const [sort, setSort] = useState('price,asc')
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState('')
    const [numberOfElements, setNumberOfElements] = useState(0)
    const [messageColor, setMessageColor] = useState('red')

    async function loadProducts() {
        const response = await fetch(`/api/products?page=${page}&size=5&sort=${sort}`)
        const body = await response.json()
        setProducts(body.content)
        setNumberOfElements(body.numberOfElements)
    }

    useEffect(() => {
        let cancelled = false
        async function fetchProducts() {
            const response = await fetch(`/api/products?page=${page}&size=5&sort=${sort}`)
            if (cancelled) return
            if (response.ok) {
                const body = await response.json()
                setProducts(body.content)
                setNumberOfElements(body.numberOfElements)
            }
        }
        fetchProducts()
        return () => {
            cancelled = true
        }
    }, [page, sort])

    const handlePurchase = async (itemId) => {
        const response = await fetch(`/api/products/${itemId}/purchase`, {
            method: 'POST'
        })
        if (response.status === 409) {
            setMessage('手慢了，庫存被搶光了或剛被其他人買走，畫面已重新整理。')
            await loadProducts()
            return
        }
        const body = await response.json()
        if (response.status === 200) {
            setMessage('購買成功！')
            setMessageColor('green')
        }else{
            setMessage(body.message)
            setMessageColor('red')
        }
        await loadProducts()
    }

    return (
        <div className="info-card">
            <h3>我的庫存管理</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>上一頁</button>
                <button onClick={() => setPage(page + 1)} disabled={numberOfElements < 5}>下一頁</button>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="price,asc">價格由低到高</option>
                    <option value="price,desc">價格由高到低</option>
                </select>
            </div>
            {message && <p style={{ color: messageColor }}>{message}</p>}
            <table>
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>價格</th>
                        <th>庫存</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => handlePurchase(product.id)}>下單</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}