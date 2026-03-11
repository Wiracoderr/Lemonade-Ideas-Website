import React from 'react';

export default function SmmFastTrackSection() {
    return (
        <section className="py-20 bg-white font-sans" data-purpose="fast-track">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
                <div className="md:w-1/2">
                    <img 
                        alt="Person using tablet" 
                        className="rounded-lg shadow-xl w-full h-auto object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGy4K9K7k7TvvrZ9OiIua4GxRTPUUoS7Y8QISucrV20YzVOUIokLxX236STa0rsew706G2Z2MfpHJhBf-OlgJWopyEn6vjCpa2XbkwOsFwZrzVoquIpWR-_tGmh-pmrXeFffFH49gU0Lv0a8D5ljqCHKMrJ-p3ZfMJIq8ll2C6VQxwNX22V-HkRC0cswLQZTfRXLiWLzRNez6pXNLfpZXqXOvKraIRJGc2ELAw7MZcx5dfYp-dA6x-9u55c-TtFd8jF0hdrw-Jzfo"
                        loading="lazy"
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="pl-6 border-l-8 border-[#ccff00]">
                        <h2 className="text-3xl font-extrabold text-[#0d2a1a] uppercase leading-none mb-4">
                            Get on the fast track to more leads and sales
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 font-medium text-[15px]">
                            With Social Media Management, you can showcase your business where it matters most—on the platforms your audience uses daily. We&apos;ll create and manage your campaigns the right way, crafting engaging content and strategies to boost your reach, engagement, and conversions. Plus, we&apos;ll continuously optimize your social media presence to deliver even better results over time, all at an affordable price.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
