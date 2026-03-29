# Hosting Your Portfolio

## Add Your Photo

1. Add your photo as `photo.jpg` (or `photo.png`) in the `public` folder
2. The portfolio will show your photo in the Hero and About sections
3. If no photo is found, it falls back to your initials "SK"

## Build & Deploy

```bash
npm run build
```

The output goes to the `dist` folder. Deploy this folder to:

- **Vercel** – Connect repo or drag `dist` folder
- **Netlify** – Connect repo or drag `dist` folder  
- **GitHub Pages** – Set base to `/{repo-name}/` in vite.config.js if using project pages
- **Cloudflare Pages** – Connect repo, build command: `npm run build`, output: `dist`

## Local Preview

```bash
npm run dev      # Development
npm run preview  # Production build preview
```
