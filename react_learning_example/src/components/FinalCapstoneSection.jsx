import { useState } from 'react'
import { finalCapstoneGuide } from '../learningContent'

const PHASE_LABELS = {
  jsx: 'JSX / React',
  springboot: 'Spring Boot',
  docker: 'Docker',
  testing: '單元測試',
}

export default function FinalCapstoneSection({ registerSectionRef, finalCapstoneChecks, onToggleFinalCapstoneStep }) {
  const [selectedStageId, setSelectedStageId] = useState(finalCapstoneGuide.stages[0].id)
  const selectedStage = finalCapstoneGuide.stages.find((stage) => stage.id === selectedStageId) ?? finalCapstoneGuide.stages[0]

  const totalSteps = finalCapstoneGuide.stages.reduce((sum, stage) => sum + stage.steps.length, 0)
  const completedSteps = finalCapstoneGuide.stages.reduce(
    (sum, stage) => sum + stage.steps.filter((step) => finalCapstoneChecks[step.id]).length,
    0,
  )
  const progressPercent = totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100)

  return (
    <section ref={registerSectionRef('finalCapstone')} id="section-finalCapstone" className="section-card capstone-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">18. 綜合實戰總複習</p>
          <h2>{finalCapstoneGuide.title}</h2>
        </div>
        <p className="section-note">{finalCapstoneGuide.subtitle}</p>
      </div>

      <p>{finalCapstoneGuide.goal}</p>

      <div className="capstone-overview-grid">
        <article className="info-card">
          <p className="demo-label">為什麼要再練一次已經做過的功能</p>
          <ul className="mini-list">
            {finalCapstoneGuide.whyThis.map((reason) => (
              <li key={reason}>{reason}</li>
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
          {finalCapstoneGuide.stages.map((stage, index) => {
            const stageDone = stage.steps.every((step) => finalCapstoneChecks[step.id])
            return (
              <button
                key={stage.id}
                type="button"
                className={stage.id === selectedStage.id ? 'backend-lab-card active' : 'backend-lab-card'}
                onClick={() => setSelectedStageId(stage.id)}
              >
                <span className="hook-badge">{PHASE_LABELS[stage.phase] ?? stage.phase}</span>
                <strong>
                  {stageDone ? '✅ ' : ''}
                  {stage.title}
                </strong>
                <small>
                  {stage.steps.filter((step) => finalCapstoneChecks[step.id]).length} / {stage.steps.length} 步完成
                  {index === 0 ? ' · 從這裡開始' : ''}
                </small>
              </button>
            )
          })}
        </div>

        <article className="capstone-stage-detail info-card">
          <p className="demo-label">{PHASE_LABELS[selectedStage.phase] ?? selectedStage.phase}</p>
          <h3>{selectedStage.title}</h3>
          <p>{selectedStage.intro}</p>

          <div className="capstone-step-stack">
            {selectedStage.steps.map((step, index) => (
              <div key={step.id} className={finalCapstoneChecks[step.id] ? 'capstone-step capstone-step-done' : 'capstone-step'}>
                <label className="mission-header-row">
                  <input
                    type="checkbox"
                    checked={Boolean(finalCapstoneChecks[step.id])}
                    onChange={() => onToggleFinalCapstoneStep(step.id)}
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
                {step.hint ? (
                  <details className="mission-response">
                    <summary>卡住了？打開參考解答</summary>
                    <pre className="mini-code-block mission-response-body">
                      <code>{step.hint}</code>
                    </pre>
                  </details>
                ) : null}
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="info-card interview-questions-card">
        <p className="demo-label">面試攻防：綜合導覽問答</p>
        <div className="capstone-step-stack">
          {finalCapstoneGuide.interviewQuestions.map((item, index) => (
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

