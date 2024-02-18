import { NavLink } from "react-router-dom";
import './style/pages.css'

export default function HomePage() {
    return (
        <section className="home">
            <div className="container">
                <h1 className="welcome-title">Оренда автомобілів: шукайте, порівнюйте і зберігайте</h1>
                <NavLink to={'cars'} className={'btn'}>Дивитись авто</NavLink>
            </div>
        </section>
    );
}
