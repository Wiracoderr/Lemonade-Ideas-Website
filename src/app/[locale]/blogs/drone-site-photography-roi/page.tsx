import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "",
      description: "",
    },
    es: {
      title: "Fotografía con Drones: Cómo los Contratistas Logran un ROI del 275% | Lemonade Ideas",
      description: "Descubre cómo la fotogrametría aérea y los drones están reduciendo los tiempos de inspección en un 60% y mitigando riesgos en la construcción.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/drone-site-photography-roi`,
      languages: {
        en: `/en/blogs/drone-site-photography-roi`,
        es: `/es/blogs/drone-site-photography-roi`,
      },
    },
  };
}


export default function BlogPost({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  if (locale === "es") {
    return <BlogEs />;
  }

  return <BlogEn />;
}
