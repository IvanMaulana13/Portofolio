# Prompt 09 - Testing, Optimization, and Release Readiness

Gunakan prompt ini untuk mengerjakan **Stage 9** dari proyek portfolio website. Fokus pada validasi akhir, optimasi, dan kesiapan rilis.

## Prompt

Masuk ke tahap akhir proyek portfolio website ini dengan pendekatan **Multi-Stage Prompting**. Pada stage ini, fokus pada testing, optimasi, stabilitas, dan kesiapan deploy.

## Project Context

- Website fullstack `Next.js`
- Public pages, admin dashboard, auth, contact form, dan hero animation sudah dibangun
- Website harus stabil, performan, dan siap dipublikasikan

## Stage Goal

Memastikan aplikasi siap digunakan secara nyata dengan risiko bug yang lebih rendah dan performa yang baik.

## Multi-Stage Instructions

### Step 1 - Audit the Current Product

- Tinjau fitur utama yang sudah ada.
- Identifikasi area berisiko tinggi atau belum tervalidasi.

### Step 2 - Validate Core Flows

- Uji flow publik
- Uji login admin
- Uji CRUD konten utama
- Uji contact form
- Uji behavior theme dan responsive layout

### Step 3 - Optimize

- Rapikan performa rendering
- Optimalkan image dan asset loading
- Tinjau query, loading state, dan komponen yang berpotensi berat
- Pastikan hero image sequence tetap efisien

### Step 4 - Prepare Release Readiness

- Rapikan environment variables
- Pastikan konfigurasi database dan build process jelas
- Identifikasi kebutuhan deployment dan hal-hal yang harus dicek sebelum publish

### Step 5 - Verify and Report

- Ringkas masalah yang ditemukan, apa yang diperbaiki, dan risiko yang masih tersisa.
- Jelaskan apakah proyek sudah cukup siap untuk deploy.

## Expected Output

- Aplikasi lebih stabil
- Flow utama tervalidasi
- Performa lebih baik
- Proyek siap masuk tahap deployment

## Constraints

- Fokus pada stabilitas dan kualitas akhir
- Jangan mengubah arsitektur besar kecuali benar-benar diperlukan
- Prioritaskan perbaikan yang punya dampak nyata
