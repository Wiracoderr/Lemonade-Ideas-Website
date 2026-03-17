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
    return routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }));
  });

  // Map every blog to every active locale
  const blogPages = blogs.flatMap((blog) => {
    return routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blogs/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  });

  return [...standardPages, ...blogPages];
}
