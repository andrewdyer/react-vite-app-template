import { MainTemplate } from '@/components/templates';
import { ErrorRoute } from '@/routes';

/**
 * Renders the shared layout for the root error screen, shown when the main layout itself fails.
 *
 * @remarks
 * The failed layout's markup is gone at this point, so this wraps the error screen in the main
 * template to keep the page's main landmark. Errors in a screen are shown inside the main layout
 * instead, and do not use this layout.
 */
const ErrorLayout = () => {
  return (
    <MainTemplate>
      <ErrorRoute />
    </MainTemplate>
  );
};

export default ErrorLayout;
