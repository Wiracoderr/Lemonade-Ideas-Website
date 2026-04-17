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
    ? 'La Fuga Millonaria: Eliminando las Reseñas Falsas de Google que Destruyen tu Embudo Comercial | Lemonade Ideas'
    : 'The Million-Dollar Leak: Eradicating Fake Google Reviews Destroying Your Commercial Pipeline | Lemonade Ideas';
    
  const description = isEs
    ? 'Las firmas de construcción de élite de $10M+ no toleran el sabotaje digital. Aprende los protocolos legales y algorítmicos exactos para forzar la eliminación de falsas reseñas de 1 estrella en el Perfil de Empresa de Google.'
    : 'Elite $10M+ commercial construction firms do not tolerate digital sabotage. Learn the exact legal and algorithmic protocols to force the removal of fake 1-star Google Business Profile reviews.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.lemonadeideas.com/${locale}/blogs/fake-review-removal`,
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/fake-review-removal/hero.png',
          width: 1200,
          height: 630,
          alt: isEs ? 'El Centro de Mando Bilingüe de Élite' : 'The Pain of Undefended Digital Margins',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.lemonadeideas.com/images/blogs/fake-review-removal/hero.png'],
    },
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/fake-review-removal`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/fake-review-removal',
        'es': 'https://www.lemonadeideas.com/es/blogs/fake-review-removal',
      },
    },
  };
}

export default function Blog2Page({ params: { locale } }: Props) {
  if (locale === 'es') {
    return <BlogPostEs />;
  }

  return <BlogPost />;
}
