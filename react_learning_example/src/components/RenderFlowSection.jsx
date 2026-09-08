import { reactRenderFlowGuide } from '../learningContent'

export default function RenderFlowSection({
  registerSectionRef,
  selectedRenderFlowMode,
  renderFlowNeedsDependencyInput,
  renderFlowDependencyValue,
  setRenderFlowDependencyValue,
  renderFlowDependencyStory,
  handleSelectRenderFlowMode,
  handleNavigateToTarget,
}) {
  return (
    <section ref={registerSectionRef('renderFlow')} id="section-render-flow" className="section-card render-flow-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">03D. React Render 流程與依賴陣列</p>
          <h2>先看懂 React 什麼時候重新執行元件，再去看 dependency array，hook 會突然清楚很多</h2>
        </div>
        <p className="section-note">這區刻意把 render、commit、effect、memo、callback 的時序拆開，避免新手把它們混成同一件事。</p>
      </div>

      <div className="render-flow-layout">
        <article className="playground-preview-card render-flow-overview-card">
          <div className="playground-copy">
            <p className="demo-label">React Render 主線</p>
            <h3>{reactRenderFlowGuide.title}</h3>
            <p>{reactRenderFlowGuide.summary}</p>
          </div>

          <div className="render-stage-grid">
            {reactRenderFlowGuide.stages.map((stage, index) => (
              <article key={stage.id} className="info-card render-stage-card">
                <div className="render-stage-header">
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </div>
                <small>為什麼重要：{stage.whyItMatters}</small>
                <div className="helper-card">
                  <strong>這一步要特別看</strong>
                  <p>{stage.watchFor}</p>
                </div>
                <div className="search-keywords">
                  {stage.relatedHooks.map((hook) => (
                    <span key={`${stage.id}-${hook}`} className="search-chip">
                      {hook}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="jump-button-row">
            {reactRenderFlowGuide.jumpTargets.map((item) => (
              <button
                key={`render-flow-overview-${item.label}`}
                type="button"
                className="ghost-button jump-button"
                onClick={() => handleNavigateToTarget(item.target)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </article>

        <article className="playground-preview-card render-flow-mode-card">
          <div className="playground-copy">
            <p className="demo-label">dependency array 在哪一步發揮作用？</p>
            <h3>切換不同模式，看 React render 之後到底發生了什麼</h3>
            <p>重點不是背語法，而是搞懂：component 還是會 render，dependency array 只是控制某個 hook 要不要在這一輪重跑或重算。</p>
          </div>

          <div className="lesson-tabs render-mode-tabs" role="tablist" aria-label="切換 React render 與依賴陣列情境">
            {reactRenderFlowGuide.dependencyModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={mode.id === selectedRenderFlowMode.id ? 'lesson-tab active' : 'lesson-tab'}
                onClick={() => handleSelectRenderFlowMode(mode.id)}
              >
                <span>{mode.hook}</span>
                <small>{mode.title}</small>
              </button>
            ))}
          </div>

          <article className="info-card render-mode-detail-card">
            <div className="hook-card-header">
              <span className="hook-badge">{selectedRenderFlowMode.hook}</span>
              <h3>{selectedRenderFlowMode.title}</h3>
            </div>
            <pre className="mini-code-block">
              <code>{selectedRenderFlowMode.signature}</code>
            </pre>
            <p>{selectedRenderFlowMode.renderRelation}</p>

            <div className="helper-card">
              <strong>新手先記這句</strong>
              <p>{selectedRenderFlowMode.beginnerTakeaway}</p>
            </div>

            {renderFlowNeedsDependencyInput ? (
              <label className="inline-label render-dependency-input">
                試著想像目前 dependency 值
                <input
                  value={renderFlowDependencyValue}
                  onChange={(event) => setRenderFlowDependencyValue(event.target.value)}
                  placeholder="例如：keyword、loadNotes、notes"
                />
              </label>
            ) : null}

            <div className="render-story-card info-card">
              <strong>把這次流程想成這樣</strong>
              <ol>
                {renderFlowDependencyStory.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="challenge-grid render-mode-summary-grid">
              <article className="challenge-card info-card">
                <strong>最適合用在</strong>
                <p>{selectedRenderFlowMode.bestFor}</p>
              </article>
              <article className="challenge-card info-card">
                <strong>最容易誤解</strong>
                <p>{selectedRenderFlowMode.caution}</p>
              </article>
            </div>

            <div className="syntax-list info-card">
              <h3>這個模式在 React 裡的順序</h3>
              <ol>
                {selectedRenderFlowMode.sequence.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            {selectedRenderFlowMode.jumpTargets?.length ? (
              <div className="jump-button-row">
                {selectedRenderFlowMode.jumpTargets.map((item) => (
                  <button
                    key={`render-mode-${selectedRenderFlowMode.id}-${item.label}`}
                    type="button"
                    className="ghost-button jump-button"
                    onClick={() => handleNavigateToTarget(item.target)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : null}
          </article>
        </article>
      </div>

      <div className="challenge-grid render-misconception-grid">
        {reactRenderFlowGuide.misconceptions.map((item) => (
          <article key={item.title} className="challenge-card info-card">
            <p className="demo-label">最常搞混</p>
            <h3>{item.title}</h3>
            <p>{item.correction}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
