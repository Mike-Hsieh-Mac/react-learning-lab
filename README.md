# React + Spring Boot Learning Lab

這是一個給新人的互動式學習專案，目標不是只把頁面做出來，而是讓你可以 **一邊操作網頁、一邊對照程式碼、一邊理解前後端資料流**。

現在的版本特別強化了 **完全新手也能快速上手** 的路線：先看名詞、再玩常用組件、再跟著 **闖關式新手訓練營** 一步步完成任務，最後進到完整功能。

## 你可以學到什麼

- React 的 `useState` 怎麼控制畫面更新
- React 常用 hooks：`useEffect`、`useMemo`、`useCallback`、`useRef`
- controlled form 怎麼寫
- React 如何用 `fetch` 呼叫後端 API
- Spring Boot 的 `Controller -> Service -> JSON Response` 架構
- Spring Boot 的輸入驗證、資料整理、後端統計摘要怎麼做
- Spring Boot CRUD：單筆查詢、更新、刪除與前端同步
- 更像真實專案的列表 API：搜尋、filter、分頁
- 統一錯誤回應格式：status / code / message / fieldErrors
- Repository / Mapper / Service 分層的基本概念
- 使用者操作之後，資料怎麼在前端與後端之間流動

## 專案結構

- `src/main/java/...`：Spring Boot 後端 API
- `react_learning_example/src/`：React + Vite 前端

## 互動式學習內容

頁面分成多個主要學習區：

1. **新手快速上手地圖**
   - 照順序理解該先學什麼
   - 避免一開始就直接掉進 API 與資料流細節
2. **名詞字典**
   - JSX / Component / State / API / JSON / Controller / Service
   - 每個詞都有 React 與 Spring Boot 的白話例子
3. **常用組件練習區**
   - Button
   - Input
   - List
   - Conditional Rendering
   - 每個組件都有即時互動與程式碼範例
4. **完整 lesson 練習**
   - 從 React state、表單送出，到 Spring Boot API
 5. **React 常用 Hooks 工具箱**
    - `useState` / `useEffect` / `useMemo` / `useCallback` / `useRef`
    - 每個 hook 都有用途、常見卡點與專案內定位方式
   5A. **新手快吸收路線**
      - 15 分鐘 / 30 分鐘 / 60 分鐘三種學習路線
      - 適合時間有限、想先快速有感的新人
   5B. **5 分鐘立即練習**
      - 每個小任務都能快速完成
      - 做完會直接對應到後面的 lesson 與 API 操作
     5C. **破碎代碼救援區**
        - 直接看故意寫錯的程式碼
        - 自己選修法、看提示、理解為什麼會錯
            - 現在會依照 lesson 解鎖，避免新手一次看到太多類型的錯誤
         5D. **真實模擬錯誤 Playground**
            - 不只是選答案，而是真的自己把錯的程式碼改對
            - 會即時檢查你修得對不對
                 5E. **最小可交付作品工作坊**
                    - 每一課都會對應一個最小可交付作品
                    - 新手可以用最小範圍快速做出成果、建立信心
                                 5F. **學習進度保存與今日推薦**
                                    - 會自動記住目前學到哪裡
                                    - 會依照你的進度與可投入時間，推薦今天最適合的學習順序
                                                                 5G. **成果展示牆與里程碑徽章**
                                                                    - 已完成的最小作品會顯示在成果牆上
                                                                    - 會依照學習進度解鎖徽章，幫助新手更有持續感
 6. **Spring Boot 後端應用實作**
    - 驗證、回應整理、Controller / Service 分工、統計摘要
    - 可直接查看 `backend-labs` 與 `stats` API 的 JSON
   7. **前端改完 → 後端對照導覽模式**
      - 告訴新人先改哪一層、再去哪裡對照、最後怎麼驗證
      - 避免只改前端或只改後端卻不知道另一邊要怎麼接
      7A. **新手除錯教學模式**
        - 用常見錯誤情境教新人「問題出現時要先查哪裡」
        - 每題都有逐步提示、答案回饋、以及實際程式碼定位
   8. **程式碼定位導航**
   - 直接告訴新人要去哪個檔案找哪個 symbol
   - 降低「程式碼太多不知道從哪裡看」的焦慮
   9. **新手信心累積區**
   - 用任務勾選的方式，讓新人知道自己已經掌握了哪些能力
   10. **闖關式新手訓練營**
   - 每一關都對應一個真實互動操作
   - 新人可以直接看到自己完成了哪一關、下一步該做什麼
   11. **完整 lesson 練習**
      - 現在包含獨立的 hooks lesson 與 backend CRUD lesson
          - 每課都新增「最容易搞混的地方」與「情境應用題」
          - 現在也可搭配除錯模式一起練 root cause 判斷
       12. **最小可交付作品**
          - 每學完一課，就交出一個最小成果
          - 適合新手把零散知識變成可展示的小作品
               13. **學習進度保存 / 分段學習規劃**
                  - 避免一次吸收太多內容造成挫折
                  - 讓新人更容易用 15 / 30 / 60 分鐘模式穩定前進
                               14. **成果展示 / 徽章鼓勵**
                                  - 完成學習任務後會留下看得見的成果
                                  - 有助於新手累積成就感與持續練習動機
   12. **作業型實戰任務**
      - 不只是選擇題，而是更像真正交作業的需求卡
   13. **新手練習題**
   - 每一課有快速題目與即時解說
   - 做錯也能立刻知道為什麼
   14. **可編輯程式碼實驗室**
   - 讓新手直接改一小段程式碼
   - 立刻看到畫面或 JSON 預覽怎麼變

