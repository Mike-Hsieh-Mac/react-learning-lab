@echo off
setlocal

set "FOUND="
for /f "tokens=5" %%P in ('netstat -ano ^| findstr :8080 ^| findstr LISTENING') do (
  echo Stopping Spring Boot process on port 8080 with PID %%P...
  taskkill /PID %%P /F >nul 2>&1
  if not errorlevel 1 set "FOUND=1"
)

if not defined FOUND (
  echo No running process was found on port 8080.
) else (
  echo Spring Boot service has been stopped.
)

endlocal

