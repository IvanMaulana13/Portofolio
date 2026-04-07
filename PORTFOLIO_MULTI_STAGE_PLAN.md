# Portfolio Website Planning

## Overview

Dokumen ini berisi planning high-level untuk membangun web portfolio pribadi menggunakan pendekatan **Multi-Stage Prompting**. Metode ini membagi proses pengembangan ke dalam beberapa tahap yang fokus, sehingga setiap tahap punya tujuan, output, dan ruang lingkup yang jelas sebelum lanjut ke tahap berikutnya.

Planning ini disusun berdasarkan keputusan yang sudah disepakati:

- Arsitektur: `Fullstack Next.js`
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Animation: `Framer Motion`
- Database: `PostgreSQL`
- ORM: `Prisma`
- Theme: `Light Mode` dan `Dark Mode`
- Admin: `Single Admin` dengan login `email + password`
- Contact: form tersimpan ke database
- Hero: keyboard image sequence sebagai visual di samping teks hero
- Struktur website: `Multi-page`
- Visual direction: `Modern Clean`

## Multi-Stage Prompting Approach

Pendekatan ini digunakan agar proses pembuatan tidak langsung meloncat ke coding penuh, tetapi berjalan bertahap dari fondasi, struktur, data, fitur inti, lalu polishing.

Setiap stage harus memenuhi prinsip berikut:

1. Fokus pada satu area utama.
2. Menentukan output yang jelas sebelum lanjut.
3. Mengurangi revisi besar di tahap akhir.
4. Menjaga konsistensi desain, arsitektur, dan data flow.

## Final Product Scope

Website yang akan dibangun mencakup:

- Halaman publik: `Home`, `About`, `Skills`, `Projects`, `Contact`
- Dashboard admin: `Overview`, `Projects`, `Skills`, `Messages`, `Profile`
- Manajemen konten tanpa harus mengubah kode langsung
- Tampilan responsif untuk desktop, tablet, dan mobile
- Dukungan light/dark theme
- Hero animation berbasis image sequence

## Recommended High-Level Structure

### Public Pages

- `/`
- `/about`
- `/skills`
- `/projects`
- `/contact`

### Admin Pages

- `/admin`
- `/admin/projects`
- `/admin/skills`
- `/admin/messages`
- `/admin/profile`

## Planning Stages

### Stage 1: Product Foundation

**Goal**

Menetapkan fondasi proyek, keputusan arsitektur, dan standar implementasi.

**Focus**

- Inisialisasi project `Next.js` dengan `TypeScript`
- Setup `Tailwind CSS`
- Setup struktur folder utama
- Menentukan konvensi komponen, route, dan data flow
- Menentukan package inti yang dipakai

**Expected Output**

- Project siap dikembangkan
- Struktur aplikasi sudah jelas
- Dependencies inti sudah terdefinisi

### Stage 2: Information Architecture and UI Direction

**Goal**

Menyusun struktur halaman dan arah visual agar pengalaman pengguna konsisten.

**Focus**

- Menentukan isi tiap halaman publik
- Menentukan isi tiap halaman admin
- Menentukan layout global, navbar, footer, dan pattern navigasi
- Menentukan visual style `modern clean`
- Menentukan behavior light/dark mode

**Expected Output**

- Blueprint halaman publik dan admin
- Hierarki konten yang jelas
- Arah visual dan pengalaman pengguna yang konsisten

### Stage 3: Database and Content Model

**Goal**

Membangun model data yang mendukung seluruh kebutuhan portfolio dan dashboard admin.

**Focus**

- Mendesain schema `Prisma`
- Menentukan entitas utama
- Menentukan relasi data
- Menentukan field untuk pengelolaan project, skill, profile, dan message

**Main Data Entities**

- `Admin`
- `Profile`
- `Project`
- `Skill`
- `Message`
- `SocialLink`

**Expected Output**

- Prisma schema high-level siap diimplementasikan
- Struktur data mendukung kebutuhan sekarang dan pengembangan lanjutan

### Stage 4: Authentication and Admin Access

**Goal**

Membangun akses admin yang aman dan sederhana untuk satu pengguna.

**Focus**

- Login admin berbasis `email + password`
- Proteksi route admin
- Session management
- Redirect dan access control untuk area admin

**Expected Output**

- Hanya admin yang bisa masuk dashboard
- Area admin terlindungi dari akses publik

### Stage 5: Admin Dashboard Foundation

**Goal**

Membangun kerangka dashboard agar pengelolaan konten mudah dilakukan.

**Focus**

- Layout dashboard admin
- Sidebar atau top navigation admin
- Halaman overview
- Pola form management untuk data CRUD

**Expected Output**

- Dashboard admin siap dipakai sebagai pusat pengelolaan konten
- Struktur admin konsisten untuk modul berikutnya

