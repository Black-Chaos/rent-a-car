import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/homePage'));
const CarGallery = lazy(() => import('pages/carGalleryPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cars" element={<CarGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
