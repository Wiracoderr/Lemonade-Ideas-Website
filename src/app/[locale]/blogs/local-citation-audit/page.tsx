import { setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'es'
      ? 'La Auditoría de Citaciones: Cómo los Datos Fragmentados Destruyen Pipelines de Contratistas | Lemonade Ideas'
      : 'The Citation Audit Imperative: How Fragmented Data Destroys Contractor Pipelines | Lemonade Ideas',
    description: locale === 'es'
      ? 'Descubra cómo la inconsistencia de citaciones NAP destruye silenciosamente la visibilidad local de su contratista y cómo una auditoría profesional recupera su dominio algorítmico.'
      : 'Discover how NAP citation inconsistency silently destroys your contractor local visibility and how a professional audit reclaims your algorithmic dominance.',
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/local-citation-audit`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/local-citation-audit',
        'es': 'https://lemonadeideas.com/es/blogs/local-citation-audit',
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
