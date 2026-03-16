"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface BlogPost {
    title: string;
    slug: string;
    thumbnail: string;
    date: string;
    excerpt?: string;
}

export default function BlogGrid({ initialBlogs }: { initialBlogs: BlogPost[] }) {
    const perPage = 6; // Changed from 9 to 6 per user request
    const t = useTranslations('Blogs');
    
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    
    // We assume if initialBlogs comes in, we are no longer "loading" the initial batch.
    const isLoading = false; 

    // Filter blogs based on search query
    const filteredBlogs = useMemo(() => {
        if (!searchQuery.trim()) return initialBlogs;
        
        const lowerQuery = searchQuery.toLowerCase();
        return initialBlogs.filter(blog => 
            blog.title.toLowerCase().includes(lowerQuery) || 
            (blog.excerpt && blog.excerpt.toLowerCase().includes(lowerQuery))
        );
    }, [initialBlogs, searchQuery]);

    const totalPages = Math.ceil(filteredBlogs.length / perPage);

    // Get current page items
    const displayedBlogs = useMemo(() => {
        const startIndex = (currentPage - 1) * perPage;
        return filteredBlogs.slice(startIndex, startIndex + perPage);
    }, [filteredBlogs, currentPage, perPage]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

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

    return (
        <>
            {/* Search Bar Container */}
            <div className="mb-[40px] max-w-[600px] mx-auto">
                <div className="relative">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder={t('search_placeholder')} 
                        className="w-full pl-[45px] pr-[20px] py-[15px] rounded-full border-2 border-[#eaeaea] focus:border-[#3AAB43] focus:outline-none transition-colors text-[1rem] text-[#1E3A1A] shadow-sm"
                    />
                    <svg 
                        className="absolute left-[15px] top-[50%] -translate-y-1/2 w-[20px] h-[20px] text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {filteredBlogs.length === 0 ? (
                <div className="text-center text-red-600 bg-red-50 py-4 px-6 rounded-lg my-10 border border-red-100 shadow-sm max-w-md mx-auto">
                    {initialBlogs.length === 0 ? t('no_posts') : t('no_posts')}
                </div>
            ) : (
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
                                    {blog.excerpt || t('excerpt_fallback', { title: blog.title.toLowerCase() })}
                                </p>
                                <Link 
                                    href={`/blogs/${blog.slug}`} 
                                    className="self-start inline-block bg-[#3AAB43] text-white px-[20px] py-[10px] rounded-[5px] font-semibold text-[0.9rem] transition-colors hover:bg-[#2b8432]"
                                >
                                    {t('read_more')}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-6 mt-10 mb-5">
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        aria-label="Previous Page"
                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 border-none 
                            ${currentPage === 1 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-[#1E3A1A] text-white hover:bg-[#2c5326] shadow-md hover:shadow-lg cursor-pointer'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    
                    <span className="text-[#1E3A1A] font-medium text-[1.1rem]">
                        {t('page_of', { current: currentPage, total: totalPages })}
                    </span>

                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        aria-label="Next Page"
                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 border-none 
                            ${currentPage === totalPages 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-[#1E3A1A] text-white hover:bg-[#2c5326] shadow-md hover:shadow-lg cursor-pointer'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            )}
        </>
    );
}
