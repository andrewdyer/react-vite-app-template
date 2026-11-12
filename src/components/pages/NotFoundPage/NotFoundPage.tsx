import { StatusTemplate } from '@/components/templates';

/**
 * Renders the not-found screen, shown when no route matches the URL, with a link back to the home
 * page.
 */
const NotFoundPage = () => {
  return (
    <StatusTemplate
      title="Page not found"
      description="The page you're looking for doesn't exist or may have moved."
      linkHref="/"
      linkLabel="Go to the home page"
    />
  );
};

export default NotFoundPage;
