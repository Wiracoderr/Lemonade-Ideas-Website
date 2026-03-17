import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "High-Ticket Construction Closing: Stop Bidding on Price, Start Closing on Dominance",
      description: "Discover the elite psychology and tactical blueprints required for commercial contractors to win massive, high-ticket bids without sacrificing their profit margins.",
    },
    es: {
      title: "Ventas de Construcción de Alto Valor: Deje de Competir por Precio, Empiece a Cerrar por Dominio",
      description: "Descubra la psicología de élite y los esquemas tácticos requeridos para que los contratistas comerciales ganen ofertas masivas de alto valor sin sacrificar sus márgenes de ganancia.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/high-ticket-closing`,
      languages: {
        en: `/en/blogs/high-ticket-closing`,
        es: `/es/blogs/high-ticket-closing`,
      },
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
