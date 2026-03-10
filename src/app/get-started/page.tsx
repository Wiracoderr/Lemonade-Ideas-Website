"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function GetStartedPage() {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally send the data to an API/backend
        console.log("Form submitted:", formData);
        alert("Thank you! We will be in touch shortly.");
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto px-4 w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-[42px] font-black font-display uppercase text-[#1a1a1a] leading-tight tracking-tight mb-4">
                        WE&apos;RE EAGER TO WORK WITH YOU!
                        <br />
                        SELECT YOUR PACKAGE BELOW TO GET STARTED.
                    </h1>
                    {/* Yellow decorative scribble */}
                    <div className="flex justify-center mt-2">
                        <img src="/images/layer-1.png" alt="underline" width={200} height={16} className="h-4 object-contain opacity-90" />
                    </div>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="border border-gray-200 bg-white rounded-sm shadow-sm overflow-hidden flex flex-col">
                    {/* Dark Green Header */}
                    <div className="bg-[#143d1f] py-3 text-center">
                        <h2 className="text-white font-[Oswald] font-bold text-lg uppercase tracking-wide">
                            COMPANY INFORMATION
                        </h2>
                    </div>

                    <div className="p-8 md:p-12 space-y-8 flex-grow">
                        {/* Input Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {/* Row 1 */}
                            <div className="flex flex-col">
                                <label htmlFor="businessName" className="text-sm font-bold text-gray-800 mb-2">Business Name</label>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#143d1f] focus:ring-1 focus:ring-[#143d1f] transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="yourName" className="text-sm font-bold text-gray-800 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="yourName"
                                    name="yourName"
                                    value={formData.yourName}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#143d1f] focus:ring-1 focus:ring-[#143d1f] transition-all"
                                    required
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col">
                                <label htmlFor="businessEmail" className="text-sm font-bold text-gray-800 mb-2">Business Email</label>
                                <input
                                    type="email"
                                    id="businessEmail"
                                    name="businessEmail"
                                    value={formData.businessEmail}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#143d1f] focus:ring-1 focus:ring-[#143d1f] transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="businessPhone" className="text-sm font-bold text-gray-800 mb-2">Business Phone</label>
                                <input
                                    type="tel"
                                    id="businessPhone"
                                    name="businessPhone"
                                    value={formData.businessPhone}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#143d1f] focus:ring-1 focus:ring-[#143d1f] transition-all"
                                    required
                                />
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-col md:col-span-2 md:w-[calc(50%-1.5rem)]">
                                <label htmlFor="websiteUrl" className="text-sm font-bold text-gray-800 mb-2">Website URL</label>
                                <input
                                    type="url"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    value={formData.websiteUrl}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-[3px] py-3 px-4 outline-none focus:border-[#143d1f] focus:ring-1 focus:ring-[#143d1f] transition-all"
                                />
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="pt-6">
                            <h3 className="text-sm font-bold text-[#143d1f] uppercase tracking-wide mb-6">
                                WHICH SERVICES ARE YOU SIGNING UP FOR (SELECT MORE THAN ONE IF NEEDED)?
                            </h3>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="guaranteedRanking" checked={formData.services.guaranteedRanking} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#143d1f] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#143d1f]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">Guaranteed Ranking</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="seo" checked={formData.services.seo} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#143d1f] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#143d1f]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">SEO</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="googleAds" checked={formData.services.googleAds} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#143d1f] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#143d1f]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">Google ADS</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="smm" checked={formData.services.smm} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#143d1f] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#143d1f]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">SMM</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="branding" checked={formData.services.branding} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#143d1f] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#143d1f]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">Branding</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="websiteDesign" checked={formData.services.websiteDesign} onChange={handleInputChange} className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm outline-none checked:bg-white checked:border-[#143d1f] cursor-pointer transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-[#143d1f]">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                    <span className="ml-3 text-sm text-gray-800 group-hover:text-black font-semibold">Website Design</span>
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
                                    I agree to the <a href="#" className="text-[#4caf50] hover:underline">terms & conditions</a>
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8 pb-4 flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#facc15] text-[#143d1f] font-[Oswald] font-bold text-sm uppercase px-10 py-3 rounded-sm shadow-sm hover:shadow-md hover:bg-yellow-300 transition-all flex items-center justify-center min-w-[150px]"
                            >
                                SUBMIT
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}
