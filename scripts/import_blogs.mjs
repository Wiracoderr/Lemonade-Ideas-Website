import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure trailing slash for consistent joining, but use path.join mostly.
const BLOGS_DIR = path.join(__dirname, '..', 'Blogs');
const DEST_PUBLIC_IMG = path.join(__dirname, '..', 'public', 'images', 'blogs');
const DEST_APP_BLOGS = path.join(__dirname, '..', 'src', 'app', 'blogs');
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'blogs.json');

// --- Helper: Download Image ---
function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fsSync.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode >= 200 && response.statusCode < 300) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(new Error(`Failed to download: ${response.statusCode} ${response.statusMessage}`));
            }
        }).on('error', (err) => {
            fsSync.unlink(dest, () => reject(err));
        });
    });
}

// --- Helper: Generate Slug ---
function generateSlug(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function main() {
    try {
        await fs.mkdir(DEST_PUBLIC_IMG, { recursive: true });
        await fs.mkdir(DEST_APP_BLOGS, { recursive: true });
        await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });

        const blogDirs = await fs.readdir(BLOGS_DIR);
        const metadataList = [];
        const parsedBlogs = []; // Store HTML content for Pass 2

        // PASS 1: Parse and Extract Data
        for (const dirName of blogDirs) {
            const blogRootPath = path.join(BLOGS_DIR, dirName);
            const stat = await fs.stat(blogRootPath);
            if (!stat.isDirectory()) continue;

            const indexPath = path.join(blogRootPath, 'index.html');
            try {
                await fs.access(indexPath);
            } catch {
                continue; // No index.html, skip this folder
            }

            const targetSubdir = dirName;
            console.log(`\nParsing: ${targetSubdir}`);
                const htmlContent = await fs.readFile(indexPath, 'utf-8');

                const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
                let title = titleMatch ? titleMatch[1].replace(' | Lemonade Ideas', '').trim() : targetSubdir.replace(/_/g, ' ');
            const slug = generateSlug(title);

            const wrapperStart = htmlContent.indexOf('<div class="lemonade-blog-wrapper">');
            let wrapperContent = "";
            if (wrapperStart !== -1) {
                 const signatureStart = htmlContent.indexOf('<!-- BEGIN LEMONADE IDEAS SIGNATURE -->', wrapperStart);
                 if (signatureStart !== -1) {
                     wrapperContent = htmlContent.substring(wrapperStart, signatureStart);
                 } else {
                     wrapperContent = htmlContent.substring(wrapperStart);
                     const bodyEnd = wrapperContent.indexOf('</body>');
                     if (bodyEnd !== -1) wrapperContent = wrapperContent.substring(0, bodyEnd);
                 }
                 // Remove main h2 introduction if present
                 wrapperContent = wrapperContent.replace(/<h2>Introduction<\/h2>/, '');
            } else {
                 wrapperContent = htmlContent;
            }

            let processedHtml = wrapperContent;
            const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
            let match;
            let firstImage = null;

            await fs.mkdir(path.join(DEST_PUBLIC_IMG, slug), { recursive: true });

            while ((match = imgRegex.exec(wrapperContent)) !== null) {
                const fullImgTag = match[0];
                let imgSrc = match[1];
                let newSrc = imgSrc;

                let filename = path.basename(imgSrc).split('?')[0];
                if (!filename || filename === '') {
                    filename = `image_${crypto.randomBytes(4).toString('hex')}.jpg`;
                }
                const destPath = path.join(DEST_PUBLIC_IMG, slug, filename);
                const publicUrl = `/images/blogs/${slug}/${filename}`;

                if (imgSrc.startsWith('http://') || imgSrc.startsWith('https://')) {
                    console.log(`  Downloading: ${imgSrc}`);
                    try {
                        await downloadImage(imgSrc, destPath);
                        newSrc = publicUrl;
                    } catch (err) {
                        console.error(`  Failed to download ${imgSrc}: ${err.message}`);
                        newSrc = '/images/hero-bg.jpg';
                    }
                } else {
                    const localImgPath = path.resolve(blogRootPath, imgSrc);
                    try {
                        await fs.copyFile(localImgPath, destPath);
                        console.log(`  Copied local: ${imgSrc}`);
                        newSrc = publicUrl;
                    } catch (err) {
                        console.error(`  Failed to copy ${imgSrc}: ${err.message}`);
                        newSrc = '/images/hero-bg.jpg';
                    }
                }

                if (!firstImage) firstImage = newSrc;

                const newImgTag = fullImgTag.replace(imgSrc, newSrc).replace(/style="[^"]*"/, '').replace(/class="[^"]*"/, '');
                processedHtml = processedHtml.replace(fullImgTag, newImgTag);
            }

            processedHtml = processedHtml.replace(/class="/g, 'className="')
                            .replace(/&(?!(amp|lt|gt|quot|apos|nbsp);)/g, '&amp;')
                            .replace(/<br>/g, '<br />');

            let dateObj = new Date();
            // Assign sequential dates starting today backward
            dateObj.setDate(dateObj.getDate() - parsedBlogs.length * 3);
            const dateStr = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

            metadataList.push({ title, slug, thumbnail: firstImage || '/images/hero-bg.jpg', date: dateStr });
            parsedBlogs.push({ title, slug, date: dateStr, processedHtml });
        }

        // PASS 2: Generate React Pages with Next/Prev links
        console.log(`\nGenerating next.js pages...`);
        for (let i = 0; i < parsedBlogs.length; i++) {
            const blog = parsedBlogs[i];
            const prevBlog = i < parsedBlogs.length - 1 ? parsedBlogs[i + 1] : null; // Older post
            const nextBlog = i > 0 ? parsedBlogs[i - 1] : null; // Newer post
            
            const pageDest = path.join(DEST_APP_BLOGS, blog.slug, 'page.tsx');
            await fs.mkdir(path.dirname(pageDest), { recursive: true });

            const pageContent = `"use client";
import React from 'react';
import CTASection from '@/components/seo/CTASection';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogPost() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            </Head>

            {/* 1. Header Area - Dark Grey, Roboto/Oswald Fonts, Responsive Padding */}
            <div className="bg-[#444444] pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] text-center text-white px-4 md:px-[20px] font-['Poppins',sans-serif]">
                <div className="mx-auto w-full max-w-[1000px]">
                     <h1 className="text-[2rem] md:text-[2.75rem] font-[Oswald] font-bold uppercase leading-[1.3] tracking-[0.5px] mb-[20px] text-[#ffffff]">
                         ${blog.title.replace(/"/g, '&quot;')}
                     </h1>
                     <div className="flex items-center justify-center gap-[15px] text-[0.9rem] font-semibold text-[#e0e0e0]">
                         <span className="flex items-center gap-[6px]">
                             <i className="fas fa-user-circle text-[1.1em]"></i> Lemonade Ideas
                         </span>
                         <span>|</span>
                         <span className="flex items-center gap-[6px]">
                             <i className="far fa-calendar-alt text-[1.1em]"></i> ${blog.date}
                         </span>
                     </div>
                </div>
            </div>

            {/* Content Area - 1200px Wrapper strict rule matching HTML style block */}
            <main className="flex-1 px-4 md:px-[20px]">
                <article className="max-w-[1200px] mx-auto py-[30px] md:py-[40px] font-['Poppins',sans-serif] text-[#333] leading-[1.6]">
                    <div dangerouslySetInnerHTML={{ __html: \`${blog.processedHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} 
                        className="
                            [&>h2]:text-[#1E3A1A] [&>h2]:mt-[30px] [&>h2]:md:mt-[40px] [&>h2]:font-bold [&>h2]:text-xl [&>h2]:md:text-2xl 
                            [&>h3]:text-[#3AAB43] [&>h3]:mt-[20px] [&>h3]:md:mt-[30px] [&>h3]:font-semibold [&>h3]:text-lg [&>h3]:md:text-xl 
                            [&>h4]:text-[#1E3A1A] [&>h4]:mt-[15px] [&>h4]:md:mt-[20px] [&>h4]:font-semibold [&>h4]:text-base [&>h4]:md:text-lg 
                            [&>p]:mb-[20px] 
                            [&>ul]:mb-[20px] [&>ul]:pl-[20px] [&>ul]:list-disc 
                            [&>ol]:mb-[20px] [&>ol]:pl-[20px] [&>ol]:list-decimal [&>li]:mb-[10px] 
                            [&_strong]:text-[#1E3A1A] 
                            [&>img]:w-full [&>img]:block [&>img]:h-auto [&>img]:rounded-[8px] [&>img]:my-[30px] [&>img]:shadow-[0_4px_10px_rgba(0,0,0,0.1)] 
                            [&>div.geo-capsule]:bg-[#f0f7f0] [&>div.geo-capsule]:border-l-[5px] [&>div.geo-capsule]:border-[#3AAB43] [&>div.geo-capsule]:p-[20px] [&>div.geo-capsule]:mb-[30px] [&>div.geo-capsule]:rounded-r-[8px]
                        " 
                    />

                    {/* 2. Interactive Signature Panel - Within Wrapper */}
                    <div className="mt-[40px] md:mt-[50px] pt-[20px] md:pt-[30px] pb-[20px] md:pb-[30px] border-t-2 border-[#3AAB43] text-center bg-[#f9fff9] rounded-[8px]">
                        <Link href="/" className="transition-transform hover:scale-105 mb-[20px] block w-full mx-auto max-w-[150px] md:max-w-[200px]">
                            <Image src="/logos/PNGs - SVGs/4x/Asset 3@4x-8.png" alt="Lemonade Ideas" width={200} height={60} className="w-full h-auto rounded-none shadow-none" />
                        </Link>
                        
                        <div>
                            <Image src="/logos/optimized-logo-2.webp" alt="Lemonade Ideas Icon" width={480} height={120} className="w-full max-w-[480px] h-auto mx-auto mb-[20px] block" />
                            <Link href="/" className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold uppercase py-[12px] md:py-[15px] px-[25px] md:px-[30px] rounded-[50px] no-underline my-[20px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform text-[0.95rem] md:text-base">
                                LEARN MORE
                            </Link>
                        </div>
                        
                        <Link href="/" className="block mt-[15px] text-[#1E3A1A] font-semibold no-underline hover:text-[#3AAB43] transition-colors">
                            www.lemonadeideas.com
                        </Link>
                        
                        <div className="flex justify-center flex-wrap gap-[20px] mt-[20px]">
                            <a href="https://www.facebook.com/lemonadeidea/" target="_blank" rel="noopener noreferrer" className="text-[#0F3C9F] text-[24px] hover:scale-110 transition-transform"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/lemonade.ideas" target="_blank" rel="noopener noreferrer" className="text-[#0F3C9F] text-[24px] hover:scale-110 transition-transform"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" target="_blank" rel="noopener noreferrer" className="text-[#0F3C9F] text-[24px] hover:scale-110 transition-transform"><i className="fab fa-youtube"></i></a>
                            <a href="http://www.linkedin.com/in/lemonade-ideas-080122348" target="_blank" rel="noopener noreferrer" className="text-[#0F3C9F] text-[24px] hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </article>

                {/* Older / Newer Posts Navigation */}
                <div className="max-w-3xl mx-auto mb-20 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    ${prevBlog ? `<Link href="/blogs/${prevBlog.slug}" className="bg-[#1E3A1A] text-white font-[Oswald] font-bold text-lg tracking-widest uppercase px-8 py-3 hover:bg-[#3AAB43] transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
                        <i className="fas fa-arrow-left"></i> OLDER POST
                    </Link>` : `<div className="w-full sm:w-auto"></div>`}
                    
                    ${nextBlog ? `<Link href="/blogs/${nextBlog.slug}" className="bg-[#1E3A1A] text-white font-[Oswald] font-bold text-lg tracking-widest uppercase px-8 py-3 hover:bg-[#3AAB43] transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
                        NEWER POST <i className="fas fa-arrow-right"></i>
                    </Link>` : `<div className="w-full sm:w-auto"></div>`}
                </div>
            </main>
            
            <CTASection />
        </div>
    );
}
`;
            await fs.writeFile(pageDest, pageContent, 'utf-8');
            console.log(`  Created Next.js page: /blogs/${blog.slug}`);
        }

        await fs.writeFile(DATA_FILE, JSON.stringify(metadataList, null, 2), 'utf-8');
        console.log(`\nSuccessfully processed ${metadataList.length} blogs. Data saved to src/data/blogs.json`);

    } catch (err) {
        console.error("Error during blog import:", err);
    }
}

main();
