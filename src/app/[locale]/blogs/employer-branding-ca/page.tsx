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
    ? 'Un Récord de $50M en Proyectos No Sirve Si Careces de Talento de Élite para Ejecutarlo'
    : 'A $50M Backlog is Worthless Without the Elite Tier-1 Labor Force to Execute It';
    
  const description = isEs
    ? 'En el mercado de construcción de California, la adquisición de talento no es un tema de RH; es guerra estructural. Aprende cómo dominar la captación con SEO y tecnología bilingüe.'
    : 'In the California construction market, talent acquisition is not HR; it is structural warfare. Learn how to monopolize elite labor with Next.js architecture and aggressive branding.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://lemonadeideas.com/${locale}/blogs/employer-branding-ca`,
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/employer-branding-ca/hero.png',
          width: 1200,
          height: 630,
          alt: isEs ? 'La Unidad de Tareas de Élite de Construcción' : 'The Elite Construction Task Force',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://lemonadeideas.com/images/blogs/employer-branding-ca/hero.png'],
    },
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/employer-branding-ca`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/employer-branding-ca',
        'es': 'https://lemonadeideas.com/es/blogs/employer-branding-ca',
      },
    },
  };
}

export default function Blog4Page({ params: { locale } }: Props) {
  if (locale === 'es') {
    return <BlogPostEs />;
  }

  return <BlogPost />;
}
