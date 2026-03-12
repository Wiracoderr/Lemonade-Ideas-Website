import WebsiteHeroSection from "../../components/website/WebsiteHeroSection";
import WebsiteIntroSection from "../../components/website/WebsiteIntroSection";
import WebsiteWhyUsSection from "../../components/website/WebsiteWhyUsSection";
import WebsiteProcessSection from "../../components/website/WebsiteProcessSection";
import WebsitePerformanceSection from "../../components/website/WebsitePerformanceSection";
import WebsitePortfolioSection from "../../components/website/WebsitePortfolioSection";
import WebsitePricingSection from "../../components/website/WebsitePricingSection";
import WebsiteHostingSection from "../../components/website/WebsiteHostingSection";
import WebsiteMaintenanceSection from "../../components/website/WebsiteMaintenanceSection";
import WebsiteFaqSection from "../../components/website/WebsiteFaqSection";
import WebsiteCtaSection from "../../components/website/WebsiteCtaSection";
import Header from "../../components/Header";
import MarketingFooter from "../../components/MarketingFooter";
import StitchLayout from "../../components/StitchLayout";

// SEO metadata
export const metadata = {
  title: "Website Design & Development | Lemonade Ideas",
  description: "Affordable, custom website design for small businesses. Get a fast, high-performing WordPress site built to convert visitors into leads.",
};

export default function WebsitePage() {
  return (
    <StitchLayout>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <WebsiteHeroSection />
          <WebsiteIntroSection />
          <WebsiteWhyUsSection />
          <WebsiteProcessSection />
          <WebsitePerformanceSection />
          <WebsitePortfolioSection />
          <WebsitePricingSection />
          <WebsiteHostingSection />
          <WebsiteMaintenanceSection />
          <WebsiteFaqSection />
          <WebsiteCtaSection />
        </main>
        <MarketingFooter />
      </div>
    </StitchLayout>
  );
}
