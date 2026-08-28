@echo off
cd /d "%~dp0"
echo Avvio server locale su http://localhost:8000 ...
start "" http://localhost:8000/index.html
python -m http.server 8000
