# Portfolio Website

A modern, interactive portfolio website built with Next.js and React. This project showcases your work, skills, and contact information using a dynamic tile-based layout and smooth animations.

## Features

- **Animated Tile Grid**: Projects and sections are displayed as interactive tiles.
- **Responsive Design**: Looks great on all devices.
- **Contact Form**: Visitors can reach out directly from the site.
- **Customizable Sections**: Easily add or modify content.
- **Modern UI/UX**: Clean, accessible, and visually appealing.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS Modules](https://sass-lang.com/)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/components/` – Reusable UI components (Navbar, Footer, Tile, TileGrid, ContactForm, etc.)
- `src/app/data/tiles.ts` – Data for the tiles displayed on the homepage.
- `src/app/styles/` – Global and shared SCSS styles.
- `src/app/context/` – React context for managing categories or global state.
- `src/app/config/` – Animation and configuration files.

## Customization

- **Add/Edit Tiles:**
  - Update `src/app/data/tiles.ts` to add new projects or sections.
- **Modify Sections:**
  - Edit or add components in `src/app/components/`.
- **Styling:**
  - Update SCSS files in `src/app/styles/` or component-specific `.module.scss` files.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import your project into Vercel.
3. Follow the prompts to deploy.

For more options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

Feel free to customize this portfolio to better reflect your personality and work!
