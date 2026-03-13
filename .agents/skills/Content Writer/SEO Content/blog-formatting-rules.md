# Crucial Blog Formatting Rules for Lemonade Ideas

These rules are strict guidelines that MUST be followed when creating, generating, or importing new blogs for the Lemonade Ideas Next.js project.

## 1. Top Header (H1, Author, and Date)
Every blog post must begin with a hero/header section that visually matches the dark-grey background screenshot. It must use the class `.blog-hero-section` instead of inline styles. 
- **Background:** Dark grey (`#444444`).
- **Title (H1):** Centered, uppercase, bold (Oswald font), white text (`#ffffff`).
- **Metadata:** Below the title, centered, featuring:
  - User Icon + "Lemonade Ideas"
  - Calendar Icon + Publication Date
  - These elements should be separated by a vertical line or pipe (`|`).

## 2. Main Content Wrapper & Text Styling
All blog content (excluding the H1 hero section but including all images and text) MUST be wrapped inside a `<div class="lemonade-blog-wrapper">` div. **Inline CSS is strictly PROHIBITED**. Use a `<style>` block inside the `<head>` of the `index.html` file to styling cleanly.
- **Max Width:** `1200px` centered (`margin: 0 auto;`).
- **Font:** `font-family: 'Poppins', sans-serif;`
- **Colors:** Text should be `#333`, H2 should be `#1E3A1A`, H3 should be `#3AAB43`.
- **Images:** All 4 images must scale to `width: 100%` of this wrapper (acting as exactly the same width as the text blocks), with `border-radius: 8px` and a subtle drop shadow.

## 3. Interactive Bottom Signature Panel
At the end of the content, but *inside* the wrapper, there MUST be an interactive signature panel wrapped in `.lemonade-signature`. Use only LOCAL assets.
- **Background & Border:** Light green background (`#f9fff9`) with a top border (`2px solid #3AAB43`).
- **Main Logo:** The Lemonade Ideas main logo MUST strictly be the optimized version. Because these drafts are reviewed as local HTML files, use the relative path: `../../public/logos/PNGs%20-%20SVGs/4x/Asset%203@4x-8.png`.
- **Secondary Logo:** A secondary optimized webp logo (`Logo-2.webp`) must be placed directly above the "LEARN MORE" button. Its relative path for drafts is: `../../public/logos/optimized-logo-2.webp`.
- **Button:** A yellow "LEARN MORE" button (`#FED52B` background, `#1E3A1A` text) linking to the homepage (`/`).
- **Website Link:** Text `www.lemonadeideas.com` linking to the homepage.
- **Social Icons:** Facebook, Instagram, YouTube, and LinkedIn icons using FontAwesome.

## 3. Blog Index Grid Layout (Main /blogs page)
The main `/blogs` page should list the blogs using a 3-column responsive grid template:
- **Card Design:** White background, rounded corners, subtle shadow, scale-up hover effect.
- **Image:** 5:3 Aspect Ratio, scales up on card hover.
- **Content:** Title (`#1E3A1A`), 3-line truncated excerpt (`#666`), and a green rounded "Read More" button.
- **Load More / Pagination:** The list should include dynamic fetching or a "Load More Articles" button.

## 4. Writing Standards and Content Quality
Every blog post must strictly adhere to the skills defined in `.agents/skills/Content Writer`:
- **Word Count:** At least 2,500 words. Absolutely no exceptions.
- **Sentry Voice:** Direct, technical, no fluff. Do not use filler words like "seamless", "robust", or "we are excited to announce". State the problem or conclusion in the first two sentences.
- **Structure:** Follow the reader's questions. Include "What problem does this solve?", "How does it work?", "Trade-offs", and actionable next steps.
- **Data & Facts:** Use numbers over adjectives. Describe failures and limitations honestly.

## 5. Image Generation
- **Quantity:** Every single blog post MUST have exactly 4 images distributed throughout the content.
- **Realism:** All generated images must look incredibly realistic, simulating real-life photography. They must NOT look AI-generated, cartoonish, or overly polished with hyper-futuristic AI lighting.
- **Format & Quality:** All images must be high-quality `.webp` format and optimized for web performance.

## 6. Directory Structure
When a blog is newly generated (before being officially imported into the Next.js project via script):
- It must be placed in a dedicated subfolder within `Blogs/` (e.g., `Blogs/my-blog-slug/`).
- The text content must be saved as `index.html`.
- Any local images (including AI generated ones) must be saved alongside it.
- A file named `seo_metadata.json` must be created in the same folder, containing the slug, description, and SEO title.

## 7. Responsive Versions (PC & Mobile)
Every blog generated and added to the project MUST explicitly define both a **PC version** and a **Mobile version (Celular)**.
- **Media Queries:** You must use `@media (max-width: 768px)` inside the internal `<style>` block to construct the mobile version.
- **Sizing Adjustments:** In the mobile version, you must dynamically reduce the `padding` of the hero and wrapper, scale down the `font-size` of the H1, and adjust the `.lemonade-logo` `max-width` (and button sizes) to ensure flawless readability and aesthetics on smartphones.
