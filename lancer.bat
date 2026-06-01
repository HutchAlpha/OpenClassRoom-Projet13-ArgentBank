@echo off
title Argent Bank - Lancement

:: Chemin du projet
cd /d "%~dp0"

echo ================================================
echo        ARGENT BANK - Demarrage
echo ================================================
echo.

:: Verifier si node_modules existe
if not exist "node_modules" (
    echo [INFO] Installation des dependances...
    call npm install
    if errorlevel 1 (
        echo [ERREUR] L'installation des dependances a echoue
        pause
        exit /b 1
    )
    echo.
)

:: Verifier les dependances importantes
echo [INFO] Verification des dependances...
for %%i in (concurrently nodemon) do (
    if not exist "node_modules\%%i" (
        echo [ERREUR] %%i n'est pas installe. Reinstallation des dependances...
        call npm install
        if errorlevel 1 (
            echo [ERREUR] L'installation a echoue
            pause
            exit /b 1
        )
        goto :break_loop
    )
)
:break_loop

echo.
:: ---------------- NOUVEAU BLOC MONGODB ----------------
echo [INFO] Demarrage de la base de donnees MongoDB...
:: Lance MongoDB reduit dans la barre des taches pour ne pas gener
start "argentBankDB" /min mongod
:: Attend 3 secondes pour que la base de donnees ait le temps de s'allumer
timeout /t 3 /nobreak >nul
:: ------------------------------------------------------
echo.

echo [INFO] Demarrage du serveur backend  (port 3001)...
echo [INFO] Demarrage du frontend Vite    (port 5173)...
echo.
echo   Backend  : http://localhost:3001
echo   Frontend : http://localhost:5173
echo   API Docs : http://localhost:3001/api-docs
echo.
echo [INFO] Appuyez sur Ctrl+C pour tout arreter...
echo ================================================
echo.

:: Lancer les deux serveurs en parallele
call npm run dev

:: ---------------- BLOC DE FERMETURE ----------------
echo.
echo [INFO] Fermeture de MongoDB en cours...
taskkill /F /IM mongod.exe >nul 2>&1
echo [INFO] MongoDB est ferme proprement.
:: ---------------------------------------------------

if errorlevel 1 (
    echo.
    echo [ERREUR] Le demarrage des serveurs a echoue ou a ete interrompu.
    pause
    exit /b 1
)

pause