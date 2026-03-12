"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import BrandingHeroSection from '@/components/branding/BrandingHeroSection';
import BrandingBenefitsSection from '@/components/branding/BrandingBenefitsSection';
import BrandingTimelineSection from '@/components/branding/BrandingTimelineSection';

const BrandingExperienceSection = dynamic(() => import('@/components/branding/BrandingExperienceSection'), { ssr: true });
const BrandingFeaturesSection = dynamic(() => import('@/components/branding/BrandingFeaturesSection'), { ssr: true });
const BrandingStorySection = dynamic(() => import('@/components/branding/BrandingStorySection'), { ssr: true });
const BrandingPricingSection = dynamic(() => import('@/components/branding/BrandingPricingSection'), { ssr: true });
const BrandingFaqSection = dynamic(() => import('@/components/branding/BrandingFaqSection'), { ssr: true });
const GoogleAdsBottomCtaSection = dynamic(() => import('@/components/google-ads/GoogleAdsBottomCtaSection'), { ssr: true });

export default function BrandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <BrandingHeroSection />
                <BrandingBenefitsSection />
                <BrandingTimelineSection />
                <BrandingExperienceSection />
                <BrandingFeaturesSection />
                <BrandingStorySection />
                <BrandingPricingSection />
                <BrandingFaqSection />
                <GoogleAdsBottomCtaSection />
            </main>
        </div>
    );
}
