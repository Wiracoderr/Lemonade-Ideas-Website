"use client";

import React, { useState } from "react";
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function GetStartedPage() {
    const t = useTranslations('GetStarted');
    const [formData, setFormData] = useState({
        businessName: "",
        yourName: "",
        businessEmail: "",
        businessPhone: "",
        websiteUrl: "",
        services: {
            guaranteedRanking: false,
            seo: false,
            googleAds: false,
            smm: false,
            branding: false,
            websiteDesign: false,
        },
        agreeTerms: false,
    });
    const [submitting, setSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (name === "agreeTerms") {
                setFormData({ ...formData, agreeTerms: checked });
            } else {
                setFormData({
                    ...formData,
                    services: {
                        ...formData.services,
                        [name]: checked,
                    },
                });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        
        const selectedServices = Object.entries(formData.services)
            .filter(([_, isSelected]) => isSelected)
            .map(([serviceName]) => serviceName)
            .join(", ");

        const payload = {
            name: formData.businessName, // Column A
            splitName: formData.yourName, // Column B
            email: formData.businessEmail,
            phone: formData.businessPhone,
            website: formData.websiteUrl,
            message: `Agreed to terms: ${formData.agreeTerms ? 'Yes' : 'No'}`,
            services: selectedServices, // New column specifically for comma separated services
        };

        try {
            const response = await fetch('/api/get-started', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert(t('alert_success'));
                setFormData({
                    businessName: "",
                    yourName: "",
                    businessEmail: "",
                    businessPhone: "",
                    websiteUrl: "",
                    services: {
                        guaranteedRanking: false,
                        seo: false,
                        googleAds: false,
                        smm: false,
                        branding: false,
                        websiteDesign: false,
                    },
                    agreeTerms: false,
                });
            } else {
                alert("There was an error submitting the form. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Connection error.");
        }
        
        setSubmitting(false);
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto px-4 w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-[42px] font-black font-display uppercase text-[#1a1a1a] leading-tight tracking-tight mb-4">
                        {t('title1')}
                        <br />
                        {t('title2')}
                    </h1>
                    {/* Yellow decorative scribble */}
                    <div className="flex justify-center mt-2">
                        <img src="/images/layer-1.png" alt="underline" width={200} height={16} className="h-4 object-contain opacity-90" />
                    </div>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="border border-gray-200 bg-white rounded-sm shadow-sm overflow-hidden flex flex-col">
                    {/* Dark Green Header */}
                    <div className="bg-[#1E3A1A] py-3 text-center">
                        <h2 className="text-white font-[Oswald] font-bold text-lg uppercase tracking-wide">
                            {t('company_info')}
                        </h2>
                    </div>

                    <div className="p-8 md:p-12 space-y-8 flex-grow">
                        {/* Input Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {/* Row 1 */}
                            <div className="flex flex-col">
                                <label htmlFor="businessName" className="text-sm font-bold text-gray-800 mb-2">{t('form_bname')}</label>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#1E3A1A] focus:ring-1 focus:ring-[#1E3A1A] transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="yourName" className="text-sm font-bold text-gray-800 mb-2">{t('form_yname')}</label>
                                <input
                                    type="text"
                                    id="yourName"
                                    name="yourName"
                                    value={formData.yourName}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#1E3A1A] focus:ring-1 focus:ring-[#1E3A1A] transition-all"
                                    required
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col">
                                <label htmlFor="businessEmail" className="text-sm font-bold text-gray-800 mb-2">{t('form_bemail')}</label>
                                <input
                                    type="email"
                                    id="businessEmail"
                                    name="businessEmail"
                                    value={formData.businessEmail}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#1E3A1A] focus:ring-1 focus:ring-[#1E3A1A] transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="businessPhone" className="text-sm font-bold text-gray-800 mb-2">{t('form_bphone')}</label>
                                <input
                                    type="tel"
                                    id="businessPhone"
                                    name="businessPhone"
                                    value={formData.businessPhone}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#1E3A1A] focus:ring-1 focus:ring-[#1E3A1A] transition-all"
                                    required
                                />
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-col md:col-span-2 md:w-[calc(50%-1.5rem)]">
                                <label htmlFor="websiteUrl" className="text-sm font-bold text-gray-800 mb-2">{t('form_website')}</label>
                                <input
                                    type="text"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    value={formData.websiteUrl}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-gray-300 p-3 lg:p-4 text-[15px] text-gray-800 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50] rounded-[2px] transition-colors"
                                    placeholder="www.yourwebsite.com"
                                />
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="pt-6">
                            <h3 className="text-sm font-bold text-[#1E3A1A] uppercase tracking-wide mb-6">
                                {t('services_title')}
                            </h3>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="guaranteedRanking" checked={formData.services.guaranteedRanking} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#1E3A1A] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#1E3A1A]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">{t('service_guaranteed')}</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="seo" checked={formData.services.seo} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#1E3A1A] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#1E3A1A]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">{t('service_seo')}</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="googleAds" checked={formData.services.googleAds} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#1E3A1A] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#1E3A1A]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">{t('service_ads')}</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="smm" checked={formData.services.smm} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#1E3A1A] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#1E3A1A]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">{t('service_smm')}</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="branding" checked={formData.services.branding} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#1E3A1A] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#1E3A1A]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">{t('service_branding')}</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="websiteDesign" checked={formData.services.websiteDesign} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#1E3A1A] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#1E3A1A]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">{t('service_web')}</span>
                                </label>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="pt-6 border-t border-transparent">
                            <label className="flex items-center cursor-pointer group w-fit">
                                <div className="relative flex items-center">
                                    <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-[2px] outline-none checked:bg-white checked:border-[#4caf50] cursor-pointer transition-all" required />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#4caf50]">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                </div>
                                <span className="ml-3 text-sm text-gray-800 font-bold group-hover:text-black">
                                    {t('terms_agree')} <Link href="/terms-of-service" className="text-[#4caf50] hover:underline" target="_blank">{t('terms_link')}</Link>
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8 pb-4 flex justify-center">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="bg-[#FED52B] text-[#1E3A1A] font-[Oswald] font-bold text-sm uppercase px-10 py-3 rounded-sm shadow-sm hover:shadow-md hover:bg-yellow-300 transition-all flex items-center justify-center min-w-[150px] disabled:opacity-50"
                            >
                                {submitting ? "..." : t('form_submit')}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}
