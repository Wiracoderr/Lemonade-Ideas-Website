import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Fleet Wrap ROI: The $1.5M Billboard Driving Construction Marketing",
  description:
    "A comprehensive 2,500+ word guide on contractor fleet wrap marketing, breaking down CPM (Cost Per Mille), brand authority, and how truck wraps drive 8-figure construction leads.",
  keywords: [
    "fleet wrap ROI",
    "contractor fleet wraps",
    "construction truck wraps",
    "contractor truck marketing",
    "construction fleet branding",
    "HVAC van wrap cost",
    "plumbing truck wrap ROI",
  ],
  openGraph: {
    title: "Commercial Fleet Wrap ROI: How Contractors Drive Leads",
    description:
      "A comprehensive guide on contractor fleet wrap marketing, breaking down CPM, brand authority, and how truck wraps drive construction leads.",
    url: "https://lemonadeideas.com/blogs/fleet-wrap-roi",
    images: ["/images/blogs/fleet-wrap-roi/hero.png"],
  },
};

export default function FleetWrapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
