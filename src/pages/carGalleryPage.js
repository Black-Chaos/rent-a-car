import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, getCarsByParams } from '../redux/cars/operation';
import { selectError, selectFilteredCars, selectParams } from '../redux/cars/selectors';
import { CarList } from 'components/CarList/CarList';
import { Filter } from 'components/Navigation/Filter';
import { Notify } from 'notiflix';
import './style/pages.css'

export default function CarGalleryPage() {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const cars = useSelector(selectFilteredCars);
  const error = useSelector(selectError)

  useEffect(() => {
    if (error) {
      Notify.failure(error.message)
    }
  }, [error])

  useEffect(() => {
    dispatch(getCarsByParams(params));
  }, [dispatch, params]);

  const countCars = cars.length;
  return (
    <section className='section gallery'>
      <div className="container">
        <Filter/>
        <CarList cars={cars} />
        {countCars > 0  && <button className='btn more' type='button' onClick={() => dispatch(fetchCars())}>Load more</button>}
      </div>
    </section>
  );
}
