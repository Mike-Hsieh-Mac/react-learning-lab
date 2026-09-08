import { javaBasicsGuides } from '../learningContent'
import { javaCodeReadingChallenges } from '../javaPractice'

export default function JavaBasicsSection({
  registerSectionRef,
  unlockedJavaGuideCount,
  selectedJavaGuide,
  setSelectedJavaGuideId,
  selectedJavaQuiz,
  javaQuizSelections,
  javaQuizResults,
  handleJavaQuizSelect,
  handleJavaQuizSubmit,
  javaReadingSelections,
  javaReadingResults,
  handleJavaReadingSelect,
  handleJavaReadingSubmit,
}) {
  return (
    <section ref={registerSectionRef('javaBasics')} id="section-java-basics" className="section-card backend-lab-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">05B. Java 新手基礎導讀</p>
          <h2>看得懂 Java 語法，後端程式碼才真的讀得下去</h2>
        </div>
        <p className="section-note">每個概念都對照 JavaScript 的寫法，並告訴你它在這個專案的哪裡出現。</p>
      </div>

      <div className="backend-lab-layout">
        <div className="backend-lab-list">
          {javaBasicsGuides.map((guide, index) => {
            const unlocked = index < unlockedJavaGuideCount
            return (
              <button
                key={guide.id}
                type="button"
                className={guide.id === selectedJavaGuide.id ? 'backend-lab-card active' : 'backend-lab-card'}
                onClick={() => setSelectedJavaGuideId(guide.id)}
                disabled={!unlocked}
              >
                <span className="hook-badge">{unlocked ? 'Java' : '🔒'}</span>
                <strong>{guide.title}</strong>
                <small>{unlocked ? guide.summary : '先通過上一個概念的小測驗，就會解鎖這裡。'}</small>
              </button>
            )
          })}
        </div>

        <article className="backend-lab-detail info-card">
          <p className="demo-label">Java 基礎概念</p>
          <h3>{selectedJavaGuide.title}</h3>
          <p>{selectedJavaGuide.whyItMatters}</p>

          <div className="backend-code-grid">
            <div>
              <p className="summary-label">Java 寫法</p>
              <pre className="mini-code-block">
                <code>{selectedJavaGuide.javaExample}</code>
              </pre>
            </div>
            <div>
              <p className="summary-label">用 JavaScript 來想</p>
              <pre className="mini-code-block">
                <code>{selectedJavaGuide.jsComparison}</code>
              </pre>
            </div>
          </div>

          <p className="component-task">去哪裡看：{selectedJavaGuide.projectPointer}</p>

          <div className="search-keywords">
            {selectedJavaGuide.lookFor.map((keyword) => (
              <span key={keyword} className="search-chip">
                {keyword}
              </span>
            ))}
          </div>

          {selectedJavaQuiz ? (
            <div className="java-quiz-block">
              <h4>概念小測驗：{selectedJavaQuiz.question}</h4>
              <div className="java-quiz-options">
                {selectedJavaQuiz.options.map((option) => (
                  <label key={option.id} className="java-quiz-option">
                    <input
                      type="radio"
                      name={`java-quiz-${selectedJavaGuide.id}`}
                      checked={javaQuizSelections[selectedJavaGuide.id] === option.id}
                      onChange={() => handleJavaQuizSelect(selectedJavaGuide.id, option.id)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              <div className="button-row">
                <button type="button" className="primary-button" onClick={() => handleJavaQuizSubmit(selectedJavaGuide)}>
                  送出答案
                </button>
              </div>
              {javaQuizResults[selectedJavaGuide.id] ? (
                <p className={javaQuizResults[selectedJavaGuide.id].passed ? 'quiz-feedback mission-feedback-passed' : 'quiz-feedback mission-feedback-failed'}>
                  {javaQuizResults[selectedJavaGuide.id].passed
                    ? `✅ 答對了！${selectedJavaQuiz.explanation}`
                    : '❌ 還差一點，回頭看看上面的 Java 範例再試一次。'}
                </p>
              ) : (
                <p className="demo-tip">答對這題就會解鎖下一個 Java 概念。</p>
              )}
            </div>
          ) : null}
        </article>
      </div>

      <div className="java-reading-block">
        <div className="section-heading">
          <div>
            <p className="section-kicker">05C. Java 程式碼導讀任務</p>
            <h3>一行一行讀真實的後端程式碼，替每一行選出正確的解釋</h3>
          </div>
          <p className="section-note">程式碼直接取自 LearningLabService.java，讀懂這兩段就等於看懂主要流程。</p>
        </div>

        {javaCodeReadingChallenges.map((challenge) => {
          const selections = javaReadingSelections[challenge.id] ?? {}
          const result = javaReadingResults[challenge.id]
          return (
            <article key={challenge.id} className="info-card java-reading-card">
              <h3>{challenge.title}</h3>
              <p>{challenge.intro}</p>

              <div className="java-reading-lines">
                {challenge.codeLines.map((line) => {
                  const lineResult = result?.lineResults?.find((item) => item.lineId === line.id)
                  return (
                    <div key={line.id} className="java-reading-line">
                      <pre className="mini-code-block">
                        <code>{line.code}</code>
                      </pre>
                      <select
                        value={selections[line.id] ?? ''}
                        onChange={(event) => handleJavaReadingSelect(challenge.id, line.id, event.target.value)}
                      >
                        <option value="" disabled>
                          這一行在做什麼？
                        </option>
                        {line.options.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <span className="java-reading-mark">{lineResult ? (lineResult.correct ? '✅' : '❌') : ''}</span>
                    </div>
                  )
                })}
              </div>

              <div className="button-row">
                <button type="button" className="primary-button" onClick={() => handleJavaReadingSubmit(challenge)}>
                  檢查我的理解
                </button>
              </div>

              {result ? (
                <p className={result.passed ? 'quiz-feedback mission-feedback-passed' : 'quiz-feedback mission-feedback-failed'}>
                  {result.passed
                    ? '✅ 全部答對！你已經能讀懂這段後端程式碼了。'
                    : `❌ 答對 ${result.correctCount} / ${challenge.codeLines.length} 行，看看打 ❌ 的行再調整。`}
                </p>
              ) : (
                <p className="demo-tip">每一行都選好後，按「檢查我的理解」看看答案。</p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
