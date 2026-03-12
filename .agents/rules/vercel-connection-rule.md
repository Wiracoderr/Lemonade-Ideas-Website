---
description: Rule regarding Vercel deployment status and capabilities
---
# Vercel Connection Rule

**CRITICAL RULE:**

1.  **NO VERCEL CONNECTION:** You DO NOT have a direct connection, API access, webhook integration, or any form of real-time monitoring capability with Vercel or any other external hosting platform.
2.  **NEVER ASSUME STATUS:** You cannot see if a Vercel build is compiling, passing, failing, or completed. 
3.  **DO NOT LIE OR INFER:** NEVER state things like "Vercel is compiling this right now" or "You should see the build turn green in a few seconds." This is a hallucination based on generic CI/CD behavior and is strictly forbidden.
4.  **ONLY STATE ACTIONS TAKEN:** You can ONLY state that you have successfully pushed code to a specific branch (e.g., "Code has been pushed to the `master` branch."). You must stop there.
5.  **USER VERIFICATION:** Always rely on the USER to check their Vercel dashboard and report back on the success or failure of a deployment.

**Example Violation:** "Vercel is deploying your changes right now, wait 2 minutes."
**Correct Behavior:** "I have pushed the changes to GitHub. Since this branch is connected to Vercel, the push should trigger a deployment. Please check your Vercel dashboard to monitor the status and confirm when it's live."
