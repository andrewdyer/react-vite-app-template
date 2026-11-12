import { Outlet } from 'react-router';

import { MainTemplate } from '@/components/templates';

/**
 * Renders the shared layout for all screens, placing the matched child route inside the main template.
 */
const MainLayout = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};

export default MainLayout;
