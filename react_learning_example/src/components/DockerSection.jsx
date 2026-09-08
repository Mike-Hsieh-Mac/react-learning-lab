import { useState } from 'react'
import { dockerGuide } from '../learningContent'

export default function DockerSection({
  registerSectionRef,
  dockerChecks,
  onToggleDockerStep,
}) {
  const [selectedStageId, setSelectedStageId] = useState(dockerGuide.stages[0].id)
  const selectedStage = dockerGuide.stages.find((stage) => stage.id === selectedStageId) ?? dockerGuide.stages[0]

  const totalSteps = dockerGuide.stages.reduce((sum, stage) => sum + stage.steps.length, 0)
  const completedSteps = dockerGuide.stages.reduce(
    (sum, stage) => sum + stage.steps.filter((step) => dockerChecks[step.id]).length,
    0,
  )
  const progressPercent = totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100)

  return (
    <section ref={registerSectionRef('docker')} id="section-docker" className="section-card capstone-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">15. Docker 容器化實戰</p>
          <h2>{dockerGuide.title}</h2>
        </div>
        <p className="section-note">{dockerGuide.subtitle}</p>
      </div>

      <div className="capstone-overview-grid">
        <article className="info-card">
          <p className="demo-label">為什麼這個專案適合學 Docker</p>
          <ul className="mini-list">
            {dockerGuide.whyDocker.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>
        <article className="info-card">
          <p className="demo-label">核心名詞速查（用生活比喻記）</p>
          <div className="docker-concept-list">
            {dockerGuide.concepts.map((concept) => (
              <div key={concept.term} className="docker-concept-row">
                <strong>{concept.term}</strong>
                <p>{concept.analogy}</p>
                <code>{concept.command}</code>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="project-progress-block">
        <div className="project-progress-header">
          <strong>Docker 實戰進度</strong>
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
          {dockerGuide.stages.map((stage, index) => {
            const stageDone = stage.steps.every((step) => dockerChecks[step.id])
            return (
              <button
                key={stage.id}
                type="button"
                className={stage.id === selectedStage.id ? 'backend-lab-card active' : 'backend-lab-card'}
                onClick={() => setSelectedStageId(stage.id)}
              >
                <span className="hook-badge">DevOps</span>
                <strong>
                  {stageDone ? '✅ ' : ''}
                  {stage.title}
                </strong>
                <small>
                  {stage.steps.filter((step) => dockerChecks[step.id]).length} / {stage.steps.length} 步完成
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
              <div key={step.id} className={dockerChecks[step.id] ? 'capstone-step capstone-step-done' : 'capstone-step'}>
                <label className="mission-header-row">
                  <input
                    type="checkbox"
                    checked={Boolean(dockerChecks[step.id])}
                    onChange={() => onToggleDockerStep(step.id)}
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

      <div className="capstone-overview-grid">
        <article className="info-card">
          <p className="demo-label">常用指令小抄</p>
          <div className="docker-concept-list">
            {dockerGuide.commonCommands.map((item) => (
              <div key={item.command} className="docker-concept-row">
                <code>{item.command}</code>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="info-card interview-questions-card">
          <p className="demo-label">面試攻防：做完後一定要能回答</p>
          <div className="capstone-step-stack">
            {dockerGuide.interviewQuestions.map((item, index) => (
              <details key={item.question} className="mission-response">
                <summary>
                  Q{index + 1}. {item.question}
                </summary>
                <p className="interview-answer-hint">{item.answerHint}</p>
              </details>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

