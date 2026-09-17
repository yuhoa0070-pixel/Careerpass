# Contributing to TreyVisai (Trey Visai / Careerpass)

This is a static site (plain HTML/CSS/JS, no build step, no framework). Before
adding or editing data, read this file — it captures the conventions the
project has followed so far, so contributions stay consistent whether they
come from a person or an AI assistant.

## Golden rule: never invent facts

This site is used by real students to make real decisions about tuition and
schools. Every school/tuition/logo claim must be verifiable.

- **Before adding a school**, find its real official website (or, if none
  exists, a genuinely active Facebook page) and confirm it's live:
  ```
  curl -sIL -A "Mozilla/5.0" --max-time 8 -o /dev/null -w "%{http_code}\n" "<url>"
  ```
  A 200/301/302/307 is good. A 403/406 can still be a real site blocking
  bots — open it in an actual browser to confirm before trusting it.
- **Never fabricate a precise tuition number.** If a school doesn't publish
  fees, either skip the `facPrices`/`pricing` fields entirely (leave just
  `programs` + a conservative round-number `tuition` estimate) or say so
  explicitly in `desc`/`scholarNote`. A suspiciously exact number you made up
  is worse than an honest "contact the school directly."
- **Don't guess domains.** `schoolname.edu.kh` is a common pattern but wrong
  often enough that several past entries had to be corrected (wrong domain,
  parked domain, unrelated business). Search for the name + "official
  website" and verify before using.
- If you can't verify something, leave it out rather than pad the list.

## Data schema (`app.js`)

### `schoolsData` — one object per school

```js
{
  id:"shortslug",              // lowercase, unique, matches public/logos/<id>.png
  website:"https://...",       // optional but preferred — real, verified URL
  name:"Real Name",            // Khmer name + "(ABBR)" for Khmer-named schools,
                                // or the school's real English name if that's
                                // how it actually brands itself
  type:"public"|"private"|"institute"|"digital"|"k12"|"daycare",
  province:"phnom-penh",       // must exist in provinceLabel() (app.js) AND
                                // the #school-province <select> (index.html) —
                                // add to BOTH if introducing a new province
  tuition:500,                 // annual USD, lowest real tier if tiered
  duration:4,                  // years
  careers:["business","technology"], // LONG-FORM keys only (see below) —
                                       // MUST be [] for type k12/daycare
  programs:["tag1","tag2"],    // short tags shown on the card — keep to
                                // 3-6, longer lists get truncated visually
  rating:"4.2",                // decorative only, "4.0"-"4.6" range
  desc:"Khmer sentence.",      // one sentence, real facts only
  scholarNote:"...",           // optional: real scholarship/admission info
  facPrices:["$X/ឆ្នាំ",...],  // optional: parallel to faculties[]
  faculties:["Name — Major1, Major2",...], // optional: "Faculty — majors"
                                             // format, em dash separator
  pricing:[{p:"tier name",price:"$X/ឆ្នាំ"}], // optional alternative to
                                              // facPrices when pricing is by
                                              // degree-level/credit rather
                                              // than by faculty (see "uc")
  studentVoices:[{name:"Real Name",program:"Real program/year",quote:"..."}]
                                // optional, renders as "Student Highlights" on
                                // the detail page. THE SAME GOLDEN RULE APPLIES
                                // HERE, HARD: a quote attributed to a named
                                // person is a testimonial, not a data point —
                                // fabricating one is a fake review, not a
                                // placeholder. Only add an entry with a real,
                                // sourced, ideally-consented quote (e.g.
                                // something a student actually posted publicly,
                                // with attribution, or submitted directly).
                                // Leave the field out entirely otherwise — the
                                // UI already shows a clean "no stories yet"
                                // empty state, which is the honest state for
                                // every school right now.
}
```

**`careers[]` uses a different vocabulary than `careersList`'s `cat` field —
this has bitten past contributors.** For `schoolsData.careers[]`, use the
long-form keys already in use: `technology, healthcare, design, business,
trades, education, tourism, agriculture, law, media, culinary`. The
`careersList` array's `cat` field uses a separate short-form set
(`tech, health, agri`, etc. — see `jobCats`). Don't mix them up.

