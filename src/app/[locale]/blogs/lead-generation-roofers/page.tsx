import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ENPost from './en';
import ESPost from './es';
import { Metadata } from 'next';

const titleEn = "Lead Generation for Roofers: Stop Buying Shared Trash | Lemonade";
const descriptionEn = "If you are buying shared leads from HomeAdvisor or Angi, you are in a race to the bottom. Learn how elite $20M+ roofers build absolute monopolies.";

const titleEs = "Generación de Leads para Techos: Deja de Comprar Basura Compartida | Lemonade";
const descriptionEs = "Si sigues comprando leads de HomeAdvisor, estás atrapado en una sangrienta carrera al fondo. Aprende a construir monopolios matemáticos infalibles.";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isEn = locale === 'en';
  return {
    title: isEn ? titleEn : titleEs,
    description: isEn ? descriptionEn : descriptionEs,
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/lead-generation-roofers`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/lead-generation-roofers',
        'es': 'https://www.lemonadeideas.com/es/blogs/lead-generation-roofers',
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      url: `https://www.lemonadeideas.com/${locale}/blogs/lead-generation-roofers`,
      type: 'article',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/lead-generation-roofers/hero.png',
          width: 1200,
          height: 630,
          alt: isEn ? 'Drone scanning a commercial roof' : 'Dron escaneando techo comercial',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      images: ['https://www.lemonadeideas.com/images/blogs/lead-generation-roofers/hero.png'],
    },
  };
}

export default function BlogRoute({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  if (locale === 'es') {
    return <ESPost />;
  }

  return <ENPost />;
}
