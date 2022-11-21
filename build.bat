cd exec
call runRestore.bat
cd /d %~dp0
cd exportA4
npm install &&npm run build