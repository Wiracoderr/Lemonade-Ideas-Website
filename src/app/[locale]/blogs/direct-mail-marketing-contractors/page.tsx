import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ENPost from './en';
import ESPost from './es';
import { Metadata } from 'next';

const titleEn = "Direct Mail for Contractors: The Apex Paradigm of Dimensional Mail | Lemonade";
const descriptionEn = "The postcard is mathematically dead. Learn why elite B2B contractors use heavy Dimensional Mail and QR bridges to capture high-net-worth commercial SLAs.";

const titleEs = "Direct Mail para Contratistas: El Paradigma Depredador del Correo Volumétrico | Lemonade";
const descriptionEs = "El folleto barato está muerto. Descubre cómo los contratistas de élite B2B usan Dimensional Mail pesado y puentes QR para asegurar contratos masivos.";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isEn = locale === 'en';
  return {
    title: isEn ? titleEn : titleEs,
    description: isEn ? descriptionEn : descriptionEs,
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/direct-mail-marketing-contractors`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/direct-mail-marketing-contractors',
        'es': 'https://www.lemonadeideas.com/es/blogs/direct-mail-marketing-contractors',
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      url: `https://www.lemonadeideas.com/${locale}/blogs/direct-mail-marketing-contractors`,
      type: 'article',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/direct-mail-marketing-contractors/hero.png',
          width: 1200,
          height: 630,
          alt: isEn ? 'Matte-Black Corporate Dimensional Mail Box' : 'Caja de Correo Volumétrico Corporativo Negro Mate',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      images: ['https://www.lemonadeideas.com/images/blogs/direct-mail-marketing-contractors/hero.png'],
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