頁面內建三個 lesson：

現在的 lesson 已擴充為 5 個：

1. **React Hooks 實戰入門**
   - 分清楚 `useState` / `useEffect` / `useMemo` / `useCallback` / `useRef`
   - 對照 hooks 工具箱與真實專案用法
2. **React State 入門**
   - 點擊按鈕觀察 state 改變
   - 對照 `useState` 與事件處理寫法
3. **表單控制與資料送出**
   - 輸入名字與問題
   - 送出到 Spring Boot API
   - 觀察畫面如何同步更新
4. **API 資料流**
   - 重新抓取後端資料
   - 看 JSON response
   - 觀察事件紀錄與資料流
5. **後端 CRUD 與資料同步**
   - 單筆讀取 note
   - 更新 note
   - 刪除 note
   - 理解前端與後端如何一起保持資料一致
   - 現在也包含搜尋、feature filter、分頁與統一錯誤格式

另外，每個 lesson 都有：

- 「這一課先懂」概念卡
- 「常見卡點」提醒
- 「逐步語法解說」區塊
- 「加強練習」挑戰卡
- React / Spring Boot / 資料流三種程式碼對照
- 「這一課要去哪些檔案找」導航
- 「這一課做完後，你應該有的信心」清單
- 更完整的新手練習題

## 啟動方式

### 0. 一鍵啟動（最適合新人）

在專案根目錄直接雙擊 `start-learning-lab.bat`，或在 PowerShell 執行：

```powershell
Set-Location "C:\Users\mikech_hsieh\IdeaProjects\React_Learning"
.\start-learning-lab.bat
```

它會自動：

- 安裝前端套件（如果尚未安裝）
- build React 前端
- 啟動 Spring Boot
- 幫你打開 `http://localhost:8080`

停止時可執行：

```powershell
Set-Location "C:\Users\mikech_hsieh\IdeaProjects\React_Learning"
.\stop-learning-lab.bat
```

### 1. 啟動 Spring Boot

```powershell
Set-Location "C:\Users\mikech_hsieh\IdeaProjects\React_Learning"
.\mvnw.cmd spring-boot:run
```

### 2. 啟動 React 前端

```powershell
Set-Location "C:\Users\mikech_hsieh\IdeaProjects\React_Learning\react_learning_example"
npm install
npm run dev
```

前端開發伺服器預設會跑在 `http://localhost:5173`，而且已經設定好將 `/api` 代理到 `http://localhost:8080`。

## 建議學習順序

1. 先看「新手快速上手地圖」
2. 再看「名詞字典」把詞彙先看懂
3. 進到「常用組件練習區」玩 Button / Input / List / 條件渲染
4. 再看「React 常用 Hooks 工具箱」
5. 如果時間不多，先走「15 分鐘快速有感路線」
6. 做幾題「破碎代碼救援區」
7. 開啟 `React Hooks 實戰入門` lesson
8. 再看 `React State` lesson
9. 切到 `表單控制與資料送出`
10. 對照 Spring Boot 的 `@PostMapping` 與後端實作案例
11. 最後看 `API 資料流`、`後端 CRUD 與資料同步` 與 `GET /api/learning/stats`

## 後端 API

- `GET /api/learning/overview`
- `GET /api/learning/notes?page=0&size=5&query=&feature=all`
- `GET /api/learning/notes/{id}`
- `POST /api/learning/notes`
- `PUT /api/learning/notes/{id}`
- `DELETE /api/learning/notes/{id}`
- `GET /api/learning/backend-labs`
- `GET /api/learning/stats`

### Notes 列表 API 目前支援

- `page`：第幾頁（從 0 開始）
- `size`：每頁幾筆（目前後端會限制在合理範圍）
- `query`：搜尋學員、主題、問題內容
- `feature`：依主題 filter

### 錯誤回應格式

當驗證失敗或找不到資料時，後端會回統一 JSON，例如：

```json
{
  "status": 400,
  "code": "VALIDATION_ERROR",
  "message": "請先修正欄位錯誤後再送出。",
  "path": "/api/learning/notes",
  "timestamp": "2026-07-30T09:00:00Z",
  "fieldErrors": [
    {
      "field": "learnerName",
      "message": "請輸入學習者名稱"
    }
  ]
}
```

## 驗證專案

### 後端測試

```powershell
Set-Location "C:\Users\mikech_hsieh\IdeaProjects\React_Learning"
.\mvnw.cmd test
```

### 前端建置

```powershell
Set-Location "C:\Users\mikech_hsieh\IdeaProjects\React_Learning\react_learning_example"
npm run build
```

