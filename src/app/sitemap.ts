import { MetadataRoute } from 'next';
import blogs from '@/data/blogs.json';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lemonadeideas.com';

  // Base routes for the application
  const routes = [
    '',
    '/contact',
    '/terms-of-service',
    '/social-media-management',
    '/blogs'
  ];

  // Map each route to every active locale
  const standardPages = routes.flatMap((route) => {
    return routing.locales.map((locale) => {
      const languages: Record<string, string> = {};
      routing.locales.forEach(l => { languages[l] = `${baseUrl}/${l}${route}`; });
      return {
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
        alternates: { languages }
      };
    });
  });

  // Map every blog to every active locale
  const blogPages = blogs.flatMap((blog) => {
    return routing.locales.map((locale) => {
      const languages: Record<string, string> = {};
      routing.locales.forEach(l => { languages[l] = `${baseUrl}/${l}/blogs/${blog.slug}`; });
      return {
        url: `${baseUrl}/${locale}/blogs/${blog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: { languages }
      };
    });
  });

  return [...standardPages, ...blogPages];
}
