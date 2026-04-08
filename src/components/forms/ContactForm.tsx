"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ContactForm() {
    const t = useTranslations('Contact');
    const tGetStarted = useTranslations('GetStarted');
    const [submitting, setSubmitting] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submission initialized...");
        setSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            website: formData.get('website'),
            message: formData.get('message'),
        };
        console.log("Payload generated:", payload);

        try {
            console.log("Sending fetch request to /api/contact...");
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            console.log("Fetch response received. Status:", res.status);
            
            if (res.ok) {
                // ADDED: Ping MailerLite transparently in the background
                try {
                    await fetch('/api/mailerlite', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            email: payload.email, 
                            name: payload.name, 
                            groupId: '184120526691633061', // Contact Group
                            fields: {
                                phone: payload.phone || "",
                                company: payload.website || "", // Saving website in company field to avoid custom field conflict
                                quoting_details: "Mensaje General de Contacto"
                            }
                        })
                    });
                } catch(e) { console.error("Error from Mailerlite", e); }

                const data = await res.json();
                console.log("Success data:", data);
                alert("Thank you! Your message has been sent successfully.");
                
                // Unlock the free tools suite globally for this device
                if (typeof window !== 'undefined') {
                    localStorage.setItem('lemonade_global_unlocked', 'true');
                }

                (e.target as HTMLFormElement).reset();
            } else {
                const errData = await res.text();

                console.error("Server returned an error:", res.status, errData);
                alert(`Error submitting form: ${res.status}`);
            }
        } catch (error) {
            console.error("Network or parsing error caught:", error);
            alert("Connection error. Please try again later.");
        }
        
        setSubmitting(false);
        console.log("Form submission cycle complete (submitting set to false).");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                    name="name"
                    required
                    type="text" 
                    placeholder={t('form_name')} 
                    className="w-full bg-white border-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-4 lg:p-5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3AAB43] rounded-sm" 
                />
                <input 
                    name="email"
                    required
                    type="email" 
                    placeholder={t('form_email')} 
                    className="w-full bg-white border-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-4 lg:p-5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3AAB43] rounded-sm" 
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                    name="phone"
                    required
                    type="tel" 
                    placeholder={t('form_phone')} 
                    className="w-full bg-white border-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-4 lg:p-5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3AAB43] rounded-sm" 
                />
                <input 
                    name="website"
                    type="text" 
                    placeholder={t('form_website')} 
                    className="w-full bg-white border-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-4 lg:p-5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3AAB43] rounded-sm" 
                />
            </div>
            <textarea 
                name="message"
                required
                placeholder={t('form_message')} 
                rows={6}
                className="w-full bg-white border-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-4 lg:p-5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3AAB43] resize-none rounded-sm"
            ></textarea>
            <div className="pt-2 pb-4 border-t border-transparent">
                <label className="flex items-center cursor-pointer group w-fit">
                    <div className="relative flex items-center">
                        <input type="checkbox" name="agreeTerms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-[2px] outline-none checked:bg-white checked:border-[#3AAB43] cursor-pointer transition-all" required />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#3AAB43]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                    </div>
                    <span className="ml-3 text-sm text-gray-800 font-bold group-hover:text-black">
                        {tGetStarted('terms_agree')} <Link href="/terms-of-service" className="text-[#3AAB43] hover:underline" target="_blank">{tGetStarted('terms_link')}</Link>
                    </span>
                </label>
            </div>
            
            <div className="mt-2 flex justify-center w-full">
                <button 
                    type="submit" 
                    disabled={submitting}
                    className="bg-[#FED52B] text-[#1E3A1A] font-[Oswald] font-bold text-[14px] tracking-widest px-12 py-3.5 uppercase hover:bg-[#e6c126] transition-colors rounded-sm shadow-sm inline-block disabled:opacity-50"
                >
                    {submitting ? "..." : t('form_submit')}
                </button>
            </div>
        </form>
    );
}
