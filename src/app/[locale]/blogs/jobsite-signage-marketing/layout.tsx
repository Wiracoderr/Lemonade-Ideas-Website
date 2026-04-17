import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobsite Signage Marketing: Why Mesh Banners Build 8-Figure Contractor Brands",
  description:
    "A comprehensive 2,500+ word deep-dive into construction site signage marketing. Discover how premium fence mesh, crane banners, and QR codes generate multi-million dollar inbound leads for contractors.",
  keywords: [
    "jobsite signage marketing",
    "construction site banners",
    "contractor fence mesh",
    "commercial construction signs",
    "builder branding strategy",
    "construction crane banners",
    "local contractor marketing",
  ],
  openGraph: {
    title: "Jobsite Signage Marketing: Winning $10M Bids Before They Open",
    description:
      "A deep-dive into construction site signage marketing. Discover how premium fence mesh and crane banners generate multi-million dollar inbound leads.",
    url: "https://www.lemonadeideas.com/blogs/jobsite-signage-marketing",
    images: ["/images/blogs/jobsite-signage-marketing/hero.png"],
  },
};

export default function JobsiteSignageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
