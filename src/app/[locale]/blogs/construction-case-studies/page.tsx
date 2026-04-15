import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "How B2B Construction Case Studies Actually Close Deals | Lemonade Ideas",
      description: "Stop using basic before-and-after photos. Learn the exact B2B psychological framework for writing construction case studies that act as your highest-converting sales assets.",
    },
    es: {
      title: "Cómo los Casos de Estudio de Construcción B2B Realmente Cierran Tratos | Lemonade Ideas",
      description: "Deja de usar fotos básicas de antes y después. Aprende el marco psicológico B2B exacto para escribir casos de estudio de construcción que actúan como tus activos de ventas de mayor conversión.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/construction-case-studies`,
      languages: {
        en: `/en/blogs/construction-case-studies`,
        es: `/es/blogs/construction-case-studies`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/construction-case-studies`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/construction-case-studies/hero.png',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['https://lemonadeideas.com/images/blogs/construction-case-studies/hero.png'],
    },
  };
}


export default async function BlogPost({ params }: { params: { locale: string } }) {
  const { locale } = await Promise.resolve(params);

  if (locale === "es") {
    return <BlogEs />;
  }

  return <BlogEn />;
}
