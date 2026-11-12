import { MainLayout } from '@/layouts';
import { Home } from '@/pages';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
