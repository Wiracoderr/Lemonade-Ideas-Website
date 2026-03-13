import React from "react";
import BlogsHeroSection from "@/components/blogs/BlogsHeroSection";
import CTASection from "@/components/seo/CTASection";
import BlogGrid from "@/components/blogs/BlogGrid";
import path from "path";
import fs from "fs";

// Force dynamic or static based on Next.js config cache strategy, we'll read locally for highest performance.
export const dynamic = "force-static";

export const metadata = {
  title: "Blogs - Lemonade Ideas",
  description:
    "Marketing agency strategies to squeeze success for every challenge.",
};

export default async function BlogsPage() {
  let blogs = [];

  try {
    // We load the generated JSON file directly in the server component.
    // This completely eliminates the need for client-side use-effect fetching.
    const dataPath = path.join(process.cwd(), "src", "data", "blogs.json");
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      blogs = JSON.parse(fileContents);
    } else {
      console.warn("blogs.json not found in src/data. Grid will be empty.");
    }
  } catch (e) {
    console.error("Error reading blogs.json:", e);
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 font-['Poppins',sans-serif]">
      <main className="flex-1">
        <BlogsHeroSection />

        <section className="py-20 px-4 bg-[#f9fafa]">
          <div className="max-w-[1200px] mx-auto">
            <BlogGrid initialBlogs={blogs} />
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
}
