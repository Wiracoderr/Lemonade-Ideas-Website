import { getTranslations } from "next-intl/server";
import EnglishContent from "./en";
import SpanishContent from "./es";

// Dynamic Layout metadata mapped by Locale
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  
  if (locale === "es") {
    return {
      title: "SEO de Capacidad de Fianza | Marketing para Constructoras de $50M",
      description: "Por qué los contratistas comerciales pierden licitaciones de $50M debido a la falta de pruebas digitales. Descubre cómo el SEO y la consistencia NAP afectan la capacidad de fianza institucional.",
      alternates: {
        canonical: "https://lemonadeideas.com/es/blogs/bonding-capacity-seo",
        languages: {
          "en-US": "https://lemonadeideas.com/en/blogs/bonding-capacity-seo",
        },
      },
      openGraph: {
        title: "SEO de Capacidad de Fianza | Marketing para Constructoras de $50M",
        description: "Por qué los contratistas comerciales pierden licitaciones de $50M debido a la falta de pruebas digitales. Descubre cómo el SEO afecta la capacidad de fianza institucional.",
        url: "https://lemonadeideas.com/es/blogs/bonding-capacity-seo",
        siteName: "Lemonade Ideas",
        images: [
          {
            url: "/images/blogs/bonding-capacity-seo/hero.png",
            width: 1200,
            height: 630,
            alt: "Infraestructura a Escala Institucional y Paneles de Verificación de Fianza",
          },
        ],
        locale: "es_ES",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "SEO de Capacidad de Fianza para Constructoras de 8 Cifras",
        description: "Por qué los contratistas pierden licitaciones multimillonarias por falta de pruebas algorítmicas de capacidad.",
        images: ["/images/blogs/bonding-capacity-seo/hero.png"],
      },
    };
  }

  // Fallback to English
  return {
    title: "Bonding Capacity SEO | Agency for $50M General Contractors",
    description: "Why elite commercial contractors lose $50M infrastructure bids because of poor digital footprints. Learn how SEO and NAP consistency directly impact institutional bonding capacity.",
    alternates: {
      canonical: "https://lemonadeideas.com/en/blogs/bonding-capacity-seo",
      languages: {
        "es-ES": "https://lemonadeideas.com/es/blogs/bonding-capacity-seo",
      },
    },
    openGraph: {
      title: "Bonding Capacity SEO | Agency for $50M General Contractors",
      description: "Why elite commercial contractors lose $50M infrastructure bids because of poor digital footprints. Learn how SEO directly impacts institutional bonding capacity.",
      url: "https://lemonadeideas.com/en/blogs/bonding-capacity-seo",
      siteName: "Lemonade Ideas",
      images: [
        {
          url: "/images/blogs/bonding-capacity-seo/hero.png",
          width: 1200,
          height: 630,
          alt: "Institutional Scale Infrastructure and Cryptographic Verification Dashboards",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Construction Bonding Capacity SEO for 8-Figure Builders",
      description: "Why contractors lose multi-million dollar bids over a lack of algorithmic proof of capacity.",
      images: ["/images/blogs/bonding-capacity-seo/hero.png"],
    },
  };
}

export default function BlogRoute({ params: { locale } }: { params: { locale: string } }) {
  if (locale === "es") {
    return <SpanishContent />;
  }
  return <EnglishContent />;
}
