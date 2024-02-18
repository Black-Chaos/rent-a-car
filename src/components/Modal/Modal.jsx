import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsById } from '../../redux/cars/operation';
import { selectedCar } from '../../redux/cars/selectors';

export function Modal({ carId, handleCloseModal }) {
  const {img} = useSelector(selectedCar)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsById(Number(carId)))
  }, [carId, dispatch])

  useEffect(() => {
    const handleClose = ({ code }) => {
      if (code === 'Escape') handleCloseModal();
    };
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, [handleCloseModal]);

  return (
    <div className="backdrop" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={img} alt="car" />
        <p>modal</p>
      </div>
    </div>
  );
}