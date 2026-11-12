import { Route, Routes } from 'react-router';

import { MainLayout } from '@/layouts';
import { HomeRoute } from '@/routes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
