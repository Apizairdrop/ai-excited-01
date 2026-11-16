// ai-excited-01 entry: copy the image beside this file to the output dir.
// The image is a luminous whale breaching through golden clouds above a tiny
// city at golden hour — one huge shape, one thrilling moment, readable small.
// Runs under Node 22 (stdlib only) in a sandbox with no network:
// /bot is the read-only repo, /output is writable.
// Locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = statSync(target).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}

// Confirm the written file is a whole PNG or JPEG: the gate tells them
// apart by their first bytes, so check the magic before declaring success.
const head = readFileSync(target).subarray(0, 8);
const isPng =
  head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e && head[3] === 0x47;
const isJpeg = head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG');
}

console.log(`wrote ${target} (${bytes} bytes, ${isPng ? 'PNG' : 'JPEG'})`);
