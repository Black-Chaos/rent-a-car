import { useState } from 'react';
import { brands } from 'data/brands';
import { price } from 'data/price';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/cars/filterSlice';
import css from './Filter.module.css'

export function Filter() {
  const [make, setMake] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
    const [mileageTo, setMileageTo] = useState('');
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const from = Number(mileageFrom);
        const to = Number(mileageTo);
        if ( from> to) return Notify.warning('"Mileage to" must be greater than "Mileage from"')
        dispatch(
          setFilter({
            make,
            rentalPrice,
            mileageFrom: from,
            mileageTo: to,
          })
        );
    }

  return (
    <form className={css.filter} onSubmit={handleSubmit}>
      <label className={css.fieldName}>
        Car brand
        <select className={css.field}
          name="make"
          id="make"
          value={make}
          onChange={e => setMake(e.target.value)}
        >
          <option value={''}>All</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <label className={css.fieldName}>
        Price/ 1 hour
        <select className={css.field}
          name="rentalPrice"
          id="rentalPrice"
          value={rentalPrice}
          onChange={e => setRentalPrice(e.target.value)}
        >
          <option value={''}>All</option>
          {price.map(con => (
            <option key={con} value={con}>
              {con}
            </option>
          ))}
        </select>
      </label>
      <label className={css.fieldName}>
        Сar mileage / km
        <div className={css.wrapMileage}>
           <div className={css.fieldWrap}>
            <span className={css.fieldText}>From:</span>
                <input className={`${css.field} ${css.fieldFrom}`}
                  type="number"
                  value={mileageFrom}
                          min={0}
                          placeholder='0'
                  onChange={e => setMileageFrom(e.target.value)}
                />
           </div>
            <div className={css.fieldWrap}>
                <span className={css.fieldText}>To:</span>
                <input className={`${css.field} ${css.fieldTo}`}
                  type="number"
                  value={mileageTo}
                          min={0}
                          placeholder='0'
                  onChange={e => setMileageTo(e.target.value)}
                />
            </div>
        </div>
      </label>
      <button className={`btn ${css.submitBtn}`}>Search</button>
    </form>
  );
}
