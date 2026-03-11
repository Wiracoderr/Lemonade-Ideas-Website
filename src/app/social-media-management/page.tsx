import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import SmmHeroSection from '@/components/smm/SmmHeroSection';

export const metadata: Metadata = {
    title: 'Social Media Management | Lemonade Ideas',
    description: 'Boost your social media presence and drive results fast with expert management from Lemonade Ideas. Affordable monthly fee, no contracts required.',
};

// Dynamic imports for below-the-fold components to improve mobile load times
const SmmFastTrackSection = dynamic(() => import('@/components/smm/SmmFastTrackSection'), { ssr: true });
const SmmTimelineSection = dynamic(() => import('@/components/smm/SmmTimelineSection'), { ssr: true });
const SmmExperienceSection = dynamic(() => import('@/components/smm/SmmExperienceSection'), { ssr: true });
const SmmFeaturesSection = dynamic(() => import('@/components/smm/SmmFeaturesSection'), { ssr: true });
const SmmDarkExperienceSection = dynamic(() => import('@/components/smm/SmmDarkExperienceSection'), { ssr: true });
const SmmPricingSection = dynamic(() => import('@/components/smm/SmmPricingSection'), { ssr: true });
const SmmAddOnsSection = dynamic(() => import('@/components/smm/SmmAddOnsSection'), { ssr: true });
const SmmFaqSection = dynamic(() => import('@/components/smm/SmmFaqSection'), { ssr: true });
const SmmCtaSection = dynamic(() => import('@/components/smm/SmmCtaSection'), { ssr: true });

export default function SocialMediaManagementPage() {
    return (
        <main className="min-h-screen bg-white font-sans overflow-x-hidden">
            <SmmHeroSection />
            <SmmFastTrackSection />
            <SmmTimelineSection />
            <SmmExperienceSection />
            <SmmFeaturesSection />
            <SmmDarkExperienceSection />
            <SmmPricingSection />
            <SmmAddOnsSection />
            <SmmFaqSection />
            <SmmCtaSection />
        </main>
    );
}
