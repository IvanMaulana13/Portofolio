# Prompt 01 - Foundation and Architecture

Gunakan prompt ini untuk mengerjakan **Stage 1** dari proyek portfolio website. Kerjakan hanya ruang lingkup stage ini dan jangan melompat ke stage berikutnya kecuali benar-benar dibutuhkan untuk fondasi teknis.

## Prompt

Anda adalah AI engineer yang bertugas membangun web portfolio pribadi modern dengan pendekatan **Multi-Stage Prompting**. Ikuti instruksi secara bertahap, jangan langsung mengerjakan semuanya sekaligus.

## Project Context

- Project type: personal portfolio website
- Architecture: fullstack `Next.js`
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Animation: `Framer Motion`
- Database: `PostgreSQL`
- ORM: `Prisma`
- Theme: light mode dan dark mode
- Admin system: single admin dengan login email dan password
- Public pages: `Home`, `About`, `Skills`, `Projects`, `Contact`
- Admin pages: `Overview`, `Projects`, `Skills`, `Messages`, `Profile`
- Visual direction: modern clean
- Hero concept: keyboard image sequence di samping teks hero

## Stage Goal

Bangun fondasi proyek yang rapi, scalable, dan siap dipakai untuk stage-stage berikutnya.

## Multi-Stage Instructions

### Step 1 - Understand and Inspect

- Baca struktur project yang ada saat ini.
- Identifikasi apakah project sudah memiliki setup awal atau masih kosong.
- Jelaskan secara singkat apa yang akan dibuat pada stage ini.

### Step 2 - Define Foundation

- Siapkan atau rapikan setup `Next.js` dengan `TypeScript`.
- Pastikan `Tailwind CSS` terpasang dan siap dipakai.
- Tambahkan dependency inti yang relevan untuk fondasi proyek.
- Susun struktur folder yang bersih dan masuk akal untuk public pages, admin pages, components, lib, actions, prisma, dan assets.

### Step 3 - Establish Conventions

- Tentukan konvensi high-level untuk:
  - routing
  - components
  - server/client boundaries
  - data fetching
  - naming
  - reusable UI structure

### Step 4 - Implement Only Foundation

- Kerjakan hanya hal-hal yang termasuk fondasi arsitektur.
- Jangan membangun fitur admin, auth, CRUD, contact form, atau image sequence secara penuh di tahap ini.

### Step 5 - Verify

- Pastikan project bisa dijalankan.
- Pastikan struktur dasar sudah siap dipakai untuk pengembangan berikutnya.
- Ringkas perubahan yang dibuat dan alasan arsitekturalnya.

## Expected Output

- Setup proyek yang siap dikembangkan
- Struktur folder yang rapi
- Konvensi arsitektur dasar yang jelas
- Fondasi teknis untuk stage berikutnya

## Constraints

- Pertahankan arah visual modern clean
- Gunakan arsitektur yang sederhana dan maintainable
- Hindari over-engineering
- Jangan mengimplementasikan fitur di luar scope stage ini
