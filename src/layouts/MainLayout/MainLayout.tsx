import { Outlet } from 'react-router';

import { MainTemplate } from '@/components/templates';
import { useCurrentUserQuery } from '@/hooks';

/**
 * Renders the shared layout for all screens, loading the signed-in user for the header and placing
 * the matched child route inside the main template.
 */
const MainLayout = () => {
  const currentUserQuery = useCurrentUserQuery();

  return (
    <MainTemplate
      currentUser={{
        user: currentUserQuery.data,
        status: currentUserQuery.status,
        onRetry: () => void currentUserQuery.refetch(),
      }}
    >
      <Outlet />
    </MainTemplate>
  );
};

export default MainLayout;