### Stage 6: Content Management Modules

**Goal**

Membuat modul utama yang memungkinkan portfolio diperbarui tanpa edit kode.

**Focus**

- CRUD `Projects`
- CRUD `Skills`
- Edit `Profile`
- Kelola `Social Links`
- Lihat pesan masuk dari `Contact Form`

**Expected Output**

- Admin dapat memperbarui isi portfolio secara mandiri
- Semua konten utama bersifat dinamis

### Stage 7: Public Website Pages

**Goal**

Membangun seluruh halaman publik berdasarkan data dinamis dan arah visual yang sudah ditentukan.

**Focus**

- Home page
- About page
- Skills page
- Projects page dengan card grid
- Contact page

**Expected Output**

- Halaman publik lengkap dan saling terhubung
- Konten tampil dari database atau source data yang sudah ditentukan

### Stage 8: Hero Keyboard Image Sequence

**Goal**

Mengimplementasikan hero visual yang menjadi identitas utama website.

**Focus**

- Menempatkan keyboard sequence di samping teks hero
- Menggunakan pendekatan performa yang efisien
- Menyesuaikan tampilan untuk desktop, tablet, dan mobile
- Menyediakan fallback jika dibutuhkan

**Implementation Direction**

- Gunakan pendekatan berbasis `canvas` atau teknik render yang efisien
- Prioritaskan performa di mobile
- Pastikan animasi mendukung estetika `modern clean`, bukan mengganggu konten utama

**Expected Output**

- Hero section terasa unik, premium, dan tetap ringan

### Stage 9: Contact System and Message Handling

**Goal**

Membuat sistem komunikasi yang sederhana namun efektif.

**Focus**

- Form contact tersimpan ke database
- Validasi input
- Menyediakan link ke `Email`, `Instagram`, `GitHub`, dan `WhatsApp`
- Menampilkan pesan masuk di dashboard admin

**Expected Output**

- Pengunjung dapat menghubungi dengan mudah
- Admin dapat melihat pesan masuk dari dashboard

### Stage 10: Theming, Responsiveness, and Polish

**Goal**

Menyempurnakan kualitas tampilan dan pengalaman pengguna di semua device.

**Focus**

- Implementasi `light/dark mode`
- Responsive layout untuk laptop, tablet, dan mobile
- Konsistensi spacing, typography, dan visual hierarchy
- Motion polishing dengan `Framer Motion`
- Accessibility dan usability improvements

**Expected Output**

- UI terasa matang dan konsisten di berbagai ukuran layar
- Theme switching berjalan baik

### Stage 11: Testing, Optimization, and Deployment Readiness

**Goal**

Memastikan aplikasi siap digunakan dan stabil untuk dipublikasikan.

**Focus**

- Functional testing untuk halaman publik dan admin
- Validasi auth flow
- Validasi CRUD flow
- Optimasi image, loading, dan performa
- Persiapan environment variable dan deployment

**Expected Output**

- Aplikasi stabil
- Risiko bug utama berkurang
- Proyek siap masuk tahap deploy

## Suggested Build Order

Urutan implementasi yang direkomendasikan:

1. Product Foundation
2. Information Architecture and UI Direction
3. Database and Content Model
4. Authentication and Admin Access
5. Admin Dashboard Foundation
6. Content Management Modules
7. Public Website Pages
8. Hero Keyboard Image Sequence
9. Contact System and Message Handling
10. Theming, Responsiveness, and Polish
11. Testing, Optimization, and Deployment Readiness

## High-Level Implementation Notes

- Gunakan `App Router` di `Next.js`
- Jadikan konten portfolio semaksimal mungkin dinamis
- Simpan struktur data agar tetap siap untuk pengembangan lanjutan
- Prioritaskan tampilan yang bersih, modern, dan tidak terlalu ramai
- Gunakan animasi sebagai penguat pengalaman, bukan elemen utama di semua section
- Optimalkan image sequence agar tidak membebani performa

## Definition of Success

Planning ini dianggap berhasil bila hasil implementasinya nanti memenuhi poin berikut:

- Portfolio tampil modern, clean, dan responsif
- Admin bisa memperbarui project, skill, profile, dan melihat message tanpa edit kode
- Contact form berjalan dan menyimpan data ke database
- Light/dark mode berjalan konsisten
- Keyboard hero sequence menjadi visual khas tanpa mengganggu performa

## Next Step

Setelah planning high-level ini, tahap berikutnya yang direkomendasikan adalah membuat breakdown implementasi per stage secara lebih teknis, dimulai dari:

1. Setup proyek dan struktur folder
2. Desain schema database
3. Struktur halaman publik dan dashboard admin
4. Strategi implementasi hero image sequence
