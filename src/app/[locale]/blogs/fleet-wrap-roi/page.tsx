import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Commercial Fleet Wrap ROI: The Mobile Billboard Driving B2B Construction Marketing",
      description: "Discover why leaving your commercial service vehicles blank is costing you millions in uncaptured revenue. Learn the mathematics, psychology, and structural design rules of highly profitable commercial fleet wraps.",
    },
    es: {
      title: "ROI en Rotulación Comercial: El Anuncio Móvil que Impulsa el Marketing de Construcción",
      description: "Descubra por qué dejar los vehículos de servicio comercial en blanco le está costando millones. Aprenda las matemáticas, la psicología y el diseño de los rotulados altamente rentables.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/fleet-wrap-roi`,
      languages: {
        en: `/en/blogs/fleet-wrap-roi`,
        es: `/es/blogs/fleet-wrap-roi`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/fleet-wrap-roi`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/fleet-wrap-roi/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/fleet-wrap-roi/hero.png'],
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
