---
description: Official Lemonade Ideas Blog Formatting & UI Architecture Rules
---

# Premium Blog Formatting Standards

All future blog posts for Lemonade Ideas MUST strictly adhere to this Next.js React-based component structure. We no longer use flat `dangerouslySetInnerHTML` injections. Instead, each blog is a carefully constructed layout using Tailwind CSS to create a premium, editorial reading experience.

## 1. File Structure (Next.js App Router)

Every blog requires two distinct files in its route directory (e.g., `/src/app/blogs/my-new-blog/`):

- `layout.tsx`: Contains the Server-Side SEO metadata exported via Next.js `export const metadata`.
- `page.tsx`: Contains the actual UI.

_CRITICAL RULE FOR SLUG CHANGES:_ If you change the URL slug of a blog post (i.e., rename its folder in `/src/app/blogs/`), you MUST immediately go to `/src/app/blogs/page.tsx` and update the `href` in the `<Link>` component for that blog's miniature card. Failing to do this will result in a 404 error when clicking the article on the main blog feed.

## 2. Hero Section (The Hook)

The top section must immediately grab attention and establish authority.

- **Background:** Dark charcoal (`bg-[#2A2A2A]`).
- **Visual Effects:** Absolute positioned, hyper-blurred blobs of brand colors (Green `#3AAB43` and Yellow `#FED52B`) acting as a glowing backlight behind the text.
- **Category Pill:** A small border-radius tag above the title (e.g., "Lead Generation").
- **Title (H1):** Must use the `font-[Oswald]` class, `uppercase`, white text, with a `drop-shadow-lg`.
- **Metadata Bar:** Author ('Lemonade Ideas' with a yellow bolt icon `#FED52B` on the left), Publish Date, and Read Time listed horizontally.

## 3. The Main Article Container (The Floating Page)

The actual reading zone is an overlapping card that pulls UP into the dark hero section.

- **Container Classes:** `max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] mt-[-40px] relative z-20 pt-[50px] px-[20px] md:px-[60px] pb-[60px]`.

## 4. Typography & Prose

The main text body spans within a `<div className="prose prose-lg max-w-none text-[#444] text-justify ...">`.

_CRITICAL CONTENT RULE:_ Every single blog post must maintain comprehensive depth with a **strict minimum of 2,500 words**. If it is shorter, it is not approved for publishing.

### Specialized Elements

_CRITICAL NOTICE: Do not use `absolute` positioned FontAwesome icons inside `ul > li` lists unless the `li` tag is explicitly given a `relative` class. Otherwise, the icons will aggressively stack in the top-left rounded corner of the main article container._

Instead of just basic text, use these exact bespoke components for different contexts:

1. **The Intro Callout Box:**
   The very first paragraph summarizing the value of the post.
   - _Style:_ `bg-[#f9fff9] border-l-[6px] border-[#3AAB43] p-[30px] rounded-r-[16px]`
   - _Effect:_ A large faint green semi-circle watermark in the top right corner.

2. **Images (Hero and Inline):**
   - Must use `next/image` with `fill` in a relative wrapper.
   - _Wrapper Style:_ `rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group`.
   - _Image Style:_ `object-cover transition-transform duration-700 group-hover:scale-105`.
   - Include a subtle inner ring overlay `ring-1 ring-inset ring-black/10` to prevent white images from bleeding.

3. **H3 Subheadings:**
   - _Style:_ `font-bold text-[#1E3A1A] relative inline-block`.
   - _Decoration:_ An absolute positioned yellow dash (`#FED52B`) sitting slightly below the first word.

4. **H4 Subheadings (Numbered Points):**
   - _Style:_ `bg-[#f4fbf4] rounded-[10px] border border-[#e2efe2] p-[15px] flex items-center`.
   - _Decoration:_ The number is enclosed in a solid green circle on the left.

5. **Quick Tips / Insight Modules:**
   - _Style:_ Yellow tinted box `bg-[#fff9e6] border-l-[5px] border-[#FED52B]`.
   - _Icon:_ A yellow glowing lightbulb icon (`fas fa-lightbulb`).

6. **"What Didn't Work" / Error States:**
   - Use red tinted boxes `bg-[#fff5f5]` with a massive pale red transparent 'X' watermark (`fas fa-times-circle`) anchored to the top right to visually communicate failure/mistakes.

7. **Comparison Grids:**
   - When comparing "Old Way vs New Way", use a `grid md:grid-cols-2`. Include hover effects on the cards (e.g., border glowing green for the right way, red for the wrong way) with prominent centered icons.

## 5. Signature & CTA Panel

At the very bottom of the white reading block, summarize the author and push a conversion:

- **Logo:** `Asset 7.png` (Lemonade emblem) centered at exactly `138x138px`.
- **CTA Button:** Large yellow pill button (`bg-[#FED52B]`, text `#1E3A1A`, `rounded-[50px]`, `uppercase`, drop shadow).
- **Social Proof:** Four circular social icons (Facebook, Instagram, YouTube, LinkedIn) with respective brand hover colors.

## 6. "Keep Learning" (Related Posts)

A full-width, grey-tinted section `bg-[#fcfcfc]` at the very bottom beneath the floating page.

- Grid of 3 cards.
- Each card has an image zoom on hover `group-hover:scale-110`.
- Includes custom category overlays on the image, and a small Lemonade emblem icon next to the "Read Now" hook at the bottom of the card.
