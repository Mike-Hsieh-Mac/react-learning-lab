import { useState } from 'react'
import { interviewProjects } from '../learningContent'

const PHASE_LABELS = {
  backend: '後端 Spring Boot',
  frontend: '前端 React',
}

export default function InterviewProjectsSection({
  registerSectionRef,
  interviewChecks,
  onToggleInterviewStep,
  interviewVerifyResults,
  onRunInterviewVerify,
  selectedProjectId,
  onSelectProject,
  showcases,
}) {
  // const [selectedProjectId, setSelectedProjectId] = useState(interviewProjects[0].id)
  const project = interviewProjects.find((item) => item.id === selectedProjectId) ?? interviewProjects[0]

  const [stageByProject, setStageByProject] = useState({})
  const selectedStageId = stageByProject[project.id] ?? project.stages[0].id
  const selectedStage = project.stages.find((stage) => stage.id === selectedStageId) ?? project.stages[0]

  const totalSteps = project.stages.reduce((sum, stage) => sum + stage.steps.length, 0)
  const completedSteps = project.stages.reduce(
    (sum, stage) => sum + stage.steps.filter((step) => interviewChecks[step.id]).length,
    0,
  )
  const progressPercent = totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100)

  const verifyResult = selectedStage.verify ? interviewVerifyResults[selectedStage.verify.id] : null

  return (
    <section ref={registerSectionRef('interview')} id="section-interview" className="section-card capstone-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">14. 面試級全端專案</p>
          <h2>做出可以放進履歷的作品</h2>
        </div>
        <p className="section-note">兩個經典面試題目，全部用 JPA 存進真正的資料庫，附「面試官會怎麼問」攻防清單。</p>
      </div>

      <div className="capstone-stage-list interview-project-tabs">
        {interviewProjects.map((item) => {
          const itemTotal = item.stages.reduce((sum, stage) => sum + stage.steps.length, 0)
          const itemDone = item.stages.reduce(
            (sum, stage) => sum + stage.steps.filter((step) => interviewChecks[step.id]).length,
            0,
          )
          return (
            <button
              key={item.id}
              type="button"
              className={item.id === project.id ? 'backend-lab-card active' : 'backend-lab-card'}
              onClick={() => onSelectProject(item.id)}
            >
              <span className="hook-badge">面試專案</span>
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

      <p>{project.goal}</p>

      {project.conceptExplanation?.length ? (
        <article className="info-card">
          <p className="demo-label">先懂觀念，再看程式碼</p>
          <div className="mini-list">
            {project.conceptExplanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ) : null}

      {project.flowDiagram ? (
        <article className="info-card">
          <p className="demo-label">運作流程圖（誰在什麼時候做什麼事）</p>
          <pre className="mini-code-block capstone-contract">
            <code>{project.flowDiagram}</code>
          </pre>
        </article>
      ) : null}

      <div className="capstone-overview-grid">
        <article className="info-card">
          <p className="demo-label">為什麼適合當面試作品</p>
          <ul className="mini-list">
            {project.interviewValue.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>
        <article className="info-card">
          <p className="demo-label">你要做出的 API</p>
          <pre className="mini-code-block capstone-contract">
            <code>{project.apiContract.join('\n')}</code>
          </pre>
        </article>
      </div>

      <div className="project-progress-block">
        <div className="project-progress-header">
          <strong>{project.title} 進度</strong>
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
          {project.stages.map((stage, index) => {
            const stageDone = stage.steps.every((step) => interviewChecks[step.id])
            return (
              <button
                key={stage.id}
                type="button"
                className={stage.id === selectedStage.id ? 'backend-lab-card active' : 'backend-lab-card'}
                onClick={() => setStageByProject((current) => ({ ...current, [project.id]: stage.id }))}
              >
                <span className="hook-badge">{PHASE_LABELS[stage.phase]}</span>
                <strong>
                  {stageDone ? '✅ ' : ''}
                  {stage.title}
                </strong>
                <small>
                  {stage.steps.filter((step) => interviewChecks[step.id]).length} / {stage.steps.length} 步完成
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
              <div key={step.id} className={interviewChecks[step.id] ? 'capstone-step capstone-step-done' : 'capstone-step'}>
                <label className="mission-header-row">
                  <input
                    type="checkbox"
                    checked={Boolean(interviewChecks[step.id])}
                    onChange={() => onToggleInterviewStep(step.id)}
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
                <button type="button" className="primary-button" onClick={() => onRunInterviewVerify(selectedStage.verify.id)}>
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

      <article className="info-card interview-questions-card">
        <p className="demo-label">面試攻防：做完後一定要能回答</p>
        <div className="capstone-step-stack">
          {project.interviewQuestions.map((item, index) => (
            <details key={item.question} className="mission-response">
              <summary>
                Q{index + 1}. {item.question}
              </summary>
              <p className="interview-answer-hint">{item.answerHint}</p>
            </details>
          ))}
        </div>
      </article>

      <div className="capstone-showcase">
        <div className="section-heading">
          <div>
            <p className="section-kicker">面試專案成果展示</p>
            <h3>你的作品會出現在這裡</h3>
          </div>
          <p className="section-note">完成各專案最後一步後，把元件掛上來就會顯示。</p>
        </div>

        {showcases.find((project) => project.id === selectedProjectId)?.component}
      </div>
    </section>
  )
}


