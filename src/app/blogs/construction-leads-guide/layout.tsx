import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Leads: Stop Buying Shared Leads & Build Your Own Engine",
  description: "An engineering-first breakdown of the true cost of shared construction leads like Angi, and the exact technical framework for building a high-converting, self-owned lead generation engine using Local SEO and Google Ads.",
  keywords: ["construction leads", "contractor leads", "exclusive construction leads", "builder leads", "remodeling leads CA"]
};

export default function ConstructionLeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
