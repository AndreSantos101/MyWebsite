This is André Santos' portfolio, built with [Next.js](https://nextjs.org), React, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm run start` serves the production build locally
- `npm run lint` runs ESLint

## Project Structure

- `app/` contains the App Router entry points and global styles
- `components/` contains layout, section, and shared UI components
- `data/` contains the content rendered by the portfolio
- `public/` contains images and company logos

## Notes

The site is intentionally content-driven, so most copy and timeline updates can be made in the files under `data/` without touching the rendering components.

## Deployment

This project is ready to deploy on any platform that supports Next.js. Vercel is the most direct option for this setup.
