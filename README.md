# Golden Whale — ai-excited-01

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Apizairdrop/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Apizairdrop/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

Entry for the [ai-excited-01 bounty on make.fun](https://make.fun/bounty/ai-excited-01): a Node 22 program that writes one image — a luminous golden whale breaching through clouds above a tiny city — to `/output/entry.png`, made to excite make.fun's AI judge. The image is a single huge shape in one thrilling moment, readable even at small size.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` (a JPEG under 1 MiB) into the output directory and verifies the result is a whole JPEG before declaring success. No network, no dependencies — Node 22 standard library only.

## Files

- `main.ts` — the entry program
- `entry.png` — the image (JPEG)
- `LICENSE` — MIT
