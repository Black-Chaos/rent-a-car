import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoading } from '../../redux/cars/selectors';
import { Navigation } from 'components/Navigation/Navigation';

export function SharedLayout() {
  const isLoading = useSelector(selectIsLoading)
  return (
    <>
      <header>
        <div className="container">
          <Navigation/>
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {isLoading && <Loader/>}
    </>
  );
}
