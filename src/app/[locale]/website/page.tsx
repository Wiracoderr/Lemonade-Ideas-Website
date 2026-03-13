import WebsiteHeroSection from "@/components/website/WebsiteHeroSection";
import WebsiteFeaturesSection from "@/components/website/WebsiteFeaturesSection";
import WebsiteProcessSection from "@/components/website/WebsiteProcessSection";
import WebsitePerformanceSection from "@/components/website/WebsitePerformanceSection";
import WebsitePortfolioSection from "@/components/website/WebsitePortfolioSection";
import WebsitePricingSection from "@/components/website/WebsitePricingSection";
import WebsiteHostingSection from "@/components/website/WebsiteHostingSection";
import WebsiteFaqSection from "@/components/website/WebsiteFaqSection";
import WebsiteCtaSection from "@/components/website/WebsiteCtaSection";

// SEO metadata
export const metadata = {
  title: "Website Design & Development | Lemonade Ideas",
  description: "Affordable, custom website design for small businesses. Get a fast, high-performing WordPress site built to convert visitors into leads.",
};

export default function WebsitePage() {
  return (
    <main className="flex-grow">
      <WebsiteHeroSection />
      <WebsiteFeaturesSection />
      <WebsiteProcessSection />
      <WebsitePerformanceSection />
      <WebsitePortfolioSection />
      <WebsitePricingSection />
      <WebsiteHostingSection />
      <WebsiteFaqSection />
      <WebsiteCtaSection />
    </main>
  );
}
