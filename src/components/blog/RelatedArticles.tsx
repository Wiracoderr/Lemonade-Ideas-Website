"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogsEn from "@/data/blogs.json";
import blogsEs from "@/data/blogs-es.json";
import { useLocale } from "next-intl";
import { ArrowRight, Lightbulb } from "lucide-react";

interface RelatedArticlesProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export default function RelatedArticles({ currentSlug, relatedSlugs }: RelatedArticlesProps) {
  const locale = useLocale();
  const blogsData = locale === "es" ? blogsEs : blogsEn;

  const articles = relatedSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => blogsData.find((b) => b.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  if (articles.length === 0) return null;

  const heading = locale === "es" ? "También te puede interesar" : "You may also find valuable";

  return (
    <div className="mt-[50px] mb-[10px]">
      <div className="bg-gradient-to-br from-[#f8faf8] to-[#f0f7f0] border border-[#e0ede0] rounded-[20px] p-[30px] md:p-[40px]">
        <div className="flex items-center gap-[12px] mb-[25px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#3AAB43]/10 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-[#3AAB43]" />
          </div>
          <h4 className="font-['Oswald'] font-bold text-[#1E3A1A] text-[1.3rem] uppercase tracking-[0.5px] m-0">
            {heading}
          </h4>
        </div>

        <div className="flex flex-col gap-[12px]">
          {articles.map((blog) => (
            <Link
              key={blog!.slug}
              href={`/blogs/${blog!.slug}`}
              className="group flex items-center gap-[16px] p-[14px] md:p-[16px] rounded-[14px] bg-white/70 hover:bg-white border border-transparent hover:border-[#3AAB43]/20 hover:shadow-[0_4px_15px_-3px_rgba(58,171,67,0.12)] transition-all duration-300"
            >
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[12px] overflow-hidden relative shrink-0 bg-gray-100">
                <Image
                  src={blog!.thumbnail || "/images/blogs/default-thumbnail.jpg"}
                  alt={blog!.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-['Oswald'] font-bold text-[#1E3A1A] text-[0.95rem] md:text-[1.05rem] leading-[1.35] m-0 uppercase group-hover:text-[#3AAB43] transition-colors line-clamp-2">
                  {blog!.title}
                </h5>
                <span className="text-[0.8rem] text-gray-400 mt-[4px] block">{blog!.date}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#3AAB43] group-hover:translate-x-1 transition-all duration-300 shrink-0 hidden md:block" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
