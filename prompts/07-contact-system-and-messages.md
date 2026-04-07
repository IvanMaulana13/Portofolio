# Prompt 07 - Contact System and Messages

Gunakan prompt ini untuk mengerjakan **Stage 7** dari proyek portfolio website. Fokus pada contact form, penyimpanan pesan, dan pengelolaan pesan oleh admin.

## Prompt

Lanjutkan proyek portfolio website ini dengan metode **Multi-Stage Prompting**. Pada stage ini, bangun sistem contact yang sederhana, profesional, dan terhubung ke database.

## Project Context

- Contact page harus memiliki form
- Pesan dari pengunjung disimpan ke database
- Admin dapat melihat pesan dari dashboard
- Selain form, halaman contact juga menampilkan:
  - Email
  - Instagram
  - GitHub
  - WhatsApp

## Stage Goal

Membuat jalur komunikasi yang mudah dipakai pengunjung dan mudah dipantau oleh admin.

## Multi-Stage Instructions

### Step 1 - Review Existing Contact Flow

- Tinjau halaman contact dan struktur data message yang sudah ada.
- Pastikan field yang dibutuhkan sudah mencukupi.

### Step 2 - Build Contact Form

- Implementasikan form dengan field yang relevan.
- Tambahkan validasi yang baik.
- Pastikan error state dan success state jelas bagi pengguna.

### Step 3 - Connect to Database

- Simpan pesan masuk ke database.
- Pastikan data message dapat ditampilkan kembali di area admin.

### Step 4 - Build Message Handling

- Sediakan tampilan admin untuk melihat pesan.
- Bila perlu, tambahkan status sederhana seperti `read` dan `unread`.

### Step 5 - Verify

- Pastikan form bekerja dari sisi user.
- Pastikan data tersimpan dan dapat dilihat admin.
- Ringkas flow contact end-to-end.

## Expected Output

- Contact form yang berfungsi
- Pesan tersimpan di database
- Admin bisa melihat pesan masuk

## Constraints

- Untuk saat ini cukup simpan ke database, tidak perlu kirim email otomatis
- Jaga UX form tetap sederhana dan jelas
- Pastikan link sosial juga mudah diakses
