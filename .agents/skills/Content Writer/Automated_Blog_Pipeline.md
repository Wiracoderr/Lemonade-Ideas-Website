---
name: Automated Blog Pipeline
description: Execute an end-to-end multi-blog generation pipeline automatically applying Content Writer, SEO, and Optimization skills.
---

# 🚀 Automated Blog Pipeline Engine

**Objective:**
When the user asks to generate `X` amount of blogs entirely from scratch without specifying keywords, you MUST activate this skill immediately. You will become an automated pipeline manager that reads the keyword database, selects exactly `X` keywords, entirely deletes them from the master list, and then executes full-stack Next.js blog articles for each, one-by-one.

## 🛠 Required Prerequisite Skills Integration
This skill **REQUIRES** strict compliance with the following skills simultaneously. Do not operate without incorporating their rules:
1. `skills/Content Writer` (For Sentry Tone, formatting, anti-corporate voice rules)
2. `skills/Optimization` (For asset generation, WebP files)
3. `skills/SEO` (For proper Metadata and semantic HTML structuring)

## 🛑 CRITICAL LAYOUT & ROUTING PROTOCOL (Zero Tolerance)
**You ABSOLUTELY MUST NOT invent new generic Tailwind styles or abandon the established UI architecture.**
1. **Clone the Standard Base:** Before writing `en.tsx` or `es.tsx`, you MUST `view_file` a known good blog (example: `secure-website-hosting/en.tsx`) and copy its exact HTML tags, color codes (`#1A1A1A`, `#3AAB43`, `#FED52B`), `Lucide` react imports, and image wrappers.
2. **Mandatory Components:** Your file MUST end with `<BlogNavigation currentSlug="[your-slug]" />` and `<CTASection />`. If you forget `<BlogNavigation>`, the routing fails and users cannot click through the site.
3. **Word Count Strictness (ITERATIVE ASSEMBLY REQUIRED):** You must write 2500+ words per language without exception. **NEVER** attempt to generate the entire 2500 words in a single tool execution, as this mathematically forces you to summarize and cheat the word count due to token limits. You MUST write the blog iteratively, part by part (e.g., Section 1, then Section 2, then Section 3), using `multi_replace_file_content` or sequential `write_to_file` appending methods. You must ensure perfect coherence between parts. TODO TIENE QUE SER REGLA: Sequential part-by-part writing is mandatory.


## 📋 The 10-Step Execution Protocol

When the user says: *"Do 4 blogs"* or *"Agarra 6 palabras y haz blogs"*, execute exactly as follows:

1. **Keyword Selection:** Use `view_file` to read `public/icons/blog-keywords-guide.md`. Choose the top `X` unused keywords.
2. **Keyword Deletion:** Immediately use `multi_replace_file_content` to delete the `X` keywords from `blog-keywords-guide.md` so they are never used again.
3. **Master Task Tracking:** Overwrite `task.md` with a phase-by-phase tracker for the `X` blogs.
4. **Implementation Plan [PER BLOG]:** Before writing any code for a given blog, write a detailed `implementation_plan.md` for the current blog. Explain the Sentry tone angle, generate the 4 image prompts, and outline the 2500+ word structure. Ask the user for `notify_user` approval to proceed.
5. **Media Assets [PER BLOG]:** Once approved, use `generate_image` 4 times with photorealistic, cinematic prompts and copy them to `public/images/blogs/[blog-slug]/`. **Crucial Rule:** YOU MUST use `Copy-Item` safely instead of `Move-Item`. Moving the file deletes it from the artifact registry and permanently hangs the AI UI window in a grey loading loop. Additionally, images must be standard, high-end corporate aesthetics. NO lasers, NO neon, NO overly futuristic/sci-fi elements. Keep it grounded and realistic.
6. **English Draft [PER BLOG]:** Write `en.tsx` inside `src/app/[locale]/blogs/[blog-slug]`. The text MUST be strictly 2500+ words and adhere heavily to the Sentry Tone. ZERO PLAGIARISM. Everything must be purely original.
7. **Spanish Translation [PER BLOG]:** Write `es.tsx` translating the aggressive English structure directly.
8. **Routing & Tech [PER BLOG]:** Write `page.tsx` with dynamic Next.js Metadata targeting both languages.
9. **Verification [PER BLOG]:** Append the new slug and JSON metadata to `src/data/blogs.json` and `src/data/blogs-es.json`. Execute `npx eslint` and `npx tsc --noEmit` locally. Verify 0 errors, update `walkthrough.md`, and only then proceed to the next blog in the batch.
10. **Loop:** Repeat Steps 4-9 for the remaining blogs sequentially. Once the entire batch of `X` blogs is complete, push to GitHub.

## ⚠️ ZERO PLAGIARISM DIRECTIVE
Under absolutely no circumstances can you plagiarize existing articles. You must synthesize the core thesis of the keyword using the Sentry Tone (authoritative, dark, hyper-competent) to create completely unique, custom-written paragraphs. This is an elite execution. Operate like a $500/hour technical copywriter.
