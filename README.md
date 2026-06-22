# Top Tier

Top Tier is a 12-question, 4-tier puzzle game.

- 30 seconds per question
- First miss locks the official result
- Remaining questions can still be played for practice
- Final dashboard shows official tier reached and total score

## Local Play

Open `index.html` in a browser to play.

Open `index.html?editor=1` for the backstage editor.
Use `index.html?editor=1&week=2&day=1` to jump directly to a specific draft.

## Editor Drafts

Editor changes now create a saved draft branch in the browser. Use `Save Draft` or let autosave keep the branch current, then `Submit for Review` when it is ready.

For shared draft saving, create the Supabase table in `supabase-schema.sql`, then add a local config based on `top-tier-config.example.js` before `app.js` loads.

## Vercel

This is a plain static site. Import the GitHub repository into Vercel and use the default static-site deployment. No build command is required.

## Studio Analytics

`studio-analytics.js` sends privacy-light gameplay events to the shared KestCo Game Studio dashboard when `studio-analytics-config.js` has a Supabase URL and public anon key.
