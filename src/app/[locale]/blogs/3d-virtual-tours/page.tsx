import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
