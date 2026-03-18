"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogsEn from "@/data/blogs.json";
import blogsEs from "@/data/blogs-es.json";
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, BookOpen, Calendar } from 'lucide-react';

interface BlogNavigationProps {
  currentSlug: string;
}

export default function BlogNavigation({ currentSlug }: BlogNavigationProps) {
  const locale = useLocale();
  const t = useTranslations('Blogs');
  const blogsData = locale === 'es' ? blogsEs : blogsEn;

  const currentIndex = blogsData.findIndex((blog) => blog.slug === currentSlug);

  if (currentIndex === -1) {
    return null; // Should not happen ideally
  }

  // Calculate Previous and Next
  // If at the beginning, previous wraps to the end.
  const prevIndex = currentIndex === 0 ? blogsData.length - 1 : currentIndex - 1;
  // If at the end, next wraps to the beginning.
  const nextIndex = currentIndex === blogsData.length - 1 ? 0 : currentIndex + 1;

  const prevBlog = blogsData[prevIndex];
  const nextBlog = blogsData[nextIndex];

  // Filter out the current blog for the carousel
  const carouselBlogs = blogsData.filter((blog) => blog.slug !== currentSlug);

  return (
    <section className="bg-[#fcfcfc] py-[80px] mt-[40px] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-[20px]">
        
        {/* Previous / Next Navigation Arrows */}
        {blogsData.length > 1 && (
          <div className="flex flex-col md:flex-row justify-between gap-[20px] mb-[60px] pb-[40px] border-b border-gray-200">
            {/* Previous Article */}
            <Link 
              href={`/blogs/${prevBlog.slug}`}
              className="flex-1 group flex items-center gap-[20px] p-[20px] rounded-[16px] hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center text-[#3AAB43] group-hover:bg-[#3AAB43] group-hover:text-white transition-colors shrink-0">
                <ArrowLeft />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[0.85rem] font-bold text-gray-400 uppercase tracking-[1px] block mb-[5px]">{t('prev_article')}</span>
                <h4 
                  className="font-['Oswald'] font-bold text-[#1E3A1A] text-[1.1rem] leading-[1.3] truncate group-hover:text-[#3AAB43] transition-colors m-0"
                  title={prevBlog.title}
                >
                  {prevBlog.title}
                </h4>
              </div>
            </Link>

            {/* Next Article */}
            <Link 
              href={`/blogs/${nextBlog.slug}`}
              className="flex-1 group flex items-center justify-end gap-[20px] p-[20px] rounded-[16px] hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300 text-right md:flex-row-reverse"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center text-[#3AAB43] group-hover:bg-[#3AAB43] group-hover:text-white transition-colors shrink-0">
                <ArrowRight />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[0.85rem] font-bold text-gray-400 uppercase tracking-[1px] block mb-[5px]">{t('next_article')}</span>
                <h4 
                  className="font-['Oswald'] font-bold text-[#1E3A1A] text-[1.1rem] leading-[1.3] truncate group-hover:text-[#3AAB43] transition-colors m-0"
                  title={nextBlog.title}
                >
                  {nextBlog.title}
                </h4>
              </div>
            </Link>
          </div>
        )}

        {/* Keep Learning Carousel Section */}
        {carouselBlogs.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-[30px]">
              <h2 className="text-[2rem] font-['Oswald'] font-bold text-[#1E3A1A] uppercase m-0 flex items-center gap-[15px]">
                <BookOpen className="text-[#3AAB43]" /> {t('keep_learning')}
              </h2>
              <Link href="/blogs" className="text-[#3AAB43] font-bold hover:text-[#1E3A1A] transition-colors hidden md:flex items-center gap-[8px]">
                {t('view_all')} <ArrowRight className="text-[0.8em]" />
              </Link>
            </div>

            {/* Horizontal Scrollable Carousel */}
            <div className="flex overflow-x-auto gap-[30px] pb-[20px] snap-x snap-mandatory hide-scroll-bar">
              {carouselBlogs.map((blog) => (
                <div key={blog.slug} className="min-w-[280px] md:min-w-[350px] flex-shrink-0 snap-center">
                  <div className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-gray-100 group h-full flex flex-col">
                    <Link href={`/blogs/${blog.slug}`} className="block relative w-full h-[200px] overflow-hidden">
                      <Image
                        src={blog.thumbnail || "/images/blogs/default-thumbnail.jpg"}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                      <div className="absolute top-[15px] left-[15px] bg-[#FED52B] text-[#1E3A1A] text-[0.75rem] font-bold px-[12px] py-[4px] rounded-full uppercase tracking-[1px] shadow-sm">
                        {t('article')}
                      </div>
                    </Link>
                    <div className="p-[20px] flex flex-col flex-1">
                      <div className="flex items-center gap-[8px] text-[0.85rem] text-gray-500 mb-[10px] font-medium">
                        <Calendar className="text-[#3AAB43]" />
                        {blog.date}
                      </div>
                      <Link href={`/blogs/${blog.slug}`} className="block block flex-1" title={blog.title}>
                        <h4 className="text-[1.3rem] font-['Oswald'] font-bold text-[#1E3A1A] leading-[1.3] group-hover:text-[#3AAB43] transition-colors uppercase m-0 line-clamp-2 title-ellipsis">
                          {blog.title}
                        </h4>
                      </Link>
                      <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-[8px] text-[#3AAB43] font-bold text-[0.95rem] mt-[15px] group-hover:text-[#1E3A1A] transition-colors">
                        {t('read_more')} <ArrowRight className="text-[0.8em] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-[20px] text-center md:hidden">
              <Link href="/blogs" className="text-[#3AAB43] font-bold hover:text-[#1E3A1A] transition-colors inline-flex items-center gap-[8px]">
                {t('view_all')} <ArrowRight className="text-[0.8em]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
