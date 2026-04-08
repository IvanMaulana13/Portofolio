# Modern Fullstack Developer Portfolio

A premium, high-performance portfolio website built with Next.js, featuring a custom Admin Dashboard, Light/Dark mode, and Framer Motion micro-interactions.

## 🚀 Features

- **Public Portfolio**: Home, About, Skills, Projects, and Contact pages with smooth staggered animations.
- **Admin Dashboard**: Full CRUD management for projects, skills, and social links.
- **Theme System**: Seamless Light/Dark mode integration with persistence using `next-themes`.
- **Keyboard Sequence Hero**: Immersive high-performance image sequence animation on the landing page.
- **Optimized Assets**: Full use of `next/image` for automatic optimization and layout stability.
- **Responsive Design**: Tailored experiences for mobile, tablet, and desktop.
- **Secure Messaging**: Contact form integration with message management in the admin area.

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Prisma ORM](https://www.prisma.io/) with PostgreSQL
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 Getting Started

1. **Clone & Install**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Copy `.env.example` to `.env` and fill in your database credentials and JWT secret.
   ```bash
   cp .env.example .env
   ```

3. **Database Migration**:
   ```bash
   npx prisma migrate dev
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

## 🌐 Verification Checklist (Microsoft Edge)

To ensure absolute visual and functional stability, please verify the following in **Microsoft Edge**:
1. [ ] **Theme Switching**: Toggle Dark/Light mode in the Navbar. Ensure background and text colors transition smoothly.
2. [ ] **Hero Animation**: Check the Keyboard sequence on the Home page for any stuttering.
3. [ ] **Admin Sidebar**: Verify that the sidebar theme correctly matches the dashboard theme.
4. [ ] **Responsive Forms**: Check the Skill and Project forms in the Admin area on various screen widths.
5. [ ] **Image Optimization**: Ensure project thumbnails load correctly across all pages.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

