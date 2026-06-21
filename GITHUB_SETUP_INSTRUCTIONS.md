# Cara Push Website ke GitHub

## Langkah 1: Install Git
Git belum terinstall di komputer Anda. Silakan install terlebih dahulu:

1. Download Git dari: https://git-scm.com/download/win
2. Jalankan installer dan ikuti petunjuk instalasi
3. Setelah selesai, restart terminal/command prompt Anda

## Langkah 2: Buat Repository di GitHub

1. Buka browser dan pergi ke https://github.com
2. Login dengan akun **rehanferdian06**
3. Klik tombol **"+"** di pojok kanan atas, pilih **"New repository"**
4. Isi nama repository: **music-portfolio** (atau nama lain yang Anda inginkan)
5. Pilih **Public** atau **Private**
6. **JANGAN** centang "Initialize this repository with a README"
7. Klik **"Create repository"**

## Langkah 3: Push ke GitHub (Setelah Git Terinstall)

Setelah Git terinstall dan repository GitHub sudah dibuat, buka Command Prompt atau PowerShell di folder `music-portfolio` dan jalankan perintah berikut satu per satu:

```bash
# Inisialisasi Git repository
git init

# Konfigurasi user
git config user.name "rehanferdian06"
git config user.email "rehanferdian566@gmail.com"

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit: Music Portfolio Website"

# Tambahkan remote repository (ganti 'music-portfolio' dengan nama repo Anda jika berbeda)
git remote add origin https://github.com/rehanferdian06/music-portfolio.git

# Push ke GitHub
git push -u origin master
```

**CATATAN PENTING:**
- Jika branch default adalah `main` bukan `master`, gunakan: `git push -u origin main`
- Jika ada error, coba: `git branch -M main` lalu `git push -u origin main`

## Langkah 4: Verifikasi

Setelah push berhasil, buka browser dan pergi ke:
```
https://github.com/rehanferdian06/music-portfolio
```

Anda akan melihat semua file website Anda sudah terupload!

## Langkah 5: Deploy ke GitHub Pages (Opsional)

Untuk membuat website Anda live dan bisa diakses publik:

1. Di repository GitHub, klik **Settings**
2. Scroll ke bawah ke bagian **Pages** (di menu kiri)
3. Di bagian **Source**, pilih **main** atau **master** branch
4. Klik **Save**
5. Website Anda akan live di: `https://rehanferdian06.github.io/music-portfolio/`

---

## Troubleshooting

### Jika Git masih tidak dikenali setelah install:
1. Restart komputer Anda
2. Atau tambahkan Git ke PATH secara manual

### Jika ada error saat push:
1. Pastikan nama repository di GitHub sudah benar
2. Pastikan token akses masih valid
3. Coba gunakan `git push -f origin master` (hati-hati, ini akan overwrite)

---

**Selamat! Website musik portfolio Anda siap di GitHub! 🎵🎸**
