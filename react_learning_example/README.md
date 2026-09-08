# React + Spring Boot Learning Lab（前端）
給完全沒碰過 React / Spring Boot 的新人用的互動學習平台。
前端是 Vite + React，後端是同一個 repo 根目錄的 Spring Boot 專案。
## 快速開始
```powershell
# 1. 啟動後端（在 repo 根目錄）
cd ..
.\mvnw.cmd spring-boot:run
# 2. 啟動前端開發伺服器（在本資料夾）
npm install
npm run dev
```
前端開發模式會透過 Vite proxy 呼叫後端 `/api/learning/*`。
執行 `npm run build` 會把靜態產物輸出到後端的 `src/main/resources/static/`，
之後只跑 Spring Boot 就能看到完整頁面。
## 頁面區塊地圖
| 編號 | 區塊 | 在做什麼 |
|---|---|---|
| 01 | 新手快速上手地圖 | 先知道要學什麼、順序是什麼 |
| 02 | 名詞字典 | 術語翻成白話，附 React / Spring 對照 |
| 03 | 常用組件練習區 | Button / Input / List 實際互動 |
| 03A | 5 分鐘立即練習 | Counter 等快速小任務 |
| 03B / 03C | 破碎代碼救援區 | 選出錯誤原因，並真的動手修好壞掉的程式碼 |
| 03D | React Render 流程 | render / commit / effect 時序與依賴陣列 |
| 04 | Hooks 工具箱 | 常用 hook 的用途、格式與專案位置 |
| 05 | Spring Boot 後端實作 | 後端案例拆解：驗證、分層、錯誤格式… |
| 05A | 後端實戰任務 | 按按鈕真的打 API，自動驗證回應（完整 CRUD） |
| 05B | Java 新手基礎導讀 | 9 個 Java 概念搭配 JS 對照，答對測驗才解鎖下一個 |
| 05C | Java 程式碼導讀任務 | 逐行解讀真實的 service 程式碼 |
| 06 | 資料流導覽 | 前端 → Controller → Service → Repository 全流程 |
| 07 | 完整 lesson 練習 | state / props / form / hooks / api / backendCrud |
| 08 | 程式碼對照 | 同一功能的 React 與 Spring Boot 寫法 |
| 09 | 新手練習題 | 每課的選擇題，答錯會解釋原因 |
| 10 | 可編輯程式碼實驗室 | 改程式碼立即看預覽 |
| 11 | 後端資料結果 | 真實操作筆記 CRUD 與查詢分頁 |
| 12 | 觀察與除錯 | 事件紀錄與 API 回應預覽 |
| 13 | 全端小專案實戰 | 自己從零寫一個 /api/tasks + TaskBoard 元件，平台自動驗收 |
| 14 | 面試級全端專案 | 短網址服務 + 記帳小幫手：JPA 資料庫實作、自動驗收、附面試攻防清單 |
| 15 | Docker 容器化實戰 | 用專案根目錄的 Dockerfile / docker-compose.yml 把整個專案打包，含 Volume 持久化與面試攻防 |
## 檔案結構
```text
src/
├── App.jsx                 # 狀態與邏輯中樞（handler 都有分組註解可搜尋）
├── App.css                 # 頁面樣式
├── learningContent.js      # 所有教材資料（lesson、字典、後端案例、任務、小專案）
├── javaPractice.js         # Java 概念測驗與程式碼導讀資料
└── components/
    ├── RenderFlowSection.jsx      # 03D React Render 流程
    ├── HooksToolboxSection.jsx    # 04 Hooks 工具箱
    ├── BackendLabSection.jsx      # 05 + 05A 後端案例與實戰任務
    ├── JavaBasicsSection.jsx      # 05B + 05C Java 導讀與測驗
    ├── LessonPracticePanel.jsx    # 07 完整 lesson 練習
    ├── PropsLessonDemo.jsx        # props lesson 的互動示範
    ├── CapstoneProjectSection.jsx # 13 全端小專案實戰（TaskBoard 引導）
    ├── InterviewProjectsSection.jsx # 14 面試級全端專案（短網址 + 記帳）
    ├── DockerSection.jsx          # 15 Docker 容器化實戰
    └── MyTaskBoard.jsx            # 學員自己完成的 13 區成果
```
容器化相關檔案在**專案根目錄**（不在這個資料夾），全部附詳細教學註解：
- `../Dockerfile`：多階段建置（Node build 前端 → Maven 打包 → JRE 執行）
- `../.dockerignore`：不進 build context 的清單
- `../docker-compose.yml`：一鍵啟動 + volume 持久化（含註解版 PostgreSQL 進階練習）
設計原則：**狀態與 handler 都留在 `App.jsx`**，元件是純呈現層，
教材資料由元件自己從 `learningContent.js` / `javaPractice.js` import。
學習進度（lesson 造訪、測驗結果、任務完成）自動存在 localStorage。
## 新手建議閱讀順序
1. 打開頁面照 01 → 02 → 03 的順序玩過一遍
2. 想懂 hook 就看 03D + 04
3. 想懂後端就走 05B（Java 語法）→ 05C（讀真程式碼）→ 05（案例）→ 05A（動手打 API）
4. 最後用 07 - 11 把前後端串起來
5. 全部看完後，挑戰 13 全端小專案：自己寫 `/api/tasks` 後端 + `MyTaskBoard.jsx` 前端，每個 Stage 都有明確步驟、參考解答與自動驗收
6. 想準備面試就做 14 面試級專案：短網址服務（JPA、唯一約束、302 轉址）與記帳小幫手（查詢參數、groupingBy 統計），做完把「面試攻防」的每一題都講得出來
7. 最後走 15 Docker 容器化：安裝 → 讀懂 Dockerfile → build/run → volume 持久化 → compose 一鍵啟動，把整個專案打包帶走
想看程式碼實作時：
- 前端邏輯：`src/App.jsx`（搜尋 `// ---` 可以跳到各功能分組）
- 教材內容：`src/learningContent.js`
- 後端 API：`../src/main/java/com/example/react_learning/learning/`
## 常用指令
```powershell
npm run dev      # 開發伺服器
npm run lint     # ESLint 檢查
npm run build    # 打包到後端 static/
cd ..; .\mvnw.cmd test   # 後端測試
```
