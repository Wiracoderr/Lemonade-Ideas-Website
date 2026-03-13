"use client";
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header Area */}
      <div className="bg-[#444] pt-36 pb-20 text-center text-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-[44px] font-[Oswald] font-bold uppercase leading-tight tracking-[0.02em] mb-8">
            Email Marketing Strategies to Grow Your Business
          </h1>
          <div className="flex items-center justify-center gap-4 text-[13px] font-bold text-gray-200 uppercase tracking-widest font-['Poppins',sans-serif]">
            <span className="flex items-center gap-2">
              <svg
                className="w-[18px] h-[18px] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
              Lemonade Ideas
            </span>
            <span className="text-[#3AAB43] font-black mx-1">|</span>
            <span className="flex items-center gap-2">
              <svg
                className="w-[18px] h-[18px] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
              </svg>
              March 6, 2026
            </span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="flex-1 py-16 px-4">
        <article className="max-w-4xl mx-auto prose prose-lg prose-green font-['Poppins',sans-serif] text-gray-800 leading-[1.8]">
          <div
            dangerouslySetInnerHTML={{
              __html: `<div                         className="
                            [&>h2]:text-[#1E3A1A] [&>h2]:mt-[60px] [&>h2]:mb-[25px] [&>h2]:font-extrabold [&>h2]:text-[2rem] [&>h2]:md:text-[2.5rem] [&>h2]:leading-[1.2] [&>h2]:border-b-4 [&>h2]:border-[#3AAB43] [&>h2]:pb-[15px]
                            [&>h3]:text-[#3AAB43] [&>h3]:mt-[50px] [&>h3]:mb-[20px] [&>h3]:font-bold [&>h3]:text-[1.5rem] [&>h3]:md:text-[1.8rem] [&>h3]:leading-[1.3] [&>h3]:uppercase [&>h3]:tracking-[1px]
                            [&>h4]:text-[#1E3A1A] [&>h4]:mt-[40px] [&>h4]:mb-[15px] [&>h4]:font-semibold [&>h4]:text-[1.25rem] [&>h4]:md:text-[1.5rem] [&>h4]:leading-[1.4] [&>h4]:bg-[#f0f7f0] [&>h4]:px-[20px] [&>h4]:py-[12px] [&>h4]:border-l-[5px] [&>h4]:border-[#FED52B] [&>h4]:rounded-r-[8px]
                            [&>p]:mb-[25px] [&>p]:text-justify [&>p]:text-[1.05rem] [&>p]:text-[#444] [&>p]:leading-[1.8]
                            [&>ul]:mb-[25px] [&>ul]:pl-[25px] [&>ul]:list-disc [&>ul]:text-[1.05rem] [&>ul]:text-[#444] [&>ul]:leading-[1.8] [&>ul>li]:mb-[10px]
                            [&>ol]:mb-[25px] [&>ol]:pl-[25px] [&>ol]:list-decimal [&>ol]:text-[1.05rem] [&>ol]:text-[#444] [&>ol]:leading-[1.8] [&>ol>li]:mb-[10px]
                            [&_strong]:text-[#1E3A1A] [&_strong]:font-bold
                            [&>img]:w-full [&>img]:block [&>img]:h-auto [&>img]:rounded-[12px] [&>img]:my-[45px] [&>img]:shadow-[0_10px_25px_rgba(0,0,0,0.12)] 
                            [&>div.geo-capsule]:bg-[#f9fff9] [&>div.geo-capsule]:border-l-[5px] [&>div.geo-capsule]:border-[#3AAB43] [&>div.geo-capsule]:p-[25px] [&>div.geo-capsule]:mb-[35px] [&>div.geo-capsule]:rounded-r-[12px] [&>div.geo-capsule]:shadow-sm
                        ">

        <h2>Email Marketing Strategies to Grow Your Business</h2>

        <p>In today’s digital age, email marketing remains one of the most effective tools for building customer
            relationships and driving business growth. With the right strategies, you can engage your audience, nurture
            leads, and turn subscribers into loyal customers. Here are three email marketing strategies to help you grow
            your business.</p>

        <figure>
            <img className="w-full h-auto rounded-xl border border-gray-100 shadow-sm my-8" src="/images/blogs/email-marketing-strategies-to-grow-your-business/email-marketing-strategies-1-300x225.webp"
                alt="Email Marketing Dashboard" title="Email Marketing Dashboard">
            <figcaption>Monitoring your email marketing success is key to growth.</figcaption>
        </figure>

        <h4>1. Personalize Your Emails</h4>
        <p>Personalization goes beyond addressing your recipient by name. By leveraging data such as purchase history,
            browsing behavior, or location, you can send emails that resonate with your audience. Personalized emails
            are proven to have higher open and click-through rates, ultimately leading to more conversions.</p>

        <figure>
            <img className="w-full h-auto rounded-xl border border-gray-100 shadow-sm my-8" src="/images/blogs/email-marketing-strategies-to-grow-your-business/email-marketing-strategies-2-200x300.webp"
                alt="Personalized gift or name tag symbolizing email personalization" title="Personalized Experience">
            <figcaption>Personalization makes your customers feel valued and understood.</figcaption>
        </figure>

        <p><strong>How to implement it:</strong></p>
        <ul>
            <li>Use segmentation to group your audience based on interests, demographics, or past interactions.</li>
            <li>Include dynamic content, such as product recommendations tailored to each recipient.</li>
            <li>Send personalized offers for birthdays, anniversaries, or milestones.</li>
        </ul>

        <p>For example, an e-commerce business could send an email like, “Hi Sarah, we noticed you’ve been eyeing our
            new fall collection. Here’s a 10% discount just for you!” This level of personalization makes customers feel
            valued and increases their likelihood of making a purchase.</p>

        <h4>2. Optimize for Mobile Devices</h4>
        <p>With over 50% of emails being opened on mobile devices, ensuring your emails look great on all screen sizes
            is essential. Poorly formatted emails can lead to frustrated recipients and lost opportunities.</p>

        <figure>
            <img className="w-full h-auto rounded-xl border border-gray-100 shadow-sm my-8" src="/images/blogs/email-marketing-strategies-to-grow-your-business/email-marketing-strategies-3-300x225.webp"
                alt="Smartphone displaying an email" title="Mobile Optimization">
            <figcaption>Ensure your emails look perfect on every device, especially mobile.</figcaption>
        </figure>

        <p><strong>How to implement it:</strong></p>
        <ul>
            <li>Use responsive email templates that adjust to different screen sizes.</li>
            <li>Keep subject lines short and impactful to capture attention on smaller screens.</li>
            <li>Optimize images and avoid large file sizes to reduce loading times.</li>
        </ul>

        <p>Test your emails on various devices and email clients before sending them out. A seamless mobile experience
            can significantly enhance user engagement and improve your campaign’s performance.</p>

        <h4>3. Craft Compelling Call-to-Actions (CTAs)</h4>
        <p>Your email’s goal is to drive action, whether it’s making a purchase, signing up for an event, or downloading
            a resource. A strong, clear, and compelling CTA is critical to achieving this.</p>

        <figure>
            <img className="w-full h-auto rounded-xl border border-gray-100 shadow-sm my-8" src="/images/blogs/email-marketing-strategies-to-grow-your-business/email-marketing-strategies-4-300x200.webp"
                alt="Call to Action button on a screen" title="Call to Action">
            <figcaption>A clear Call to Action guides your audience to the next step.</figcaption>
        </figure>

        <p><strong>How to implement it:</strong></p>
        <ul>
            <li>Use action-oriented language like “Shop Now,” “Download Your Free Guide,” or “Claim Your Discount.”</li>
            <li>Make your CTA visually distinct by using buttons or bold text.</li>
            <li>Position the CTA prominently within the email, ensuring it’s easy to find.</li>
        </ul>

        <p>For instance, an online course provider could include a CTA like, “Start Learning Today” with a button
            leading directly to their sign-up page. Effective CTAs remove ambiguity and guide recipients toward the
            desired action.</p>

        <h2>Conclusion</h2>
        <p>Email marketing is a powerful tool that, when executed strategically, can drive significant business growth.
            By personalizing your emails, optimizing for mobile devices, and creating compelling CTAs, you can engage
            your audience effectively and boost your bottom line. Start implementing these strategies today to see
            measurable results in your email marketing campaigns.</p>

        `,
            }}
          />
        </article>

        {/* 2. Interactive Signature Panel */}
        <div className="max-w-3xl mx-auto mt-20 mb-10 px-4">
          <div className="bg-[#f0f9f1] border border-[#d2eed6] rounded-2xl shadow-sm p-12 flex flex-col items-center text-center">
            <Link
              href="/"
              className="transition-transform hover:scale-105 mb-8 block"
            >
              <Image
                src="/images/layer-1.png"
                alt="Lemonade Ideas"
                width={240}
                height={60}
                className="w-auto h-12"
              />
            </Link>

            <Link
              href="/get-started"
              className="bg-[#FED52B] text-[#1E3A1A] font-[Oswald] font-bold text-lg uppercase tracking-wider px-10 py-4 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all mb-6 inline-block"
            >
              LEARN MORE
            </Link>

            <Link
              href="/"
              className="text-[#1E3A1A] font-medium font-['Poppins'] text-[16px] hover:text-[#3AAB43] hover:underline mb-8 transition-colors"
            >
              www.lemonadeideas.com
            </Link>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.facebook.com/lemonadeidea/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3C9F] text-2xl hover:-translate-y-1 hover:text-[#3AAB43] transition-all"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/lemonade.ideas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3C9F] text-2xl hover:-translate-y-1 hover:text-[#3AAB43] transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3C9F] text-2xl hover:-translate-y-1 hover:text-[#3AAB43] transition-all"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="http://www.linkedin.com/in/lemonade-ideas-080122348"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3C9F] text-2xl hover:-translate-y-1 hover:text-[#3AAB43] transition-all"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Older / Newer Posts Navigation */}
        <div className="max-w-3xl mx-auto mb-20 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blogs/optimizing-google-business-profile-for-contractors"
            className="bg-[#1E3A1A] text-white font-[Oswald] font-bold text-lg tracking-widest uppercase px-8 py-3 hover:bg-[#3AAB43] transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <i className="fas fa-arrow-left"></i> OLDER POST
          </Link>

          <Link
            href="/blogs/why-cant-i-boost-my-post"
            className="bg-[#1E3A1A] text-white font-[Oswald] font-bold text-lg tracking-widest uppercase px-8 py-3 hover:bg-[#3AAB43] transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            NEWER POST <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </main>

      <CTASection />
    </div>
  );
}
