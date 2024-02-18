import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsByParams } from '../redux/cars/operation';
import { selectFilteredCars, selectParams } from '../redux/cars/selectors';
import { CarList } from 'components/CarList/CarList';

export default function CarGalleryPage() {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const cars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(getCarsByParams(params));
  }, [dispatch, params]);
  return (
    <section>
      <div className="container">
        <CarList cars={cars} />
      </div>
    </section>
  );
}
