import { useState } from 'react'
import { capstoneProject } from '../learningContent'

const PHASE_LABELS = {
  backend: '後端 Spring Boot',
  frontend: '前端 React',
}

export default function CapstoneProjectSection({
  registerSectionRef,
  capstoneChecks,
  onToggleCapstoneStep,
  capstoneVerifyResults,
  onRunCapstoneVerify,
  children,
}) {
  const [selectedStageId, setSelectedStageId] = useState(capstoneProject.stages[0].id)
  const selectedStage = capstoneProject.stages.find((stage) => stage.id === selectedStageId) ?? capstoneProject.stages[0]

  const totalSteps = capstoneProject.stages.reduce((sum, stage) => sum + stage.steps.length, 0)
  const completedSteps = capstoneProject.stages.reduce(
    (sum, stage) => sum + stage.steps.filter((step) => capstoneChecks[step.id]).length,
    0,
  )
  const progressPercent = totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100)

  const verifyResult = selectedStage.verify ? capstoneVerifyResults[selectedStage.verify.id] : null

  return (
    <section ref={registerSectionRef('capstone')} id="section-capstone" className="section-card capstone-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">13. 全端小專案實戰</p>
          <h2>{capstoneProject.title}</h2>
        </div>
        <p className="section-note">{capstoneProject.subtitle}</p>
      </div>

      <p>{capstoneProject.goal}</p>

      <div className="capstone-overview-grid">
        <article className="info-card">
          <p className="demo-label">你要做出的 API</p>
          <pre className="mini-code-block capstone-contract">
            <code>{capstoneProject.apiContract.join('\n')}</code>
          </pre>
        </article>
        <article className="info-card">
          <p className="demo-label">進行規則</p>
          <ul className="mini-list">
            {capstoneProject.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="project-progress-block">
        <div className="project-progress-header">
          <strong>整體進度</strong>
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
          {capstoneProject.stages.map((stage, index) => {
            const stageDone = stage.steps.every((step) => capstoneChecks[step.id])
            return (
              <button
                key={stage.id}
                type="button"
                className={stage.id === selectedStage.id ? 'backend-lab-card active' : 'backend-lab-card'}
                onClick={() => setSelectedStageId(stage.id)}
              >
                <span className="hook-badge">{PHASE_LABELS[stage.phase]}</span>
                <strong>
                  {stageDone ? '✅ ' : ''}
                  {stage.title}
                </strong>
                <small>
                  {stage.steps.filter((step) => capstoneChecks[step.id]).length} / {stage.steps.length} 步完成
                  {index === 0 ? ' · 從這裡開始' : ''}
                </small>
              </button>
            )
          })}
        </div>

        <article className="capstone-stage-detail info-card">
          <p className="demo-label">{PHASE_LABELS[selectedStage.phase]}</p>
          <h3>{selectedStage.title}</h3>
          <p>{selectedStage.intro}</p>

          <div className="capstone-step-stack">
            {selectedStage.steps.map((step, index) => (
              <div key={step.id} className={capstoneChecks[step.id] ? 'capstone-step capstone-step-done' : 'capstone-step'}>
                <label className="mission-header-row">
                  <input
                    type="checkbox"
                    checked={Boolean(capstoneChecks[step.id])}
                    onChange={() => onToggleCapstoneStep(step.id)}
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
                  <summary>卡住了？打開參考解答</summary>
                  <pre className="mini-code-block mission-response-body">
                    <code>{step.hint}</code>
                  </pre>
                </details>
              </div>
            ))}
          </div>

          {selectedStage.verify ? (
            <div className="capstone-verify-block">
              <p>
                <strong>{selectedStage.verify.label}</strong>
              </p>
              <p>{selectedStage.verify.description}</p>
              <div className="button-row">
                <button type="button" className="primary-button" onClick={() => onRunCapstoneVerify(selectedStage.verify.id)}>
                  執行自動驗收
                </button>
              </div>
              {verifyResult ? (
                <>
                  <p className={verifyResult.passed ? 'quiz-feedback mission-feedback-passed' : 'quiz-feedback mission-feedback-failed'}>
                    {verifyResult.passed ? '✅ 驗收通過：' : '❌ 還沒通過：'}
                    {verifyResult.summary}
                  </p>
                  {verifyResult.details?.length ? (
                    <ul className="mini-list capstone-verify-details">
                      {verifyResult.details.map((detail) => (
                        <li key={detail.label}>
                          {detail.passed ? '✅' : '❌'} {detail.label}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <p className="demo-tip">完成上面的步驟後，按按鈕讓平台真的打一次你的 API。</p>
              )}
            </div>
          ) : null}
        </article>
      </div>

      <div className="capstone-showcase">
        <div className="section-heading">
          <div>
            <p className="section-kicker">成果展示區</p>
            <h3>你的 TaskBoard 會出現在這裡</h3>
          </div>
          <p className="section-note">完成 Stage 6 最後一步後，這裡就會顯示你自己寫的元件。</p>
        </div>
        {children ?? <p className="demo-tip">目前還是空的：照 Stage 6 的說明，把 MyTaskBoard 掛上來吧。</p>}
      </div>
    </section>
  )
}

