import { Modal } from "components/Modal/Modal";
import { useState } from "react";
import css from './GalleryStyle.module.css';

export function CarItem({ car }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {
      id,
      year,
      make,
      model,
      type,
      img,
      rentalCompany,
      rentalPrice,
      mileage,
      address,
      functionalities,
    } = car;
    const [_, city, country] = address?.split(', ');

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);
    
    return (
      <li className={css.carItem}>
        <div className={css.thumb}>
          <img src={img} alt="car" />
        </div>
        <h2>
          <span>{`${make} ${model}, ${year}`}</span>
          <span>{rentalPrice}</span>
        </h2>
        <p>
          {city} <span>|</span> {country} <span>|</span>
          {rentalCompany} <span>|</span> <span>Premium</span>
        </p>
        <p>
          {type} <span>|</span> {model} <span>|</span> {mileage} <span>|</span>{' '}
          {functionalities[0]}
        </p>
            <button type="button" onClick={toggleModalOpen}>Learn more</button>
            {isModalOpen && <Modal carId={id} handleCloseModal={toggleModalOpen}/>}
      </li>
    );
}