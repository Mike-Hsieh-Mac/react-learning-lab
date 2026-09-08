import { backendPracticeMissions } from '../learningContent'

export default function BackendLabSection({
  registerSectionRef,
  learningStats,
  availableBackendLabs,
  selectedBackendLab,
  handleSelectBackendLab,
  handlePreviewBackendLabs,
  handlePreviewLearningStats,
  completedBackendMissionCount,
  backendMissionResults,
  backendMissionResponses,
  handleRunBackendMission,
}) {
  return (
    <section ref={registerSectionRef('backendLab')} id="section-backend-lab" className="section-card backend-lab-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">05. Spring Boot 後端應用實作</p>
          <h2>不只看 API 名稱，直接拆解驗證、分層、回應整理與統計摘要</h2>
        </div>
        <p className="section-note">可直接切換後端案例，並查看真實 API JSON。</p>
      </div>

      <div className="stats-grid">
        <article className="summary-card">
          <p className="summary-label">lesson 數量</p>
          <strong>{learningStats.lessonCount}</strong>
          <span>前端目前的完整 lesson 總數</span>
        </article>
        <article className="summary-card">
          <p className="summary-label">hooks 教學數量</p>
          <strong>{learningStats.hookCount}</strong>
          <span>頁面上可直接學習的常用 hook 數量</span>
        </article>
        <article className="summary-card">
          <p className="summary-label">後端筆記數量</p>
          <strong>{learningStats.noteCount}</strong>
          <span>每次送出學習筆記後，這個數字都可能改變</span>
        </article>
        <article className="summary-card">
          <p className="summary-label">後端能力</p>
          <strong>{learningStats.backendCapabilities.length}</strong>
          <span>目前教學 API 與後端摘要能力數量</span>
        </article>
      </div>

      <div className="backend-lab-layout">
        <div className="backend-lab-list">
          {availableBackendLabs.map((lab) => (
            <button
              key={lab.id}
              type="button"
              className={lab.id === selectedBackendLab?.id ? 'backend-lab-card active' : 'backend-lab-card'}
              onClick={() => handleSelectBackendLab(lab.id)}
            >
              <span className="hook-badge">{lab.httpMethod}</span>
              <strong>{lab.title}</strong>
              <small>
                {lab.endpoint} · {lab.summary}
              </small>
            </button>
          ))}
        </div>

        <article className="backend-lab-detail info-card">
          <p className="demo-label">
            {selectedBackendLab?.httpMethod} {selectedBackendLab?.endpoint}
          </p>
          <h3>{selectedBackendLab?.title}</h3>
          <p>{selectedBackendLab?.whyItMatters}</p>

          <ul className="mini-list">
            {selectedBackendLab?.backendSteps.map((step) => <li key={step}>{step}</li>)}
          </ul>

          <div className="backend-code-grid">
            <div>
              <p className="summary-label">Request example</p>
              <pre className="mini-code-block">
                <code>{selectedBackendLab?.requestExample}</code>
              </pre>
            </div>
            <div>
              <p className="summary-label">Response example</p>
              <pre className="mini-code-block">
                <code>{selectedBackendLab?.responseExample}</code>
              </pre>
            </div>
          </div>

          <div className="search-keywords">
            {selectedBackendLab?.codePointers.map((pointer) => (
              <span key={pointer} className="search-chip">
                {pointer}
              </span>
            ))}
          </div>

          <p className="component-task">實作練習：{selectedBackendLab?.practiceTask}</p>

          <div className="button-row">
            <button type="button" className="primary-button" onClick={handlePreviewBackendLabs}>
              查看 /backend-labs JSON
            </button>
            <button type="button" className="ghost-button" onClick={handlePreviewLearningStats}>
              查看 /stats JSON
            </button>
          </div>

          <div className="search-keywords">
            {learningStats.backendCapabilities.map((capability) => (
              <span key={capability} className="search-chip">
                {capability}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="backend-mission-block">
        <div className="section-heading">
          <div>
            <p className="section-kicker">05A. 後端實戰任務</p>
            <h3>不只讀說明：按下按鈕真的打一次 API，並自動幫你驗證結果</h3>
          </div>
          <p className="section-note">已完成 {completedBackendMissionCount} / {backendPracticeMissions.length} 個任務（結果會自動保存）</p>
        </div>

        <div className="challenge-grid">
          {backendPracticeMissions.map((mission) => {
            const result = backendMissionResults[mission.id]
            const missionResponse = backendMissionResponses[mission.id]
            return (
              <article key={mission.id} className={result?.passed ? 'challenge-card info-card mission-card-passed' : 'challenge-card info-card'}>
                <p className="demo-label">{mission.difficulty}</p>
                <h3>{mission.title}</h3>
                <p>{mission.goal}</p>
                <p>
                  <strong>通過條件：</strong>
                  {mission.expectation}
                </p>
                <small>{mission.explains}</small>
                <div className="button-row">
                  <button type="button" className="primary-button" onClick={() => handleRunBackendMission(mission)}>
                    執行任務並驗證
                  </button>
                </div>
                {result ? (
                  <p className={result.passed ? 'quiz-feedback mission-feedback-passed' : 'quiz-feedback mission-feedback-failed'}>
                    {result.passed ? '✅ 通過：' : '❌ 未通過：'}
                    {result.summary}
                  </p>
                ) : (
                  <p className="demo-tip">還沒執行過這個任務，按上面的按鈕試一次。</p>
                )}
                {missionResponse ? (
                  <details className="mission-response" open>
                    <summary>查看 API 回應（{missionResponse.endpoint}）</summary>
                    <pre className="mini-code-block mission-response-body">
                      <code>{JSON.stringify(missionResponse.body, null, 2)}</code>
                    </pre>
                  </details>
                ) : null}
                <small>對應後端程式碼：{mission.codePointer}</small>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
