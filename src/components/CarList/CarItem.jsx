import { Modal } from "components/Modal/Modal";
import { useState } from "react";
import { ReactComponent as FavIcon } from '../../images/fav-icon.svg';
import css from './GalleryStyle.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCarsId } from "../../redux/cars/selectors";
import { toggleFavorite } from "../../redux/cars/carSlice";

export function CarItem({ car }) {
  const favIDs = useSelector(selectFavoriteCarsId);
  const dispatch = useDispatch()
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
    const [, city, country] = address?.split(', ');

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);
    
    return (
      <li className={css.carItem}>
        <button
          className={`${css.btnFav} ${favIDs.includes(id) ? css.btnFavActive : ''}` }
          onClick={() => dispatch(toggleFavorite(id))}
          aria-label="favorite icon"
        >
          <FavIcon/>
        </button>
        <div className={css.thumb}>
          <img src={img} alt="car" />
        </div>
        <h2 className={css.title}>
          <span>{`${make} ${model}, ${year}`}</span>
          <span>{rentalPrice}</span>
        </h2>
        <div className={css.desc}>
          <p className={css.descItem}>
            {city} <span>|</span> {country} <span>|</span>
            {rentalCompany} <span>|</span> <span>Premium</span>
          </p>
          <p className={css.descItem}>
            {type} <span>|</span> {model} <span>|</span> {mileage}{' '}
            <span>|</span> {functionalities[0]}
          </p>
        </div>
        <button className={`btn`} type="button" onClick={toggleModalOpen}>
          Learn more
        </button>
        {isModalOpen && <Modal car={car} handleCloseModal={toggleModalOpen} />}
      </li>
    );
}