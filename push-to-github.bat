@echo off
echo ========================================
echo  Push Music Portfolio ke GitHub
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git belum terinstall!
    echo.
    echo Silakan install Git terlebih dahulu dari:
    echo https://git-scm.com/download/win
    echo.
    echo Setelah install, restart terminal dan jalankan script ini lagi.
    pause
    exit /b 1
)

echo [1/7] Inisialisasi Git repository...
git init

echo [2/7] Konfigurasi user Git...
git config user.name "rehanferdian06"
git config user.email "rehanferdian566@gmail.com"

echo [3/7] Menambahkan semua file...
git add .

echo [4/7] Commit perubahan...
git commit -m "Initial commit: Music Portfolio Website"

echo [5/7] Menambahkan remote repository...
git remote add origin https://github.com/rehanferdian06/music-portfolio.git

echo [6/7] Mengubah branch ke main...
git branch -M main

echo [7/7] Push ke GitHub...
git push -u origin main

echo.
echo ========================================
echo  SELESAI! Website berhasil di-push!
echo ========================================
echo.
echo Buka repository Anda di:
echo https://github.com/rehanferdian06/music-portfolio
echo.
pause
