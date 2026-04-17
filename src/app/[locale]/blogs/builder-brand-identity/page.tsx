import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Builder Brand Identity: The Psychology of Luxury Construction Marketing | Lemonade Ideas",
      description: "Discover how 8-figure commercial contractors use premium visual identity and psychological triggers to command higher margins and attract luxury developers.",
    },
    es: {
      title: "Identidad de Marca del Constructor: La Psicología del Marketing de Construcción de Lujo | Lemonade Ideas",
      description: "Descubre cómo los contratistas comerciales de 8 cifras utilizan la identidad visual premium y los disparadores psicológicos para obtener márgenes más altos y atraer desarrolladores de lujo.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/builder-brand-identity`,
      languages: {
        en: `/en/blogs/builder-brand-identity`,
        es: `/es/blogs/builder-brand-identity`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/builder-brand-identity`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/builder-brand-identity/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/builder-brand-identity/hero.png'],
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
