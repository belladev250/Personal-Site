# Bella Melissa Ineza — Portfolio

One-page portfolio built with Next.js 15, React 19, Tailwind CSS v4 and TypeScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit the content

All text lives in **`data/portfolio.ts`**. Search it for `TODO` to find what still needs filling in:

- `github` / `linkedin`: your real profile links
- `photo`: put a headshot at `public/me.jpg` and set `photo: "/me.jpg"`
- `projects[].image`: screenshots go in `public/projects/` (e.g. `"/projects/hangapitch.jpg"`, 16:10 works best)
- `projects[].liveUrl` / `codeUrl`: links to live sites and repos (buttons only appear when set)
- `testimonials`: real quotes, or an empty array `[]` to hide the section

Your CV is served from `public/cv.pdf` (the "Download my CV" button).

## Structure

```
app/            layout, page, global styles (colors & fonts are in globals.css @theme)
components/     Nav, Sections (Hero, Skills, Projects, Experience, Testimonials, Contact, Footer), ui
data/           portfolio.ts — all content
public/         cv.pdf, images
```

## Deploy

Push to GitHub, then import the repo on vercel.com. No settings needed.
