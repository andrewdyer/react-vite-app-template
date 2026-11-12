import { StatusTemplate } from '@/components/templates';

/**
 * Renders the error screen, shown when a route fails to render, with a link that reloads the
 * application at the home page.
 *
 * @remarks
 * The error itself is not shown, so internal details never reach the user.
 */
const ErrorPage = () => {
  return (
    <StatusTemplate
      title="Something went wrong"
      description="An unexpected error stopped this page from loading. Try again from the home page."
      linkHref="/"
      linkLabel="Go to the home page"
    />
  );
};

export default ErrorPage;
