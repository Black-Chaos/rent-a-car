import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/homePage'));
const CarGallery = lazy(() => import('pages/carGalleryPage'));
const FavoritePage = lazy(() => import('pages/favoritePage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CarGallery />} />
        <Route path="favorites" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
