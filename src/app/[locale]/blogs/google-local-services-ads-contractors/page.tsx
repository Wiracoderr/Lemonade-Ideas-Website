import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ENPost from './en';
import ESPost from './es';
import { Metadata } from 'next';

const titleEn = "Google Local Services Ads for Contractors | Lemonade Ideas";
const descriptionEn = "Organic local SEO is effectively dead. If your commercial firm lacks the 'Google Guaranteed' green checkmark, you do not exist in the modern marketplace. Learn how elite builders weaponize LSA to dominate top-of-funnel leads.";

const titleEs = "Google Local Services Ads para Contratistas | Lemonade Ideas";
const descriptionEs = "El SEO local orgánico está muerto. Si careces de la insignia 'Google Garantizado', no existes. Aprende cómo los constructores de élite monopolizan los LSA para generar leads comerciales millonarios.";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isEn = locale === 'en';
  return {
    title: isEn ? titleEn : titleEs,
    description: isEn ? descriptionEn : descriptionEs,
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/google-local-services-ads-contractors`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/google-local-services-ads-contractors',
        'es': 'https://www.lemonadeideas.com/es/blogs/google-local-services-ads-contractors',
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      url: `https://www.lemonadeideas.com/${locale}/blogs/google-local-services-ads-contractors`,
      type: 'article',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/google-local-services-ads-contractors/hero.png',
          width: 1200,
          height: 630,
          alt: isEn ? 'Smartphone showing Google Guaranteed badge for contractors' : 'Smartphone mostrando Google Garantizado para contratistas',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      images: ['https://www.lemonadeideas.com/images/blogs/google-local-services-ads-contractors/hero.png'],
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
