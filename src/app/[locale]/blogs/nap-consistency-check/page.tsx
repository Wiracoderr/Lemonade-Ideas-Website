import { setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'es'
      ? 'Verificación de Consistencia NAP: La Responsabilidad de $50M en Sus Directorios | Lemonade Ideas'
      : 'NAP Consistency Check: The $50M Liability Buried in Your Business Directories | Lemonade Ideas',
    description: locale === 'es'
      ? 'Descubra cómo la inconsistencia NAP destruye silenciosamente la visibilidad local de su empresa de construcción comercial y cómo una auditoría profesional recupera su dominio algorítmico.'
      : 'Discover how NAP inconsistency silently destroys your commercial construction firm local visibility and how a professional audit reclaims your algorithmic dominance.',
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/nap-consistency-check`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/nap-consistency-check',
        'es': 'https://lemonadeideas.com/es/blogs/nap-consistency-check',
      },
    },
  };
}

export default function BlogRoute({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  if (locale === 'es') {
    return <SpanishContent />;
  }

  return <EnglishContent />;
}
