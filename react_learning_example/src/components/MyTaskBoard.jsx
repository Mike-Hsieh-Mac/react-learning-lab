import { useState, useEffect } from 'react';
import {FaTrash} from 'react-icons/fa';

export default function MyTaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    async function loadTasks() {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
    }
    useEffect(() => {

        // 新版 eslint 規則不允許在 effect 裡「同步地」呼叫會 setState 的函式，
        // 改成 effect 內自己定義 async 流程：fetch 完才 setState（非同步），
        // 並用 cancelled 旗標避免元件卸載後還去 setState。
        let cancelled = false;
        async function initialLoad() {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            if (!cancelled) {
                setTasks(data);
            }
        }
        initialLoad();
        return () => {
            cancelled = true;
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title.trim() === '') {
            alert('請輸入任務標題');
            return;
        }
        const response = await fetch('/api/tasks', {
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({ title })
        });
        if(response.ok){
            setTitle('');
            loadTasks();
        }else{
            alert('新增任務失敗');
        }
    }
    const handleToggle = async (taskId) => {
        const response = await fetch(`/api/tasks/${taskId}/toggle`, {
            method:'put'
        });
        if(response.ok){
            loadTasks();
        }
    }
    async function handleDelete(taskId) {
        const response = await fetch(`/api/tasks/${taskId}`, {
            method:'delete'
        });
        if(response.ok){
            loadTasks();
        }
    }

    return (
        <div className="info-card">
            <h3>My Task Board</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="今天的任務是什麼?"
                />
                <button type="submit">新增任務</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{width:'40%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <label style={{textDecoration: task.done ? 'line-through' : 'none'}}>
                            <input type="checkbox" checked={task.done} onChange={() => handleToggle(task.id)} />
                            {task.title}
                        </label>
                        <button onClick={() => handleDelete(task.id)}><FaTrash/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}