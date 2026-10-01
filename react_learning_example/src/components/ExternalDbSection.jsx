import { useState } from 'react'
import { externalDbGuide } from '../learningContent'

export default function ExternalDbSection({
  registerSectionRef,
  externalDbChecks,
  onToggleExternalDbStep,
  selectedStackId,
  onSelectStack,
}) {
  const stack = externalDbGuide.stacks.find((item) => item.id === selectedStackId) ?? externalDbGuide.stacks[0]

  const [stageByStack, setStageByStack] = useState({})
  const selectedStageId = stageByStack[stack.id] ?? stack.stages[0].id
  const selectedStage = stack.stages.find((item) => item.id === selectedStageId) ?? stack.stages[0]

  const totalSteps = stack.stages.reduce((sum, item) => sum + item.steps.length, 0)
  const completedSteps = stack.stages.reduce(
    (sum, item) => sum + item.steps.filter((step) => externalDbChecks[step.id]).length,
    0,
  )
  const progressPercent = totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100)

  return (
    <section ref={registerSectionRef('externalDb')} id="section-externalDb" className="section-card capstone-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">16. 串接外部資料庫</p>
          <h2>{externalDbGuide.title}</h2>
        </div>
        <p className="section-note">{externalDbGuide.subtitle}</p>
      </div>

      <div className="capstone-overview-grid">
        <article className="info-card">
          <p className="demo-label">為什麼要練這個</p>
          <ul className="mini-list">
            {externalDbGuide.whyExternalDb.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>
        <article className="info-card">
          <p className="demo-label">H2 / MySQL / PostgreSQL 一眼比較</p>
          <div className="docker-concept-list">
            {externalDbGuide.comparisonTable.map((row) => (
              <div key={row.aspect} className="docker-concept-row">
                <strong>{row.aspect}</strong>
                <p>H2：{row.h2}</p>
                <p>MySQL：{row.mysql}</p>
                <p>PostgreSQL：{row.postgres}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="capstone-stage-list interview-project-tabs">
        {externalDbGuide.stacks.map((item) => {
          const itemTotal = item.stages.reduce((sum, stg) => sum + stg.steps.length, 0)
          const itemDone = item.stages.reduce(
            (sum, stg) => sum + stg.steps.filter((step) => externalDbChecks[step.id]).length,
            0,
          )
          return (
            <button
              key={item.id}
              type="button"
              className={item.id === stack.id ? 'backend-lab-card active' : 'backend-lab-card'}
              onClick={() => onSelectStack(item.id)}
            >
              <span className="hook-badge">外部資料庫</span>
              <strong>
                {itemDone === itemTotal && itemTotal > 0 ? '✅ ' : ''}
                {item.title}
              </strong>
              <small>
                {itemDone} / {itemTotal} 步完成
              </small>
            </button>
          )
        })}
      </div>

      <p>{stack.goal}</p>

      <div className="project-progress-block">
        <div className="project-progress-header">
          <strong>{stack.title} 進度</strong>
          <span>
            {completedSteps} / {totalSteps} 步 · {progressPercent}%
          </span>
        </div>
        <div className="project-progress-bar" aria-hidden="true">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="capstone-layout">
        <div className="capstone-stage-list">
          {stack.stages.map((stageItem, index) => {
            const stageDone = stageItem.steps.every((step) => externalDbChecks[step.id])
            return (
              <button
                key={stageItem.id}
                type="button"
                className={stageItem.id === selectedStage.id ? 'backend-lab-card active' : 'backend-lab-card'}
                onClick={() => setStageByStack((current) => ({ ...current, [stack.id]: stageItem.id }))}
              >
                <span className="hook-badge">DevOps</span>
                <strong>
                  {stageDone ? '✅ ' : ''}
                  {stageItem.title}
                </strong>
                <small>
                  {stageItem.steps.filter((step) => externalDbChecks[step.id]).length} / {stageItem.steps.length} 步完成
                  {index === 0 ? ' · 從這裡開始' : ''}
                </small>
              </button>
            )
          })}
        </div>

        <article className="capstone-stage-detail info-card">
          <h3>{selectedStage.title}</h3>
          <p>{selectedStage.intro}</p>

          <div className="capstone-step-stack">
            {selectedStage.steps.map((step, index) => (
              <div key={step.id} className={externalDbChecks[step.id] ? 'capstone-step capstone-step-done' : 'capstone-step'}>
                <label className="mission-header-row">
                  <input
                    type="checkbox"
                    checked={Boolean(externalDbChecks[step.id])}
                    onChange={() => onToggleExternalDbStep(step.id)}
                  />
                  <strong>
                    Step {index + 1}：{step.title}
                  </strong>
                </label>
                <p>{step.instruction}</p>
                <p className="capstone-checkpoint">
                  <strong>完成判斷：</strong>
                  {step.checkpoint}
                </p>
                <details className="mission-response">
                  <summary>指令與提示</summary>
                  <pre className="mini-code-block mission-response-body">
                    <code>{step.hint}</code>
                  </pre>
                </details>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="info-card interview-questions-card">
        <p className="demo-label">面試攻防：做完後一定要能回答</p>
        <div className="capstone-step-stack">
          {stack.interviewQuestions.map((item, index) => (
            <details key={item.question} className="mission-response">
              <summary>
                Q{index + 1}. {item.question}
              </summary>
              <p className="interview-answer-hint">{item.answerHint}</p>
            </details>
          ))}
        </div>
      </article>
    </section>
  )
}

