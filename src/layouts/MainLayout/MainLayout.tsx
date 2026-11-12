import { Outlet } from 'react-router';

import { MainTemplate } from '@/components/templates';

const MainLayout = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};

export default MainLayout;
