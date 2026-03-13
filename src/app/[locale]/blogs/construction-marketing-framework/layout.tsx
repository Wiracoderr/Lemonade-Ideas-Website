import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Marketing: The Blueprint to Stop Competing on Price | Lemonade Ideas",
  description:
    "A 2,500+ word deep-dive into B2B construction marketing, building a digital storefront, dominating local SEO, and running profitable paid acquisition. Stop buying shared leads.",
  keywords: [
    "construction marketing",
    "contractor marketing",
    "builder marketing CA",
    "construction ad agency",
    "marketing for builders",
    "B2B construction marketing",
  ],
  openGraph: {
    title: "Construction Marketing: The Blueprint to Stop Competing on Price",
    description:
      "A 2,500+ word deep-dive into B2B construction marketing, building a digital storefront, dominating local SEO, and running profitable paid acquisition.",
    url: "https://lemonadeideas.com/blogs/construction-marketing-framework",
    images: ["/images/blogs/construction-marketing-framework/hero.png"],
  },
};

export default function ConstructionMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
