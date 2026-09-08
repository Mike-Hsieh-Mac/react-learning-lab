import { useMemo, useRef, useState } from 'react'

function WelcomeCard({ learnerName, topic, highlight, retryCount, onRetry }) {
  return (
    <article className={highlight ? 'info-card props-live-card props-live-card-highlight' : 'info-card props-live-card'}>
      <p className="demo-label">子元件 WelcomeCard</p>
      <h3>{learnerName}</h3>
      <p>目前練習主題：{topic}</p>
      <p className="demo-tip">
        狀態提示：{highlight ? 'highlight 為 true，這張卡會特別醒目。' : 'highlight 為 false，代表目前是一般狀態。'}
      </p>
      <button type="button" className="ghost-button" onClick={onRetry}>
        再提醒我一次
      </button>
      <small>子元件已呼叫 onRetry {retryCount} 次。</small>
    </article>
  )
}

export default function PropsLessonDemo({ appendLog, onInteraction, variant = 'full' }) {
  const [learnerName, setLearnerName] = useState('小美')
  const [topic, setTopic] = useState('Props 傳值')
  const [highlight, setHighlight] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const hasLoggedInteractionRef = useRef(false)
  const isCompact = variant === 'compact'

  const transmittedProps = useMemo(
    () => ({
      learnerName,
      topic,
      highlight,
      onRetry: 'handleRetry() // function prop',
    }),
    [highlight, learnerName, topic],
  )

  const miniExercises = useMemo(
    () => [
      {
        id: 'props-exercise-name',
        title: '練習 1：把 learnerName 改成你自己的名字',
        done: learnerName !== '小美' && learnerName.trim().length > 0,
        hint: '完成後，子元件標題應該同步顯示新名字。',
      },
      {
        id: 'props-exercise-topic',
        title: '練習 2：把 topic 切到 useEffect',
        done: topic === 'useEffect',
        hint: '完成後，你應該知道父元件只要改資料，子元件就會收到新的 props。',
      },
      {
        id: 'props-exercise-function',
        title: '練習 3：按一次子元件按鈕',
        done: retryCount > 0,
        hint: '完成後，觀察 retryCount 增加，理解函式 props 是怎麼把事件送回父元件。',
      },
    ],
    [learnerName, retryCount, topic],
  )

  const usageSnippet = useMemo(
    () => `<WelcomeCard\n  learnerName={${JSON.stringify(learnerName)}}\n  topic={${JSON.stringify(topic)}}\n  highlight={${highlight}}\n  onRetry={handleRetry}\n/>`,
    [highlight, learnerName, topic],
  )

  const trackInteraction = (message) => {
    onInteraction?.()
    if (!hasLoggedInteractionRef.current) {
      appendLog?.('state', 'Props 範例：父元件改資料後，子元件會收到新的 props。')
      hasLoggedInteractionRef.current = true
    }
    if (message) {
      appendLog?.('system', message)
    }
  }

  const handleRetry = () => {
    setRetryCount((current) => current + 1)
    onInteraction?.()
    appendLog?.('system', 'Props 範例：子元件呼叫函式 props，父元件的 retryCount 已更新。')
  }

  return (
    <div className={isCompact ? 'demo-card form-card props-demo-card props-demo-card-compact' : 'demo-card form-card props-demo-card'}>
      <p className="demo-label">Props parent → child demo</p>
      <div className={isCompact ? 'props-demo-grid props-demo-grid-compact' : 'props-demo-grid'}>
        <div className="props-control-stack">
          <label className="inline-label">
            父元件目前要傳的 learnerName
            <input
              value={learnerName}
              onChange={(event) => {
                setLearnerName(event.target.value)
                trackInteraction('Props 範例：父元件更新了 learnerName。')
              }}
              placeholder="例如：小美"
            />
          </label>

          <label className="inline-label">
            父元件目前要傳的 topic
            <select
              value={topic}
              onChange={(event) => {
                setTopic(event.target.value)
                trackInteraction('Props 範例：父元件切換了 topic。')
              }}
            >
              <option value="Props 傳值">Props 傳值</option>
              <option value="state">state</option>
              <option value="useEffect">useEffect</option>
              <option value="React Render">React Render</option>
            </select>
          </label>

          <label className="inline-label props-checkbox-label">
            <span>
              <input
                type="checkbox"
                checked={highlight}
                onChange={(event) => {
                  setHighlight(event.target.checked)
                  trackInteraction('Props 範例：父元件切換了 highlight。')
                }}
              />
              highlight 布林 props
            </span>
          </label>
        </div>

        <div className="props-preview-stack">
          <WelcomeCard
            learnerName={learnerName || '（還沒輸入）'}
            topic={topic}
            highlight={highlight}
            retryCount={retryCount}
            onRetry={handleRetry}
          />

          {!isCompact ? (
            <article className="info-card props-current-props-card">
              <strong>父元件目前真的傳出去的 props</strong>
              <pre className="mini-code-block props-mini-json">
                <code>{JSON.stringify(transmittedProps, null, 2)}</code>
              </pre>
            </article>
          ) : null}
        </div>
      </div>

      {!isCompact ? (
        <div className="props-followup-grid">
          <article className="info-card">
            <h3>這段 JSX 可以怎麼讀</h3>
            <pre className="mini-code-block">
              <code>{usageSnippet}</code>
            </pre>
            <ul className="mini-list">
              <li>左邊的屬性名，例如 `learnerName`，是 prop 名稱。</li>
              <li>右邊的值來自父元件，目前由這裡的 input / select / checkbox 決定。</li>
              <li>`onRetry` 傳的是函式參照，子元件按鈕只是負責呼叫它。</li>
            </ul>
          </article>

          <article className="info-card props-exercise-card">
            <h3>新手練習：不要只看，請真的操作一次</h3>
            <div className="challenge-grid props-mini-exercise-grid">
              {miniExercises.map((exercise) => (
                <article key={exercise.id} className={exercise.done ? 'challenge-card info-card recommended-step' : 'challenge-card info-card'}>
                  <strong>{exercise.title}</strong>
                  <p>{exercise.hint}</p>
                  <small>{exercise.done ? '已完成：你已經親眼看到 props 真的影響子元件畫面。' : '尚未完成：請照著提示做一次。'}</small>
                </article>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <p className="demo-tip">先改上面的父元件資料，再看下方子元件卡片如何同步更新，這就是 props 最直覺的用法。</p>
      )}
    </div>
  )
}

