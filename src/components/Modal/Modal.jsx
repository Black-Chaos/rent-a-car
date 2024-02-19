import { useEffect } from 'react';
import css from './Modal.module.css';
import { ReactComponent as CloseIcon } from '../../images/x.svg';

export function Modal({ car, handleCloseModal }) {
  const {
    id,
    make,
    model,
    year,
    address,
    accessories,
    functionalities,
    rentalCompany,
    rentalPrice,
    img,
    type,
    mileage,
    engineSize,
    fuelConsumption,
    description,
    rentalConditions,
  } = car;
  const conditions = rentalConditions.split('\n');

  useEffect(() => {
    const handleClose = ({ code }) => {
      if (code === 'Escape') handleCloseModal();
    };
    document.addEventListener('keydown', handleClose);
    document.body.classList.add('scroll-lock');
    return () => {
      document.body.classList.remove('scroll-lock');
      document.removeEventListener('keydown', handleClose)
    };
  }, [handleCloseModal]);

  const [, city, country] = address?.split(', ');

  return (
    <div className="backdrop" onClick={handleCloseModal}>
      <div className={css.modal}>
        <button
          className={css.closeBtn}
          onClick={() => handleCloseModal}
          aria-label="Close"
        >
          <CloseIcon id="icon-close" width="24" height="24" />
        </button>
        <div className={css.content}>
          <div className={css.thumb}>
            <img src={img} alt="car" />
          </div>
          <h2 className={css.title}>
            {`${make} ${model}, ${year}`}
          </h2>
          <div className={css.optionsWrapper}>
            <span className={css.option}>{city}</span>
            <span className={css.option}>{country}</span>
            <span className={css.option}>Id: {id}</span>
            <span className={css.option}>Year: {year}</span>
            <span className={css.option}>Type: {type}</span>
          </div>

          <div className={css.optionsWrapper}>
            <span className={css.option}>
              Fuel Consumption: {fuelConsumption}
            </span>
            <span className={css.option}>
              Engine Size: {engineSize}
              {rentalCompany}
            </span>
          </div>

          <p className={css.description}>{description}</p>

          <h3 className={css.optionsTitle}>Accessories and functionalities:</h3>

          <div className={css.optionsWrapper}>
            {accessories.map((item, i) => {
              return (
                <span key={i} className={css.option}>
                  {item}
                </span>
              );
            })}
          </div>

          <div className={css.optionsWrapper}>
            {functionalities.map((item, i) => {
              return (
                <span key={i} className={css.option}>
                  {item}
                </span>
              );
            })}
          </div>

          <h3 className={css.optionsTitle}>Rental Conditions: </h3>

          <div className={css.conditionsWrapper}>
            <span className={css.conditionsItem}>
              {conditions[0].split(':')[0]}:{' '}
              <span className={css.blue}>{conditions[0].split(':')[1]}</span>
            </span>
            <span className={css.conditionsItem}>{conditions[1]}</span>
          </div>

          <div className={css.conditionsWrapper}>
            <span className={css.conditionsItem}>{conditions[2]}</span>
            <span className={css.conditionsItem}>
              Mileage:{' '}
              <span className={css.blue}>
                {new Intl.NumberFormat('en-US').format(mileage)}
              </span>
            </span>
            <span className={css.conditionsItem}>
              Price: <span className={css.blue}>{rentalPrice}$</span>
            </span>
          </div>

          <a className={`btn ${css.btn}`} href="tel:+380730000000">
            Rental car
          </a>
        </div>
      </div>
    </div>
  );
}

     