import React from 'react';
import BlogPost from './en';
import BlogPostEs from './es';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale });
  
  const isEs = locale === 'es';
  
  const title = isEs 
    ? 'Deja de Contratar Agencias de PR. Diseña una Autoridad Institucional Absoluta. | Lemonade Ideas'
    : 'Stop Hiring PR Agencies. Engineer Absolute Institutional Authority. | Lemonade Ideas';
    
  const description = isEs
    ? 'Las firmas de construcción comercial de $10M+ necesitan tácticas agresivas de reputación digital y SEO, no comunicados de prensa. Aprende el protocolo "Sentry" para dominar la óptica de la industria.'
    : 'Elite $10M+ commercial construction firms need aggressive digital reputation engineering, not generic press releases. Learn the Sentry protocol to dominate industry optics.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.lemonadeideas.com/${locale}/blogs/construction-pr-agency`,
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/construction-pr-agency/hero.png',
          width: 1200,
          height: 630,
          alt: isEs ? 'La Arquitectura de la Óptica Corporativa' : 'The Architecture of Corporate Optics',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.lemonadeideas.com/images/blogs/construction-pr-agency/hero.png'],
    },
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/construction-pr-agency`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/construction-pr-agency',
        'es': 'https://www.lemonadeideas.com/es/blogs/construction-pr-agency',
      },
    },
  };
}

export default function Blog3Page({ params: { locale } }: Props) {
  if (locale === 'es') {
    return <BlogPostEs />;
  }

  return <BlogPost />;
}
