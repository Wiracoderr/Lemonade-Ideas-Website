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
      title: "Marketing para Construcción: El Plano para Dejar de Competir por Precio | Lemonade Ideas",
      description: "Una guía completa y basada en datos sobre marketing B2B para construcción. Aprende cómo construir un motor de leads entrantes que te posicione como la autoridad indiscutible.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/construction-marketing-framework`,
      languages: {
        en: `/en/blogs/construction-marketing-framework`,
        es: `/es/blogs/construction-marketing-framework`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/construction-marketing-framework`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/construction-marketing-framework/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/construction-marketing-framework/hero.png'],
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
