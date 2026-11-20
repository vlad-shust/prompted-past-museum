# prompted.past

TypeScript monorepo for prompted.past, a daily historical-art app and website.

- `web/` — Next.js website (stories, archive, studio pages)
- `src/` — shared content, types and logic, also used by the Expo app
- `scripts/editorial/` — Node CLI for drafting and publishing scenes
- `supabase/` — SQL migrations and edge functions
- `app.json`, `eas.json` — Expo app config (mobile app, not needed for the web)

All external services are optional. With no environment variables set,
the site builds from the bundled scene content (remote images, audio and
analytics are simply not loaded).

## Run the website

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build
npx tsc --noEmit
```

## Shared code checks

```bash
npm install
npx tsc --noEmit
npm run test:unit  # Node test runner via tsx
```

Optional env vars: `NEXT_PUBLIC_MEDIA_BASE_URL`, `EXPO_PUBLIC_PAINTINGS_BASE_URL`,
`NEXT_PUBLIC_CONTACT_ENDPOINT`.

## Licence

MIT, see `LICENSE`.
