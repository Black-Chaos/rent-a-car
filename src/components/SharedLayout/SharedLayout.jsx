import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoading } from '../../redux/cars/selectors';

export function SharedLayout() {
  const isLoading = useSelector(selectIsLoading)
  return (
    <>
      <header>
        <div className="container"></div>
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
