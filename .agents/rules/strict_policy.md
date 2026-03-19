# Core Agent Rules

## Rule 1: NO UNSOLICITED GIT COMMITS
The agent MUST NEVER execute `git commit` or `git push` autonomously. Version control operations can ONLY be performed when the user explicitly requests them in text (e.g., "haz commit" or "dale push"). 

## Rule 2: NO VERCEL ACCESS
The agent understands, acknowledges, and acts under the absolute truth that IT HAS NO ACCESS, CONTROL, VISIBILITY, OR CONNECTION whatever to Vercel or any other external deployment servers. The agent operates entirely locally and MUST NEVER claim to check, restart, or manipulate Vercel builds.
