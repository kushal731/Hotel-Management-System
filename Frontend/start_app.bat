@echo off
cd /d "G:\kushal drive g\coding\Full Stack Development\Project\Hotel Management System\Frontend"
start cmd /k "npm run dev -- --host"
start cmd /k "ngrok http 5173"