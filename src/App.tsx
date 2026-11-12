import { Route, Routes } from 'react-router';

import { MainLayout } from '@/layouts';
import { HomeRoute } from '@/routes';

/**
 * Renders the application's route table, nesting each screen's route inside the shared main layout.
 */
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
