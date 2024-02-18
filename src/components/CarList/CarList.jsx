import { CarItem } from "./CarItem";
import css from './GalleryStyle.module.css';

export function CarList ({cars}) {
    return <ul className={ css.carList}>
        {cars.map(car => <CarItem key={car.id} car={ car} />)}
    </ul>
}