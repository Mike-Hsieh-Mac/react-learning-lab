# ============================================================================
# Dockerfile：把整個全端專案（React + Spring Boot + H2）打包成一個映像檔
#
# 這是「多階段建置（multi-stage build）」：
#   階段 1（frontend）：用 Node 環境 build React
#   階段 2（backend） ：用 Maven 環境把 jar 打包出來（並塞入前端成果）
#   階段 3（runtime） ：只留「執行需要的東西」——一個 JRE + 一個 jar
#
# 為什麼要分階段？
#   Node、Maven 這些「建置工具」只有 build 時需要，執行時完全用不到。
#   如果全部塞進同一個映像檔，體積會超過 1GB；
#   多階段建置最後只保留 runtime 階段，映像檔可以縮到 ~300MB。
#   這是 Docker 面試必考題。
# ============================================================================

# ---------- 階段 1：Build React 前端 ----------
# FROM 語法：FROM <基底映像> AS <階段名稱>
# node:22-alpine：alpine 是超輕量 Linux（約 5MB），適合當建置環境
FROM node:22-alpine AS frontend
WORKDIR /build

# 先只複製 package.json / package-lock.json 再 npm ci —— 這是「快取優化」技巧：
# Docker 每一行指令都會產生一層快取（layer），只要檔案沒變就直接重用。
# 相依套件很少變、程式碼常常變，所以把「裝套件」和「複製程式碼」拆成兩步，
# 之後改程式碼重新 build 時，npm ci 那層直接命中快取，省下好幾分鐘。
COPY react_learning_example/package*.json ./
RUN npm ci

# 再複製其餘前端原始碼並建置。
# --outDir dist：覆蓋 vite.config.js 裡的輸出路徑（原本指向後端 static 資料夾，
# 在容器裡我們改輸出到 /build/dist，下一階段再拿去用）
COPY react_learning_example/ ./
RUN npm run build -- --outDir dist --emptyOutDir

# ---------- 階段 2：Build Spring Boot 後端 ----------
FROM maven:3.9-eclipse-temurin-17 AS backend
WORKDIR /build

# 同樣的快取技巧：先複製 pom.xml 把相依抓好，再複製程式碼
COPY pom.xml .
RUN mvn -q dependency:go-offline

COPY src ./src

# 把階段 1 build 好的前端成果，放進 Spring Boot 的靜態資源資料夾。
# COPY --from=<階段名稱>：跨階段複製檔案，這就是多階段建置的接力棒。
COPY --from=frontend /build/dist ./src/main/resources/static

# 打包成可執行的 jar（跳過測試讓 build 快一點；CI 上通常會另外跑測試）
RUN mvn -q package -DskipTests

# ---------- 階段 3：Runtime（最終映像檔只有這一段會留下來） ----------
# 只需要 JRE（執行環境），不需要 JDK（開發環境），映像檔更小
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# 只從階段 2 拿「一個 jar」——Node、Maven、原始碼全都不會進到最終映像檔
COPY --from=backend /build/target/*.jar app.jar

# VOLUME：宣告 /app/data 是「資料要放外面」的目錄。
# H2 資料庫檔案存在 ./data（也就是容器裡的 /app/data），
# 搭配 docker run -v 或 docker-compose 的 volume，
# 容器刪掉重建，資料庫檔案依然存在——這就是容器資料持久化的核心。
VOLUME /app/data

# EXPOSE 只是「文件性宣告」告訴使用者這個服務聽 8080，
# 實際要對外開放還是得靠 docker run -p 8080:8080
EXPOSE 8080

# 容器啟動時執行的指令：跟你平常在終端機跑 java -jar 一模一樣
ENTRYPOINT ["java", "-jar", "app.jar"]

