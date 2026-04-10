import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
}

export default function ArticleSchema({ title, description, publishDate, slug }: ArticleSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": [
      `https://www.lemonadeideas.com/images/blogs/${slug}/hero.png`
    ],
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Organization",
      "name": "Lemonade Ideas Executive Strategy",
      "url": "https://www.lemonadeideas.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lemonade Ideas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lemonadeideas.com/logos/Emblem/1x/Asset 7.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.lemonadeideas.com/en/blogs/${slug}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
