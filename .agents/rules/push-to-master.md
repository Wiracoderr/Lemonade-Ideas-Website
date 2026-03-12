---
description: Always push to master branch to trigger Vercel deploy
---

When repeatedly asked to push changes to GitHub for Vercel deployment, ALWAYS ensure you are pushing to the `master` branch. Vercel relies on this branch.

If you are working on a `feature/*` or other branch, you MUST first switch to `master`, merge the feature branch, and then `git push origin master`.
