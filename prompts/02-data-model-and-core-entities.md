# Prompt 02 - Data Model and Core Entities

Gunakan prompt ini untuk mengerjakan **Stage 2** dari proyek portfolio website. Fokus hanya pada desain data, struktur model, dan kesiapan content architecture.

## Prompt

Anda melanjutkan proyek portfolio website berbasis `Next.js`. Gunakan pendekatan **Multi-Stage Prompting** dan kerjakan stage ini secara terfokus tanpa mengerjakan stage lain secara penuh.

## Project Context

- Stack utama: `Next.js`, `TypeScript`, `Tailwind CSS`, `Framer Motion`
- Database: `PostgreSQL`
- ORM: `Prisma`
- Theme: light dan dark mode
- Single admin login
- Public pages: `Home`, `About`, `Skills`, `Projects`, `Contact`
- Admin pages: `Overview`, `Projects`, `Skills`, `Messages`, `Profile`
- Contact form akan disimpan ke database
- Konten utama harus bisa dikelola tanpa edit kode

## Stage Goal

Mendesain model data inti yang mendukung public site, admin dashboard, dan manajemen konten.

## Multi-Stage Instructions

### Step 1 - Inspect Existing State

- Tinjau setup project dan folder database yang sudah ada.
- Jelaskan secara singkat dependensi data apa saja yang diperlukan berdasarkan scope proyek.

### Step 2 - Define Data Entities

- Susun model data high-level yang diperlukan untuk proyek ini.
- Gunakan minimal entitas berikut:
  - `Admin`
  - `Profile`
  - `Project`
  - `Skill`
  - `Message`
  - `SocialLink`

### Step 3 - Design Schema

- Buat schema `Prisma` yang bersih dan mudah dikembangkan.
- Tambahkan field yang realistis untuk masing-masing entitas.
- Pastikan model mendukung:
  - project card grid
  - featured project
  - published status
  - profile content
  - social links
  - contact message management

### Step 4 - Prepare for Future Stages

- Pastikan schema cukup fleksibel untuk dashboard admin dan halaman publik.
- Bila perlu, sertakan field seperti `slug`, `order`, `featured`, `published`, `createdAt`, `updatedAt`, atau status yang relevan.

### Step 5 - Verify

- Validasi bahwa schema mendukung kebutuhan proyek saat ini.
- Ringkas alasan desain datanya.

## Expected Output

- Prisma schema yang siap dipakai
- Struktur entitas yang jelas
- Data model yang mendukung konten dinamis dan admin dashboard

## Constraints

- Jaga schema tetap sederhana
- Hindari field yang belum punya nilai nyata untuk produk ini
- Prioritaskan maintainability dan kejelasan relasi
