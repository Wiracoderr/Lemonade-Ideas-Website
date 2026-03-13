"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
    title: string;
    slug: string;
    thumbnail: string;
    date: string;
    excerpt?: string;
}

export default function BlogGrid({ initialBlogs }: { initialBlogs: BlogPost[] }) {
    const perPage = 9;
    
    const [displayedBlogs, setDisplayedBlogs] = useState<BlogPost[]>(
        initialBlogs.slice(0, perPage)
    );
    const [page, setPage] = useState(1);
    
    // We assume if initialBlogs comes in, we are no longer "loading" the initial batch.
    const isLoading = false; 

    const loadMore = () => {
        const nextTarget = (page + 1) * perPage;
        setDisplayedBlogs(initialBlogs.slice(0, nextTarget));
        setPage(page + 1);
    };

    const hasMore = displayedBlogs.length < initialBlogs.length;

    // Loading Skeleton state
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-[12px] shadow-sm overflow-hidden flex flex-col border border-[#eaeaea]">
                        {/* Skeleton Image Area */}
                        <div className="w-full h-[200px] bg-gray-200 animate-pulse"></div>
                        
                        {/* Skeleton Content Area */}
                        <div className="p-[25px] flex-grow flex flex-col gap-4">
                            <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
                            
                            <div className="space-y-2 mt-2 flex-grow">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
                            </div>
                            
                            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3 mt-2"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (initialBlogs.length === 0) {
        return (
            <div className="text-center text-red-600 bg-red-50 py-4 px-6 rounded-lg my-10 border border-red-100 shadow-sm max-w-md mx-auto">
                No blog posts found. Run the import script.
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]">
                {displayedBlogs.map((blog, idx) => (
                    <div key={idx} className="bg-white rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex flex-col border border-[#eaeaea]">
                        <div className="relative w-full h-[200px] overflow-hidden bg-gray-100">
                            <Image 
                                src={blog.thumbnail || '/images/hero-bg.jpg'} 
                                alt={blog.title} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={idx < 6}
                                className="object-cover"
                            />
                        </div>
                        <div className="p-[25px] flex-grow flex flex-col">
                            <h3 className="text-[#1E3A1A] text-[1.25rem] font-bold mb-[15px] leading-[1.4] line-clamp-2">
                                {blog.title}
                            </h3>
                            <p className="text-[#555] text-[0.95rem] leading-[1.6] mb-[20px] flex-grow line-clamp-3">
                                {blog.excerpt || `Discover more about ${blog.title.toLowerCase()} and how it impacts your strategy and growth.`}
                            </p>
                            <Link 
                                href={`/blogs/${blog.slug}`} 
                                className="self-start inline-block bg-[#3AAB43] text-white px-[20px] py-[10px] rounded-[5px] font-semibold text-[0.9rem] transition-colors hover:bg-[#2b8432]"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="text-center mt-10 mb-5">
                    <button 
                        onClick={loadMore} 
                        className="bg-[#FED52B] text-[#1E3A1A] border-none px-10 py-3.5 text-base font-bold rounded-full cursor-pointer transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] focus:outline-none"
                    >
                        Load More Articles
                    </button>
                </div>
            )}
        </>
    );
}
