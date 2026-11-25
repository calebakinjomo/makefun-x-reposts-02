// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// It copies POSTS.json from the repository root to /output/POSTS.json.
// That is all the program has to do: the entry is the posts themselves.
// Jack's own posts on X, all from @iam_miinato, each quoting or replying
// directly to a different one of make.fun's newest posts on x.com/makefunai,
// make.fun or @makefunai and the play code in each one's own words.
// POSTS.json names them, and the house reads their reposts, quotes and
// likes from X. Nothing this program writes about the posts is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const postsPath = join(BOT_DIR, 'POSTS.json');
try {
  // Fail loudly on a malformed list instead of copying a broken file:
  // the gate refuses any POSTS.json it cannot read, so a bad copy is
  // worse than no copy at all.
  const parsed: unknown = JSON.parse(readFileSync(postsPath, 'utf8'));
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    !Array.isArray((parsed as { posts?: unknown }).posts)
  ) {
    throw new Error('POSTS.json must be an object of the form {"posts": [...]}');
  }
  copyFileSync(postsPath, join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
