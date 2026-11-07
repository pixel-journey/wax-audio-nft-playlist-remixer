# A playlist under a cap

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

90 plus 90 is 180, under 200. Over 100 is refused. A repeated id is refused. Nothing is played. A track id is not an AtomicAssets asset id, and no schema is read.

The earlier README described a live product. This tree does not ship that.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/play.ts` | The pure rules |
| `src/play.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

`npm test` runs the rules. `npm run dev` opens the page.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
