# Lab Website — Jekyll + GitHub Pages

A clean, dark-academic Jekyll site for your research lab. Built with zero dependencies beyond Jekyll itself — no npm, no build tools required.

## 🚀 Getting Started (5-Minute Setup)

### Step 1: Create your GitHub repository

1. Go to [github.com](https://github.com) and create a **new repository**
2. Name it `yourusername.github.io` (for a personal/lab org page) **or** any name like `lab-website` (for a project page)
3. Make it **Public**

### Step 2: Upload these files

Either:
- **Drag-and-drop** all files into the GitHub web interface, or
- Clone the repo locally and copy these files in, then `git push`

### Step 3: Enable GitHub Pages with Actions

1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Push any commit to the `main` branch → the Actions workflow auto-builds and deploys
4. Your site will be live at `https://yourusername.github.io` (or `https://yourusername.github.io/repo-name/` for project pages)

---

## ✏️ Customizing Your Site

### 1. Update `_config.yml` first

Open `_config.yml` and fill in all the fields at the top:

```yaml
title: "Doe Lab"
description: "We study the mechanisms of X in the context of Y."
url: "https://yourusername.github.io"
baseurl: ""  # leave empty for username.github.io; use "/repo-name" for project pages

lab_name: "Doe Lab"
lab_tagline: "Advancing our understanding of X through rigorous inquiry."
institution: "State University"
department: "Department of Biology"
pi_name: "Professor Jane Doe"
pi_email: "jdoe@stateuniversity.edu"
lab_email: "doelab@stateuniversity.edu"
```

### 2. Add your team — `_data/members.yml`

Edit `_data/members.yml` to list your team members. Each person needs:
- `name`, `role`, `email`, `bio`
- Optionally: `photo` (relative path to image), `scholar`, `github`, `website`

**Photo setup:** Place headshot images in `assets/images/team/`. Reference them as `/assets/images/team/yourname.jpg`.

Roles recognized by the People page:
- `Principal Investigator`
- `Postdoctoral Researcher`
- `PhD Student`
- `M.S. Student`

### 3. Add publications — `_data/publications.yml`

Add papers in reverse chronological order. BibTeX fields map to:
- `title` → paper title
- `authors` → author list (wrap lab members in `**bold**`)
- `venue` → journal or conference name
- `year` → publication year (integer)
- `type` → `journal` or `conference`
- `doi` → full DOI URL
- `pdf` → link to PDF (can be hosted in `assets/` or external)
- `arxiv` → arXiv URL
- `code` → GitHub repo URL

### 4. Add news items — `_data/news.yml`

Short text entries with a date label. HTML is supported in the `text` field.

### 5. Edit page content

| File | Content |
|---|---|
| `index.md` | Homepage hero, stats, research highlights, news |
| `_pages/research.md` | Research area descriptions, methods, funding |
| `_pages/people.md` | Team overview, alumni, join us |
| `_pages/publications.md` | Auto-generated from `_data/publications.yml` |
| `_pages/contact.md` | Contact form, address, open positions |

---

## 🏃 Running Locally

```bash
# Install dependencies
gem install bundler
bundle install

# Serve with live reload
bundle exec jekyll serve --livereload

# Your site is at http://localhost:4000
```

---

## 📁 Project Structure

```
lab-website/
├── _config.yml             ← Site settings (START HERE)
├── Gemfile
├── index.md                ← Homepage
├── _pages/
│   ├── research.md
│   ├── people.md
│   ├── publications.md
│   └── contact.md
├── _data/
│   ├── members.yml         ← Team data
│   ├── publications.yml    ← Paper list
│   └── news.yml            ← Lab news/updates
├── _layouts/
│   ├── default.html        ← Main layout (header, footer, nav)
│   ├── member.html         ← Individual member page
│   └── research-area.html  ← Research detail page
├── assets/
│   ├── css/main.css        ← All styles
│   ├── js/main.js          ← Theme toggle, nav, scroll reveal
│   └── images/
│       └── team/           ← Place headshots here
└── .github/
    └── workflows/
        └── deploy.yml      ← Auto-deploy to GitHub Pages
```

---

## 🎨 Customization Tips

### Colors
The color palette is defined in `assets/css/main.css` under `:root` and `[data-theme="dark"]`. Key variables:
- `--color-primary` — main nav/link/accent color (navy blue)
- `--color-accent` — secondary accent (gold/amber)
- Change these to match your institution's brand colors.

### Stats on Homepage
Update the stat numbers in `index.md` (members, publications, grants, founding year).

### Logo
The nav logo is an inline SVG in `_layouts/default.html`. Replace it or modify the SVG paths to match your lab's identity.

### Google Analytics
Add to `_layouts/default.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');</script>
```

---

## 🔧 Common Issues

**Site not deploying?**
- Check the **Actions** tab in your repo for build errors
- Ensure GitHub Pages source is set to "GitHub Actions" (not a branch)

**`baseurl` issues (links broken on project page)?**
- Set `baseurl: "/repo-name"` in `_config.yml` if your repo is NOT `username.github.io`
- Always use `{{ '/path/' | relative_url }}` in templates (already done in this theme)

**Publication authors not bolding?**
- Use `**Name**` (double asterisks) in `authors` field
- The template uses `markdownify` to render this

---

Built with ❤️ for the academic community. MIT License.
