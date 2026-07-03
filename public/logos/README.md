# University logos

Each university card shows its official logo from this folder, named by the school's
id: `public/logos/<id>.png` (e.g. `rupp.png`, `itc.png`, `num.png`).

- If `<id>.png` exists it is displayed on a white rounded tile.
- If it is missing (404), the card automatically falls back to the coloured
  initials placeholder — so you can add a logo at any time by simply dropping a
  PNG named `<id>.png` here; no code changes needed.

Logos currently included were fetched from each university's official website
(via its site icon). Schools without a bundled logo use the initials placeholder.
