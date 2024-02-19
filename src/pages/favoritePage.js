import { CarList } from "components/CarList/CarList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteCars } from "../redux/cars/operation";
import { selectFavoriteCarsId, selectFavoriteCarsItem } from "../redux/cars/selectors";

export default function FavoritePage() {
  const dispatch = useDispatch();
  const carsIDs = useSelector(selectFavoriteCarsId);
    const cars = useSelector(selectFavoriteCarsItem);
    
    useEffect(() => {
        if (!carsIDs.length) return
        dispatch(getFavoriteCars(carsIDs))
    }, [carsIDs, dispatch])
    
    return (
      <section className="section gallery">
        <div className="container">
          <CarList cars={cars} />
        </div>
      </section>
    );
};
