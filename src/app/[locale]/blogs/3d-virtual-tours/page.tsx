import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Pre-Construction 3D Virtual Tours: The Ultimate Defense Against Scope Creep",
      description: "Stop bleeding margin on change orders. Learn how leveraging 3D Virtual Tours during pre-construction eliminates client friction, justifies premium pricing, and accelerates B2B sales cycles.",
    },
    es: {
      title: "Recorridos Virtuales 3D en Pre-Construcción: La Máxima Defensa Contra la Corrupción del Alcance",
      description: "Deje de perder margen en órdenes de cambio. Aprenda cómo el uso de Recorridos Virtuales 3D durante la pre-construcción elimina la fricción del cliente, justifica los precios premium y acelera los ciclos de ventas B2B.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/3d-virtual-tours`,
      languages: {
        en: `/en/blogs/3d-virtual-tours`,
        es: `/es/blogs/3d-virtual-tours`,
      },
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
