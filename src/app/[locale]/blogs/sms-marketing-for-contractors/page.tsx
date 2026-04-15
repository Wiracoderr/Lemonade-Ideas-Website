import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "SMS Marketing for Contractors: Stop Losing Leads and Start Closing | Lemonade Ideas",
      description: "Discover why highly competent contractors are bleeding cash due to slow follow-up speeds. Learn the precise SMS marketing architecture to boost ROI by 41x and bypass the email spam folder.",
    },
    es: {
      title: "Marketing por SMS para Contratistas: Deje de Perder Clientes y Empiece a Cerrar | Lemonade Ideas",
      description: "Cree una sólida arquitectura publicitaria y domine a través del marketing por SMS táctico. Aprenda estrategias de élite para contratistas para disparar sus ventas y evitar el spam de correos electrónicos obsoletos.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/sms-marketing-for-contractors`,
      languages: {
        en: `/en/blogs/sms-marketing-for-contractors`,
        es: `/es/blogs/sms-marketing-for-contractors`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/sms-marketing-for-contractors`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/sms-marketing-for-contractors/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/sms-marketing-for-contractors/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
