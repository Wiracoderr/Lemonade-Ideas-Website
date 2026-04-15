import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Capability Statements CA: Blueprint for High-Value Public Works Contracts",
      description: "Discover why a standard brochure fails in California public works bidding and learn exactly how to format a winning Capability Statement to secure multi-million dollar contracts.",
    },
    es: {
      title: "Capability Statements en CA: El Plano para Contratos de Obras Públicas de Alto Valor",
      description: "Descubre por qué un folleto estándar falla en las licitaciones de obras públicas de California y aprende exactamente cómo estructurar un Capability Statement ganador para asegurar contratos multimillonarios.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/capability-statements-ca`,
      languages: {
        en: `/en/blogs/capability-statements-ca`,
        es: `/es/blogs/capability-statements-ca`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/capability-statements-ca`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/capability-statements-ca/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/capability-statements-ca/hero.png'],
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
