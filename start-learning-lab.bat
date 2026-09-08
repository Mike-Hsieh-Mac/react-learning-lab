@echo off
setlocal

set "NO_BROWSER="
set "CURRENT_WINDOW="
set "SKIP_INSTALL="

:parseArgs
if "%~1"=="" goto afterArgs
if /I "%~1"=="--no-browser" set "NO_BROWSER=1"
if /I "%~1"=="--current-window" set "CURRENT_WINDOW=1"
if /I "%~1"=="--skip-install" set "SKIP_INSTALL=1"
shift
goto parseArgs

:afterArgs
set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "FRONTEND=%ROOT%\react_learning_example"

echo [1/3] Preparing frontend...
pushd "%FRONTEND%" || exit /b 1

if not defined SKIP_INSTALL (
  call npm install
  if errorlevel 1 goto fail
) else (
  echo Skipping npm install because --skip-install was provided.
)

echo [2/3] Building React frontend for Spring Boot...
call npm run build
if errorlevel 1 goto fail
popd

echo [3/3] Starting Spring Boot...
if defined CURRENT_WINDOW (
  if not defined NO_BROWSER start "" "http://localhost:8080"
  pushd "%ROOT%" || exit /b 1
  call .\mvnw.cmd spring-boot:run
  set "EXIT_CODE=%errorlevel%"
  popd
  exit /b %EXIT_CODE%
)

start "Spring Boot Learning Lab" cmd /k "cd /d ""%ROOT%"" && .\mvnw.cmd spring-boot:run"
timeout /t 8 /nobreak >nul
if not defined NO_BROWSER start "" "http://localhost:8080"

echo.
echo Learning Lab should now be available at http://localhost:8080
echo Use stop-learning-lab.bat when you want to stop the service.
exit /b 0

:fail
set "EXIT_CODE=%errorlevel%"
popd
echo.
echo Startup failed. Please check the error messages above.
exit /b %EXIT_CODE%

