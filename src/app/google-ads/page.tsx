"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import GoogleAdsHeroSection from '@/components/google-ads/GoogleAdsHeroSection';

const GoogleAdsBenefitsSection = dynamic(() => import('@/components/google-ads/GoogleAdsBenefitsSection'), { ssr: true });
const GoogleAdsTimelineSection = dynamic(() => import('@/components/google-ads/GoogleAdsTimelineSection'), { ssr: true });
const GoogleAdsExperienceSection = dynamic(() => import('@/components/google-ads/GoogleAdsExperienceSection'), { ssr: true });
const GoogleAdsFeaturesSection = dynamic(() => import('@/components/google-ads/GoogleAdsFeaturesSection'), { ssr: true });
const GoogleAdsPricingSection = dynamic(() => import('@/components/google-ads/GoogleAdsPricingSection'), { ssr: true });
const GoogleAdsFaqSection = dynamic(() => import('@/components/google-ads/GoogleAdsFaqSection'), { ssr: true });
const GoogleAdsBottomCtaSection = dynamic(() => import('@/components/google-ads/GoogleAdsBottomCtaSection'), { ssr: true });

export default function GoogleAdsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <GoogleAdsHeroSection />
                <GoogleAdsBenefitsSection />
                <GoogleAdsTimelineSection />
                <GoogleAdsExperienceSection />
                <GoogleAdsFeaturesSection />
                <GoogleAdsPricingSection />
                <GoogleAdsFaqSection />
                <GoogleAdsBottomCtaSection />
            </main>
        </div>
    );
}
