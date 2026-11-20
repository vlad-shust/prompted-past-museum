# Editorial pipeline — the weekly ritual

Batch-produce 7–14 daily scenes ahead of schedule. Everything runs from the
repo root and supports `--dry-run` (works with zero keys).

## Setup (once)

Create `scripts/editorial/.env`:

```
ANTHROPIC_API_KEY=sk-ant-...
FAL_KEY=...
ELEVENLABS_API_KEY=...
ELEVENLABS_VOICE_ID=...            # your chosen documentary voice
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...      # service role — never ships in the app
# optional
FAL_LORA_URL=...                   # after the Week-0 LoRA gate test
FAL_LORA_SCALE=1
FAL_MODEL=fal-ai/flux-2/lora
CLAUDE_EDITORIAL_MODEL=claude-sonnet-4-6
HOUSE_STYLE_PROMPT=...             # override the default Molten style block
```

## The ritual

```bash
# 1. Draft — Claude writes title/dek/story/image-prompt into editorial-work/<slug>/
npm run editorial -- draft "Napoleon watches Moscow burn from the Kremlin" \
  --era revolutionary-age --year 1812 --date-label "14 September 1812"

# 2. Render — 4 candidates land in the same folder
npm run editorial -- render napoleon-watches-moscow-burn

# 3. Look at 1.jpg…4.jpg. Edit draft.json freely (your voice wins over Claude's).

# 4. Publish — narrates with ElevenLabs, uploads, schedules
npm run editorial -- publish napoleon-watches-moscow-burn --pick 2 --date 2026-07-12

# 5. Check the queue (includes 14-day anniversary coverage)
npm run editorial -- status
```

## Anniversaries & seasons

```bash
# Five well-attested events for a calendar day, as ready-to-run draft commands
npm run editorial -- suggest --date 09-14

# Draft with an exact anniversary (auto-parsed from --date-label when possible)
npm run editorial -- draft "..." --era ... --year ... --date-label "14 September 1812" --on-this-day

# Set the month's era (the app's masthead season line + archive chip)
npm run editorial -- season set 2026-08 viking-age --title "The Viking Age"
```

Aim scenes at their own anniversaries when one exists — `status` shows the
gaps, `suggest` fills them.

## Notes

- `editorial-work/` is gitignored scratch space; drafts are disposable.
- Rendering without `FAL_LORA_URL` uses prompt-only style. The Week-0 gate
  test decides whether the LoRA earns its place.
- Publishing upserts on slug — re-publishing a slug replaces the scene.
- The image is used for both full and thumb URLs for now; add a resize step
  if bandwidth ever matters.
