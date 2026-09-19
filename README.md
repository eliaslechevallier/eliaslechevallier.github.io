# QuiPau.github.io

Personal portfolio site built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
styled after the sidebar-layout design from the reference PDF (the
"Astrofy" template look): profile photo + nav in a fixed sidebar, with
Home, Projects, CV, and Contact pages.

## Project structure

```
src/
  data/
    site.ts       ← your name, tagline, bio, nav links, social links, email
    projects.ts   ← your project list (used by Home + Projects pages)
    cv.ts         ← your education + experience entries
  layouts/
    BaseLayout.astro   ← shared <head> + sidebar + content wrapper
  components/
    Sidebar.astro       ← left nav, avatar, social icons
    ProjectCard.astro   ← one row in the project list
  pages/
    index.astro    ← Home
    projects.astro ← Projects
    cv.astro       ← CV
    contact.astro  ← Contact
public/
  avatar.svg    ← placeholder avatar — replace with your own photo
  favicon.svg
```

## 1. Personalize

Start with **`src/data/site.ts`** — your name, role, intro text, email,
and social links. Then fill in **`src/data/projects.ts`** and
**`src/data/cv.ts`** with your real projects and history.

Replace `public/avatar.svg` with your own photo (e.g. `avatar.jpg`) and
update the `avatar` path in `src/data/site.ts` to match.

If you want a "Download PDF" CV button that actually works, add a
`cv.pdf` file into `public/` — it will then be served at `/cv.pdf`,
which is already what the CV page links to.

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:4321`)
with hot reload.

To produce a production build locally:

```bash
npm run build
npm run preview
```

## 3. Deploy to GitHub Pages

This repo is named `QuiPau.github.io`, so GitHub will serve it at the
domain root (`https://QuiPau.github.io`) once Pages is enabled — no
extra path configuration needed.

1. Push this project to the `QuiPau/QuiPau.github.io` repository on the
   `main` branch.
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push (or re-run the workflow from the **Actions** tab). The included
   workflow at `.github/workflows/deploy.yml` will install dependencies,
   run `astro build`, and publish the result automatically.
5. After the workflow finishes, your site will be live at
   `https://QuiPau.github.io`.

Every subsequent push to `main` redeploys automatically.

## Notes

- No theme/dark-mode toggle is included (light theme only), and the
  Contact page uses simple mailto + social links rather than a form,
  since GitHub Pages only serves static files with no backend.
- The design intentionally leaves out the Services, Store, and Blog
  sections from the reference template — only Home, Projects, CV, and
  Contact are included, per your request. You can add more pages later
  by adding files under `src/pages/` and entries in `src/data/site.ts`'s
  `nav` array.
