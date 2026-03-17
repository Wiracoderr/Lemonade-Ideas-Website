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
      title: "Leads de Construcción: Deja de Comprar Leads Compartidos y Construye el Tuyo | Lemonade Ideas",
      description: "Descubre por qué comprar leads de construcción compartidos destruye tu tasa de cierre y la matemática exacta detrás de construir tu propio motor de generación de leads B2B.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/construction-leads-guide`,
      languages: {
        en: `/en/blogs/construction-leads-guide`,
        es: `/es/blogs/construction-leads-guide`,
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
