import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export function Navigation() {
    return <nav>
      <ul className={css.nav}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/catalog'}>Catalog</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </li>
      </ul>
    </nav>;
};
