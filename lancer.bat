@echo off
title Argent Bank - Lancement

:: Chemin du projet
cd /d "%~dp0"

echo ================================================
echo          ARGENT BANK - Demarrage
echo ================================================
echo.

:: Verifier si node_modules existe
if not exist "node_modules" (
    echo [INFO] Installation des dependances...
    call npm install
    echo.
)

:: Verifier si MongoDB est accessible (optionnel)
echo [INFO] Demarrage du serveur backend  (port 3001)...
echo [INFO] Demarrage du frontend Vite    (port 5173)...
echo.
echo   Backend  : http://localhost:3001
echo   Frontend : http://localhost:5173
echo   API Docs : http://localhost:3001/api-docs
echo.
echo Appuyez sur Ctrl+C pour tout arreter.
echo ================================================
echo.

:: Lancer les deux serveurs en parallele
call npm run dev

pause
