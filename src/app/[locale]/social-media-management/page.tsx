import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import SmmHeroSection from '@/components/smm/SmmHeroSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'SMM' });

    return {
        title: t('meta_title'),
        description: t('meta_desc'),
    };
}

// Dynamic imports for below-the-fold components to improve mobile load times
const SmmFastTrackSection = dynamic(() => import('@/components/smm/SmmFastTrackSection'), { ssr: true });
const SmmTimelineSection = dynamic(() => import('@/components/smm/SmmTimelineSection'), { ssr: true });
const SmmExperienceSection = dynamic(() => import('@/components/smm/SmmExperienceSection'), { ssr: true });
const SmmFeaturesSection = dynamic(() => import('@/components/smm/SmmFeaturesSection'), { ssr: true });
const SmmDarkExperienceSection = dynamic(() => import('@/components/smm/SmmDarkExperienceSection'), { ssr: true });
const SmmPricingSection = dynamic(() => import('@/components/smm/SmmPricingSection'), { ssr: true });

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

            <SmmFaqSection />
            <SmmCtaSection />
        </main>
    );
}
