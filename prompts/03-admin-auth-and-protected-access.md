# Prompt 03 - Admin Auth and Protected Access

Gunakan prompt ini untuk mengerjakan **Stage 3** dari proyek portfolio website. Fokus hanya pada autentikasi admin dan proteksi akses.

## Prompt

Anda sedang membangun portfolio website fullstack `Next.js` dengan satu akun admin. Gunakan metode **Multi-Stage Prompting** dan kerjakan hanya area autentikasi serta proteksi route admin pada stage ini.

## Project Context

- Fullstack `Next.js`
- Database `PostgreSQL`
- ORM `Prisma`
- Satu admin dengan login `email + password`
- Area admin hanya untuk pemilik website
- Halaman admin: dashboard overview, projects, skills, messages, profile

## Stage Goal

Membuat sistem login admin yang aman, sederhana, dan cukup untuk kebutuhan single-user.

## Multi-Stage Instructions

### Step 1 - Inspect and Decide

- Tinjau fondasi proyek yang sudah ada.
- Pilih pendekatan auth yang paling cocok untuk kebutuhan single admin.
- Jelaskan secara singkat alasan memilih pendekatan tersebut.

### Step 2 - Implement Auth Flow

- Siapkan login dengan `email + password`.
- Tambahkan session handling yang aman dan maintainable.
- Simpan atau kelola credential admin dengan pendekatan yang aman.

### Step 3 - Protect Admin Area

- Lindungi route `/admin` dan seluruh sub-route admin.
- Pastikan pengguna publik tidak bisa mengakses area admin.
- Tambahkan redirect yang masuk akal untuk unauthorized access.

### Step 4 - Keep Scope Controlled

- Jangan membangun seluruh dashboard admin di stage ini.
- Fokus hanya pada login, session, proteksi route, dan akses dasar.

### Step 5 - Verify

- Pastikan login berhasil.
- Pastikan route admin terlindungi.
- Ringkas auth flow dan titik proteksinya.

## Expected Output

- Sistem login admin yang bekerja
- Session atau auth state yang stabil
- Route admin yang terlindungi

## Constraints

- Single admin only
- Hindari auth system yang terlalu kompleks
- Prioritaskan keamanan dasar yang baik dan implementasi yang mudah dirawat