### `careersList` — one object per career/job

```js
{
  id:"shortslug",
  growing:true,               // optional — omit unless there's a real reason
                               // (published labor-market trend, not a guess)
  name:"Khmer Name (English)",
  cat:"tech",                  // SHORT-FORM key — must exist in jobCats
  icon:"material_symbol_name", // see fonts.google.com/icons
  salary:"$X–$Y",
  desc:"Khmer sentence.",
  skills:["Skill1","Skill2"],
  schools:["schoolid1","schoolid2"] // ids that exist in schoolsData
}
```

## Before every commit

1. `node -c app.js` — catches syntax errors instantly, no build step needed.
2. If you added/removed a school, update the **4 hardcoded count strings**
   (search for the current number, e.g. `grep -n "សាកលវិទ្យាល័យ ១១២" app.js
   index.html`): the nav badge, the homepage logo-strip line, the FAQ answer,
   and the hero-card `sub1` in `app.js`.
3. Check your new `id` doesn't already exist:
   `grep -o 'id:"yourid"' app.js`
4. If you can, actually open the page and click through what you changed
   (search for the school, open its detail page, check the logo renders).
   A local server is enough: `npx serve .` — no build step.

## Logos

- Save to `public/logos/<id>.png`. If none is added, the site falls back
  automatically to colored initials (`schoolLogo()` in `app.js`) — this is
  a fine outcome, don't force a bad logo just to have one.
- Prefer a square crest/seal icon over a wide horizontal wordmark — wide
  logos render tiny inside the 46×46px card slot. Crop with Python PIL if
  the source is a wordmark with an icon on one side.
- Check the result isn't white-on-transparent (invisible on the site's
  light background) — open the PNG and actually look at it before
  committing.

## Git workflow: feature branches, no direct pushes to `main`

`main` is protected — pushes straight to it are rejected by GitHub, for
everyone, no exceptions. This project has had two contributors (each with
their own AI assistant) push to `main` independently in the same session
more than once. It happened to merge cleanly every time, but that was luck,
not a plan. Branches + PRs make collisions visible *before* they land
instead of after.

1. **Start from an up-to-date `main`:**
   ```
   git checkout main && git pull
   git checkout -b <type>/<short-description>
   ```
   Branch prefixes: `feat/` (new schools/careers/features), `fix/` (bug
   fixes), `docs/` (docs only), `data/` (data-only enrichment passes).
   Example: `feat/add-kampot-schools`.
2. **Commit on the branch** as usual — see "Before every commit" above.
   Commit messages should explain **why**, not just what — future
   contributors (human or AI) rely on this to know if a number was verified
   or estimated, and why an entry was excluded.
3. **Push the branch and open a PR:**
   ```
   git push -u origin <branch-name>
   gh pr create --fill
   ```
4. **Merging:** a PR needs to exist (protection requires it) but does not
   need a separate approver — solo/pair-maintained repo, so self-merge
   after a final read of your own diff is fine:
   ```
   gh pr merge --squash --delete-branch
   ```
   Squash keeps `main`'s history to one commit per logical change instead
   of every intermediate "wip" commit.
5. **If GitHub reports your branch is behind `main`** (someone else's PR
   merged first): `git fetch && git merge origin/main` on your branch,
   resolve normally, push again. Check for `schoolsData`/`careersList` id
   collisions before merging if the other PR also touched data:
   ```
   grep -oE '"?id"?:"[a-z0-9]+"' app.js | sort -u > /tmp/local_ids.txt
   git show origin/main:app.js | grep -oE '"?id"?:"[a-z0-9]+"' | sort -u > /tmp/remote_ids.txt
   comm -12 /tmp/local_ids.txt /tmp/remote_ids.txt   # ids in both — inspect these
   ```
6. Never force-push a shared branch, and never use `git push --force` to
   route around branch protection.

## If you're using an AI coding assistant

Point it at this file first. It's written to be followed literally.
