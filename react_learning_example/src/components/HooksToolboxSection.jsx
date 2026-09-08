import { hookDecisionGuides, hookPracticeMissions, reactHookGuides } from '../learningContent'

export default function HooksToolboxSection({
  registerSectionRef,
  filteredHookGuides,
  hookKeyword,
  hookSearchInputRef,
  handleHookKeywordChange,
  handleFocusHookSearch,
  handleResetHookSearch,
  handleHighlightHookGuide,
  handleNavigateToTarget,
}) {
  return (
    <section ref={registerSectionRef('hooks')} id="section-hooks" className="section-card hooks-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">04. React 常用 Hooks 工具箱</p>
          <h2>把常見 hook 的用途、時機與實際專案位置一次串起來</h2>
        </div>
        <p className="section-note">
          目前顯示 {filteredHookGuides.length} / {reactHookGuides.length} 個 hook 教學卡
        </p>
      </div>

      <div className="challenge-grid hook-decision-grid">
        {hookDecisionGuides.map((decision) => {
          const relatedGuide = reactHookGuides.find((guide) => guide.id === decision.hookId)

          return (
            <article key={decision.id} className="challenge-card info-card hook-decision-card">
              <div className="hook-card-header">
                <p className="demo-label">我想做什麼？</p>
                <span className="hook-badge">{relatedGuide?.hook ?? 'Hook'}</span>
              </div>
              <h3>{decision.question}</h3>
              <strong>{decision.answer}</strong>
              <p>{decision.explanation}</p>
              <small>{decision.example}</small>
              <div className="jump-button-row">
                {relatedGuide ? (
                  <button
                    type="button"
                    className="ghost-button jump-button"
                    onClick={() => handleHighlightHookGuide(relatedGuide.hook)}
                  >
                    只看這個 hook
                  </button>
                ) : null}
                {relatedGuide?.jumpTarget ? (
                  <button
                    type="button"
                    className="ghost-button jump-button"
                    onClick={() => handleNavigateToTarget(relatedGuide.jumpTarget)}
                  >
                    看真實範例位置
                  </button>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>

      <div className="hook-toolbar">
        <input
          ref={hookSearchInputRef}
          value={hookKeyword}
          onChange={handleHookKeywordChange}
          placeholder="搜尋 hook，例如：effect、memo、ref"
        />
        <button type="button" className="ghost-button" onClick={handleFocusHookSearch}>
          聚焦 hooks 搜尋框
        </button>
        <button type="button" className="ghost-button" onClick={handleResetHookSearch}>
          清空搜尋
        </button>
      </div>

      {filteredHookGuides.length ? (
        <div className="hook-grid">
          {filteredHookGuides.map((guide) => (
            <article key={guide.id} className="hook-card">
              <div className="hook-card-header">
                <span className="hook-badge">{guide.isUsedInProject ? '本頁實戰中' : '延伸學習'}</span>
                <h3>{guide.hook}</h3>
              </div>
              <p>{guide.summary}</p>

              <div className="helper-card hook-question-card">
                <strong>先用這句話判斷</strong>
                <p>{guide.beginnerQuestion}</p>
              </div>

              <div className="hook-example-block">
                <strong>{guide.exampleTitle}</strong>
                <p>{guide.everydayScenario}</p>
                <pre className="mini-code-block">
                  <code>{guide.exampleCode}</code>
                </pre>
                <p className="demo-tip">你會看到：{guide.visibleOutcome}</p>
              </div>

              {guide.formatGuide ? (
                <div className="hook-effect-anatomy-card info-card">
                  <h4>{guide.formatGuide.title}</h4>
                  <pre className="mini-code-block">
                    <code>{guide.formatGuide.signature}</code>
                  </pre>
                  <div className="hook-anatomy-grid">
                    {guide.formatGuide.parts.map((part) => (
                      <article key={`${guide.id}-${part.label}`} className="finder-item hook-anatomy-item">
                        <strong>{part.label}</strong>
                        <p>{part.meaning}</p>
                      </article>
                    ))}
                  </div>
                  <div className="hook-anatomy-grid">
                    <article className="finder-item hook-anatomy-item">
                      <strong>{guide.hook === 'useEffect' ? 'React 執行順序' : '你可以這樣理解它'}</strong>
                      <ul className="mini-list">
                        {guide.formatGuide.usageSteps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                    </article>
                    <article className="finder-item hook-anatomy-item">
                      <strong>{guide.hook === 'useEffect' ? '依賴陣列差異' : '常見格式變化'}</strong>
                      <ul className="mini-list">
                        {guide.formatGuide.patternModes.map((mode) => (
                          <li key={mode.pattern}>
                            <code>{mode.pattern}</code>
                            <br />
                            <small>{mode.timing}｜{mode.bestFor}</small>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              ) : null}

              <ul className="mini-list compact">
                <li>常見用途：{guide.useCase}</li>
                <li>什麼時候用：{guide.useItWhen}</li>
                <li>先不要用在：{guide.avoidItWhen}</li>
                <li>專案例子：{guide.projectExample}</li>
                <li>新手卡點：{guide.beginnerPitfall}</li>
              </ul>

              <div className="hook-example-block">
                <strong>先記住最小語法</strong>
                <pre className="mini-code-block">
                  <code>{guide.syntaxSnippet}</code>
                </pre>
              </div>

              <p className="component-task">程式碼定位：{guide.searchHint}</p>

              <div className="jump-button-row">
                <button type="button" className="ghost-button jump-button" onClick={() => handleHighlightHookGuide(guide.hook)}>
                  聚焦這張 hook 卡
                </button>
                {guide.jumpTarget ? (
                  <button
                    type="button"
                    className="ghost-button jump-button"
                    onClick={() => handleNavigateToTarget(guide.jumpTarget)}
                  >
                    去看真實專案位置
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state empty-state-with-action hook-empty-state">
          <p>目前找不到符合「{hookKeyword}」的 hook。你可以先從新手最常用的三個開始：`useState`、`useEffect`、`useRef`。</p>
          <div className="jump-button-row">
            <button type="button" className="ghost-button jump-button" onClick={() => handleHighlightHookGuide('useState')}>
              看 useState
            </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleHighlightHookGuide('useEffect')}>
              看 useEffect
            </button>
            <button type="button" className="ghost-button jump-button" onClick={() => handleHighlightHookGuide('useRef')}>
              看 useRef
            </button>
          </div>
        </div>
      )}

      <div className="challenge-grid">
        {hookPracticeMissions.map((mission) => (
          <article key={mission.id} className="challenge-card info-card">
            <p className="demo-label">Hooks 練習</p>
            <h3>{mission.title}</h3>
            <p>{mission.action}</p>
            <small>{mission.successSignal}</small>
          </article>
        ))}
      </div>
    </section>
  )
}
