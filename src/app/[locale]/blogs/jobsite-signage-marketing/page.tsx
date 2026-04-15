import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Construction Jobsite Signage: Transforming Barricades into B2B Lead Generators",
      description: "Stop treating your construction barricades as an afterthought. Learn how to architect high-performance jobsite signage that converts local traffic into lucrative B2B contracts.",
    },
    es: {
      title: "Rotulación de Obra de Construcción: Transformando Barricadas en Generadores de Prospectos B2B",
      description: "Deje de tratar las barricadas de construcción como una idea de último momento. Aprenda a diseñar rótulos de alto rendimiento que conviertan el tráfico local en lucrativos contratos B2B.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/jobsite-signage-marketing`,
      languages: {
        en: `/en/blogs/jobsite-signage-marketing`,
        es: `/es/blogs/jobsite-signage-marketing`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/jobsite-signage-marketing`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/jobsite-signage-marketing/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/jobsite-signage-marketing/hero.png'],
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
