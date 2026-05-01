# Monarch Events

Production website for [Monarch Events](https://monarchdining.com) — curated private dining with Ella and Nina in Dallas, TX.

## Stack

- **SvelteKit** with Svelte 5 (runes) and the Vercel adapter
- **Tailwind CSS v4** with a custom terracotta/cream theme
- **mdsvex** for markdown content rendering
- **Decap CMS** for content management at `/admin`
- Deployed on **Vercel**

## Content

All marketing copy lives in Svelte components, but the menus and events are editable via Decap CMS.

```
content/
  menus/     — Seasonal tasting menus
  events/    — Upcoming public dinners & workshops
```

Editors visit `/admin` on the live site to manage content. Decap authenticates via GitHub OAuth and commits directly to `main`, which triggers a Vercel rebuild.

## Development

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build
pnpm preview    # preview the production build
```

## Decap CMS setup (one-time)

Decap's GitHub backend needs an OAuth proxy. Two options:

1. **Free**: Deploy the community OAuth gateway at https://github.com/vencax/netlify-cms-github-oauth-provider to any Vercel/Render instance, then set `base_url` in `static/admin/config.yml` to that URL.
2. **Easiest**: Add the repo as a Netlify site (no deploy, just auth), enable Netlify Identity + Git Gateway, and switch the backend to `git-gateway` in `static/admin/config.yml`.

The repo name in `static/admin/config.yml` is `amarcin/monarch-events`.
