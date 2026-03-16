import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statements CA: Winning Public Works Contracts in California",
  description:
    "An expert 2,500+ word guide on crafting high-converting Capability Statements for California general contractors seeking government bids and public works contracts.",
  keywords: [
    "capability statements CA",
    "California government contractors",
    "public works bidding California",
    "contractor capability statement design",
    "Caltrans contractor marketing",
    "DGS certification marketing",
    "SB/DVBE contractor marketing",
  ],
  openGraph: {
    title: "Capability Statements CA: The Key to Multi-Million Dollar Government Bids",
    description:
      "A complete guide on crafting high-converting Capability Statements for California contractors seeking government bids.",
    url: "https://lemonadeideas.com/blogs/capability-statements-ca",
    images: ["/images/blogs/capability-statements-ca/hero.png"],
  },
};

export default function CapabilityStatementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
