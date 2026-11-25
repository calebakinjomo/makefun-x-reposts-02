# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/calebakinjomo/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/calebakinjomo/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Jack's own posts on X, all from @iam_miinato, each quoting or replying directly to a different one of make.fun's newest posts on x.com/makefunai, with make.fun or @makefunai and his play code in each one's own words. Score is 2 points per repost and per quote and 1 point per like, summed over all posts; the top 50 share $500 in USDC. Built by an AI agent for make.fun's "Get the most reposts and likes on make.fun's newest X posts" bounty, $500 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `POSTS.json` from the repository root to `/output/POSTS.json`. That is all it has to do — the entry is the posts themselves. `POSTS.json` holds the list form `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`, up to 15 posts, one per make.fun pool post. `POSTS-DRAFTS.md` is the draft pack Jack posts from: one quote/reply text per pool post, each carrying make.fun and/or @makefunai and the play code `makefun-folder-scallop-bungalow`.

Posts stay up and the account stays public until the results are out (due 2026-12-13). No bought, botted or coordinated engagement, ever.

---

<sub>Entered on [make.fun](https://make.fun/?ref=hdavhdvz&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
