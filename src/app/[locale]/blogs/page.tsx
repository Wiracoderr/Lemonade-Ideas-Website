import React from "react";
import BlogsHeroSection from "@/components/blogs/BlogsHeroSection";
import CTASection from "@/components/seo/CTASection";
import BlogGrid from "@/components/blogs/BlogGrid";
import path from "path";
import fs from "fs";
import { getTranslations } from 'next-intl/server';

// Force dynamic routing so params are available
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await Promise.resolve(params); // Next.js 15+ compat or standard Next.js
  const t = await getTranslations({ locale, namespace: 'Blogs' });
  
  return {
    title: t('meta_title'),
    description: t('meta_desc'),
  };
}

export default async function BlogsPage({ params }: { params: { locale: string } }) {
  const { locale } = await Promise.resolve(params);
  let blogs = [];

  try {
    // We load the generated JSON file directly in the server component.
    const jsonFileName = locale === 'es' ? 'blogs-es.json' : 'blogs.json';
    const dataPath = path.join(process.cwd(), "src", "data", jsonFileName);
    
    // Fallback to blogs.json if the locale one isn't found
    const targetPath = fs.existsSync(dataPath) ? dataPath : path.join(process.cwd(), "src", "data", "blogs.json");
    
    if (fs.existsSync(targetPath)) {
      const fileContents = fs.readFileSync(targetPath, "utf8");
      blogs = JSON.parse(fileContents);
    } else {
      console.warn(`${jsonFileName} not found in src/data. Grid will be empty.`);
    }
  } catch (e) {
    console.error("Error reading blogs json:", e);
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
