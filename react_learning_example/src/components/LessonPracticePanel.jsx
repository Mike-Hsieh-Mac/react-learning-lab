export default function LessonPracticePanel({
  sectionRef,
  lessons,
  selectedLesson,
  lessonDemo,
  onSelectLesson,
  onScenarioSelect,
  onNavigateToTarget,
  scenarioSelections,
  scenarioFeedback,
}) {
  const lessonFormatGuide = selectedLesson.effectCallbackGuide ?? selectedLesson.formatGuide

  return (
    <section className="workspace-grid">
      <article ref={sectionRef} id="section-practice" className="section-card practice-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">07. 完整 lesson 練習</p>
            <h2>用互動去理解功能怎麼被做出來</h2>
          </div>
        </div>

        <div className="lesson-tabs" role="tablist" aria-label="選擇 lesson">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              type="button"
              className={lesson.id === selectedLesson.id ? 'lesson-tab active' : 'lesson-tab'}
              onClick={() => onSelectLesson(lesson.id)}
            >
              <span>{lesson.title}</span>
              <small>{lesson.goal}</small>
            </button>
          ))}
        </div>

        <div className="practice-content">
          <div className="practice-intro">
            <h3>{selectedLesson.title}</h3>
            <p>{selectedLesson.goal}</p>
          </div>

          <div className="concept-grid">
            <article className="info-card">
              <h3>這一課先懂</h3>
              <ul className="mini-list">
                {selectedLesson.firstConcepts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h3>常見卡點</h3>
              <ul className="mini-list">
                {selectedLesson.commonPitfalls.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h3>程式碼定位任務</h3>
              <p className="mission-copy">{selectedLesson.codeNavigation.mission}</p>
              <ul className="mini-list">
                {selectedLesson.codeNavigation.beforeYouRead.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h3>這一課最容易搞混的地方</h3>
              <div className="challenge-grid">
                {selectedLesson.mistakeClinic.map((item) => (
                  <article key={item.title} className="challenge-card info-card">
                    <strong>{item.title}</strong>
                    <p>常見想法：{item.wrongThought}</p>
                    <small>修正觀念：{item.correction}</small>
                  </article>
                ))}
              </div>
            </article>
            {lessonFormatGuide ? (
              <article className="info-card effect-callback-guide-card">
                <h3>{lessonFormatGuide.title}</h3>
                <p>{lessonFormatGuide.summary}</p>
                <pre className="mini-code-block">
                  <code>{lessonFormatGuide.signature}</code>
                </pre>
                <div className="finder-list">
                  {lessonFormatGuide.sections.map((section) => (
                    <article key={section.label} className="finder-item">
                      <strong>{section.label}</strong>
                      <p>{section.description}</p>
                    </article>
                  ))}
                </div>
                <div className="challenge-grid hook-effect-example-grid">
                  {lessonFormatGuide.compareSnippets.map((snippet) => (
                    <article key={snippet.title} className="challenge-card info-card">
                      <strong>{snippet.title}</strong>
                      <pre className="mini-code-block">
                        <code>{snippet.code}</code>
                      </pre>
                      <small>{snippet.explanation}</small>
                    </article>
                  ))}
                </div>
              </article>
            ) : null}
            {selectedLesson.hookStructureGuides?.length ? (
              <article className="info-card effect-callback-guide-card">
                <h3>五個常用 hook 的語法格式，應該怎麼看</h3>
                <p>不要只背整行。先看它是「回傳值」還是「接 callback」，再看依賴陣列或 `.current` 扮演什麼角色。</p>
                <div className="hook-structure-lesson-grid">
                  {selectedLesson.hookStructureGuides.map((guide) => (
                    <article key={`lesson-${guide.id}`} className="challenge-card info-card hook-structure-lesson-card">
                      <strong>{guide.hook}</strong>
                      <p>{guide.title}</p>
                      <pre className="mini-code-block">
                        <code>{guide.signature}</code>
                      </pre>
                      <ul className="mini-list">
                        {guide.parts.map((part) => (
                          <li key={`${guide.id}-${part.label}`}>
                            <strong>{part.label}</strong>：{part.meaning}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </article>
            ) : null}
          </div>

          {lessonDemo}

          <div className="practice-steps info-card">
            <h3>你可以這樣學</h3>
            <ol>
              {selectedLesson.practiceSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="challenge-grid">
            {selectedLesson.practiceChallenges.map((challenge) => (
              <article key={challenge.title} className="challenge-card info-card">
                <p className="demo-label">加強練習</p>
                <h3>{challenge.title}</h3>
                <p>{challenge.action}</p>
                <small>{challenge.verify}</small>
              </article>
            ))}
          </div>

          <div className="info-card scenario-card">
            <p className="demo-label">情境應用題</p>
            <h3>{selectedLesson.scenarioChallenge.title}</h3>
            <p>{selectedLesson.scenarioChallenge.situation}</p>
            <div className="quiz-options">
              {selectedLesson.scenarioChallenge.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={scenarioSelections[selectedLesson.id] === option.id ? 'lesson-tab active' : 'lesson-tab'}
                  onClick={() => onScenarioSelect(selectedLesson.id, option)}
                >
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
            {scenarioFeedback[selectedLesson.id] ? <p className="quiz-feedback">{scenarioFeedback[selectedLesson.id]}</p> : null}
          </div>

          <div className="info-card confidence-task-card">
            <h3>這一課做完後，你應該有的信心</h3>
            <ul className="mini-list">
              {selectedLesson.confidenceTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>

          <div className="info-card finder-card">
            <h3>這一課要去哪些檔案找</h3>
            <div className="jump-button-row">
              <button
                type="button"
                className="ghost-button jump-button"
                onClick={() =>
                  onNavigateToTarget({
                    lessonId: selectedLesson.id,
                    sectionKey: 'code',
                    codeTab: 'react',
                  })
                }
              >
                前往 React 程式碼對照
              </button>
            </div>
            <div className="finder-list">
              {selectedLesson.codeNavigation.filePointers.map((pointer) => (
                <article key={`${pointer.filePath}-${pointer.symbol}`} className="finder-item">
                  <code>{pointer.filePath}</code>
                  <strong>{pointer.symbol}</strong>
                  <p>{pointer.purpose}</p>
                  <small>搜尋提示：{pointer.lookFor}</small>
                </article>
              ))}
            </div>
            <div className="search-keywords">
              {selectedLesson.codeNavigation.searchKeywords.map((keyword) => (
                <span key={keyword} className="search-chip">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}



