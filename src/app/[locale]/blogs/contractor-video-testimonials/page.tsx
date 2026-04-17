import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Contractor Video Testimonials: The Mathematical ROI of Client Proof | Lemonade Ideas",
      description: "Stop relying on text reviews. Discover the comprehensive B2B production strategy for capturing contractor video testimonials that mathematically skyrocket your lead conversion rate.",
    },
    es: {
      title: "Testimonios en Video de Contratistas: El ROI Matemático de la Prueba del Cliente | Lemonade Ideas",
      description: "Deja de depender de las reseñas escritas. Descubre la estrategia integral de producción B2B para capturar testimonios en video de contratistas que disparan matemáticamente tu tasa de conversión de clientes potenciales.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/contractor-video-testimonials`,
      languages: {
        en: `/en/blogs/contractor-video-testimonials`,
        es: `/es/blogs/contractor-video-testimonials`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/contractor-video-testimonials`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/contractor-video-testimonials/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/contractor-video-testimonials/hero.png'],
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
