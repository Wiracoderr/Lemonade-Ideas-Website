import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Site Photography: How 8-Figure Contractors Use Aerial Data to Drive 275% ROI",
  description:
    "A 2,500+ word deep-dive into construction drone mapping, breaking down the mathematical 20-30% labor cost savings, 80% faster survey times, and orthomosaic map dispute resolution.",
  keywords: [
    "drone site photography",
    "construction drone mapping",
    "construction drone photography ROI",
    "aerial site mapping",
    "construction site progress tracking",
    "orthomosaic drone mapping construction",
  ],
  openGraph: {
    title: "Drone Site Photography: How Contractors Drive 275% ROI",
    description:
      "A 2,500+ word deep-dive into construction drone mapping, breaking down the labor cost savings, survey times, and dispute resolution.",
    url: "https://www.lemonadeideas.com/blogs/drone-site-photography-roi",
    images: ["/images/blogs/drone-site-photography-roi/hero.png"],
  },
};

export default function DroneSitePhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
