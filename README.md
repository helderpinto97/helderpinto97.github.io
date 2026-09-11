# Personal academic website

A static site — plain HTML, CSS and one small JavaScript file. No build step,
no dependencies, nothing to install.

## Where to edit what

All your content lives in `data/`. You should rarely need to touch anything else.

| File | What it holds |
|------|---------------|
| `data/site.js` | Your name, role, affiliation, email, profile links, portrait |
| `data/publications.js` | Every paper |
| `data/research.js` | Research themes and software |
| `data/teaching.js` | Courses and student supervision |
| `data/talks.js` | Talks and posters |
| `data/cv.js` | Education, positions, awards, service, skills |

Free-text prose (your bio, the news list) is written directly in `index.html`.

Put your photo at `assets/portrait.jpg` (square, ~600×600 is plenty). If the
file is missing the page simply drops the image.

## Previewing locally

Open `index.html` in a browser — it works straight from disk. Or, for a proper
local server:

    python -m http.server 8000

then visit http://localhost:8000

## Publishing on GitHub Pages

1. Create a repository named `<your-github-username>.github.io`.
2. Push the contents of this folder to the `main` branch (the `.html` files
   must sit at the repository root, not inside a subfolder).
3. Repository → Settings → Pages → Source: *Deploy from a branch*, branch
   `main`, folder `/ (root)`.
4. Wait a minute; the site appears at `https://<your-username>.github.io`.

From a terminal in this folder:

    git init
    git add .
    git commit -m "Initial site"
    git branch -M main
    git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
    git push -u origin main

### Custom domain

Add a file named `CNAME` containing just your domain (e.g. `example.org`), then
point a CNAME DNS record at `<your-username>.github.io`. Enable *Enforce HTTPS*
in the Pages settings once the certificate is issued.

## Notes

- `.nojekyll` stops GitHub from running Jekyll over the files. Keep it.
- The dark/light toggle remembers the visitor's choice in `localStorage` and
  otherwise follows their system setting.
- Author names matching `nameVariants` in `data/site.js` are bolded in the
  publication list. Add every spelling that appears in your papers.
